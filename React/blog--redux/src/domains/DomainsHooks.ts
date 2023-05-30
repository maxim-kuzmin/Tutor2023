import { type ApiRequestHooks } from '../data';
import {
  type PostDomainHooks,
  type PostDomainModule,
  type UserDomainHooks,
  type UserDomainModule,
  createPostDomainHooks,
  createUserDomainHooks,
} from '.';

export interface DomainsHooks {
  readonly Post: PostDomainHooks;
  readonly User: UserDomainHooks;
}

interface Options {
  readonly hooksOfApiRequest: ApiRequestHooks;
  readonly moduleOfPostDomain: PostDomainModule;
  readonly moduleOfUserDomain: UserDomainModule;
}

class Implementation implements DomainsHooks {
  readonly Post: PostDomainHooks;
  readonly User: UserDomainHooks;

  constructor ({
    hooksOfApiRequest,
    moduleOfPostDomain,
    moduleOfUserDomain,
  }: Options) {
    this.Post = createPostDomainHooks({
      hooksOfApiRequest,
      moduleOfPostDomain,
    });

    this.User = createUserDomainHooks({
      hooksOfApiRequest,
      moduleOfUserDomain,
    });
  }
}

export function createDomainsHooks (options: Options): DomainsHooks {
  return new Implementation(options);
}
