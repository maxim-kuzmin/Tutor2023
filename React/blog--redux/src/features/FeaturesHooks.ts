import { createStoresHooks } from '../stores/StoresHooks';
import { type StoresHooks } from './Stores';

export interface FeaturesHooks {
  readonly Stores: StoresHooks;
}

export function createFeaturesHooks (): FeaturesHooks {
  const hooksOfStores = createStoresHooks();

  return {
    Stores: hooksOfStores,
  };
}
