import { type ApiTestModule, createApiTestModule } from './Api';

export interface DataTestModules {
  readonly Api: ApiTestModule;
}

class Implementation implements DataTestModules {
  readonly Api: ApiTestModule;

  constructor () {
    this.Api = createApiTestModule()
  }
}

export function createDataTestModules (): DataTestModules {
  return new Implementation();
}
