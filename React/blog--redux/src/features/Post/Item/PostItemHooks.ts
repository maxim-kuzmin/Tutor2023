import { type PostItemStoreHooks } from './Store';

export interface PostItemHooks {
  readonly Store: PostItemStoreHooks;
}

interface Options {
  readonly createPostItemStoreHooks: (options: {
    readonly pathOfPostItemStoreResource: string;
  }) => PostItemStoreHooks;

  pathOfPostItemStoreResource: string;
}

class Implementation implements PostItemHooks {
  readonly Store: PostItemStoreHooks;

  constructor ({
    createPostItemStoreHooks,
    pathOfPostItemStoreResource,
  }: Options) {
    this.Store = createPostItemStoreHooks({ pathOfPostItemStoreResource });
  }
}

export function createPostItemHooks (options: Options): PostItemHooks {
  return new Implementation(options);
}
