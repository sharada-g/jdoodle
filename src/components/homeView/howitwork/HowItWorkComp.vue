<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="content has-text-centered is-flex is-flex-direction-column">
        <div class="block">
          <h1 class="title is-3">Solve Programming Challenges Like a Pro</h1>
        </div>
        <div class="block">
          <h2 class="subtitle is-4">Our Step-by-Step Process Makes it Easy.</h2>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense>
          <template #default>
            <StepsComp />
          </template>
          <template #fallback>
            <StepsSkeleton />
          </template>
        </Suspense>
      </ErrorBoundary>
    </div>
  </section>
</template>

<script setup lang="ts">
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'
import StepsComp from './StepsComp.vue'
import StepsSkeleton from './StepsSkeleton.vue'
</script>
