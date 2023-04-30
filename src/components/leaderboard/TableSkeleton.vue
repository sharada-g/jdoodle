<template>
  <table class="table table is-fullwidth is-hoverable is-striped">
    <thead>
      <tr>
        <th>#</th>
        <th></th>
        <th>Username</th>
        <th>Points</th>
        <th>Problems Attempted</th>
        <th>Problems Solved</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 10" :key="i">
        <th><div class="skeleton-content"></div></th>
        <th><div class="skeleton-icon"></div></th>
        <th><div class="skeleton-content"></div></th>
        <th><div class="skeleton-content"></div></th>
        <th><div class="skeleton-content"></div></th>
        <th><div class="skeleton-content"></div></th>
      </tr>
    </tbody>
  </table>
</template>

<script async setup lang="ts"></script>
