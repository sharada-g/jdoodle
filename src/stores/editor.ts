import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IChallenge } from '@/models/challenges'
import { type INotification, NotificationType } from '@/models/notification'

import { useNotificationStore } from '@/stores/notification'
import { useFeedbackStore } from '@/stores/feedback'

import { axiosBackendInstance } from '@/api/axios-instances'

export const useEditorStore = defineStore('editor', () => {
  const notificationStore = useNotificationStore()
  const feedbackStore = useFeedbackStore()

  const activeChallenge = ref<IChallenge | null>(null)
  const randomChallenges = ref<IChallenge[]>([])
  const progress = computed(() => (randomChallenges.value.filter((c) => c.tested).length / 5) * 100)

  // Load challenges from local storage or generate new ones
  function getRandomChallenges() {
    const storedRandomChallenges = JSON.parse(localStorage.getItem('randomChallenges') || '[]')
    const storedActiveChallenge = JSON.parse(localStorage.getItem('activeChallenge') || '[]')

    if (storedRandomChallenges.length > 0) {
      randomChallenges.value = storedRandomChallenges
      if (storedActiveChallenge.length == 0) {
        setActiveChallenge(randomChallenges.value[0])
      }
      return
    }

    try {
      const challenges = JSON.parse(localStorage.getItem('challenges') || '[]')
      randomChallenges.value = challenges.sort(() => Math.random() - Math.random()).slice(0, 5)
      setActiveChallenge(randomChallenges.value[0])
      localStorage.setItem('randomChallenges', JSON.stringify(randomChallenges.value))
    } catch (error: string | any) {
      throw new Error(error.message || 'Failed to get random challenges')
    }
  }

  // Get active challenge from local storage or use first challenge
  function getActiveChallenge() {
    const storedChallenge = JSON.parse(localStorage.getItem('activeChallenge') || '[]')

    if (storedChallenge) {
      activeChallenge.value = storedChallenge
      return
    }
    activeChallenge.value = randomChallenges.value[0]
  }

  // Set active challenge and store it in local storage
  function setActiveChallenge(challenge: IChallenge) {
    activeChallenge.value = randomChallenges.value.find((c) => c.id === challenge.id) || null
    localStorage.setItem('activeChallenge', JSON.stringify(activeChallenge.value))
  }

  // Navigate to previous or next challenge
  function navigateChallenge(direction: 'previous' | 'next') {
    const index = randomChallenges.value.findIndex((c) => c.id === activeChallenge.value?.id)
    if (direction === 'previous' && index > 0) {
      setActiveChallenge(randomChallenges.value[index - 1])
    } else if (direction === 'next' && index < randomChallenges.value.length - 1) {
      setActiveChallenge(randomChallenges.value[index + 1])
    }
  }

  // Set challenge test result and store it in local storage
  function setChallengeTestResult(
    challenge: IChallenge,
    result: boolean,
    message: string,
    type: NotificationType
  ) {
    const index = randomChallenges.value.findIndex((c) => c.id === challenge.id)
    randomChallenges.value[index].tested = result
    localStorage.setItem('randomChallenges', JSON.stringify(randomChallenges.value))

    if (activeChallenge.value?.id === challenge.id) {
      activeChallenge.value.tested = result
      localStorage.setItem('activeChallenge', JSON.stringify(activeChallenge.value))
    }

    const notification: INotification = {
      id: Date.now(),
      title: message,
      message: `${message} ${challenge.title}.`,
      type: type
    }
    notificationStore.addNotification(notification)
    feedbackStore.setScore(result ? 10 : -5)
  }

  // Set tested challenge and update notification
  function setTestedChallenge(challenge: IChallenge) {
    setChallengeTestResult(challenge, true, 'Challenge completed', NotificationType.Success)
  }

  // Set failed challenge and update notification
  function setTestFailedChallenge(challenge: IChallenge) {
    setChallengeTestResult(challenge, false, 'Testing failed', NotificationType.Error)
  }

  // Set active challenge answer and store it in local storage
  function setActiveChallengeAnswer(answer: string) {
    activeChallenge.value!.answer = answer
    localStorage.setItem('activeChallenge', JSON.stringify(activeChallenge.value))

    // also update the random challenges respectively
    const index = randomChallenges.value.findIndex((c) => c.id === activeChallenge.value?.id)
    randomChallenges.value[index].answer = answer
    localStorage.setItem('randomChallenges', JSON.stringify(randomChallenges.value))
  }

  // Run test for the active challenge and update the results using jdoodle api
  // i am using proxy to avoid cors error in vite.config.ts
  async function runTest() {
    const script: string =
      activeChallenge.value!.codeStart.join(' ') +
      ' ' +
      activeChallenge.value!.answer +
      ' ' +
      activeChallenge.value!.codeEnd.join(' ') +
      ' ' +
      activeChallenge.value!.testFunction.join(' ') +
      ' ' +
      activeChallenge.value!.testcase[0].input +
      ' ' +
      activeChallenge.value!.testcase[0].output +
      ' '

    const program = {
      script: script,
      language: 'nodejs',
      versionIndex: '0',
      clientId: import.meta.env.VITE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_CLIENT_SECRET
    }

    await axiosBackendInstance
      .post('/execute', program)
      .then((response) => {
        if (response.data.output === 'true\n' && response.data.statusCode === 200) {
          setTestedChallenge(activeChallenge.value!)
        } else {
          setTestFailedChallenge(activeChallenge.value!)
        }
      })
      .catch((error) => {
        throw error
      })
  }

  return {
    activeChallenge,
    getActiveChallenge,
    setActiveChallenge,
    navigateChallenge,
    randomChallenges,
    getRandomChallenges,
    progress,
    setActiveChallengeAnswer,
    runTest
  }
})
