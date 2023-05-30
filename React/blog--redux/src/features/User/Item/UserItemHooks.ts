import { type UserItemStoreHooks } from './Store';

export interface UserItemHooks {
  readonly Store: UserItemStoreHooks;
}

interface Options {
  readonly createUserItemStoreHooks: (options: {
    readonly pathOfUserItemStoreResource: string;
  }) => UserItemStoreHooks;

  pathOfUserItemStoreResource: string;
}

class Implementation implements UserItemHooks {
  readonly Store: UserItemStoreHooks;

  constructor ({
    createUserItemStoreHooks,
    pathOfUserItemStoreResource,
  }: Options) {
    this.Store = createUserItemStoreHooks({ pathOfUserItemStoreResource });
  }
}

export function createUserItemHooks (options: Options): UserItemHooks {
  return new Implementation(options);
}
