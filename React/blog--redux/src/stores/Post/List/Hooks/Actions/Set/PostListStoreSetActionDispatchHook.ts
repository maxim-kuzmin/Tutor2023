import { useCallback, useEffect, useMemo } from 'react';
import { useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostListStoreSetActionDispatch,
  type PostListStoreSetActionPayload,
  type PostListStoreSetActionResult,
  type PostListStoreSliceName,
  createPostListStoreSetActionPayload,
} from '../../../../../../features';
import { createPostListStoreSetAction } from '../../../PostListStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfSetAction?: PostListStoreSetActionResult;
}

export function useStoreSetActionDispatch (
  sliceName: PostListStoreSliceName,
  {
    dispatchType,
    resultOfSetAction
  }: Options = {}
): PostListStoreSetActionDispatch {
  const dispatch = useAppStoreDispatch();

  const payloadOfSetAction = useMemo(
    () => createPostListStoreSetActionPayload({ actionResult: resultOfSetAction, sliceName }),
    [resultOfSetAction, sliceName]
  );

  const runInner = useCallback(
    (payload: PostListStoreSetActionPayload) => {
      dispatch(createPostListStoreSetAction(payload));
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

  return useMemo<PostListStoreSetActionDispatch>(
    () => ({
      run: (actionResult: PostListStoreSetActionResult) => {
        const payloadOfSetActionInner = createPostListStoreSetActionPayload({
          ...payloadOfSetAction,
          actionResult
        });

        runInner(payloadOfSetActionInner);
      }
    }),
    [payloadOfSetAction, runInner]
  );
}
