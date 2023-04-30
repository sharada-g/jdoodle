import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import ChallengesView from './ChallengesView.vue'
import BeforeStartComp from '@/components/challanges/beforestart/BeforeStartComp.vue'
import EditorComp from '@/components/challanges/inprogress/EditorComp.vue'
import CompletedComp from '@/components/challanges/completed/CompletedComp.vue'
import { ChallengeStage } from '@/models/challenges'

describe('ChallengesView.vue', () => {
  const pinia = createPinia()
  it('renders the BeforeStartComp when challengeStage is NotStarted', () => {
    const wrapper = mount(ChallengesView, {
      global: {
        plugins: [pinia],
        mocks: {
          challengesStore: {
            challengeStage: ChallengeStage.NotStarted
          }
        }
      }
    })
    expect(wrapper.findComponent(BeforeStartComp).exists()).toBe(true)
    expect(wrapper.findComponent(EditorComp).exists()).toBe(false)
    expect(wrapper.findComponent(CompletedComp).exists()).toBe(false)
  })

  it('renders the EditorComp when challengeStage is InProgress', () => {
    const wrapper = mount(ChallengesView, {
      global: {
        plugins: [pinia],
        mocks: {
          challengesStore: {
            challengeStage: ChallengeStage.InProgress
          }
        }
      }
    })
    expect(wrapper.findComponent(BeforeStartComp).exists()).toBe(false)
    expect(wrapper.findComponent(EditorComp).exists()).toBe(true)
    expect(wrapper.findComponent(CompletedComp).exists()).toBe(false)
  })
})
