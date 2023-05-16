import { type CommonModules, createCommonModules } from '../../common';
import { type PagesModules, createPagesModules } from '../../pages';

export interface InstanceModules {
  readonly Common: CommonModules;
  readonly Pages: PagesModules;
}

class Implementation implements InstanceModules {
  readonly Common: CommonModules;
  readonly Pages: PagesModules;

  constructor () {
    this.Common = createCommonModules();
    this.Pages = createPagesModules();
  }
}

export function createInstanceModules (): InstanceModules {
  return new Implementation();
}
