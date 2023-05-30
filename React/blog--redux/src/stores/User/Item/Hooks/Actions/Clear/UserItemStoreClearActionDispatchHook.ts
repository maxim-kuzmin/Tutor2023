import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserItemStoreClearActionDispatch,
  type UserItemStoreSliceName,
  createUserItemStoreClearActionPayload,
} from '../../../../../../features';
import { createUserItemStoreClearAction } from '../../../UserItemStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: UserItemStoreSliceName,
  {
    dispatchType
  }: StoreActionOptions = {}
): UserItemStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createUserItemStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createUserItemStoreClearAction(payloadOfClearAction));
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

  return useMemo<UserItemStoreClearActionDispatch>(
    () => ({ run: runInner }),
    [runInner]
  );
}
