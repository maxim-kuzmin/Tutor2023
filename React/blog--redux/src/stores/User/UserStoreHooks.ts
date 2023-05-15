import { type UserStoreHooks } from '../../features';
import { createUserListStoreHooks } from './List';

export function createUserStoreHooks (): UserStoreHooks {
  const hooksOfList = createUserListStoreHooks();

  return {
    List: hooksOfList,
  };
}
