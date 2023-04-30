<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="content has-text-centered is-flex is-flex-direction-column">
        <div class="block">
          <h1 class="title is-3">Coming Soon</h1>
        </div>
        <div class="block">
          <h2 class="subtitle is-4">
            This page is currently under construction. Please check back later.
          </h2>
        </div>

        <div class="buttons is-centered">
          <router-link to="/" class="button is-dark is-medium"> Go to Home Page </router-link>
          <button class="button is-medium is-outlined" @click="reset">Reset challenges</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const reset = () => {
  localStorage.clear()
  location.reload()
}
</script>
