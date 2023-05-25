import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreSliceName,
  type UserListStoreLoadCompletedActionDispatch,
  type UserListStoreLoadCompletedActionOptions,
  type UserListStoreLoadCompletedActionPayload,
  type UserListStoreLoadCompletedActionResult,
  createUserListStoreLoadCompletedActionPayload,
} from '../../../../../../features';

export function useStoreLoadCompletedActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    callback,
    dispatchType,
    resultOfLoadCompletedAction
  }: UserListStoreLoadCompletedActionOptions = {}
): UserListStoreLoadCompletedActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfLoadCompletedAction = useMemo(
    () => createUserListStoreLoadCompletedActionPayload({
      actionResult: resultOfLoadCompletedAction,
    }),
    [resultOfLoadCompletedAction]
  );

  const run = useCallback(
    (payload: UserListStoreLoadCompletedActionPayload) => {
      dispatch({
        payload,
        sliceName,
        type: UserListStoreActionType.LoadCompleted
      });

      if (callback) {
        callback(payload.actionResult);
      }
    },
    [callback, dispatch, sliceName]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        run(payloadOfLoadCompletedAction);
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          run(payloadOfLoadCompletedAction);
        }
      };
    },
    [dispatchType, payloadOfLoadCompletedAction, run]
  );

  return useMemo<UserListStoreLoadCompletedActionDispatch>(
    () => ({
      run: (actionResult: UserListStoreLoadCompletedActionResult) => {
        const payloadOfLoadCompletedActionInner = createUserListStoreLoadCompletedActionPayload({
          ...payloadOfLoadCompletedAction,
          actionResult
        });

        run(payloadOfLoadCompletedActionInner);
      }
    }),
    [payloadOfLoadCompletedAction, run]
  );
}
