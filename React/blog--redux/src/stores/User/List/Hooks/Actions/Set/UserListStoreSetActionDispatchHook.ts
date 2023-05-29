import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreSetActionDispatch,
  type UserListStoreSetActionPayload,
  type UserListStoreSetActionResult,
  type UserListStoreSliceName,
  createUserListStoreSetActionPayload,
} from '../../../../../../features';
import { createUserListStoreSetAction } from '../../../UserListStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfSetAction?: UserListStoreSetActionResult;
}

export function useStoreSetActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    dispatchType,
    resultOfSetAction
  }: Options = {}
): UserListStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfSetAction = useMemo(
    () => createUserListStoreSetActionPayload({ actionResult: resultOfSetAction, sliceName }),
    [resultOfSetAction, sliceName]
  );

  const runInner = useCallback(
    (payload: UserListStoreSetActionPayload) => {
      dispatch(createUserListStoreSetAction(payload));
    },
    [dispatch]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        runInner(payloadOfSetAction);
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          runInner(payloadOfSetAction);
        }
      };
    },
    [dispatchType, payloadOfSetAction, runInner]
  );

  return useMemo<UserListStoreSetActionDispatch>(
    () => ({
      run: (actionResult: UserListStoreSetActionResult) => {
        const payloadOfSetActionInner = createUserListStoreSetActionPayload({
          ...payloadOfSetAction,
          actionResult
        });

        runInner(payloadOfSetActionInner);
      }
    }),
    [payloadOfSetAction, runInner]
  );
}
