import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TestimonialComp from './TestimonialComp.vue'

describe('TestimonialComp.vue', () => {
  const wrapper = shallowMount(TestimonialComp)

  it('renders the TestimonialComp with titles and subtitles', () => {
    expect(wrapper.find('.hero.is-small').exists()).toBe(true)
    expect(wrapper.find('.title.is-3').text()).toBe('What Our Users Are Saying')
    expect(wrapper.find('.subtitle.is-4').text()).toBe(
      'See What Programmers Like You Are Saying About Us.'
    )
  })

  it('renders the block with text content', () => {
    expect(wrapper.find('.block').exists()).toBe(true)
    expect(wrapper.find('.block p').text()).toContain('Our app has helped countless programmers')
  })
})
