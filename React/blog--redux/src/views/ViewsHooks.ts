import { type PostListStoreHooks } from '../features';
import { createPostViewHooks, type PostViewHooks } from './Post';

export interface ViewsHooks {
  readonly Post: PostViewHooks;
}

interface Options {
  readonly hooksOfPostListStore: PostListStoreHooks;
}

export function createViewsHooks ({
  hooksOfPostListStore
}: Options): ViewsHooks {
  const hooksOfPost = createPostViewHooks({ hooksOfPostListStore });

  return {
    Post: hooksOfPost,
  };
}
