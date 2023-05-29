import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreClearActionDispatch,
  type UserListStoreSliceName,
  createUserListStoreClearActionPayload,
} from '../../../../../../features';
import { createUserListStoreClearAction } from '../../../UserListStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    dispatchType
  }: StoreActionOptions = {}
): UserListStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createUserListStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createUserListStoreClearAction(payloadOfClearAction));
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

  return useMemo<UserListStoreClearActionDispatch>(
    () => ({ run: runInner }),
    [runInner]
  );
}
