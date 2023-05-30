import { type CommonModules, createCommonModules } from '../../common';
import { type DataModules, createDataModules } from '../../data';
import { type DomainsModules, createDomainsModules } from '../../domains';
import { type PagesModules, createPagesModules } from '../../pages';
import { type TestsModules, createTestsModules } from '../../tests';
import { type InstanceSettings } from './InstanceSettings';

export interface InstanceModules {
  readonly Common: CommonModules;
  readonly Data: DataModules;
  readonly Domains: DomainsModules;
  readonly Pages: PagesModules;
  readonly Tests: TestsModules;
}

interface Options {
  readonly settings: InstanceSettings;
}

class Implementation implements InstanceModules {
  readonly Common: CommonModules;
  readonly Data: DataModules;
  readonly Domains: DomainsModules;
  readonly Pages: PagesModules;
  readonly Tests: TestsModules;

  constructor ({
    settings,
  }: Options) {
    this.Common = createCommonModules();

    this.Data = createDataModules({
      httpClient: this.Common.Http.getClient(),
      settingsOfApi: settings.Data.Api,
    });

    this.Domains = createDomainsModules({
      clientOfApi: this.Data.Api.getClient(),
      settingsOfCommon: settings.Common,
      serviceOfTest: this.Common.Test.getService(),
    });

    this.Pages = createPagesModules();

    this.Tests = createTestsModules();
  }
}

export function createInstanceModules (options: Options): InstanceModules {
  return new Implementation(options);
}
