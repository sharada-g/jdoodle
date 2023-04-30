<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="content has-text-centered is-flex is-flex-direction-column">
        <div class="block">
          <h1 class="title is-3">404 - Page Not Found</h1>
        </div>
        <div class="block">
          <h2 class="subtitle is-4">The page you were looking for could not be found.</h2>
        </div>

        <div class="buttons is-centered">
          <router-link to="/" class="button is-dark is-medium"> Go to Home Page </router-link>
          <button class="button is-medium is-outlined" @click="goBack">Go Back</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.image {
  width: 300px;
  height: 300px;
}
</style>
