import {
  type UserListStoreHooks,
  type UserListStoreState,
  UserListStoreSliceName,
  type UserListStoreSliceHooks,
} from '../../../features';

export interface UserListViewHooks extends UserListStoreSliceHooks {}

interface Options {
  readonly hooksOfUserListStore: UserListStoreHooks;
}

export function createUserListViewHooks ({
  hooksOfUserListStore
}: Options): UserListViewHooks {
  const sliceName = UserListStoreSliceName.Default;

  function useStoreState (): UserListStoreState {
    return hooksOfUserListStore.useStoreState(sliceName);
  }

  return {
    useStoreState,
  };
}
