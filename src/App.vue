<template>
  <div class="container">
    <AppNavBar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppNavBar from './components/AppNavBar.vue'
</script>
