import {
  type PostListStoreHooks,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
  PostListStoreSliceName
} from '../../../features';

export interface PostListViewHooks {
  readonly useStoreAddCompletedActionOutput: () => PostListStoreAddCompletedActionOutput;
  readonly useStoreState: () => PostListStoreState;
}

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

  function useStoreState (): PostListStoreState {
    return hooksOfPostListStore.useStoreState(sliceName);
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreState,
  }
}
