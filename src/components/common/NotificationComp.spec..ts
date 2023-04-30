import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import NotificationComp from './NotificationComp.vue'

describe('NotificationComp.vue', () => {
  const pinia = createPinia()
  it('renders the Notification component with correct title, message, and type', () => {
    const wrapper = mount(NotificationComp, {
      props: {
        id: 1,
        title: 'Test Title',
        message: 'Test message',
        type: 'success'
      }
    })

    expect(wrapper.find('.title').text()).toBe('Test Title')
    expect(wrapper.find('.subtitle').text()).toBe('Test message')
    expect(wrapper.find('.content').classes()).toContain('is-success')
  })

  it('removes the Notification when delete button is clicked', async () => {
    const removeNotificationMock = vi.fn()

    const wrapper = mount(NotificationComp, {
      props: {
        id: 1,
        title: 'Test Title',
        message: 'Test message',
        type: 'success'
      },
      global: {
        plugins: [pinia],
        mocks: {
          notificationStore: {
            removeNotification: removeNotificationMock
          }
        }
      }
    })

    const deleteButton = wrapper.find('.delete')
    await deleteButton.trigger('click')

    expect(removeNotificationMock).toHaveBeenCalledTimes(1)
    expect(removeNotificationMock).toHaveBeenCalledWith(1)
  })
})
