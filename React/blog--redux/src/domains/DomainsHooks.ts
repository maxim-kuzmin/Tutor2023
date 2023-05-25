import { type ApiRequestHooks } from '../data';
import {
  type UserDomainHooks,
  type UserDomainModule,
  createUserDomainHooks,
} from '.';

export interface DomainsHooks {
  readonly User: UserDomainHooks;
}

interface Options {
  readonly hooksOfApiRequest: ApiRequestHooks;
  readonly moduleOfUserDomain: UserDomainModule;
}

class Implementation implements DomainsHooks {
  readonly User: UserDomainHooks;

  constructor ({
    hooksOfApiRequest,
    moduleOfUserDomain,
  }: Options) {
    this.User = createUserDomainHooks({
      hooksOfApiRequest,
      moduleOfUserDomain,
    });
  }
}

export function createDomainsHooks (options: Options): DomainsHooks {
  return new Implementation(options);
}
