import { type InstanceHooks } from '.';
import { createInstanceHooks } from './Instance/InstanceHooks';

export interface AppInstance {
  readonly hooks: InstanceHooks;
}

export function createAppInstance (): AppInstance {
  const hooks = createInstanceHooks();

  return {
    hooks,
  };
}
