import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import BeforeStartComp from './BeforeStartComp.vue'

describe('BeforeStartComp', () => {
  const pinia = createPinia()
  const wrapper = mount(BeforeStartComp, {
    global: {
      plugins: [pinia],
      mocks: {
        challengesStore: {
          challengeStage: BeforeStartComp.NotStarted
        }
      }
    }
  })
  it('renders the title correctly', () => {
    const title = wrapper.find('.title')
    expect(title.text()).toBe("Let's Solve the Coding Challenges!")
  })

  it('renders the subtitle correctly', () => {
    const subtitle = wrapper.find('.subtitle.is-4')
    expect(subtitle.text()).toBe(
      'Test your Programming Skills with JDoodle! Over 10+ Challenges to Solve.'
    )
  })

  it('renders the language subtitle correctly', () => {
    const languageSubtitle = wrapper.find('.subtitle.is-6')
    expect(languageSubtitle.text()).toBe('76+ Languages with Multiple Versions and 2 DBs')
  })
})
