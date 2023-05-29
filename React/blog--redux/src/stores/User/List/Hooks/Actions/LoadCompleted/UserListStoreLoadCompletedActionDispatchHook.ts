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
import { createUserListStoreLoadCompletedAction } from '../../../UserListStoreDefinition';

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
      sliceName,
    }),
    [resultOfLoadCompletedAction, sliceName]
  );

  const runInner = useCallback(
    (payload: UserListStoreLoadCompletedActionPayload) => {
      dispatch(createUserListStoreLoadCompletedAction(payload));

      const { actionResult } = payload;

      if (callback && !actionResult?.error) {
        callback(actionResult);
      }
    },
    [callback, dispatch]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        runInner(payloadOfLoadCompletedAction);
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          runInner(payloadOfLoadCompletedAction);
        }
      };
    },
    [dispatchType, payloadOfLoadCompletedAction, runInner]
  );

  return useMemo<UserListStoreLoadCompletedActionDispatch>(
    () => ({
      run: (actionResult: UserListStoreLoadCompletedActionResult) => {
        const payloadOfLoadCompletedActionInner = createUserListStoreLoadCompletedActionPayload({
          ...payloadOfLoadCompletedAction,
          actionResult
        });

        runInner(payloadOfLoadCompletedActionInner);
      }
    }),
    [payloadOfLoadCompletedAction, runInner]
  );
}
