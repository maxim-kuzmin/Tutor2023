import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostItemStoreSetActionDispatch,
  type PostItemStoreSetActionPayload,
  type PostItemStoreSetActionResult,
  type PostItemStoreSliceName,
  createPostItemStoreSetActionPayload,
} from '../../../../../../features';
import { createPostItemStoreSetAction } from '../../../PostItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfSetAction?: PostItemStoreSetActionResult;
}

export function useStoreSetActionDispatch (
  sliceName: PostItemStoreSliceName,
  {
    dispatchType,
    resultOfSetAction
  }: Options = {}
): PostItemStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfSetAction = useMemo(
    () => createPostItemStoreSetActionPayload({ actionResult: resultOfSetAction, sliceName }),
    [resultOfSetAction, sliceName]
  );

  const runInner = useCallback(
    (payload: PostItemStoreSetActionPayload) => {
      dispatch(createPostItemStoreSetAction(payload));
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

  return useMemo<PostItemStoreSetActionDispatch>(
    () => ({
      run: (actionResult: PostItemStoreSetActionResult) => {
        const payloadOfSetActionInner = createPostItemStoreSetActionPayload({
          ...payloadOfSetAction,
          actionResult
        });

        runInner(payloadOfSetActionInner);
      }
    }),
    [payloadOfSetAction, runInner]
  );
}
