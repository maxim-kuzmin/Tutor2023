import { useCallback, useEffect, useMemo } from 'react';
import { StoreDispatchType } from '../../../../../../common';
import {
  type AppNotificationStoreSetActionDispatch,
  type AppNotificationStoreSetActionOptions,
  type AppNotificationStoreSetActionPayload,
  AppNotificationStoreSliceName,
} from '../../../../../../features';
import { useAppStoreDispatch } from '../../../../../../app';
import { defaultAppNotificationStoreSetAction } from '../../../AppNotificationStoreDefinition';

export function useStoreSetActionDispatch (
  sliceName: AppNotificationStoreSliceName,
  {
    callback,
    dispatchType,
    payloadOfSetAction
  }: AppNotificationStoreSetActionOptions = {}
): AppNotificationStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const run = useCallback(
    (payload: AppNotificationStoreSetActionPayload) => {
      switch (sliceName) {
        case AppNotificationStoreSliceName.Default:
          dispatch(defaultAppNotificationStoreSetAction(payload));
          break;
      }

      if (callback) {
        callback(payload);
      }
    },
    [callback, dispatch, sliceName]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate && payloadOfSetAction) {
        run(payloadOfSetAction);
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount && payloadOfSetAction) {
          run(payloadOfSetAction);
        }
      };
    },
    [dispatchType, payloadOfSetAction, run]
  );

  return useMemo<AppNotificationStoreSetActionDispatch>(() => ({ run }), [run]);
}
