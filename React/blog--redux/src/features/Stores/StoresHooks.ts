import { type PostStoreHooks } from './Post';
import { type UserStoreHooks } from './User';

export interface StoresHooks {
  readonly Post: PostStoreHooks;
  readonly User: UserStoreHooks;
}
