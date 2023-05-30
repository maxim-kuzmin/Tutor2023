import {
  type PostListStoreClearActionOutput,
  type PostListStoreLoadActionInput,
  type PostListStoreLoadActionOutput,
  type PostListStoreSetActionOutput,
  type PostListStoreHooks,
  type PostListStoreSliceHooks,
  PostListStoreSliceName,
  type PostListStoreState,
} from '../../../features';

export interface PostListViewHooks extends PostListStoreSliceHooks {}

interface Options {
  readonly hooksOfPostListStore: PostListStoreHooks;
}

export function createPostListViewHooks ({
  hooksOfPostListStore,
}: Options): PostListViewHooks {
  const sliceName = PostListStoreSliceName.Default;

  function useStoreClearActionOutput (): PostListStoreClearActionOutput {
    return hooksOfPostListStore.useStoreClearActionOutput(sliceName);
  }

  function useStoreLoadActionOutput (input: PostListStoreLoadActionInput): PostListStoreLoadActionOutput {
    return hooksOfPostListStore.useStoreLoadActionOutput(sliceName, input);
  }

  function useStoreSetActionOutput (): PostListStoreSetActionOutput {
    return hooksOfPostListStore.useStoreSetActionOutput(sliceName);
  }

  function useStoreState (): PostListStoreState {
    return hooksOfPostListStore.useStoreState(sliceName);
  }

  return {
    useStoreClearActionOutput,
    useStoreLoadActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
