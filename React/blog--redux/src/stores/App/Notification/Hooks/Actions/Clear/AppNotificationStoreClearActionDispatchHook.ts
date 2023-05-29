import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type AppNotificationStoreClearActionDispatch,
  type AppNotificationStoreSliceName,
  createAppNotificationStoreClearActionPayload,
} from '../../../../../../features';
import { createAppNotificationStoreClearAction } from '../../../AppNotificationStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: AppNotificationStoreSliceName,
  {
    dispatchType
  }: StoreActionOptions = {}
): AppNotificationStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createAppNotificationStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createAppNotificationStoreClearAction(payloadOfClearAction));
    },
    [dispatch, payloadOfClearAction]
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
