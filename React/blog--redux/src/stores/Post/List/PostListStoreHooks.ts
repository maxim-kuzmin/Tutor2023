import {
  type PostListStoreHooks,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
  PostListStoreSliceName,
  type PostListStoreSliceHooks
} from '../../../features';
import { createPostListStoreDefaultSliceHooks } from './Slices';

export function createPostListStoreHooks (): PostListStoreHooks {
  const hooks = new Map<PostListStoreSliceName, PostListStoreSliceHooks>([
    [PostListStoreSliceName.Default, createPostListStoreDefaultSliceHooks()]
  ]);

  function getHook (sliceName: PostListStoreSliceName): PostListStoreSliceHooks {
    return hooks.get(sliceName)!;
  }

  function useStoreAddCompletedActionOutput (sliceName: PostListStoreSliceName): PostListStoreAddCompletedActionOutput {
    return getHook(sliceName).useStoreAddCompletedActionOutput();
  }

  function useStoreState (sliceName: PostListStoreSliceName): PostListStoreState {
    return getHook(sliceName).useStoreState();
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreState,
  }
}
