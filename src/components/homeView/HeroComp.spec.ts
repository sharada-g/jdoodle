import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import HeroComp from './HeroComp.vue'

describe('HeroComp.vue', () => {
  const wrapper = shallowMount(HeroComp)

  it('renders the title', () => {
    const title = wrapper.find('.title')
    expect(title.text()).toBe('Test your programming skills with our interactive challenges!')
  })

  it('renders the subtitle', () => {
    const subtitle = wrapper.find('.subtitle.is-4')
    expect(subtitle.text()).toBe(
      'Practice, learn, and improve your coding abilities with our curated problem bank.'
    )
  })

  it('renders the buttons', () => {
    const buttons = wrapper.findAll('.buttons .button')
    expect(buttons.length).toBe(2)
  })

  it('renders the languages subtitle', () => {
    const languagesSubtitle = wrapper.find('.subtitle.is-6')
    expect(languagesSubtitle.text()).toBe('76+ Languages with Multiple Versions and 2 DBs')
  })

  it('renders the hero image', () => {
    const heroImage = wrapper.find('.image img')
    expect(heroImage.attributes('src')).toBe('/src/assets/hero.svg')
    expect(heroImage.attributes('alt')).toBe('Hero image')
  })
})
