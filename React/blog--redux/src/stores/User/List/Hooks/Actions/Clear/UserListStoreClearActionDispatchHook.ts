import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreClearActionDispatch,
  type UserListStoreClearActionOptions,
  UserListStoreSliceName,
} from '../../../../../../features';
import { defaultUserListStoreClearAction } from '../../../UserListStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    callback,
    dispatchType
  }: UserListStoreClearActionOptions = {}
): UserListStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const run = useCallback(
    () => {
      switch (sliceName) {
        case UserListStoreSliceName.Default:
          dispatch(defaultUserListStoreClearAction());
          break;
      }

      if (callback) {
        callback();
      }
    },
    [callback, dispatch, sliceName]
  );

  useEffect(
    () => {
      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        run();
      };

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          run();
        }
      };
    },
    [dispatchType, run]
  );

  return useMemo<UserListStoreClearActionDispatch>(() => ({ run }), [run]);
}
