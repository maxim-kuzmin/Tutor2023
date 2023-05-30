import { type CommonSettings, type TestService } from '../../common';
import { type ApiClient } from '../../data';
import { type UserDomainRepository, createUserDomainRepository } from './UserDomainRepository';

export interface UserDomainModule {
  readonly getRepository: () => UserDomainRepository;
}

interface Options {
  readonly clientOfApi: ApiClient;
  readonly settingsOfCommon: CommonSettings;
  readonly serviceOfTest: TestService;
}

class Implementation implements UserDomainModule {
  private readonly repository: UserDomainRepository;

  constructor ({
    clientOfApi,
    settingsOfCommon,
    serviceOfTest,
  }: Options) {
    this.repository = createUserDomainRepository({ clientOfApi });
  }

  getRepository (): UserDomainRepository {
    return this.repository;
  }
}

export function createUserDomainModule (options: Options): UserDomainModule {
  return new Implementation(options);
}
