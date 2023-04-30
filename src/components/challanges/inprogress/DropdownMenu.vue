<template>
  <div class="dropdown" :class="{ 'is-active': isOpen }">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="toggleDropdown"
      >
        <span>Question List</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a
          v-for="challenge in editorStore.randomChallenges"
          :key="challenge.id"
          @click="selectChallenge(challenge)"
          class="dropdown-item"
          :class="{ 'is-active': challenge.id === editorStore.activeChallenge?.id }"
        >
          <span class="icon is-small">
            <i v-if="challenge?.tested" class="fa fa-check"></i>
            <i v-else class="fa fa-times"></i>
          </span>
          {{ challenge.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEditorStore } from '@/stores/editor'
import type { IChallenge } from '@/models/challenges'

const editorStore = useEditorStore()

const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectChallenge = (challenge: IChallenge) => {
  editorStore.setActiveChallenge(challenge)
  isOpen.value = false
}
</script>
