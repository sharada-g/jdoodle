import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import router from '@/router'

import NotFoundView from '@/views/NotFoundView.vue'

describe('NotFoundView.vue', () => {
  const wrapper = shallowMount(NotFoundView, {
    global: {
      plugins: [router]
    }
  })

  it('renders correct content', () => {
    expect(wrapper.find('h1.title').text()).toBe('404 - Page Not Found')
    expect(wrapper.find('h2.subtitle').text()).toBe(
      'The page you were looking for could not be found.'
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
