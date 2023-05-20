import { type CommonModules, createCommonModules } from '../../common';
import { type DataModules, createDataModules } from '../../data';
import { type PagesModules, createPagesModules } from '../../pages';
import { type TestsModules, createTestsModules } from '../../tests';
import { type InstanceOptions } from './InstanceOptions';

export interface InstanceModules {
  readonly Common: CommonModules;
  readonly Data: DataModules;
  readonly Pages: PagesModules;
  readonly Tests: TestsModules;
}

interface Options {
  readonly options: InstanceOptions;
}

class Implementation implements InstanceModules {
  readonly Common: CommonModules;
  readonly Data: DataModules;
  readonly Pages: PagesModules;
  readonly Tests: TestsModules;

  constructor ({
    options,
  }: Options) {
    this.Common = createCommonModules();

    this.Data = createDataModules({
      httpClient: this.Common.Http.getClient(),
      optionsOfApi: options.Data.Api,
    });

    this.Pages = createPagesModules();

    this.Tests = createTestsModules();
  }
}

export function createInstanceModules (options: Options): InstanceModules {
  return new Implementation(options);
}
