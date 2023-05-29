import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreClearActionCallback,
  type UserListStoreClearActionDispatch,
  type UserListStoreSliceName,
  createUserListStoreClearActionPayload,
} from '../../../../../../features';
import { createUserListStoreClearAction } from '../../../UserListStoreDefinition';

interface Options extends StoreActionOptions {
  readonly callback?: UserListStoreClearActionCallback;
}

export function useStoreClearActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    callback,
    dispatchType
  }: Options = {}
): UserListStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createUserListStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createUserListStoreClearAction(payloadOfClearAction));

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

  return useMemo<UserListStoreClearActionDispatch>(
    () => ({ run: runInner }),
    [runInner]
  );
}
