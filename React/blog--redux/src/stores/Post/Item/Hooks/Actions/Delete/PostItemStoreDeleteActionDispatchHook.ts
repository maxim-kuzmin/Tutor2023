import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostItemStoreDeleteActionData,
  type PostItemStoreDeleteActionDispatch,
  type PostItemStoreDeleteActionPayload,
  type PostItemStoreDeleteActionResult,
  type PostItemStoreSliceName,
  createPostItemStoreDeleteActionData,
  createPostItemStoreDeleteActionPayload,
} from '../../../../../../features';
import { createPostItemStoreDeleteActionAsync } from '../../../PostItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfDeleteAction?: PostItemStoreDeleteActionResult;
}

export function useStoreDeleteActionDispatch (
  sliceName: PostItemStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfDeleteAction
  }: Options = {}
): PostItemStoreDeleteActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfPostItemStore = hooks.Features.Post.Item.Store.useResource();
  const requestHandler = useRef(hooks.Domains.Post.useItemDeleteOperationRequestHandler()).current;

  const dataOfDeleteAction = useMemo(
    () => createPostItemStoreDeleteActionData({
      resourceOfApiResponse,
      resourceOfPostItemStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfPostItemStore]
  );

  const payloadOfDeleteAction = useMemo(
    () => createPostItemStoreDeleteActionPayload({
      actionResult: resultOfDeleteAction,
      sliceName,
    }),
    [resultOfDeleteAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: PostItemStoreDeleteActionPayload,
      data: PostItemStoreDeleteActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createPostItemStoreDeleteActionAsync({ data, payload }));
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

      const dataOfDeleteActionInner: PostItemStoreDeleteActionData = {
        ...dataOfDeleteAction,
        abortSignal: abortControllerInner.signal,
      };

      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        runInner(payloadOfDeleteAction, dataOfDeleteActionInner);
      }

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          runInner(payloadOfDeleteAction, dataOfDeleteActionInner);
        } else {
          abortControllerInner.abort();
        }
      };
    },
    [aborted, dataOfDeleteAction, dispatchType, payloadOfDeleteAction, runInner]
  );

  return useMemo<PostItemStoreDeleteActionDispatch>(
    () => ({
      run: async (actionResult: PostItemStoreDeleteActionResult, abortSignal?: AbortSignal) => {
        const dataOfDeleteActionInner = createPostItemStoreDeleteActionData({
          ...dataOfDeleteAction,
          abortSignal,
        });

        const payloadOfDeleteActionInner = createPostItemStoreDeleteActionPayload({
          ...payloadOfDeleteAction,
          actionResult
        });

        await runInner(payloadOfDeleteActionInner, dataOfDeleteActionInner);
      }
    }),
    [dataOfDeleteAction, payloadOfDeleteAction, runInner]
  );
}
