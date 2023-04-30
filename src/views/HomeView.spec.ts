import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeViewfrom from './HomeView.vue'
import HeroComp from '@/components/homeView/HeroComp.vue'

describe('ParentComponent.vue', () => {
  const wrapper = shallowMount(HomeViewfrom)

  it('renders the HeroComp component', () => {
    expect(wrapper.findComponent(HeroComp).exists()).toBe(true)
  })

  it('renders the divider', () => {
    const divider = wrapper.find('.is-divider')
    expect(divider.exists()).toBe(true)
  })
})
