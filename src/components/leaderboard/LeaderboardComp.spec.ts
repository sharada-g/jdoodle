import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LeaderboardComp from './LeaderboardComp.vue'

describe('LeaderboardComp.vue', () => {
  const wrapper = shallowMount(LeaderboardComp)

  it('renders the LeaderboardComp with titles and subtitles', () => {
    expect(wrapper.find('.hero.is-medium').exists()).toBe(true)
    expect(wrapper.find('.title.is-3').text()).toBe('Programming Challenges Leaderboard')
    expect(wrapper.find('.subtitle.is-4').text()).toBe(
      'Test your programming skills and compete with others in programming challenges!.'
    )
  })
})
