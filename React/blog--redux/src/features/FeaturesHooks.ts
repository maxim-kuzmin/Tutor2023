import { createStoresHooks } from '../stores';
import { type StoresHooks } from '.';

export interface FeaturesHooks {
  readonly Stores: StoresHooks;
}

class Implementation implements FeaturesHooks {
  readonly Stores: StoresHooks;

  constructor () {
    this.Stores = createStoresHooks();
  }
}
export function createFeaturesHooks (): FeaturesHooks {
  return new Implementation();
}
