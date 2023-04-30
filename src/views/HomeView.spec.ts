import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import HeroComp from '@/components/homeView/HeroComp.vue'
import HowitworkComp from '@/components/homeView/howitwork/HowItWorkComp.vue'
import TestimonialComp from '@/components/homeView/testimonial/TestimonialComp.vue'

describe('HomeView.vue', () => {
  const wrapper = shallowMount(HomeView)

  it('renders the HeroComp component', () => {
    expect(wrapper.findComponent(HeroComp).exists()).toBe(true)
  })
  it('renders the HowitworkComp component', () => {
    expect(wrapper.findComponent(HowitworkComp).exists()).toBe(true)
  })
  it('renders the TestimonialComp component', () => {
    expect(wrapper.findComponent(TestimonialComp).exists()).toBe(true)
  })

  it('renders the divider', () => {
    const dividers = wrapper.findAll('.is-divider')
    expect(dividers.length).toBe(3)
  })
})
