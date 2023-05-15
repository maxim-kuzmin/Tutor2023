import { type FeaturesHooks, createFeaturesHooks } from '../../features';
import { type ViewsHooks, createViewsHooks } from '../../views';

export interface InstanceHooks {
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;
}

class Implementation implements InstanceHooks {
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;

  constructor () {
    this.Features = createFeaturesHooks();

    this.Views = createViewsHooks({
      hooksOfPostListStore: this.Features.Stores.Post.List,
      hooksOfUserListStore: this.Features.Stores.User.List,
    });
  }
}
export function createInstanceHooks (): InstanceHooks {
  return new Implementation();
}
