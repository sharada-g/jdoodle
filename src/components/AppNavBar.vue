<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" width="50" height="32"
      /></router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :data-target="menuId"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :id="menuId" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/challenges" class="navbar-item">Challenges</router-link>
        <router-link to="/leaderboard" class="navbar-item">Leaderboard</router-link>

        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/signup" class="button"><strong>Sign up</strong></router-link>
            <router-link to="/login" class="button">Log in</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuId = ref('navbarMenu')

const toggleMenu = (event: MouseEvent) => {
  const target = (event.currentTarget as HTMLElement).dataset.target
  const targetElement = document.getElementById(target!)

  if (targetElement) {
    ;(event.currentTarget as HTMLElement).classList.toggle('is-active')
    targetElement.classList.toggle('is-active')
  }
}
</script>
