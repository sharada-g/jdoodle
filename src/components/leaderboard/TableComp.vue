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
      <tr v-for="user in users" :key="user.id">
        <th>
          {{ rank(user) }}
        </th>
        <td>
          <figure class="image is-64x64">
            <img class="is-rounded" :src="user.image.src" :alt="user.image.alt" />
          </figure>
        </td>
        <td>
          <router-link :to="{ path: `/users/${user.id}` }">{{ fullName(user) }}</router-link>
        </td>
        <td>{{ user.points }}</td>
        <td>{{ user.attempts }}</td>
        <td>{{ user.completed }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script async setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { axiosBackendInstance } from '@/api/axios-instances'

import type { IUser } from '@/models/user.interface'

const users = ref<IUser[]>([])

const fetchLeaderboard = async () => {
  await axiosBackendInstance
    .get('/leaderboard')
    .then((response) => {
      const data = response.data
      const sortedUsers = data.sort((a: IUser, b: IUser) => b.points - a.points)
      users.value.push(...sortedUsers)
    })
    .catch((error) => {
      throw error
    })
}
const rank = (user: IUser) => {
  return users.value.findIndex((data) => data.id === user.id) + 1
}

const fullName = (user: IUser) => {
  return `${user.first_name} ${user.last_name}`
}

await fetchLeaderboard()
</script>
