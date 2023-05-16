import { type UserListStoreHooks } from './Store';

export interface UserListHooks {
  readonly Store: UserListStoreHooks;
}

interface Options {
  readonly createUserListStoreHooks: () => UserListStoreHooks;
}

class Implementation implements UserListHooks {
  readonly Store: UserListStoreHooks;

  constructor ({
    createUserListStoreHooks
  }: Options) {
    this.Store = createUserListStoreHooks();
  }
}

export function createUserListHooks (options: Options): UserListHooks {
  return new Implementation(options);
}
