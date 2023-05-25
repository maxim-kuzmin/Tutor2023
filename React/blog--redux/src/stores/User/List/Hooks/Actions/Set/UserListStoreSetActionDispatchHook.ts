import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreSetActionDispatch,
  type UserListStoreSetActionOptions,
  type UserListStoreSetActionPayload,
  type UserListStoreSetActionResult,
  createUserListStoreSetActionPayload,
  UserListStoreSliceName,
} from '../../../../../../features';
import { defaultUserListStoreSetAction } from '../../../UserListStoreDefinition';

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
    () => createUserListStoreSetActionPayload({ actionResult: resultOfSetAction }),
    [resultOfSetAction]
  );

  const run = useCallback(
    (payload: UserListStoreSetActionPayload) => {
      switch (sliceName) {
        case UserListStoreSliceName.Default:
          dispatch(defaultUserListStoreSetAction(payload));
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
