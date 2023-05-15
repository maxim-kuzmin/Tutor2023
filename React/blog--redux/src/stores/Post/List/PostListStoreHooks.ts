import {
  type PostListStoreHooks,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreAddReactionCompletedActionOutput,
  type PostListStoreUpdateCompletedActionOutput,
  type PostListStoreState,
  PostListStoreSliceName,
  type PostListStoreSliceHooks,
} from '../../../features';
import { createPostListStoreDefaultSliceHooks } from './Slices';

export function createPostListStoreHooks (): PostListStoreHooks {
  const hooks = new Map<PostListStoreSliceName, PostListStoreSliceHooks>([
    [PostListStoreSliceName.Default, createPostListStoreDefaultSliceHooks()]
  ]);

  function getHook (sliceName: PostListStoreSliceName): PostListStoreSliceHooks {
    return hooks.get(sliceName)!;
  }

  function useStoreAddCompletedActionOutput (
    sliceName: PostListStoreSliceName
  ): PostListStoreAddCompletedActionOutput {
    return getHook(sliceName).useStoreAddCompletedActionOutput();
  }

  function useStoreAddReactionCompletedActionOutput (
    sliceName: PostListStoreSliceName
  ): PostListStoreAddReactionCompletedActionOutput {
    return getHook(sliceName).useStoreAddReactionCompletedActionOutput();
  }

  function useStoreUpdateCompletedActionOutput (
    sliceName: PostListStoreSliceName
  ): PostListStoreUpdateCompletedActionOutput {
    return getHook(sliceName).useStoreUpdateCompletedActionOutput();
  }

  function useStoreState (sliceName: PostListStoreSliceName): PostListStoreState {
    return getHook(sliceName).useStoreState();
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreAddReactionCompletedActionOutput,
    useStoreUpdateCompletedActionOutput,
    useStoreState,
  }
}
