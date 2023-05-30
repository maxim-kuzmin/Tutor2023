import {
  type AppNotificationStoreHooks,
  type PostItemStoreHooks,
  type PostListStoreHooks,
  type UserItemStoreHooks,
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
  readonly hooksOfPostItemStore: PostItemStoreHooks;
  readonly hooksOfPostListStore: PostListStoreHooks;
  readonly hooksOfUserItemStore: UserItemStoreHooks;
  readonly hooksOfUserListStore: UserListStoreHooks;
}

class Implementation implements ViewsHooks {
  readonly App: AppViewHooks;
  readonly Post: PostViewHooks;
  readonly User: UserViewHooks;

  constructor ({
    hooksOfAppNotificationStore,
    hooksOfPostItemStore,
    hooksOfPostListStore,
    hooksOfUserItemStore,
    hooksOfUserListStore,
  }: Options) {
    this.App = createAppViewHooks({ hooksOfAppNotificationStore });
    this.Post = createPostViewHooks({ hooksOfPostItemStore, hooksOfPostListStore });
    this.User = createUserViewHooks({ hooksOfUserItemStore, hooksOfUserListStore });
  }
}

export function createViewsHooks (options: Options): ViewsHooks {
  return new Implementation(options);
}
