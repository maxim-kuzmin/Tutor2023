import { type Dispatch, useEffect, useRef } from 'react';
import { StoreDispatchType } from '../../../../../../common';
import {
  type AppNotificationStoreSliceName,
  type AppNotificationStoreSetActionCallback,
  type AppNotificationStoreSetActionDispatch,
  type AppNotificationStoreSetActionOptions,
  type AppNotificationStoreSetActionPayload,
} from '../../../../../../features';
import { AppNotificationStoreActionType } from '../../../AppNotificationStoreActionType';
import { type AppNotificationStoreActionUnion } from '../../../AppNotificationStoreActionUnion';
import { useAppNotificationStoreDispatch } from '../../../AppNotificationStoreHooks';

interface Options {
  readonly callback?: AppNotificationStoreSetActionCallback;
  readonly dispatch: Dispatch<AppNotificationStoreActionUnion>;
  readonly payload: AppNotificationStoreSetActionPayload;
  readonly sliceName: string;
}

function runSetAction ({
  callback,
  dispatch,
  payload,
  sliceName
}: Options) {
  dispatch({
    payload,
    sliceName,
    type: AppNotificationStoreActionType.Set
  });

  if (callback) {
    callback(payload);
  }
}

export function useStoreSetActionDispatch (
  sliceName: AppNotificationStoreSliceName,
  {
    callback,
    dispatchType,
    payloadOfSetAction
  }: AppNotificationStoreSetActionOptions
): AppNotificationStoreSetActionDispatch {
  const dispatch = useAppNotificationStoreDispatch();

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate && payloadOfSetAction) {
        runSetAction({
          callback,
          dispatch,
          payload: payloadOfSetAction,
          sliceName
        });
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount && payloadOfSetAction) {
          runSetAction({
            callback,
            dispatch,
            payload: payloadOfSetAction,
            sliceName
          });
        }
      };
    },
    [
      callback,
      dispatch,
      dispatchType,
      payloadOfSetAction,
      sliceName
    ]
  );

  function run (payload: AppNotificationStoreSetActionPayload) {
    runSetAction({
      callback,
      dispatch,
      payload,
      sliceName
    });
  }

  return useRef({
    run
  }).current;
}
