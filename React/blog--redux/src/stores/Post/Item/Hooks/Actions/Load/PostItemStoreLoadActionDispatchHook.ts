import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostItemStoreLoadActionData,
  type PostItemStoreLoadActionDispatch,
  type PostItemStoreLoadActionPayload,
  type PostItemStoreLoadActionResult,
  type PostItemStoreSliceName,
  createPostItemStoreLoadActionData,
  createPostItemStoreLoadActionPayload,
} from '../../../../../../features';
import { createPostItemStoreLoadActionAsync } from '../../../PostItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfLoadAction?: PostItemStoreLoadActionResult;
}

export function useStoreLoadActionDispatch (
  sliceName: PostItemStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfLoadAction
  }: Options = {}
): PostItemStoreLoadActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfPostItemStore = hooks.Features.Post.Item.Store.useResource();
  const requestHandler = useRef(hooks.Domains.Post.useItemGetOperationRequestHandler()).current;

  const dataOfLoadAction = useMemo(
    () => createPostItemStoreLoadActionData({
      resourceOfApiResponse,
      resourceOfPostItemStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfPostItemStore]
  );

  const payloadOfLoadAction = useMemo(
    () => createPostItemStoreLoadActionPayload({
      actionResult: resultOfLoadAction,
      sliceName,
    }),
    [resultOfLoadAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: PostItemStoreLoadActionPayload,
      data: PostItemStoreLoadActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createPostItemStoreLoadActionAsync({ data, payload }));
    },
    [dispatch]
  );

  const aborted = abortController?.signal.aborted;

  useEffect(
    () => {
      if (aborted) {
        return;
      }

      const abortControllerInner = new AbortController();

      const dataOfLoadActionInner: PostItemStoreLoadActionData = {
        ...dataOfLoadAction,
        abortSignal: abortControllerInner.signal,
      };

      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        runInner(payloadOfLoadAction, dataOfLoadActionInner);
      }

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          runInner(payloadOfLoadAction, dataOfLoadActionInner);
        } else {
          abortControllerInner.abort();
        }
      };
    },
    [aborted, dataOfLoadAction, dispatchType, payloadOfLoadAction, runInner]
  );

  return useMemo<PostItemStoreLoadActionDispatch>(
    () => ({
      run: async (actionResult: PostItemStoreLoadActionResult, abortSignal?: AbortSignal) => {
        const dataOfLoadActionInner = createPostItemStoreLoadActionData({
          ...dataOfLoadAction,
          abortSignal,
        });

        const payloadOfLoadActionInner = createPostItemStoreLoadActionPayload({
          ...payloadOfLoadAction,
          actionResult
        });

        await runInner(payloadOfLoadActionInner, dataOfLoadActionInner);
      }
    }),
    [dataOfLoadAction, payloadOfLoadAction, runInner]
  );
}
