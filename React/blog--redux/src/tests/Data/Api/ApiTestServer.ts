import { forceGenerateNotifications, worker } from './Server/ApiTestServerDefinition';

export interface ApiTestServer {
  readonly forceGenerateNotifications: (since: string) => void;
  readonly start: () => Promise<void>;
}

export function createApiTestServer (): ApiTestServer {
  return {
    forceGenerateNotifications,
    start: async () => {
      await worker.start({ onUnhandledRequest: 'bypass' });
    }
  };
}
