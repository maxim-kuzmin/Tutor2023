import {
  type InstanceHooks,
  type InstanceModules,
  type InstanceOptions,
  createInstanceHooks,
  createInstanceModules,
  createInstanceOptions,
} from '.';

export interface AppInstance {
  readonly hooks: InstanceHooks;
  readonly modules: InstanceModules;
  readonly options: InstanceOptions;
}

class Implementation implements AppInstance {
  readonly hooks: InstanceHooks;
  readonly modules: InstanceModules;
  readonly options: InstanceOptions;

  constructor () {
    this.options = createInstanceOptions();
    this.hooks = createInstanceHooks();
    this.modules = createInstanceModules({ options: this.options });
  }
}

export function createAppInstance (): AppInstance {
  return new Implementation();
}
