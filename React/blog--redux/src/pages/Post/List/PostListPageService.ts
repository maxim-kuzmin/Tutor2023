export interface PostListPageService {
  readonly createUrl: () => string;
}

class Implementation implements PostListPageService {
  createUrl (): string {
    return '/';
  }
}

export function createPostListPageService (): PostListPageService {
  return new Implementation();
}
