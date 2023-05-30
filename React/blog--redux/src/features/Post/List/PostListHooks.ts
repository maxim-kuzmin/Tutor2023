import { type PostListStoreHooks } from './Store';

export interface PostListHooks {
  readonly Store: PostListStoreHooks;
}

interface Options {
  readonly createPostListStoreHooks: (options: {
    readonly pathOfPostListStoreResource: string;
  }) => PostListStoreHooks;

  readonly pathOfPostListStoreResource: string;
}

class Implementation implements PostListHooks {
  readonly Store: PostListStoreHooks;

  constructor ({
    createPostListStoreHooks,
    pathOfPostListStoreResource,
  }: Options) {
    this.Store = createPostListStoreHooks({ pathOfPostListStoreResource });
  }
}

export function createPostListHooks (options: Options): PostListHooks {
  return new Implementation(options);
}
