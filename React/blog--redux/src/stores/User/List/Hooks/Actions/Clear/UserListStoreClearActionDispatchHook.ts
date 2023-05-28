import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreClearActionDispatch,
  type UserListStoreClearActionOptions,
  createUserListStoreClearActionPayload,
  type UserListStoreSliceName,
} from '../../../../../../features';
import { createUserListStoreClearAction } from '../../../UserListStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    callback,
    dispatchType
  }: UserListStoreClearActionOptions = {}
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
