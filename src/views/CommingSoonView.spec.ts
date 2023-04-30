import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CommingSoonView from '@/views/CommingSoonView.vue'

describe('CommingSoonView.vue', () => {
  it('renders correct content', () => {
    const wrapper = shallowMount(CommingSoonView)

    expect(wrapper.find('h1.title').text()).toBe('Coming Soon')
    expect(wrapper.find('h2.subtitle').text()).toBe(
      'This page is currently under construction. Please check back later.'
    )
  })
})
