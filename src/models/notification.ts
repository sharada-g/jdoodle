export enum NotificationType {
  Success = 'primary',
  Error = 'danger',
  Warning = 'warning',
  Info = 'info'
}

export interface INotification {
  id: number
  title: string
  message: string
  type: NotificationType
}
