<template>
  <ErrorBoundary>
    <BeforeStartComp v-if="challengesStore.challengeStage === ChallengeStage.NotStarted" />
    <EditorComp v-else-if="challengesStore.challengeStage === ChallengeStage.InProgress" />
    <CompletedComp v-else-if="challengesStore.challengeStage === ChallengeStage.Completed" />
  </ErrorBoundary>
</template>

<script setup lang="ts">
import { useChallengesStore } from '@/stores/challenges'
import { ChallengeStage } from '@/models/challenges'

import ErrorBoundary from '@/components/common/ErrorBoundary.vue'
import BeforeStartComp from '@/components/challanges/beforestart/BeforeStartComp.vue'
import EditorComp from '@/components/challanges/inprogress/EditorComp.vue'
import CompletedComp from '@/components/challanges/completed/CompletedComp.vue'
const challengesStore = useChallengesStore()
</script>
