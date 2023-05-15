import { type PostItemPageService, createPostItemPageService } from '.';

export interface PostItemPageModule {
  readonly getService: () => PostItemPageService;
}

class Implementation implements PostItemPageModule {
  private readonly service = createPostItemPageService();

  getService (): PostItemPageService {
    return this.service;
  }
}

export function createPostItemPageModule (): PostItemPageModule {
  return new Implementation();
}
