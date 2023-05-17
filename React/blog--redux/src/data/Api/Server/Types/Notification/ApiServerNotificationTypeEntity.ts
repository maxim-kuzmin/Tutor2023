import { type NotificationTypeEntity, createNotificationTypeEntity } from '../../../../Types';

export interface ApiServerNotificationTypeEntity extends NotificationTypeEntity {}

export function createApiServerNotificationTypeEntity (
  options?: Partial<ApiServerNotificationTypeEntity>
): ApiServerNotificationTypeEntity {
  return createNotificationTypeEntity(options);
}
