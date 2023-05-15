import { type PostListStoreHooks, type UserListStoreHooks } from '../features';
import {
  type PostViewHooks,
  type UserViewHooks,
  createPostViewHooks,
  createUserViewHooks,
} from '.';

export interface ViewsHooks {
  readonly Post: PostViewHooks;
  readonly User: UserViewHooks;
}

interface Options {
  readonly hooksOfPostListStore: PostListStoreHooks;
  readonly hooksOfUserListStore: UserListStoreHooks;
}

class Implementation implements ViewsHooks {
  readonly Post: PostViewHooks;
  readonly User: UserViewHooks;

  constructor ({
    hooksOfPostListStore,
    hooksOfUserListStore,
  }: Options) {
    this.Post = createPostViewHooks({ hooksOfPostListStore });
    this.User = createUserViewHooks({ hooksOfUserListStore });
  }
}

export function createViewsHooks (options: Options): ViewsHooks {
  return new Implementation(options);
}
