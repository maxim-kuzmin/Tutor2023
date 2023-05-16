import { type PostListStoreHooks } from './Store';

export interface PostListHooks {
  readonly Store: PostListStoreHooks;
}

interface Options {
  readonly createPostListStoreHooks: () => PostListStoreHooks;
}

class Implementation implements PostListHooks {
  readonly Store: PostListStoreHooks;

  constructor ({
    createPostListStoreHooks
  }: Options) {
    this.Store = createPostListStoreHooks();
  }
}

export function createPostListHooks (options: Options): PostListHooks {
  return new Implementation(options);
}
