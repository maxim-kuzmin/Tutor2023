import {
  type AppHooks,
  type AppNotificationStoreHooks,
  createAppHooks
} from './App';
import {
  type PostHooks,
  type PostListStoreHooks,
  createPostHooks,
} from './Post';
import {
  type UserHooks,
  type UserListStoreHooks,
  createUserHooks,
} from './User';

export interface FeaturesHooks {
  readonly App: AppHooks;
  readonly Post: PostHooks;
  readonly User: UserHooks;
}

interface Options {
  readonly createAppNotificationStoreHooks: () => AppNotificationStoreHooks;
  readonly createPostListStoreHooks: () => PostListStoreHooks;
  readonly createUserListStoreHooks: () => UserListStoreHooks;
}

class Implementation implements FeaturesHooks {
  readonly App: AppHooks;
  readonly Post: PostHooks;
  readonly User: UserHooks;

  constructor ({
    createAppNotificationStoreHooks,
    createPostListStoreHooks,
    createUserListStoreHooks,
  }: Options) {
    this.App = createAppHooks({ createAppNotificationStoreHooks });
    this.Post = createPostHooks({ createPostListStoreHooks });
    this.User = createUserHooks({ createUserListStoreHooks });
  }
}

export function createFeaturesHooks (options: Options): FeaturesHooks {
  return new Implementation(options);
}
