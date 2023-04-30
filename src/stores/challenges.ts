import { ref } from 'vue'
import { defineStore } from 'pinia'

import { axiosBackendInstance } from '@/api/axios-instances'

import { ChallengeStage, type IChallenge } from '@/models/challenges'

export const useChallengesStore = defineStore('challenges', () => {
  const challenges = ref<IChallenge[]>([])
  const challengeStage = ref<ChallengeStage>(getChallengeStage())

  // Get the challenge stage from local storage or set it to the default value
  function getChallengeStage(): ChallengeStage {
    const storedChallengeStage = localStorage.getItem('challengeStage')
    return storedChallengeStage
      ? (storedChallengeStage as ChallengeStage)
      : ChallengeStage.NotStarted
  }

  // Fetch challenges from the backend or local storage
  async function fetchChallenges() {
    const storedChallenges = JSON.parse(localStorage.getItem('challenges') || '[]')

    // If challenges exist in local storage, use them
    if (storedChallenges.length > 0) {
      challenges.value = storedChallenges
      return
    }

    // Fetch challenges from the backend
    await axiosBackendInstance
      .get('challenges')
      .then((response) => {
        localStorage.removeItem('randomChallenges')
        challenges.value = response.data
        localStorage.setItem('challenges', JSON.stringify(response.data))
        setChallengeStage(ChallengeStage.NotStarted)
      })
      .catch((error) => {
        throw error
      })
  }

  // Set the challenge stage and update it in local storage
  function setChallengeStage(stage: ChallengeStage) {
    challengeStage.value = stage
    localStorage.setItem('challengeStage', stage)
  }

  return { challengeStage, challenges, fetchChallenges, setChallengeStage }
})
