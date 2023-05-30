import {
  type UserItemStoreClearActionOutput,
  type UserItemStoreDeleteActionInput,
  type UserItemStoreDeleteActionOutput,
  type UserItemStoreLoadActionInput,
  type UserItemStoreLoadActionOutput,
  type UserItemStoreSaveActionInput,
  type UserItemStoreSaveActionOutput,
  type UserItemStoreSetActionOutput,
  type UserItemStoreHooks,
  type UserItemStoreSliceHooks,
  UserItemStoreSliceName,
  type UserItemStoreState,
} from '../../../features';

export interface UserItemViewHooks extends UserItemStoreSliceHooks {}

interface Options {
  readonly hooksOfUserItemStore: UserItemStoreHooks;
}

export function createUserItemViewHooks ({
  hooksOfUserItemStore,
}: Options): UserItemViewHooks {
  const sliceName = UserItemStoreSliceName.Default;

  function useStoreClearActionOutput (): UserItemStoreClearActionOutput {
    return hooksOfUserItemStore.useStoreClearActionOutput(sliceName);
  }

  function useStoreDeleteActionOutput (input?: UserItemStoreDeleteActionInput): UserItemStoreDeleteActionOutput {
    return hooksOfUserItemStore.useStoreDeleteActionOutput(sliceName, input);
  }

  function useStoreLoadActionOutput (input: UserItemStoreLoadActionInput): UserItemStoreLoadActionOutput {
    return hooksOfUserItemStore.useStoreLoadActionOutput(sliceName, input);
  }

  function useStoreSaveActionOutput (input?: UserItemStoreSaveActionInput): UserItemStoreSaveActionOutput {
    return hooksOfUserItemStore.useStoreSaveActionOutput(sliceName, input);
  }

  function useStoreSetActionOutput (): UserItemStoreSetActionOutput {
    return hooksOfUserItemStore.useStoreSetActionOutput(sliceName);
  }

  function useStoreState (): UserItemStoreState {
    return hooksOfUserItemStore.useStoreState(sliceName);
  }

  return {
    useStoreClearActionOutput,
    useStoreDeleteActionOutput,
    useStoreLoadActionOutput,
    useStoreSaveActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
