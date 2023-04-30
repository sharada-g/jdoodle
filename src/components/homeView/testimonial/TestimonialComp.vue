<template>
  <section class="hero is-small">
    <div class="tile">
      <div class="tile is-parent hero-body">
        <div class="content has-text-centered-mobile is-flex is-flex-direction-column">
          <div class="block">
            <h1 class="title is-3">What Our Users Are Saying</h1>
          </div>
          <div class="block">
            <h2 class="subtitle is-4">See What Programmers Like You Are Saying About Us.</h2>
          </div>
          <div class="block">
            <p>
              Don't just take our word for it – see what our users have to say about our programming
              challenges web app! Our app has helped countless programmers of all levels improve
              their coding skills, prepare for technical interviews, and gain experience with new
              programming languages and frameworks.
            </p>
          </div>
        </div>
      </div>
      <div class="tile is-parent hero-body is-6">
        <ErrorBoundary>
          <Suspense>
            <template #default>
              <carouselComp />
            </template>
            <template #fallback>
              <CarouselSkeleton />
            </template>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'
import carouselComp from './CarouselComp.vue'
import CarouselSkeleton from './CarouselSkeleton.vue'
</script>
