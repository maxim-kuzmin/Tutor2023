import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserItemStoreLoadActionData,
  type UserItemStoreLoadActionDispatch,
  type UserItemStoreLoadActionPayload,
  type UserItemStoreLoadActionResult,
  type UserItemStoreSliceName,
  createUserItemStoreLoadActionData,
  createUserItemStoreLoadActionPayload,
} from '../../../../../../features';
import { createUserItemStoreLoadActionAsync } from '../../../UserItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfLoadAction?: UserItemStoreLoadActionResult;
}

export function useStoreLoadActionDispatch (
  sliceName: UserItemStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfLoadAction
  }: Options = {}
): UserItemStoreLoadActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfUserItemStore = hooks.Features.User.Item.Store.useResource();
  const requestHandler = useRef(hooks.Domains.User.useItemGetOperationRequestHandler()).current;

  const dataOfLoadAction = useMemo(
    () => createUserItemStoreLoadActionData({
      resourceOfApiResponse,
      resourceOfUserItemStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfUserItemStore]
  );

  const payloadOfLoadAction = useMemo(
    () => createUserItemStoreLoadActionPayload({
      actionResult: resultOfLoadAction,
      sliceName,
    }),
    [resultOfLoadAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: UserItemStoreLoadActionPayload,
      data: UserItemStoreLoadActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createUserItemStoreLoadActionAsync({ data, payload }));
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

      const dataOfLoadActionInner: UserItemStoreLoadActionData = {
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

  return useMemo<UserItemStoreLoadActionDispatch>(
    () => ({
      run: async (actionResult: UserItemStoreLoadActionResult, abortSignal?: AbortSignal) => {
        const dataOfLoadActionInner = createUserItemStoreLoadActionData({
          ...dataOfLoadAction,
          abortSignal,
        });

        const payloadOfLoadActionInner = createUserItemStoreLoadActionPayload({
          ...payloadOfLoadAction,
          actionResult
        });

        await runInner(payloadOfLoadActionInner, dataOfLoadActionInner);
      }
    }),
    [dataOfLoadAction, payloadOfLoadAction, runInner]
  );
}
