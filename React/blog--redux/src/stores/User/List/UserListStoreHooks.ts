import {
  type UserListStoreLoadActionOutput,
  type UserListStoreHooks,
  type UserListStoreState,
  UserListStoreSliceName,
  type UserListStoreSliceHooks,
} from '../../../features';
import { createUserListStoreDefaultSliceHooks } from './Slices';

export function createUserListStoreHooks (): UserListStoreHooks {
  const hooks = new Map<UserListStoreSliceName, UserListStoreSliceHooks>([
    [UserListStoreSliceName.Default, createUserListStoreDefaultSliceHooks()]
  ]);

  function getHook (sliceName: UserListStoreSliceName): UserListStoreSliceHooks {
    return hooks.get(sliceName)!;
  }

  function useStoreLoadActionOutput (sliceName: UserListStoreSliceName): UserListStoreLoadActionOutput {
    return getHook(sliceName).useStoreLoadActionOutput();
  }

  function useStoreState (sliceName: UserListStoreSliceName): UserListStoreState {
    return getHook(sliceName).useStoreState();
  }

  return {
    useStoreLoadActionOutput,
    useStoreState,
  }
}
