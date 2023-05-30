import {
  type UserItemStoreHooks,
  type UserItemHooks,
  createUserItemHooks,
} from './Item';
import {
  type UserListStoreHooks,
  type UserListHooks,
  createUserListHooks,
} from './List';

export interface UserHooks {
  readonly Item: UserItemHooks;
  readonly List: UserListHooks;
}

interface Options {
  readonly createUserItemStoreHooks: (options: {
    readonly pathOfUserItemStoreResource: string;
  }) => UserItemStoreHooks;

  readonly createUserListStoreHooks: (options: {
    readonly pathOfUserListStoreResource: string;
  }) => UserListStoreHooks;

  readonly pathOfUserItemStoreResource: string;
  readonly pathOfUserListStoreResource: string;
}

class Implementation implements UserHooks {
  readonly Item: UserItemHooks;
  readonly List: UserListHooks;

  constructor ({
    createUserItemStoreHooks,
    createUserListStoreHooks,
    pathOfUserItemStoreResource,
    pathOfUserListStoreResource,
  }: Options) {
    this.Item = createUserItemHooks({ createUserItemStoreHooks, pathOfUserItemStoreResource });
    this.List = createUserListHooks({ createUserListStoreHooks, pathOfUserListStoreResource });
  }
}

export function createUserHooks (options: Options): UserHooks {
  return new Implementation(options);
}
