<template>
  <div class="card" v-if="currentTestimonial">
    <transition name="slide-fade" mode="out-in">
      <div class="card-content" :key="currentTestimonial.id" v-if="currentTestimonial">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                class="is-rounded"
                :src="currentTestimonial.image"
                :alt="currentTestimonial.name"
              />
            </figure>
          </div>
          <div class="media-content">
            <h1 class="title is-4">{{ currentTestimonial.name }}</h1>
            <h2 class="subtitle is-6">{{ currentTestimonial.position }}</h2>
          </div>
        </div>

        <p class="content">
          {{ currentTestimonial.testimonial }}
        </p>
      </div>
    </transition>

    <footer class="card-footer">
      <div class="card-footer-item buttons is-centered">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          class="button is-rounded is-small"
          :class="{ 'is-dark': currentTestimonial.id === index }"
          @click="goTo(index)"
        ></button>
      </div>
    </footer>
  </div>
</template>

<script async setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import { axiosBackendInstance } from '@/api/axios-instances'

import type { ITestimonial } from '@/models/testimonial.inerface'

const testimonials: ITestimonial[] = []
const currentIndex = ref(0)
const currentTestimonial = ref<ITestimonial | null>(null)
let autoChangeInterval = 0

const goTo = (index: number) => {
  currentIndex.value = index
  currentTestimonial.value = testimonials[currentIndex.value]

  startAutoChangeInterval()
}

const startAutoChangeInterval = () => {
  clearInterval(autoChangeInterval)
  autoChangeInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
    goTo(currentIndex.value)
  }, 3000) as unknown as number
}

const fetchTestimonials = async () => {
  await axiosBackendInstance
    .get<ITestimonial[]>('/testimonials')
    .then((response) => {
      testimonials.push(...response.data)
      currentTestimonial.value = testimonials[currentIndex.value]
    })
    .catch((error) => {
      throw error
    })
}

await fetchTestimonials()

onMounted(async () => {
  startAutoChangeInterval()
})

onUnmounted(() => {
  clearInterval(autoChangeInterval)
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
