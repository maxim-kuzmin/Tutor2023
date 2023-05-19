import {
  type CommonHooks,
  type ControlsHooks,
  type SetNotification,
  createCommonHooks,
} from '../../common';
import { createControlsHooks } from '../../controls';
import { type DataHooks, createDataHooks } from '../../data';
// import { type DomainsHooks, createDomainsHooks } from '../../domains';
import {
  AppNotificationStoreSliceName,
  type FeaturesHooks,
  createFeaturesHooks
} from '../../features';
import {
  createAppNotificationStoreHooks,
  createPostListStoreHooks,
  createUserListStoreHooks,
} from '../../stores';
import { type ViewsHooks, createViewsHooks } from '../../views';
import { type InstanceComponents } from './InstanceComponents';
import { type InstanceModules } from './InstanceModules';

export interface InstanceHooks {
  readonly Common: CommonHooks;
  readonly Controls: ControlsHooks;
  readonly Data: DataHooks;
  // readonly Domains: DomainsHooks;
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;
}

interface Options {
  readonly components: InstanceComponents;
  readonly modules: InstanceModules;
}

class Implementation implements InstanceHooks {
  readonly Common: CommonHooks;
  readonly Controls: ControlsHooks;
  readonly Data: DataHooks;
  // readonly Domains: DomainsHooks;
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;

  constructor ({
    components,
    modules
  }: Options) {
    this.Controls = createControlsHooks();

    this.Features = createFeaturesHooks({
      createAppNotificationStoreHooks,
      createPostListStoreHooks,
      createUserListStoreHooks,
    });

    const hooksOfAppNotificationStore = this.Features.App.Notification.Store;

    this.Views = createViewsHooks({
      hooksOfAppNotificationStore,
      hooksOfPostListStore: this.Features.Post.List.Store,
      hooksOfUserListStore: this.Features.User.List.Store,
    });

    function getFunctionToSetNotification (): SetNotification {
      const { run } = hooksOfAppNotificationStore.useStoreSetActionDispatch(
        AppNotificationStoreSliceName.Default,
        {}
      );

      return run;
    }

    this.Common = createCommonHooks({
      componentOfConfirmControl: components.Controls.Confirm,
      getFunctionToSetNotification,
      hooksOfConfirmControl: this.Controls.Confirm,
    });

    this.Data = createDataHooks({
      hooksOfOperation: this.Common.Operation
    });

    // this.Domains = createDomainsHooks({
    //   hooksOfApiRequest: this.Data.Api.Request,
    //   moduleOfArticleDomain: modules.Domains.Article,
    //   moduleOfTopicDomain: modules.Domains.Topic,
    // });
  }
}

export function createInstanceHooks (options: Options): InstanceHooks {
  return new Implementation(options);
}
