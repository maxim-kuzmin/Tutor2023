import { type HttpModule, createHttpModule } from './Http';

export interface CommonModules {
  readonly Http: HttpModule;
}

class Implementation implements CommonModules {
  readonly Http: HttpModule;

  constructor () {
    this.Http = createHttpModule();
  }
}

export function createCommonModules (): CommonModules {
  return new Implementation();
}
