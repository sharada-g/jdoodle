<template>
  <div class="code-editor-wrapper">
    <p v-for="line in editorStore.activeChallenge?.codeStart" :key="line">
      <code>{{ line }}</code>
    </p>

    <div class="control">
      <textarea
        class="textarea"
        style="resize: none"
        placeholder="Write your code here"
        rows="8"
        v-model="answer"
      ></textarea>
    </div>
    <p v-for="line in editorStore.activeChallenge?.codeEnd" :key="line">
      <code>{{ line }}</code>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useEditorStore } from '@/stores/editor'

const editorStore = useEditorStore()

const answer = ref(editorStore.activeChallenge?.answer || '')

// Update answer in store when it changes
// any clear console output
watch(answer, (newAnswer) => {
  editorStore.setActiveChallengeAnswer(newAnswer)
  editorStore.clearOutput()
})

// Update answer when activeChallenge changes
watch(
  () => editorStore.activeChallenge?.answer,
  (newAnswer) => {
    answer.value = newAnswer || ''
  }
)
</script>

<style scoped>
.code-editor-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
</style>
