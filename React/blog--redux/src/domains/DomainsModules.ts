import { type CommonSettings, type TestService } from '../common';
import { type ApiClient } from '../data';
import {
  type PostDomainModule,
  type UserDomainModule,
  createPostDomainModule,
  createUserDomainModule,
} from '.';

export interface DomainsModules {
  readonly Post: PostDomainModule;
  readonly User: UserDomainModule;
}

interface Options {
  readonly clientOfApi: ApiClient;
  readonly settingsOfCommon: CommonSettings;
  readonly serviceOfTest: TestService;
}

class Implementation implements DomainsModules {
  readonly Post: PostDomainModule;
  readonly User: UserDomainModule;

  constructor ({
    clientOfApi,
    settingsOfCommon,
    serviceOfTest,
  }: Options) {
    this.Post = createPostDomainModule({
      clientOfApi,
      settingsOfCommon,
      serviceOfTest,
    });

    this.User = createUserDomainModule({
      clientOfApi,
      settingsOfCommon,
      serviceOfTest,
    });
  }
}
export function createDomainsModules (options: Options): DomainsModules {
  return new Implementation(options);
}
