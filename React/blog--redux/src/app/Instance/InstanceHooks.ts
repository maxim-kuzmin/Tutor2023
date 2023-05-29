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
  createPostListStoreHooks,
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
    } = settings.Features.App.Localization;

    this.Controls = createControlsHooks({ pathOfConfirmControlResource });

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
      moduleOfUserDomain: modules.Domains.User,
    });
  }
}

export function createInstanceHooks (options: Options): InstanceHooks {
  return new Implementation(options);
}
