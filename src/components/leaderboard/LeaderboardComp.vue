<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="content has-text-centered is-flex is-flex-direction-column">
        <div class="block">
          <h1 class="title is-3">Programming Challenges Leaderboard</h1>
        </div>
        <div class="block">
          <h2 class="subtitle is-4">
            Test your programming skills and compete with others in programming challenges!.
          </h2>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense>
          <template #default>
            <TableComp />
          </template>
          <template #fallback>
            <TableSkeleton />
          </template>
        </Suspense>
      </ErrorBoundary>
    </div>
  </section>
</template>

<script setup lang="ts">
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'
import TableComp from './TableComp.vue'
import TableSkeleton from './TableSkeleton.vue'
</script>
