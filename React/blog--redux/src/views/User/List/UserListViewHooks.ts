import {
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreSetActionOutput,
  type UserListStoreHooks,
  type UserListStoreSliceHooks,
  UserListStoreSliceName,
  type UserListStoreState,
} from '../../../features';

export interface UserListViewHooks extends UserListStoreSliceHooks {
}

interface Options {
  readonly hooksOfUserListStore: UserListStoreHooks;
}

export function createUserListViewHooks ({
  hooksOfUserListStore
}: Options): UserListViewHooks {
  const sliceName = UserListStoreSliceName.Default;

  function useStoreClearActionOutput (): UserListStoreClearActionOutput {
    return hooksOfUserListStore.useStoreClearActionOutput(sliceName);
  }

  function useStoreLoadActionOutput (input: UserListStoreLoadActionInput): UserListStoreLoadActionOutput {
    return hooksOfUserListStore.useStoreLoadActionOutput(sliceName, input);
  }

  function useStoreSetActionOutput (): UserListStoreSetActionOutput {
    return hooksOfUserListStore.useStoreSetActionOutput(sliceName);
  }

  function useStoreState (): UserListStoreState {
    return hooksOfUserListStore.useStoreState(sliceName);
  }

  return {
    useStoreClearActionOutput,
    useStoreLoadActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
