import {
  type PostListStoreHooks,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
  PostListStoreSlice
} from '../../../features';
import { createPostListStoreDefaultOwnerHooks } from './Owners';

export function createPostListStoreHooks (): PostListStoreHooks {
  const hooksOfPostListViewOwner = createPostListStoreDefaultOwnerHooks();

  function useStoreAddCompletedActionOutput (slice: PostListStoreSlice): PostListStoreAddCompletedActionOutput {
    switch (slice) {
      case PostListStoreSlice.Default:
        return hooksOfPostListViewOwner.useStoreAddCompletedActionOutput();
    }
  }

  function useStoreState (slice: PostListStoreSlice): PostListStoreState {
    switch (slice) {
      case PostListStoreSlice.Default:
        return hooksOfPostListViewOwner.useStoreState();
    }
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreState,
  }
}
