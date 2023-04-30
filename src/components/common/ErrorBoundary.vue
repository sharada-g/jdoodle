<template>
  <slot v-if="!hasError"></slot>
  <div v-else-if="error" class="card">
    <div class="card-content has-text-centered">
      <div class="media">
        <div class="media-content">
          <h1 class="title is-4">An error occurred!</h1>
        </div>
      </div>
      <div class="content">
        <p class="content">
          {{ error.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

interface ErrorType {
  message: string
}

const hasError = ref(false)
const error = ref<ErrorType | null>(null)

onErrorCaptured((capturedError) => {
  hasError.value = true
  error.value = capturedError
  return true
})
</script>

<style scoped>
.card {
  width: 100%;
}
</style>
