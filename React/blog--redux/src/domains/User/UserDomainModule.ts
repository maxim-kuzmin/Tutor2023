import { type ApiClient } from '../../data';
import { type UserDomainRepository, createUserDomainRepository } from './UserDomainRepository';

export interface UserDomainModule {
  readonly getRepository: () => UserDomainRepository;
}

interface Options {
  readonly clientOfApi: ApiClient;
}

class Implementation implements UserDomainModule {
  private readonly repository: UserDomainRepository;

  constructor ({
    clientOfApi
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
