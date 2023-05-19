import {
  type ConfirmControlHooks,
  type NotificationControlHooks,
  type ControlsHooks,
} from '../common';
import {
  createConfirmControlHooks,
  createNotificationControlHooks,
} from '.';

class Implementation implements ControlsHooks {
  readonly Confirm: ConfirmControlHooks;
  readonly Notification: NotificationControlHooks;

  constructor () {
    this.Confirm = createConfirmControlHooks();
    this.Notification = createNotificationControlHooks();
  }
}

export function createControlsHooks (): ControlsHooks {
  return new Implementation();
}
