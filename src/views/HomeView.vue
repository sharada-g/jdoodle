<template>
  <div>
    <HeroComp />
    <div class="is-divider" />
    <HowItWorksComp />
    <div class="is-divider" />
    <TestimonialComp />
    <div class="is-divider" />
  </div>
</template>

<script setup lang="ts">
import HeroComp from '@/components/homeView/HeroComp.vue'
import HowItWorksComp from '@/components/homeView/howitwork/HowItWorkComp.vue'
import TestimonialComp from '@/components/homeView/testimonial/TestimonialComp.vue'
</script>
