export enum NotificationType {
  Success = 'primary',
  Error = 'danger',
  Warning = 'warning'
}

export interface INotification {
  id: number
  title: string
  message: string
  type: NotificationType
}
