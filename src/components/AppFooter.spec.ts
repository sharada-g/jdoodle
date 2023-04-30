import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppFooter from './AppFooter.vue'

describe('AppFooter.vue', () => {
  const wrapper = shallowMount(AppFooter)

  it('renders the footer element', () => {
    expect(wrapper.find('.footer').exists()).toBe(true)
  })

  it('renders the content', () => {
    const content = wrapper.find('.content.has-text-centered')
    expect(content.exists()).toBe(true)
  })

  it('displays the correct text content', () => {
    const content = wrapper.find('.content.has-text-centered')
    expect(content.text()).toContain('Programming Challenges - Developed by Sharada Gunathilake.')
    expect(content.text()).toContain(
      "Inspired by JDoodle's Assignment section, Leetcode, and HackerRank."
    )
    expect(content.text()).toContain('Built with Vue 3 and Bulma.')
  })
})
