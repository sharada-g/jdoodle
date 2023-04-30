import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import router from '@/router'

import AppNavBar from '@/components/AppNavBar.vue'

describe('Navbar.vue', () => {
  const wrapper = shallowMount(AppNavBar, {
    global: {
      plugins: [router]
    }
  })
  it('renders the Navbar component', () => {
    expect(wrapper.find('.navbar').exists()).toBe(true)
  })

  it('renders router-links with correct href', () => {
    const challengesLink = wrapper.find('[to="/challenges"]')
    const leaderboardLink = wrapper.find('[to="/leaderboard"]')
    const aboutLink = wrapper.find('[to="/about"]')
    const contactLink = wrapper.find('[to="/contact"]')
    const signupLink = wrapper.find('[to="/signup"]')
    const loginLink = wrapper.find('[to="/login"]')

    expect(challengesLink.exists()).toBe(true)
    expect(leaderboardLink.exists()).toBe(true)
    expect(aboutLink.exists()).toBe(true)
    expect(contactLink.exists()).toBe(true)
    expect(signupLink.exists()).toBe(true)
    expect(loginLink.exists()).toBe(true)
  })
})
