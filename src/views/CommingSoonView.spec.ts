import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import router from '@/router'

import CommingSoonView from '@/views/CommingSoonView.vue'

describe('CommingSoonView.vue', () => {
  const wrapper = shallowMount(CommingSoonView, {
    global: {
      plugins: [router]
    }
  })

  it('renders correct content', () => {
    expect(wrapper.find('h1.title').text()).toBe('Coming Soon')
    expect(wrapper.find('h2.subtitle').text()).toBe(
      'This page is currently under construction. Please check back later.'
    )
  })
  it('navigates to the home page when the "Go to Home Page" button is clicked', async () => {
    await wrapper.find('.buttons .button.is-dark').trigger('click')

    expect(router.currentRoute.value.name).toBe('home')
  })
  it('calls "goBack" function when the "Go Back" button is clicked', async () => {
    const goBackSpy = vi.spyOn(window.history, 'go')
    await wrapper.find('.buttons .button.is-outlined').trigger('click')
    await nextTick()

    expect(goBackSpy).toHaveBeenCalledWith(-1)
    goBackSpy.mockRestore()
  })
})
