import { type CommonSettings, type TestService } from '../../common';
import { type ApiClient } from '../../data';
import { type PostDomainRepository, createPostDomainRepository } from './PostDomainRepository';

export interface PostDomainModule {
  readonly getRepository: () => PostDomainRepository;
}

interface Options {
  readonly clientOfApi: ApiClient;
  readonly settingsOfCommon: CommonSettings;
  readonly serviceOfTest: TestService;
}

class Implementation implements PostDomainModule {
  private readonly repository: PostDomainRepository;

  constructor ({
    clientOfApi,
    settingsOfCommon,
    serviceOfTest,
  }: Options) {
    this.repository = createPostDomainRepository({ clientOfApi });
  }

  getRepository (): PostDomainRepository {
    return this.repository;
  }
}

export function createPostDomainModule (options: Options): PostDomainModule {
  return new Implementation(options);
}
