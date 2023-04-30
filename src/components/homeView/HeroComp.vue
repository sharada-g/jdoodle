<template>
  <section class="hero is-medium">
    <div class="tile is-ancestor">
      <div class="tile is-parent hero-body">
        <div class="content has-text-centered is-flex is-flex-direction-column">
          <div class="block">
            <h1 class="title is-1">
              Test your programming skills with our interactive challenges!
            </h1>
          </div>
          <div class="block">
            <h2 class="subtitle is-4">
              Practice, learn, and improve your coding abilities with our curated problem bank.
            </h2>
          </div>

          <div class="buttons is-centered">
            <router-link to="/challenges" class="button is-dark is-medium">
              Start Solving Challenges Now
            </router-link>
            <router-link to="/signup" class="button is-outlined is-medium">
              <strong>Sign Up for Free</strong>
            </router-link>
          </div>

          <span class="subtitle is-6">76+ Languages with Multiple Versions and 2 DBs</span>
        </div>
      </div>
      <div class="tile is-5 is-parent is-flex is-flex-direction-column is-justify-content-center">
        <figure class="image">
          <img src="../../assets/hero.svg" alt="Hero image" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
