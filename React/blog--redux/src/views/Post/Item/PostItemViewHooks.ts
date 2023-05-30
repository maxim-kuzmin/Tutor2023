import {
  type PostItemStoreClearActionOutput,
  type PostItemStoreDeleteActionInput,
  type PostItemStoreDeleteActionOutput,
  type PostItemStoreLoadActionInput,
  type PostItemStoreLoadActionOutput,
  type PostItemStoreSaveActionInput,
  type PostItemStoreSaveActionOutput,
  type PostItemStoreSetActionOutput,
  type PostItemStoreHooks,
  type PostItemStoreSliceHooks,
  PostItemStoreSliceName,
  type PostItemStoreState,
} from '../../../features';

export interface PostItemViewHooks extends PostItemStoreSliceHooks {}

interface Options {
  readonly hooksOfPostItemStore: PostItemStoreHooks;
}

export function createPostItemViewHooks ({
  hooksOfPostItemStore,
}: Options): PostItemViewHooks {
  const sliceName = PostItemStoreSliceName.Default;

  function useStoreClearActionOutput (): PostItemStoreClearActionOutput {
    return hooksOfPostItemStore.useStoreClearActionOutput(sliceName);
  }

  function useStoreDeleteActionOutput (input?: PostItemStoreDeleteActionInput): PostItemStoreDeleteActionOutput {
    return hooksOfPostItemStore.useStoreDeleteActionOutput(sliceName, input);
  }

  function useStoreLoadActionOutput (input: PostItemStoreLoadActionInput): PostItemStoreLoadActionOutput {
    return hooksOfPostItemStore.useStoreLoadActionOutput(sliceName, input);
  }

  function useStoreSaveActionOutput (input?: PostItemStoreSaveActionInput): PostItemStoreSaveActionOutput {
    return hooksOfPostItemStore.useStoreSaveActionOutput(sliceName, input);
  }

  function useStoreSetActionOutput (): PostItemStoreSetActionOutput {
    return hooksOfPostItemStore.useStoreSetActionOutput(sliceName);
  }

  function useStoreState (): PostItemStoreState {
    return hooksOfPostItemStore.useStoreState(sliceName);
  }

  return {
    useStoreClearActionOutput,
    useStoreDeleteActionOutput,
    useStoreLoadActionOutput,
    useStoreSaveActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
