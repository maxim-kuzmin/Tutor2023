import { type CommonOptions } from '../../common';
import { type DataOptions } from '../../data';

export interface InstanceOptions {
  readonly Common: CommonOptions;
  readonly Data: DataOptions;
}

export function createInstanceOptions (): InstanceOptions {
  return {
    Common: {
      isTestModeEnabled: process.env.REACT_APP_IS_TEST_MODE_ENABLED === 'true',
    },
    Data: {
      Api: {
        url: process.env.REACT_APP_API_URL ?? '',
      }
    }
  };
};
