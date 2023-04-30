<template>
  <div class="timeline">
    <div v-for="index in 3" :key="index">
      <div class="timeline-item tile is-vertical">
        <div class="timeline-marker is-image is-32x32"></div>
        <div class="timeline-content tile">
          <div class="content tile is-4 is-vertical">
            <div class="skeleton-title"></div>
            <div class="skeleton-subtitle"></div>

            <div v-for="i in 3" :key="i">
              <div class="skeleton-content"></div>
            </div>
          </div>
          <div class="skeleton-image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
