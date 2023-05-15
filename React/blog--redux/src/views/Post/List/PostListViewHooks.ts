import {
  type PostListStoreHooks,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreUpdateCompletedActionOutput,
  type PostListStoreState,
  PostListStoreSliceName,
  type PostListStoreSliceHooks,
} from '../../../features';

export interface PostListViewHooks extends PostListStoreSliceHooks {}

interface Options {
  readonly hooksOfPostListStore: PostListStoreHooks;
}

export function createPostListViewHooks ({
  hooksOfPostListStore
}: Options): PostListViewHooks {
  const sliceName = PostListStoreSliceName.Default;

  function useStoreAddCompletedActionOutput (): PostListStoreAddCompletedActionOutput {
    return hooksOfPostListStore.useStoreAddCompletedActionOutput(sliceName);
  }

  function useStoreUpdateCompletedActionOutput (): PostListStoreUpdateCompletedActionOutput {
    return hooksOfPostListStore.useStoreUpdateCompletedActionOutput(sliceName);
  }

  function useStoreState (): PostListStoreState {
    return hooksOfPostListStore.useStoreState(sliceName);
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreUpdateCompletedActionOutput,
    useStoreState,
  }
}
