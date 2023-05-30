import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostItemStoreClearActionDispatch,
  type PostItemStoreSliceName,
  createPostItemStoreClearActionPayload,
} from '../../../../../../features';
import { createPostItemStoreClearAction } from '../../../PostItemStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: PostItemStoreSliceName,
  {
    dispatchType
  }: StoreActionOptions = {}
): PostItemStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createPostItemStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createPostItemStoreClearAction(payloadOfClearAction));
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

  return useMemo<PostItemStoreClearActionDispatch>(
    () => ({ run: runInner }),
    [runInner]
  );
}
