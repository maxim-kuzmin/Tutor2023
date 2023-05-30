import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostListStoreLoadActionData,
  type PostListStoreLoadActionDispatch,
  type PostListStoreLoadActionPayload,
  type PostListStoreLoadActionResult,
  type PostListStoreSliceName,
  createPostListStoreLoadActionData,
  createPostListStoreLoadActionPayload,
} from '../../../../../../features';
import { createPostListStoreLoadActionAsync } from '../../../PostListStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfLoadAction?: PostListStoreLoadActionResult;
}

export function useStoreLoadActionDispatch (
  sliceName: PostListStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfLoadAction
  }: Options = {}
): PostListStoreLoadActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfPostListStore = hooks.Features.Post.List.Store.useResource();
  const requestHandler = useRef(hooks.Domains.Post.useListGetOperationRequestHandler()).current;

  const dataOfLoadAction = useMemo(
    () => createPostListStoreLoadActionData({
      resourceOfApiResponse,
      resourceOfPostListStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfPostListStore]
  );

  const payloadOfLoadAction = useMemo(
    () => createPostListStoreLoadActionPayload({
      actionResult: resultOfLoadAction,
      sliceName,
    }),
    [resultOfLoadAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: PostListStoreLoadActionPayload,
      data: PostListStoreLoadActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createPostListStoreLoadActionAsync({ data, payload }));
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

      const dataOfLoadActionInner: PostListStoreLoadActionData = {
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

  return useMemo<PostListStoreLoadActionDispatch>(
    () => ({
      run: async (actionResult: PostListStoreLoadActionResult, abortSignal?: AbortSignal) => {
        const dataOfLoadActionInner = createPostListStoreLoadActionData({
          ...dataOfLoadAction,
          abortSignal,
        });

        const payloadOfLoadActionInner = createPostListStoreLoadActionPayload({
          ...payloadOfLoadAction,
          actionResult
        });

        await runInner(payloadOfLoadActionInner, dataOfLoadActionInner);
      }
    }),
    [dataOfLoadAction, payloadOfLoadAction, runInner]
  );
}
