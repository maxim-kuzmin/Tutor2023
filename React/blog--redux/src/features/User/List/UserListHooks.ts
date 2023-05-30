import { type UserListStoreHooks } from './Store';

export interface UserListHooks {
  readonly Store: UserListStoreHooks;
}

interface Options {
  readonly createUserListStoreHooks: (options: {
    readonly pathOfUserListStoreResource: string;
  }) => UserListStoreHooks;

  readonly pathOfUserListStoreResource: string;
}

class Implementation implements UserListHooks {
  readonly Store: UserListStoreHooks;

  constructor ({
    createUserListStoreHooks,
    pathOfUserListStoreResource,
  }: Options) {
    this.Store = createUserListStoreHooks({ pathOfUserListStoreResource });
  }
}

export function createUserListHooks (options: Options): UserListHooks {
  return new Implementation(options);
}
