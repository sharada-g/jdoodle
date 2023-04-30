import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HowItWorkComp from './HowItWorkComp.vue'
import StepsComp from './StepsComp.vue'

describe('HowItWorkComp.vue', () => {
  const wrapper = shallowMount(HowItWorkComp)

  it('renders the hero section with titles and subtitles', () => {
    expect(wrapper.find('.hero.is-small').exists()).toBe(true)
    expect(wrapper.find('.title.is-3').text()).toBe('Solve Programming Challenges Like a Pro')
    expect(wrapper.find('.subtitle.is-4').text()).toBe('Our Step-by-Step Process Makes it Easy.')
  })
})
