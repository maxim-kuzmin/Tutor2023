import { type PostStoreHooks, type UserStoreHooks } from '../features';
import { createPostStoreHooks, createUserStoreHooks } from '.';

export interface StoresHooks {
  readonly Post: PostStoreHooks;
  readonly User: UserStoreHooks;
}

class Implementation implements StoresHooks {
  readonly Post: PostStoreHooks;
  readonly User: UserStoreHooks;

  constructor () {
    this.Post = createPostStoreHooks();
    this.User = createUserStoreHooks();
  }
}
export function createStoresHooks (): StoresHooks {
  return new Implementation();
}
