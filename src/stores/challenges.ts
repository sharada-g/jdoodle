import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

import { ChallengeStage, type IChallenge } from '@/models/challenges'

import { type INotification, NotificationType } from '@/models/notification'
import { useNotificationStore } from '@/stores/notification'

import { useEditorStore } from '@/stores/editor'

import { axiosBackendInstance } from '@/api/axios-instances'

export const useChallengesStore = defineStore('challenges', () => {
  // State
  const challenges = ref<IChallenge[]>([])
  const challengeStage = ref<ChallengeStage>(getChallengeStage())

  // Other stores
  const notificationStore = useNotificationStore()
  const editorStore = useEditorStore()

  // Computed property for checking if all challenges are completed
  const allCompleted = computed(() => editorStore.randomChallenges.every((c) => c.tested))

  // Watch for all challenges being completed and show notification
  // then set the challenge stage to completed
  watch(allCompleted, (completed) => {
    if (completed) {
      const notification: INotification = {
        id: Date.now(),
        title: 'All challenges completed',
        message: 'You have completed all challenges. Congratulations!',
        type: NotificationType.Warning
      }
      notificationStore.addNotification(notification)
      setChallengeStage(ChallengeStage.Completed)
    }
  })

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
