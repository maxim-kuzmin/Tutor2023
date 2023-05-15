import { type PostListStoreHooks } from '../features';
import { type PostViewHooks, createPostViewHooks } from '.';

export interface ViewsHooks {
  readonly Post: PostViewHooks;
}

interface Options {
  readonly hooksOfPostListStore: PostListStoreHooks;
}

class Implementation implements ViewsHooks {
  readonly Post: PostViewHooks;

  constructor ({
    hooksOfPostListStore
  }: Options) {
    this.Post = createPostViewHooks({ hooksOfPostListStore });
  }
}

export function createViewsHooks (options: Options): ViewsHooks {
  return new Implementation(options);
}
