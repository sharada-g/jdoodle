<template>
  <div v-if="editorStore.activeChallenge" class="block content">
    <h6 v-if="editorStore.activeChallenge?.tested" class="tag is-success is-light">
      <span class="icon is-small">
        <i class="fa fa-check"></i>
      </span>
      <span>Tested</span>
    </h6>
    <h6 v-else>Run your code against the example!</h6>

    <div class="card">
      <div class="card-content">
        <p><strong>Input : </strong>{{ editorStore.activeChallenge.examples[0].input }}</p>
        <p>
          <strong>Expected Output : </strong>{{ editorStore.activeChallenge.examples[0].output }}
        </p>
      </div>

      <div class="card-footer is-flex is-justify-content-flex-end">
        <button
          class="button is-primary"
          @click="editorStore.runTest()"
          :disabled="
            editorStore.activeChallenge?.tested || editorStore.activeChallenge?.answer === ''
          "
        >
          Run Test
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'

const editorStore = useEditorStore()
</script>
