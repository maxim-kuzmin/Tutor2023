import { type UserItemStoreHooks, type UserListStoreHooks } from '../../features';
import { type UserItemViewHooks, createUserItemViewHooks } from './Item';
import { type UserListViewHooks } from './List';
import { createUserListViewHooks } from './List/UserListViewHooks';

export interface UserViewHooks {
  readonly Item: UserItemViewHooks;
  readonly List: UserListViewHooks;
}

interface Options {
  readonly hooksOfUserItemStore: UserItemStoreHooks;
  readonly hooksOfUserListStore: UserListStoreHooks;
}

class Implementation implements UserViewHooks {
  readonly Item: UserItemViewHooks;
  readonly List: UserListViewHooks;

  constructor ({
    hooksOfUserItemStore,
    hooksOfUserListStore,
  }: Options) {
    this.Item = createUserItemViewHooks({ hooksOfUserItemStore });
    this.List = createUserListViewHooks({ hooksOfUserListStore });
  }
}

export function createUserViewHooks (options: Options): UserViewHooks {
  return new Implementation(options);
}
