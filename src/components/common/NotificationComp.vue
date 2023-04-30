<template>
  <div class="content notification bottom-notification is-light" :class="`is-${type}`">
    <button
      class="delete"
      aria-label="delete"
      @click="notificationStore.removeNotification(id)"
    ></button>
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()
</script>

<style scoped>
.bottom-notification {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 80%;
  max-width: 500px;
}
</style>
