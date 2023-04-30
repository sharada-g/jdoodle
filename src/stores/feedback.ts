import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFeedbackStore = defineStore('feedback', () => {
  const score = ref<number>(getScore())

  function getScore(): number {
    const storedScore = localStorage.getItem('score')
    if (storedScore) {
      return parseInt(storedScore)
    }

    return 0
  }
  // set score
  function setScore(newScore: number) {
    score.value += newScore
    if (score.value < 0) {
      score.value = 0
    }
    localStorage.setItem('score', score.value.toString())
  }

  return { score, setScore }
})
