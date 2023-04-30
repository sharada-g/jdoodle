<template>
  <section class="hero is-medium">
    <div class="tile is-ancestor">
      <div class="tile is-parent hero-body">
        <div class="content has-text-centered is-flex is-flex-direction-column">
          <div class="block">
            <h1 class="title is-1">Let's Solve the Coding Challenges!</h1>
          </div>
          <div class="block">
            <h2 class="subtitle is-4">
              Test your Programming Skills with JDoodle! Over 10+ Challenges to Solve.
            </h2>
          </div>

          <div class="buttons is-centered">
            <button
              class="button is-dark is-medium"
              @click="challengesStore.setChallengeStage(ChallengeStage.InProgress)"
            >
              Let's Start Coding!
            </button>
          </div>

          <span class="subtitle is-6">76+ Languages with Multiple Versions and 2 DBs</span>
        </div>
      </div>
      <div class="tile is-5 is-parent is-flex is-flex-direction-column is-justify-content-center">
        <Suspense>
          <template #default>
            <ChallengesComp />
          </template>
          <template #fallback>
            <div>
              <ChallengesSkeleton />
            </div>
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ChallengesComp from './ChallengesComp.vue'
import ChallengesSkeleton from './ChallengesSkeleton.vue'

import { ChallengeStage } from '@/models/challenges'

import { useChallengesStore } from '@/stores/challenges'
const challengesStore = useChallengesStore()
</script>
