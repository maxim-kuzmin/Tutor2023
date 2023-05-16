import { type FeaturesHooks, createFeaturesHooks } from '../../features';
import {
  createPostListStoreHooks,
  createUserListStoreHooks,
} from '../../stores';
import { type ViewsHooks, createViewsHooks } from '../../views';

export interface InstanceHooks {
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;
}

class Implementation implements InstanceHooks {
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;

  constructor () {
    this.Features = createFeaturesHooks({
      createPostListStoreHooks,
      createUserListStoreHooks,
    });

    this.Views = createViewsHooks({
      hooksOfPostListStore: this.Features.Post.List.Store,
      hooksOfUserListStore: this.Features.User.List.Store,
    });
  }
}
export function createInstanceHooks (): InstanceHooks {
  return new Implementation();
}
