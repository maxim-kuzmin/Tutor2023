import { type UserListStoreHooks } from '../../features';
import { createUserListViewHooks, type UserListViewHooks } from './List';

export interface UserViewHooks {
  readonly List: UserListViewHooks;
}

interface Options {
  readonly hooksOfUserListStore: UserListStoreHooks;
}

export function createUserViewHooks ({
  hooksOfUserListStore
}: Options): UserViewHooks {
  const hooksOfList = createUserListViewHooks({ hooksOfUserListStore });

  return {
    List: hooksOfList,
  };
}
