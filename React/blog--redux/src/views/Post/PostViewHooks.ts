import { type PostItemStoreHooks, type PostListStoreHooks } from '../../features';
import { type PostItemViewHooks, createPostItemViewHooks } from './Item';
import { type PostListViewHooks } from './List';
import { createPostListViewHooks } from './List/PostListViewHooks';

export interface PostViewHooks {
  readonly Item: PostItemViewHooks;
  readonly List: PostListViewHooks;
}

interface Options {
  readonly hooksOfPostItemStore: PostItemStoreHooks;
  readonly hooksOfPostListStore: PostListStoreHooks;
}

class Implementation implements PostViewHooks {
  readonly Item: PostItemViewHooks;
  readonly List: PostListViewHooks;

  constructor ({
    hooksOfPostItemStore,
    hooksOfPostListStore,
  }: Options) {
    this.Item = createPostItemViewHooks({ hooksOfPostItemStore });
    this.List = createPostListViewHooks({ hooksOfPostListStore });
  }
}

export function createPostViewHooks (options: Options): PostViewHooks {
  return new Implementation(options);
}
