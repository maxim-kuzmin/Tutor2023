import { type PostPageModule, createPostPageModule } from '.';

export interface PagesModules {
  readonly Post: PostPageModule;
}

class Implementation implements PagesModules {
  readonly Post: PostPageModule;

  constructor () {
    this.Post = createPostPageModule();
  }
}

export function createPagesModules (): PagesModules {
  return new Implementation();
}
