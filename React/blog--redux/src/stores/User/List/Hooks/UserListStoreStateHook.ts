import { useAppStoreSelector } from '../../../../app';
import { type UserListStoreSliceName, type UserListStoreState } from '../../../../features';

export function useStoreState (sliceName: UserListStoreSliceName): UserListStoreState {
  return useAppStoreSelector((state) => state.storeOfUserList)[sliceName];
}
