import {
  type InstanceControls,
  type InstanceHooks,
  type InstanceModules,
  type InstanceOptions,
  createInstanceControls,
  createInstanceHooks,
  createInstanceModules,
  createInstanceOptions,
} from './Instance';

export interface AppInstance {
  readonly controls: InstanceControls;
  readonly hooks: InstanceHooks;
  readonly modules: InstanceModules;
  readonly options: InstanceOptions;
}

class Implementation implements AppInstance {
  readonly controls: InstanceControls;
  readonly hooks: InstanceHooks;
  readonly modules: InstanceModules;
  readonly options: InstanceOptions;

  constructor () {
    this.options = createInstanceOptions();
    this.controls = createInstanceControls();
    this.hooks = createInstanceHooks();
    this.modules = createInstanceModules({ options: this.options });
  }
}

export function createAppInstance (): AppInstance {
  return new Implementation();
}
