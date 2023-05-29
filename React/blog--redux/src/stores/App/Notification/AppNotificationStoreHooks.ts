import { type AppNotificationStoreHooks } from '../../../features';
import { useStoreClearActionOutput } from './Hooks/Actions/Clear/AppNotificationStoreClearActionOutputHook';
import { useStoreSetActionOutput } from './Hooks/Actions/Set/AppNotificationStoreSetActionOutputHook';
import { useStoreState } from './Hooks/AppNotificationStoreStateHook';

export function createAppNotificationStoreHooks (): AppNotificationStoreHooks {
  return {
    useStoreClearActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
