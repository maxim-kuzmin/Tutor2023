import { useAppStoreSelector } from '../../../../app';
import { type UserItemStoreSliceName, type UserItemStoreState } from '../../../../features';

export function useStoreState (sliceName: UserItemStoreSliceName): UserItemStoreState {
  return useAppStoreSelector((state) => state.storeOfUserItem)[sliceName];
}
