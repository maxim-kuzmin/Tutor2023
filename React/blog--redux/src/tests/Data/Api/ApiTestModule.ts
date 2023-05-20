import { type ApiTestServer, createApiTestServer } from './ApiTestServer';

export interface ApiTestModule {
  readonly getServer: () => ApiTestServer;
}

class Implementation implements ApiTestModule {
  private readonly server = createApiTestServer();

  getServer (): ApiTestServer {
    return this.server;
  }
}

export function createApiTestModule (): ApiTestModule {
  return new Implementation();
}
