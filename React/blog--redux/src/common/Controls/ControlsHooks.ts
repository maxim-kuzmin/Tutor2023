import { type ConfirmControlHooks } from './Confirm';
import { type NotificationControlHooks } from './Notification';

export interface ControlsHooks {
  readonly Confirm: ConfirmControlHooks;
  readonly Notification: NotificationControlHooks;
}
