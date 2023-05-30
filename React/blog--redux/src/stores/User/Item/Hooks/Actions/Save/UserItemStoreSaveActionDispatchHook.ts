import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserItemStoreSaveActionData,
  type UserItemStoreSaveActionDispatch,
  type UserItemStoreSaveActionPayload,
  type UserItemStoreSaveActionResult,
  type UserItemStoreSliceName,
  createUserItemStoreSaveActionData,
  createUserItemStoreSaveActionPayload,
} from '../../../../../../features';
import { createUserItemStoreSaveActionAsync } from '../../../UserItemStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfSaveAction?: UserItemStoreSaveActionResult;
}

export function useStoreSaveActionDispatch (
  sliceName: UserItemStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfSaveAction
  }: Options = {}
): UserItemStoreSaveActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfUserItemStore = hooks.Features.User.Item.Store.useResource();
  const requestHandler = useRef(hooks.Domains.User.useItemSaveOperationRequestHandler()).current;

  const dataOfSaveAction = useMemo(
    () => createUserItemStoreSaveActionData({
      resourceOfApiResponse,
      resourceOfUserItemStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfUserItemStore]
  );

  const payloadOfSaveAction = useMemo(
    () => createUserItemStoreSaveActionPayload({
      actionResult: resultOfSaveAction,
      sliceName,
    }),
    [resultOfSaveAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: UserItemStoreSaveActionPayload,
      data: UserItemStoreSaveActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createUserItemStoreSaveActionAsync({ data, payload }));
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

      const dataOfSaveActionInner: UserItemStoreSaveActionData = {
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

  return useMemo<UserItemStoreSaveActionDispatch>(
    () => ({
      run: async (actionResult: UserItemStoreSaveActionResult, abortSignal?: AbortSignal) => {
        const dataOfSaveActionInner = createUserItemStoreSaveActionData({
          ...dataOfSaveAction,
          abortSignal,
        });

        const payloadOfSaveActionInner = createUserItemStoreSaveActionPayload({
          ...payloadOfSaveAction,
          actionResult
        });

        await runInner(payloadOfSaveActionInner, dataOfSaveActionInner);
      }
    }),
    [dataOfSaveAction, payloadOfSaveAction, runInner]
  );
}
