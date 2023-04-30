import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LeaderboardView from './LeaderboardView.vue'
import LeaderboardComp from '@/components/leaderboard/LeaderboardComp.vue'

describe('LeaderboardView.vue', () => {
  const wrapper = shallowMount(LeaderboardView)

  it('renders the LeaderboardComp component', () => {
    expect(wrapper.findComponent(LeaderboardComp).exists()).toBe(true)
  })
})
