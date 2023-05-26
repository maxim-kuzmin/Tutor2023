import {
  type UserListStoreClearActionInput,
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreSetActionInput,
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

  function useStoreClearActionOutput (input: UserListStoreClearActionInput): UserListStoreClearActionOutput {
    return hooksOfUserListStore.useStoreClearActionOutput(sliceName, input);
  }

  function useStoreLoadActionOutput (input: UserListStoreLoadActionInput): UserListStoreLoadActionOutput {
    return hooksOfUserListStore.useStoreLoadActionOutput(sliceName, input);
  }

  function useStoreSetActionOutput (input: UserListStoreSetActionInput): UserListStoreSetActionOutput {
    return hooksOfUserListStore.useStoreSetActionOutput(sliceName, input);
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
