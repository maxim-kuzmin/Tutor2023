import {
  type ConfirmControlHooks,
  type NotificationControlHooks,
  type ControlsHooks,
} from '../common';
import {
  createConfirmControlHooks,
  createNotificationControlHooks,
} from '.';

interface Options {
  readonly pathOfConfirmControlResource: string;
}

class Implementation implements ControlsHooks {
  readonly Confirm: ConfirmControlHooks;
  readonly Notification: NotificationControlHooks;

  constructor ({
    pathOfConfirmControlResource,
  }: Options) {
    this.Confirm = createConfirmControlHooks({ pathOfConfirmControlResource });
    this.Notification = createNotificationControlHooks();
  }
}

export function createControlsHooks (options: Options): ControlsHooks {
  return new Implementation(options);
}
