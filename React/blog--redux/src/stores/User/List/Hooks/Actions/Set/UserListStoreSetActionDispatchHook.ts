import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreSetActionDispatch,
  type UserListStoreSetActionOptions,
  type UserListStoreSetActionPayload,
  type UserListStoreSetActionResult,
  type UserListStoreSliceName,
  createUserListStoreSetActionPayload,
} from '../../../../../../features';
import { createUserListStoreSetAction } from '../../../UserListStoreDefinition';

export function useStoreSetActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    callback,
    dispatchType,
    resultOfSetAction
  }: UserListStoreSetActionOptions = {}
): UserListStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfSetAction = useMemo(
    () => createUserListStoreSetActionPayload({ actionResult: resultOfSetAction, sliceName }),
    [resultOfSetAction, sliceName]
  );

  const run = useCallback(
    (payload: UserListStoreSetActionPayload) => {
      dispatch(createUserListStoreSetAction(payload));

      if (callback) {
        callback(payload.actionResult);
      }
    },
    [callback, dispatch]
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

  return useMemo<UserListStoreSetActionDispatch>(
    () => ({
      run: (actionResult: UserListStoreSetActionResult) => {
        const payloadOfSetActionInner = createUserListStoreSetActionPayload({
          ...payloadOfSetAction,
          actionResult
        });

        run(payloadOfSetActionInner);
      }
    }),
    [payloadOfSetAction, run]
  );
}
