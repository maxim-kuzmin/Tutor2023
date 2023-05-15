import {
  type PostItemPageModule,
  type PostListPageModule,
  createPostItemPageModule,
  createPostListPageModule,
} from '.';

export interface PostPageModule {
  readonly Item: PostItemPageModule;
  readonly List: PostListPageModule;
}

class Implementation implements PostPageModule {
  readonly Item: PostItemPageModule;
  readonly List: PostListPageModule;

  constructor () {
    this.Item = createPostItemPageModule();
    this.List = createPostListPageModule();
  }
}

export function createPostPageModule (): PostPageModule {
  return new Implementation();
}
