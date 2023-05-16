import {
  type PostListStoreHooks,
  type PostListHooks,
  createPostListHooks,
} from './List';

export interface PostHooks {
  readonly List: PostListHooks;
}

interface Options {
  readonly createPostListStoreHooks: () => PostListStoreHooks;
}

class Implementation implements PostHooks {
  readonly List: PostListHooks;

  constructor ({
    createPostListStoreHooks,
  }: Options) {
    this.List = createPostListHooks({ createPostListStoreHooks });
  }
}

export function createPostHooks (options: Options): PostHooks {
  return new Implementation(options);
}
