import { type PostListPageService, createPostListPageService } from '.';

export interface PostListPageModule {
  readonly getService: () => PostListPageService;
}

class Implementation implements PostListPageModule {
  private readonly service = createPostListPageService();

  getService (): PostListPageService {
    return this.service;
  }
}

export function createPostListPageModule (): PostListPageModule {
  return new Implementation();
}
