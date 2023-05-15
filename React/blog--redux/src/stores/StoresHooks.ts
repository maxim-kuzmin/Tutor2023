import { type PostStoreHooks } from '../features';
import { createPostStoreHooks } from '.';

export interface StoresHooks {
  readonly Post: PostStoreHooks;
}

class Implementation implements StoresHooks {
  readonly Post: PostStoreHooks;

  constructor () {
    this.Post = createPostStoreHooks();
  }
}
export function createStoresHooks (): StoresHooks {
  return new Implementation();
}
