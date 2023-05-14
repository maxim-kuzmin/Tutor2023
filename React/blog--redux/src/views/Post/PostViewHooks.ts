import { type PostListStoreHooks } from '../../features';
import { createPostListViewHooks, type PostListViewHooks } from './List';

export interface PostViewHooks {
  readonly List: PostListViewHooks;
}

interface Options {
  readonly hooksOfPostListStore: PostListStoreHooks;
}

export function createPostViewHooks ({
  hooksOfPostListStore
}: Options): PostViewHooks {
  const hooksOfList = createPostListViewHooks({ hooksOfPostListStore });

  return {
    List: hooksOfList,
  };
}
