export interface NotificationTypeEntity {
  id: string;
  message: string;
  date: string;
  userId: string;
}

export function createNotificationTypeEntity (options?: Partial<NotificationTypeEntity>): NotificationTypeEntity {
  return {
    id: options?.id ?? '',
    message: options?.message ?? '',
    date: options?.date ?? '',
    userId: options?.userId ?? '',
  }
}
