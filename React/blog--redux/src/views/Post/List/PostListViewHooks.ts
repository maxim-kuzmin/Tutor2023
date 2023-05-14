import {
  type PostListStoreHooks,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
  PostListStoreSlice
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
  const slice = PostListStoreSlice.Default;

  function useStoreAddCompletedActionOutput (): PostListStoreAddCompletedActionOutput {
    return hooksOfPostListStore.useStoreAddCompletedActionOutput(slice);
  }

  function useStoreState (): PostListStoreState {
    return hooksOfPostListStore.useStoreState(slice);
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreState,
  }
}
