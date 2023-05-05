<template>
  <div
    v-if="consoleConnectionState === ConsoleConnectionEnum.CONNECTING"
    class="notification is-white"
  >
    <!-- Connecting to WebSocket API -->
    <div class="icon-text">
      <span class="icon has-text-info">
        <i class="fas fa-info-circle"></i>
      </span>
      <span>Connection to the jDoodle WebSocket API</span>
      <progress class="progress is-small is-info" max="100">100%</progress>
    </div>
  </div>
  <div v-else-if="consoleConnectionState === ConsoleConnectionEnum.CONNECTED">
    <div v-if="editorStore.activeChallenge" class="block content">
      <!-- Display 'Tested' tag if the challenge is already tested -->
      <h6 v-if="editorStore.activeChallenge?.tested" class="tag is-success is-light">
        <span class="icon is-small">
          <i class="fa fa-check"></i>
        </span>
        <span>Tested</span>
      </h6>
      <h6 v-else>Console output.</h6>

      <!-- Interactive mode checkbox and console output textarea -->
      <div>
        <label class="checkbox">
          <input type="checkbox" v-model="interactiveMode" />
          <span class="ml-2"> Interactive Mode : {{ interactiveMode ? 'ON' : 'OFF' }} </span>
        </label>

        <textarea
          class="textarea has-fixed-size"
          style="resize: none"
          v-model="output"
          readonly
          disabled
        ></textarea>

        <!-- 'Run' button -->
        <div class="is-flex is-justify-content-flex-end">
          <button
            class="button is-primary"
            @click="onRunOutput()"
            :disabled="
              interactiveMode ||
              editorStore.activeChallenge?.tested ||
              editorStore.activeChallenge?.answer === ''
            "
          >
            Run
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="notification">
    <!-- WebSocket connection failed -->
    <div class="icon-text">
      <span class="icon has-text-danger">
        <i class="fas fa-ban"></i>
      </span>
      <span> Connection failed! </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useEditorStore } from '@/stores/editor'

import SockJS from 'sockjs-client'
import Webstomp from 'webstomp-client'

const editorStore = useEditorStore()

enum ConsoleConnectionEnum {
  CONNECTING,
  CONNECTED,
  DISCONNECTED
}

const consoleConnectionState = ref<ConsoleConnectionEnum>(ConsoleConnectionEnum.DISCONNECTED)

const socketClient = ref<Webstomp.Client | null>(null)

const interactiveMode = ref(false)

const output = ref(editorStore.activeChallenge?.output || '')

function onWsConnection() {
  consoleConnectionState.value = ConsoleConnectionEnum.CONNECTED

  socketClient.value?.subscribe('/user/queue/execute-i', (message: any) => {
    const statusCode: number = parseInt(message.headers.statusCode)

    if (statusCode === 400) {
      onRunOutput(true)
      return
    }

    try {
      const data: string = message.body || ''
      editorStore.setOutput(data)
    } catch (e) {
      consoleConnectionState.value = ConsoleConnectionEnum.DISCONNECTED
    }
  })
}

function onWsConnectionFailed() {
  consoleConnectionState.value = ConsoleConnectionEnum.DISCONNECTED
}

onMounted(() => {
  socketClient.value = Webstomp.over(new SockJS('/v1/stomp'), {
    heartbeat: false,
    debug: true
  })
  consoleConnectionState.value = ConsoleConnectionEnum.CONNECTING
  socketClient.value?.connect({}, onWsConnection, onWsConnectionFailed)
})

// debounce the function to prevent multiple calls
function debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

async function onRunOutput(preflight = false) {
  if (editorStore.activeChallenge?.tested) return

  if (preflight) { 
    await editorStore.fetchToken()
  }

  editorStore.clearOutput()
  const script = editorStore.getScript()
  let data = JSON.stringify({
    script: script,
    language: 'nodejs',
    versionIndex: 4
  })

  socketClient.value?.send('/app/execute-ws-api-token', data, {
    message_type: 'execute',
    token: editorStore.token,
  })
}

const debouncedOnRunOutput = debounce(onRunOutput, 1000)

// If interactive mode is on, run the code on every change
watch(
  () => editorStore.activeChallenge?.answer,
  () => {
    if (interactiveMode.value && consoleConnectionState.value === ConsoleConnectionEnum.CONNECTED)
      debouncedOnRunOutput()
  }
)

// Update output when activeChallenge changes
watch(
  () => editorStore.activeChallenge?.output,
  (newOutput) => {
    output.value = newOutput || ''
  }
)
</script>