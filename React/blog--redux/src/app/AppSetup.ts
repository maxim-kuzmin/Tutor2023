import {
  getConfirmControlResourcePath,
} from '../controls';
import { getApiResponseResourcePath } from '../data';
import { createAppLocalizationSetup } from '../features';
import { type AppInstance } from './AppInstance';

export interface AppSetup {
  readonly run: () => Promise<void>;
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

    const { modules, options } = this.instanceOfApp;

    if (options.Common.isTestModeEnabled) {
      const serverOfApi = modules.Tests.Data.Api.getServer();

      await serverOfApi.start();
    } else {
      await Promise.resolve();
    }
  }
}

export function createAppSetup (options: Options): AppSetup {
  return new Implementation(options);
}
