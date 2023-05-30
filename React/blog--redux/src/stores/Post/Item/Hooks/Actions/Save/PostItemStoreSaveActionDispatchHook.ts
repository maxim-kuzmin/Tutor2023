import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type PostItemStoreSaveActionData,
  type PostItemStoreSaveActionDispatch,
  type PostItemStoreSaveActionPayload,
  type PostItemStoreSaveActionResult,
  type PostItemStoreSliceName,
  createPostItemStoreSaveActionData,
  createPostItemStoreSaveActionPayload,
} from '../../../../../../features';
import { createPostItemStoreSaveActionAsync } from '../../../PostItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfSaveAction?: PostItemStoreSaveActionResult;
}

export function useStoreSaveActionDispatch (
  sliceName: PostItemStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfSaveAction
  }: Options = {}
): PostItemStoreSaveActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfPostItemStore = hooks.Features.Post.Item.Store.useResource();
  const requestHandler = useRef(hooks.Domains.Post.useItemSaveOperationRequestHandler()).current;

  const dataOfSaveAction = useMemo(
    () => createPostItemStoreSaveActionData({
      resourceOfApiResponse,
      resourceOfPostItemStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfPostItemStore]
  );

  const payloadOfSaveAction = useMemo(
    () => createPostItemStoreSaveActionPayload({
      actionResult: resultOfSaveAction,
      sliceName,
    }),
    [resultOfSaveAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: PostItemStoreSaveActionPayload,
      data: PostItemStoreSaveActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createPostItemStoreSaveActionAsync({ data, payload }));
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

      const dataOfSaveActionInner: PostItemStoreSaveActionData = {
        ...dataOfSaveAction,
        abortSignal: abortControllerInner.signal,
      };

      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        runInner(payloadOfSaveAction, dataOfSaveActionInner);
      }

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          runInner(payloadOfSaveAction, dataOfSaveActionInner);
        } else {
          abortControllerInner.abort();
        }
      };
    },
    [aborted, dataOfSaveAction, dispatchType, payloadOfSaveAction, runInner]
  );

  return useMemo<PostItemStoreSaveActionDispatch>(
    () => ({
      run: async (actionResult: PostItemStoreSaveActionResult, abortSignal?: AbortSignal) => {
        const dataOfSaveActionInner = createPostItemStoreSaveActionData({
          ...dataOfSaveAction,
          abortSignal,
        });

        const payloadOfSaveActionInner = createPostItemStoreSaveActionPayload({
          ...payloadOfSaveAction,
          actionResult
        });

        await runInner(payloadOfSaveActionInner, dataOfSaveActionInner);
      }
    }),
    [dataOfSaveAction, payloadOfSaveAction, runInner]
  );
}
