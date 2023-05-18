import {
  type UserListStoreHooks,
  type UserListStoreLoadActionOutput,
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

  function useStoreLoadActionOutput (): UserListStoreLoadActionOutput {
    return hooksOfUserListStore.useStoreLoadActionOutput(sliceName);
  }

  function useStoreState (): UserListStoreState {
    return hooksOfUserListStore.useStoreState(sliceName);
  }

  return {
    useStoreLoadActionOutput,
    useStoreState,
  };
}
