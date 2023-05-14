import { type FeaturesHooks, createFeaturesHooks } from '../../features';
import { type ViewsHooks, createViewsHooks } from '../../views';

export interface InstanceHooks {
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;
}

export function createInstanceHooks (): InstanceHooks {
  const hooksOfFeatures = createFeaturesHooks();

  const hooksOfViews = createViewsHooks({
    hooksOfPostListStore: hooksOfFeatures.Stores.Post.List,
  });

  return {
    Features: hooksOfFeatures,
    Views: hooksOfViews,
  };
}
