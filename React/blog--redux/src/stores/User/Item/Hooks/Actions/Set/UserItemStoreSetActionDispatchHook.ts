import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserItemStoreSetActionDispatch,
  type UserItemStoreSetActionPayload,
  type UserItemStoreSetActionResult,
  type UserItemStoreSliceName,
  createUserItemStoreSetActionPayload,
} from '../../../../../../features';
import { createUserItemStoreSetAction } from '../../../UserItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfSetAction?: UserItemStoreSetActionResult;
}

export function useStoreSetActionDispatch (
  sliceName: UserItemStoreSliceName,
  {
    dispatchType,
    resultOfSetAction
  }: Options = {}
): UserItemStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfSetAction = useMemo(
    () => createUserItemStoreSetActionPayload({ actionResult: resultOfSetAction, sliceName }),
    [resultOfSetAction, sliceName]
  );

  const runInner = useCallback(
    (payload: UserItemStoreSetActionPayload) => {
      dispatch(createUserItemStoreSetAction(payload));
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

  return useMemo<UserItemStoreSetActionDispatch>(
    () => ({
      run: (actionResult: UserItemStoreSetActionResult) => {
        const payloadOfSetActionInner = createUserItemStoreSetActionPayload({
          ...payloadOfSetAction,
          actionResult
        });

        runInner(payloadOfSetActionInner);
      }
    }),
    [payloadOfSetAction, runInner]
  );
}
