<template>
  <div class="timeline">
    <div v-for="step in steps" :key="step.id">
      <div class="timeline-item tile is-vertical">
        <div class="timeline-marker is-image is-32x32" />
        <div class="timeline-content tile">
          <div class="content tile is-vertical">
            <h1 class="title is-6">{{ step.title }}</h1>
            <h2 v-if="step.subtitle" class="subtitle">{{ step.subtitle }}</h2>
            <ul v-if="step.subSteps" class="content">
              <li v-for="subStep in step.subSteps" :key="subStep.id">
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-check-circle"></i>
                  </span>
                  <span>{{ subStep.description }}</span>
                </span>
              </li>
            </ul>
          </div>
          <figure class="image is-256x256 tile is-6">
            <img
              :src="step.image.src"
              :alt="step.image.alt"
              style="width: 100%; height: 100%; object-fit: contain"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script async setup lang="ts">
import { ref } from 'vue'

import { axiosBackendInstance } from '@/api/axios-instances'

import type { IStep } from '@/models/step.interface'

const steps = ref<IStep[]>([])

const fetchSteps = async () => {
  await axiosBackendInstance
    .get('/steps')
    .then((response) => {
      const data = response.data as IStep[]
      steps.value.push(...data)
    })
    .catch((error) => {
      throw error
    })
}

await fetchSteps()
</script>
