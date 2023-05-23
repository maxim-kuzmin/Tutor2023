import {
  getConfirmControlResourcePath,
} from '../controls';
import { getApiResponseResourcePath } from '../data';
import { createAppLocalizationSetup } from '../features';
import { type AppInstance } from './AppInstance';

export interface AppSetup {
  readonly run: () => void;
}

interface Options {
  readonly instanceOfApp: AppInstance;
}

class Implementation implements AppSetup {
  private readonly instanceOfApp: AppInstance;

  constructor ({
    instanceOfApp,
  }: Options) {
    this.instanceOfApp = instanceOfApp;
  }

  async run () {
    const setupOfLocalization = createAppLocalizationSetup({
      paths: [
        getApiResponseResourcePath(),
        getConfirmControlResourcePath(),
      ]
    });

    setupOfLocalization.run();

    const { modules } = this.instanceOfApp;

    const serverOfApi = modules.Tests.Data.Api.getServer();

    await serverOfApi.start();
  }
}

export function createAppSetup (options: Options): AppSetup {
  return new Implementation(options);
}
