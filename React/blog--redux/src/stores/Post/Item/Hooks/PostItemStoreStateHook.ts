import { useAppStoreSelector } from '../../../../app';
import { type PostItemStoreSliceName, type PostItemStoreState } from '../../../../features';

export function useStoreState (sliceName: PostItemStoreSliceName): PostItemStoreState {
  return useAppStoreSelector((state) => state.storeOfPostItem)[sliceName];
}
