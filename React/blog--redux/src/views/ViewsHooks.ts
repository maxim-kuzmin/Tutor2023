import {
  type AppNotificationStoreHooks,
  type PostListStoreHooks,
  type UserListStoreHooks
} from '../features';
import {
  type AppViewHooks,
  type PostViewHooks,
  type UserViewHooks,
  createAppViewHooks,
  createPostViewHooks,
  createUserViewHooks,
} from '.';

export interface ViewsHooks {
  readonly App: AppViewHooks;
  readonly Post: PostViewHooks;
  readonly User: UserViewHooks;
}

interface Options {
  readonly hooksOfAppNotificationStore: AppNotificationStoreHooks;
  readonly hooksOfPostListStore: PostListStoreHooks;
  readonly hooksOfUserListStore: UserListStoreHooks;
}

class Implementation implements ViewsHooks {
  readonly App: AppViewHooks;
  readonly Post: PostViewHooks;
  readonly User: UserViewHooks;

  constructor ({
    hooksOfAppNotificationStore,
    hooksOfPostListStore,
    hooksOfUserListStore,
  }: Options) {
    this.App = createAppViewHooks({ hooksOfAppNotificationStore });
    this.Post = createPostViewHooks({ hooksOfPostListStore });
    this.User = createUserViewHooks({ hooksOfUserListStore });
  }
}

export function createViewsHooks (options: Options): ViewsHooks {
  return new Implementation(options);
}
