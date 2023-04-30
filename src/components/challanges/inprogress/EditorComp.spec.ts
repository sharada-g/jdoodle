import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import EditorComp from './EditorComp.vue'

import EditorHeader from './EditorHeader.vue'
import EditorDescription from './EditorDescription.vue'
import EditorCorder from './EditorCorder.vue'
import EditorTester from './EditorTester.vue'

describe('EditorComp', () => {
  const pinia = createPinia()
  const wrapper = mount(EditorComp, {
    global: {
      plugins: [pinia]
    }
  })

  it('renders EditorHeader', () => {
    expect(wrapper.findComponent(EditorHeader).exists()).toBe(true)
  })

  it('renders EditorDescription', () => {
    expect(wrapper.findComponent(EditorDescription).exists()).toBe(true)
  })

  it('renders EditorCorder', () => {
    expect(wrapper.findComponent(EditorCorder).exists()).toBe(true)
  })

  it('renders EditorTester', () => {
    expect(wrapper.findComponent(EditorTester).exists()).toBe(true)
  })
})
