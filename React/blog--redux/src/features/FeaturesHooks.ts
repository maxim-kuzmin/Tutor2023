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
  readonly Post: PostHooks;
  readonly User: UserHooks;
}

interface Options {
  readonly createPostListStoreHooks: () => PostListStoreHooks;
  readonly createUserListStoreHooks: () => UserListStoreHooks;
}

class Implementation implements FeaturesHooks {
  readonly Post: PostHooks;
  readonly User: UserHooks;

  constructor ({
    createPostListStoreHooks,
    createUserListStoreHooks,
  }: Options) {
    this.Post = createPostHooks({ createPostListStoreHooks });
    this.User = createUserHooks({ createUserListStoreHooks });
  }
}

export function createFeaturesHooks (options: Options): FeaturesHooks {
  return new Implementation(options);
}
