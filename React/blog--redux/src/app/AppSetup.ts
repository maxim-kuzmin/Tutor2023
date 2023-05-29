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
    const {
      pathOfApiResponseResource,
      pathOfConfirmControlResource,
      pathOfOperationHandlerResource,
    } = this.instanceOfApp.settings.Features.App.Localization;

    const setupOfLocalization = createAppLocalizationSetup({
      paths: [
        pathOfApiResponseResource,
        pathOfConfirmControlResource,
        pathOfOperationHandlerResource,
      ]
    });

    setupOfLocalization.run();

    const { modules, settings } = this.instanceOfApp;

    if (settings.Common.isTestModeEnabled) {
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
