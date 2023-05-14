import { type PostStoreHooks } from '../../features';
import { createPostListStoreHooks } from './List';

export function createPostStoreHooks (): PostStoreHooks {
  const hooksOfList = createPostListStoreHooks();

  return {
    List: hooksOfList,
  };
}
