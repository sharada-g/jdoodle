import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorBoundary from './ErrorBoundary.vue'

const ChildComponent = {
  template: '<div class="child-component">Child component content</div>'
}

describe('ErrorBoundary.vue', () => {
  it('renders child component when there is no error', () => {
    const wrapper = mount(ErrorBoundary, {
      slots: {
        default: ChildComponent
      }
    })

    expect(wrapper.find('.child-component').exists()).toBe(true)
    expect(wrapper.find('.card').exists()).toBe(false)
  })
})
