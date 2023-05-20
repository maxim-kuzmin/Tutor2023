import { useCallback, useEffect, useMemo } from 'react';
import { StoreDispatchType } from '../../../../../../common';
import {
  type AppNotificationStoreClearActionDispatch,
  type AppNotificationStoreClearActionOptions,
  AppNotificationStoreSliceName,
} from '../../../../../../features';
import { useAppStoreDispatch } from '../../../../../../app';
import { defaultAppNotificationStoreClearAction } from '../../../AppNotificationStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: AppNotificationStoreSliceName,
  {
    callback,
    dispatchType
  }: AppNotificationStoreClearActionOptions = {}
): AppNotificationStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const run = useCallback(
    () => {
      switch (sliceName) {
        case AppNotificationStoreSliceName.Default:
          dispatch(defaultAppNotificationStoreClearAction());
          break;
      }

      if (callback) {
        callback();
      }
    },
    [callback, dispatch, sliceName]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        run();
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          run();
        }
      };
    },
    [dispatchType, run]
  );

  return useMemo<AppNotificationStoreClearActionDispatch>(() => ({ run }), [run]);
}
