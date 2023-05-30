import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserItemStoreDeleteActionData,
  type UserItemStoreDeleteActionDispatch,
  type UserItemStoreDeleteActionPayload,
  type UserItemStoreDeleteActionResult,
  type UserItemStoreSliceName,
  createUserItemStoreDeleteActionData,
  createUserItemStoreDeleteActionPayload,
} from '../../../../../../features';
import { createUserItemStoreDeleteActionAsync } from '../../../UserItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfDeleteAction?: UserItemStoreDeleteActionResult;
}

export function useStoreDeleteActionDispatch (
  sliceName: UserItemStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfDeleteAction
  }: Options = {}
): UserItemStoreDeleteActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfUserItemStore = hooks.Features.User.Item.Store.useResource();
  const requestHandler = useRef(hooks.Domains.User.useItemDeleteOperationRequestHandler()).current;

  const dataOfDeleteAction = useMemo(
    () => createUserItemStoreDeleteActionData({
      resourceOfApiResponse,
      resourceOfUserItemStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfUserItemStore]
  );

  const payloadOfDeleteAction = useMemo(
    () => createUserItemStoreDeleteActionPayload({
      actionResult: resultOfDeleteAction,
      sliceName,
    }),
    [resultOfDeleteAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: UserItemStoreDeleteActionPayload,
      data: UserItemStoreDeleteActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createUserItemStoreDeleteActionAsync({ data, payload }));
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

      const dataOfDeleteActionInner: UserItemStoreDeleteActionData = {
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

  return useMemo<UserItemStoreDeleteActionDispatch>(
    () => ({
      run: async (actionResult: UserItemStoreDeleteActionResult, abortSignal?: AbortSignal) => {
        const dataOfDeleteActionInner = createUserItemStoreDeleteActionData({
          ...dataOfDeleteAction,
          abortSignal,
        });

        const payloadOfDeleteActionInner = createUserItemStoreDeleteActionPayload({
          ...payloadOfDeleteAction,
          actionResult
        });

        await runInner(payloadOfDeleteActionInner, dataOfDeleteActionInner);
      }
    }),
    [dataOfDeleteAction, payloadOfDeleteAction, runInner]
  );
}
