import {
  type InstanceHooks,
  type InstanceModules,
  createInstanceHooks,
  createInstanceModules,
} from '.';

export interface AppInstance {
  readonly hooks: InstanceHooks;
  readonly modules: InstanceModules;
}

class Implementation implements AppInstance {
  readonly hooks: InstanceHooks = createInstanceHooks();
  readonly modules: InstanceModules = createInstanceModules();
}

export function createAppInstance (): AppInstance {
  return new Implementation();
}
