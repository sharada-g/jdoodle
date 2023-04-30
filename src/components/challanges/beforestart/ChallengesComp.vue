<template>
  <div class="tags is-flex is-justify-content-space-evenly">
    <span
      class="tag is-medium is-light is-rounded"
      v-for="challenge in challengesStore.challenges"
      :key="challenge.id"
    >
      {{ challenge.title }}
    </span>
  </div>
</template>

<script async setup lang="ts">
import { useChallengesStore } from '@/stores/challenges'

const challengesStore = useChallengesStore()
await challengesStore.fetchChallenges()
</script>
