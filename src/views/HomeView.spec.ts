import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeViewfrom from './HomeView.vue'
import HeroComp from '@/components/homeView/HeroComp.vue'
import HowitworkComp from '@/components/homeView/howitwork/HowItWorkComp.vue'

describe('ParentComponent.vue', () => {
  const wrapper = shallowMount(HomeViewfrom)

  it('renders the HeroComp component', () => {
    expect(wrapper.findComponent(HeroComp).exists()).toBe(true)
  })
  it('renders the HowitworkComp component', () => {
    expect(wrapper.findComponent(HowitworkComp).exists()).toBe(true)
  })

  it('renders the divider', () => {
    const dividers = wrapper.findAll('.is-divider')
    expect(dividers.length).toBe(2)
  })
})
