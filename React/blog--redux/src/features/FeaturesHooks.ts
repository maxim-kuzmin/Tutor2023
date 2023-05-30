import {
  type AppHooks,
  type AppNotificationStoreHooks,
  createAppHooks
} from './App';
import {
  type PostHooks,
  type PostItemStoreHooks,
  type PostListStoreHooks,
  createPostHooks,
} from './Post';
import {
  type UserHooks,
  type UserItemStoreHooks,
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

  readonly createPostItemStoreHooks: (options: {
    readonly pathOfPostItemStoreResource: string;
  }) => PostItemStoreHooks;

  readonly createPostListStoreHooks: (options: {
    readonly pathOfPostListStoreResource: string;
  }) => PostListStoreHooks;

  readonly createUserItemStoreHooks: (options: {
    readonly pathOfUserItemStoreResource: string;
  }) => UserItemStoreHooks;

  readonly createUserListStoreHooks: (options: {
    readonly pathOfUserListStoreResource: string;
  }) => UserListStoreHooks;

  readonly pathOfPostItemStoreResource: string;
  readonly pathOfPostListStoreResource: string;
  readonly pathOfUserItemStoreResource: string;
  readonly pathOfUserListStoreResource: string;
}

class Implementation implements FeaturesHooks {
  readonly App: AppHooks;
  readonly Post: PostHooks;
  readonly User: UserHooks;

  constructor ({
    createAppNotificationStoreHooks,
    createPostItemStoreHooks,
    createPostListStoreHooks,
    createUserItemStoreHooks,
    createUserListStoreHooks,
    pathOfPostItemStoreResource,
    pathOfPostListStoreResource,
    pathOfUserItemStoreResource,
    pathOfUserListStoreResource,
  }: Options) {
    this.App = createAppHooks({ createAppNotificationStoreHooks });

    this.Post = createPostHooks({
      createPostItemStoreHooks,
      createPostListStoreHooks,
      pathOfPostItemStoreResource,
      pathOfPostListStoreResource,
    });

    this.User = createUserHooks({
      createUserItemStoreHooks,
      createUserListStoreHooks,
      pathOfUserItemStoreResource,
      pathOfUserListStoreResource,
    });
  }
}

export function createFeaturesHooks (options: Options): FeaturesHooks {
  return new Implementation(options);
}
