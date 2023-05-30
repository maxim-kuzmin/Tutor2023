import {
  type PostItemStoreHooks,
  type PostItemHooks,
  createPostItemHooks,
} from './Item';
import {
  type PostListStoreHooks,
  type PostListHooks,
  createPostListHooks,
} from './List';

export interface PostHooks {
  readonly Item: PostItemHooks;
  readonly List: PostListHooks;
}

interface Options {
  readonly createPostItemStoreHooks: (options: {
    readonly pathOfPostItemStoreResource: string;
  }) => PostItemStoreHooks;

  readonly createPostListStoreHooks: (options: {
    readonly pathOfPostListStoreResource: string;
  }) => PostListStoreHooks;

  readonly pathOfPostItemStoreResource: string;
  readonly pathOfPostListStoreResource: string;
}

class Implementation implements PostHooks {
  readonly Item: PostItemHooks;
  readonly List: PostListHooks;

  constructor ({
    createPostItemStoreHooks,
    createPostListStoreHooks,
    pathOfPostItemStoreResource,
    pathOfPostListStoreResource,
  }: Options) {
    this.Item = createPostItemHooks({ createPostItemStoreHooks, pathOfPostItemStoreResource });
    this.List = createPostListHooks({ createPostListStoreHooks, pathOfPostListStoreResource });
  }
}

export function createPostHooks (options: Options): PostHooks {
  return new Implementation(options);
}
