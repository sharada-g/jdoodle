import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { INotification } from '@/models/notification'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<INotification[]>([])

  //Adds a notification to the store and removes it after 5 seconds
  function addNotification(notification: INotification) {
    notifications.value.push(notification)

    setTimeout(() => {
      removeNotification(notification.id)
    }, 5000)
  }

  //Removes a notification from the store based on its ID.
  function removeNotification(id: number) {
    const index = notifications.value.findIndex((n) => n.id === id)
    notifications.value.splice(index, 1)
  }

  return { notifications, addNotification, removeNotification }
})
