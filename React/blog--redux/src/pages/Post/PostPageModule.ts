import { type PostItemPageModule, createPostItemPageModule } from '.';

export interface PostPageModule {
  readonly Item: PostItemPageModule;
}

class Implementation implements PostPageModule {
  readonly Item: PostItemPageModule;

  constructor () {
    this.Item = createPostItemPageModule();
  }
}

export function createPostPageModule (): PostPageModule {
  return new Implementation();
}
