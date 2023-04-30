<template>
  <div class="content is-flex is-justify-content-space-between">
    <h3>{{ editorStore.activeChallenge?.title || 'Challenge Name' }}</h3>
    <div>
      <span class="icon is-medium">
        <i class="fa fa-trophy" aria-hidden="true"></i>
      </span>
      <span>{{ editorStore.progress }}</span>
    </div>
  </div>
  <progress class="progress" :value="editorStore.progress" max="100">
    {{ editorStore.progress }}%
  </progress>
  <div class="buttons has-addons is-flex is-justify-content-space-between">
    <button class="button" @click="editorStore.navigateChallenge('previous')">
      <span class="icon is-medium">
        <i class="fa-solid fa-arrow-left"></i>
      </span>
    </button>
    <dropdown-menu />
    <button class="button" @click="editorStore.navigateChallenge('next')">
      <span class="icon is-medium">
        <i class="fa-solid fa-arrow-right"></i>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import DropdownMenu from '@/components/challanges/inprogress/DropdownMenu.vue'

const editorStore = useEditorStore()
</script>
