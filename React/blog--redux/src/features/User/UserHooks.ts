import {
  type UserListStoreHooks,
  type UserListHooks,
  createUserListHooks,
} from './List';

export interface UserHooks {
  readonly List: UserListHooks;
}

interface Options {
  readonly createUserListStoreHooks: () => UserListStoreHooks;
}

class Implementation implements UserHooks {
  readonly List: UserListHooks;

  constructor ({
    createUserListStoreHooks,
  }: Options) {
    this.List = createUserListHooks({ createUserListStoreHooks });
  }
}

export function createUserHooks (options: Options): UserHooks {
  return new Implementation(options);
}
