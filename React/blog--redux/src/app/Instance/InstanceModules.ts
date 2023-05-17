import { type CommonModules, createCommonModules } from '../../common';
import { type DataModules, createDataModules } from '../../data';
import { type PagesModules, createPagesModules } from '../../pages';
import { type InstanceOptions } from './InstanceOptions';

export interface InstanceModules {
  readonly Common: CommonModules;
  readonly Data: DataModules;
  readonly Pages: PagesModules;
}

interface Options {
  readonly options: InstanceOptions;
}

class Implementation implements InstanceModules {
  readonly Common: CommonModules;
  readonly Data: DataModules;
  readonly Pages: PagesModules;

  constructor ({
    options,
  }: Options) {
    this.Common = createCommonModules();

    this.Data = createDataModules({
      httpClient: this.Common.Http.getClient(),
      optionsOfApi: options.Data.Api,
    });

    this.Pages = createPagesModules();
  }
}

export function createInstanceModules (options: Options): InstanceModules {
  return new Implementation(options);
}
