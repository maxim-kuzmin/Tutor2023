import { type NotificationTypeEntity, createNotificationTypeEntity } from '../../../../../../data';

export interface ApiTestServerNotificationTypeEntity extends NotificationTypeEntity {}

export function createApiTestServerNotificationTypeEntity (
  options?: Partial<ApiTestServerNotificationTypeEntity>
): ApiTestServerNotificationTypeEntity {
  return createNotificationTypeEntity(options);
}
