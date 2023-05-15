import { type PagesModules, createPagesModules } from '../../pages';

export interface InstanceModules {
  readonly Pages: PagesModules;
}

class Implementation implements InstanceModules {
  readonly Pages: PagesModules = createPagesModules();
}

export function createInstanceModules (): InstanceModules {
  return new Implementation();
}
