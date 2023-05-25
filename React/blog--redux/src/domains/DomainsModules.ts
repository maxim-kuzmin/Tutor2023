import { type ApiClient } from '../data';
import {
  type UserDomainModule,
  createUserDomainModule,
} from '.';

export interface DomainsModules {
  readonly User: UserDomainModule;
}

interface Options {
  readonly clientOfApi: ApiClient;
}

class Implementation implements DomainsModules {
  readonly User: UserDomainModule;

  constructor ({
    clientOfApi,
  }: Options) {
    this.User = createUserDomainModule({
      clientOfApi,
    });
  }
}
export function createDomainsModules (options: Options): DomainsModules {
  return new Implementation(options);
}
