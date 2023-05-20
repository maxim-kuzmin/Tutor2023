import { useAppStoreSelector } from '../../../../app';
import { type AppNotificationStoreSliceName, type AppNotificationStoreState } from '../../../../features';

export function useStoreState (sliceName: AppNotificationStoreSliceName): AppNotificationStoreState {
  return useAppStoreSelector((state) => state.storeOfAppNotification)[sliceName];
}
