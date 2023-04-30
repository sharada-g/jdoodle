import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NotFoundView from '@/views/NotFoundView.vue'

describe('NotFoundView.vue', () => {
  it('renders correct content', () => {
    const wrapper = shallowMount(NotFoundView)

    expect(wrapper.find('h1.title').text()).toBe('404 - Page Not Found')
    expect(wrapper.find('h2.subtitle').text()).toBe(
      'The page you were looking for could not be found.'
    )
  })
})
