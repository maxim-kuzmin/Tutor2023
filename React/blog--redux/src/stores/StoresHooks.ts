import { type PostStoreHooks } from '../features';
import { createPostStoreHooks } from './Post';

export interface StoresHooks {
  readonly Post: PostStoreHooks;
}

export function createStoresHooks (): StoresHooks {
  const hooksOfPost = createPostStoreHooks();

  return {
    Post: hooksOfPost,
  }
}
