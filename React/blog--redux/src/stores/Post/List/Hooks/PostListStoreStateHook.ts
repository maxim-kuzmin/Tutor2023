import { useAppStoreSelector } from '../../../../app';
import { type PostListStoreSliceName, type PostListStoreState } from '../../../../features';

export function useStoreState (sliceName: PostListStoreSliceName): PostListStoreState {
  return useAppStoreSelector((state) => state.storeOfPostList)[sliceName];
}
