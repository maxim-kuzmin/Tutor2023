import {
  type CommonHooks,
  type ControlsHooks,
  type FunctionToSetNotification,
  createCommonHooks,
} from '../../common';
import { createControlsHooks } from '../../controls';
import { type DataHooks, createDataHooks } from '../../data';
import { type DomainsHooks, createDomainsHooks } from '../../domains';
import {
  AppNotificationStoreSliceName,
  type FeaturesHooks,
  createFeaturesHooks
} from '../../features';
import {
  createAppNotificationStoreHooks,
  createPostItemStoreHooks,
  createPostListStoreHooks,
  createUserItemStoreHooks,
  createUserListStoreHooks,
} from '../../stores';
import {
  useStoreSetActionDispatch
} from '../../stores/App/Notification/Hooks/Actions/Set/AppNotificationStoreSetActionDispatchHook';
import { type ViewsHooks, createViewsHooks } from '../../views';
import { type InstanceComponents } from './InstanceComponents';
import { type InstanceModules } from './InstanceModules';
import { type InstanceSettings } from './InstanceSettings';

function useFunctionToSetNotification (): FunctionToSetNotification {
  const { run } = useStoreSetActionDispatch(
    AppNotificationStoreSliceName.Default,
    {}
  );

  return run;
}

export interface InstanceHooks {
  readonly Common: CommonHooks;
  readonly Controls: ControlsHooks;
  readonly Data: DataHooks;
  readonly Domains: DomainsHooks;
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;
}

interface Options {
  readonly components: InstanceComponents;
  readonly modules: InstanceModules;
  readonly settings: InstanceSettings;
}

class Implementation implements InstanceHooks {
  readonly Common: CommonHooks;
  readonly Controls: ControlsHooks;
  readonly Data: DataHooks;
  readonly Domains: DomainsHooks;
  readonly Features: FeaturesHooks;
  readonly Views: ViewsHooks;

  constructor ({
    components,
    modules,
    settings,
  }: Options) {
    const {
      pathOfApiResponseResource,
      pathOfConfirmControlResource,
      pathOfOperationHandlerResource,
      pathOfPostItemStoreResource,
      pathOfPostListStoreResource,
      pathOfUserItemStoreResource,
      pathOfUserListStoreResource,
    } = settings.Features.App.Localization;

    this.Controls = createControlsHooks({ pathOfConfirmControlResource });

    this.Features = createFeaturesHooks({
      createAppNotificationStoreHooks,
      createPostItemStoreHooks,
      createPostListStoreHooks,
      createUserItemStoreHooks,
      createUserListStoreHooks,
      pathOfPostItemStoreResource,
      pathOfPostListStoreResource,
      pathOfUserItemStoreResource,
      pathOfUserListStoreResource,
    });

    const hooksOfAppNotificationStore = this.Features.App.Notification.Store;

    this.Views = createViewsHooks({
      hooksOfAppNotificationStore,
      hooksOfPostItemStore: this.Features.Post.Item.Store,
      hooksOfPostListStore: this.Features.Post.List.Store,
      hooksOfUserItemStore: this.Features.User.Item.Store,
      hooksOfUserListStore: this.Features.User.List.Store,
    });

    this.Common = createCommonHooks({
      componentOfConfirmControl: components.Controls.Confirm,
      pathOfOperationHandlerResource,
      hooksOfConfirmControl: this.Controls.Confirm,
      useFunctionToSetNotification,
    });

    this.Data = createDataHooks({
      hooksOfOperation: this.Common.Operation,
      pathOfApiResponseResource,
    });

    this.Domains = createDomainsHooks({
      hooksOfApiRequest: this.Data.Api.Request,
      moduleOfPostDomain: modules.Domains.Post,
      moduleOfUserDomain: modules.Domains.User,
    });
  }
}

export function createInstanceHooks (options: Options): InstanceHooks {
  return new Implementation(options);
}
