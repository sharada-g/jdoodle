<template>
  <div class="container">
    <AppNavBar />
    <RouterView />
    <AppFooter />
  </div>
  <div v-if="notificationStore.notifications.length > 0" class="notification-container">
    <NotificationComp
      v-for="notification in notificationStore.notifications"
      :key="notification.id"
      :id="notification.id"
      :type="notification.type"
      :title="notification.title"
      :message="notification.message"
    />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppNavBar from '@/components/AppNavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

import NotificationComp from '@/components/common/NotificationComp.vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()
</script>
