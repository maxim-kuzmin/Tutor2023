import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostListStoreClearActionDispatch,
  type PostListStoreSliceName,
  createPostListStoreClearActionPayload,
} from '../../../../../../features';
import { createPostListStoreClearAction } from '../../../PostListStoreDefinition';

export function useStoreClearActionDispatch (
  sliceName: PostListStoreSliceName,
  {
    dispatchType
  }: StoreActionOptions = {}
): PostListStoreClearActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfClearAction = useMemo(
    () => createPostListStoreClearActionPayload({ sliceName }),
    [sliceName]
  );

  const runInner = useCallback(
    () => {
      dispatch(createPostListStoreClearAction(payloadOfClearAction));
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

  return useMemo<PostListStoreClearActionDispatch>(
    () => ({ run: runInner }),
    [runInner]
  );
}
