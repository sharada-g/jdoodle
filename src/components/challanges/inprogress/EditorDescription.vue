<template>
  <div v-if="editorStore.activeChallenge" class="content">
    <div class="block">
      <p v-for="line in editorStore.activeChallenge.description" :key="line">{{ line }}</p>
    </div>
    <div class="block">
      <ul v-if="editorStore.activeChallenge.notes && editorStore.activeChallenge.notes.length > 0">
        <li v-for="note in editorStore.activeChallenge.notes" :key="note">{{ note }}</li>
      </ul>
    </div>

    <div class="block">
      <div
        v-for="(example, index) in editorStore.activeChallenge.examples"
        :key="example.id"
        class="content"
      >
        <h6>Example {{ index + 1 }}</h6>
        <div class="card">
          <div class="card-content">
            <p><strong>Input : </strong>{{ example.input }}</p>
            <p><strong>Output : </strong>{{ example.output }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'

const editorStore = useEditorStore()
</script>
