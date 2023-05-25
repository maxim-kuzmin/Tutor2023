import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import {
  type AppNotificationStoreSetActionDispatch,
  type AppNotificationStoreSetActionOptions,
  type AppNotificationStoreSetActionPayload,
  type AppNotificationStoreSetActionResult,
  AppNotificationStoreSliceName,
  createAppNotificationStoreSetActionPayload,
} from '../../../../../../features';
import { defaultAppNotificationStoreSetAction } from '../../../AppNotificationStoreDefinition';

export function useStoreSetActionDispatch (
  sliceName: AppNotificationStoreSliceName,
  {
    callback,
    dispatchType,
    resultOfSetAction
  }: AppNotificationStoreSetActionOptions = {}
): AppNotificationStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfSetAction = useMemo(
    () => createAppNotificationStoreSetActionPayload({ actionResult: resultOfSetAction }),
    [resultOfSetAction]
  );

  const run = useCallback(
    (payload: AppNotificationStoreSetActionPayload) => {
      switch (sliceName) {
        case AppNotificationStoreSliceName.Default:
          dispatch(defaultAppNotificationStoreSetAction(payload));
          break;
      }

      if (callback) {
        callback(payload.actionResult);
      }
    },
    [callback, dispatch, sliceName]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        run(payloadOfSetAction);
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          run(payloadOfSetAction);
        }
      };
    },
    [dispatchType, payloadOfSetAction, run]
  );

  return useMemo<AppNotificationStoreSetActionDispatch>(
    () => ({
      run: (actionResult: AppNotificationStoreSetActionResult) => {
        const payloadOfSetActionInner = createAppNotificationStoreSetActionPayload({
          ...payloadOfSetAction,
          actionResult
        });

        run(payloadOfSetActionInner);
      }
    }),
    [payloadOfSetAction, run]
  );
}
