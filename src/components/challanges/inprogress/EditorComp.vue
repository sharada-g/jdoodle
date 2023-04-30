<template>
  <EditorHeader />

      <div class="tile">
        <div class="tile is-6 is-parent">
          <div class="tile is-child">
            <EditorDescription />
          </div>
        </div>
       
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child">
            <EditorCorder />
          </div>
          <div class="tile is-child">
            <EditorTester />
          </div>
        </div>

    
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'

import EditorHeader from './EditorHeader.vue'
import EditorDescription from './EditorDescription.vue'
import EditorCorder from './EditorCorder.vue'
import EditorTester from './EditorTester.vue'

import { useEditorStore } from '@/stores/editor'

const editorStore = useEditorStore()


onBeforeMount(() => {
  editorStore.getRandomChallenges()
  editorStore.getActiveChallenge()
})
</script>
