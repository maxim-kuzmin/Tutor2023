import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type AppNotificationStoreClearActionCallback,
  type AppNotificationStoreClearActionDispatch,
  type AppNotificationStoreSliceName,
  createAppNotificationStoreClearActionPayload,
} from '../../../../../../features';
import { createAppNotificationStoreClearAction } from '../../../AppNotificationStoreDefinition';

interface Options extends StoreActionOptions {
  readonly callback?: AppNotificationStoreClearActionCallback;
}

export function useStoreClearActionDispatch (
  sliceName: AppNotificationStoreSliceName,
  {
    callback,
    dispatchType
  }: Options = {}
): AppNotificationStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createAppNotificationStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createAppNotificationStoreClearAction(payloadOfClearAction));

      if (callback) {
        callback();
      }
    },
    [callback, dispatch, payloadOfClearAction]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        runInner();
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          runInner();
        }
      };
    },
    [dispatchType, runInner]
  );

  return useMemo<AppNotificationStoreClearActionDispatch>(
    () => ({ run: runInner }),
    [runInner]
  );
}
