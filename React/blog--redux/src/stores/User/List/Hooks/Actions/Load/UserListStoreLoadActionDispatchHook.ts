import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { type StoreActionOptions, StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreLoadActionData,
  type UserListStoreLoadActionDispatch,
  type UserListStoreLoadActionPayload,
  type UserListStoreLoadActionResult,
  type UserListStoreSliceName,
  createUserListStoreLoadActionData,
  createUserListStoreLoadActionPayload,
} from '../../../../../../features';
import { createUserListStoreLoadActionAsync } from '../../../UserListStoreDefinition';

interface Options extends StoreActionOptions {
  readonly resultOfLoadAction?: UserListStoreLoadActionResult;
}

export function useStoreLoadActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    dispatchType,
    abortController,
    resultOfLoadAction
  }: Options = {}
): UserListStoreLoadActionDispatch {
  const dispatch = useAppStoreDispatch();

  const { hooks } = useAppInstance();

  const resourceOfApiResponse = hooks.Data.Api.Response.useResource();
  const resourceOfUserListStore = hooks.Features.User.List.Store.useResource();
  const requestHandler = useRef(hooks.Domains.User.useListGetOperationRequestHandler()).current;

  const dataOfLoadAction = useMemo(
    () => createUserListStoreLoadActionData({
      resourceOfApiResponse,
      resourceOfUserListStore,
      requestHandler,
    }),
    [requestHandler, resourceOfApiResponse, resourceOfUserListStore]
  );

  const payloadOfLoadAction = useMemo(
    () => createUserListStoreLoadActionPayload({
      actionResult: resultOfLoadAction,
      sliceName,
    }),
    [resultOfLoadAction, sliceName]
  );

  const runInner = useCallback(
    async (
      payload: UserListStoreLoadActionPayload,
      data: UserListStoreLoadActionData
    ) => {
      const { abortSignal } = data;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createUserListStoreLoadActionAsync({ data, payload }));
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

      const dataOfLoadActionInner: UserListStoreLoadActionData = {
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

  return useMemo<UserListStoreLoadActionDispatch>(
    () => ({
      run: async (actionResult: UserListStoreLoadActionResult, abortSignal?: AbortSignal) => {
        const dataOfLoadActionInner = createUserListStoreLoadActionData({
          ...dataOfLoadAction,
          abortSignal,
        });

        const payloadOfLoadActionInner = createUserListStoreLoadActionPayload({
          ...payloadOfLoadAction,
          actionResult
        });

        await runInner(payloadOfLoadActionInner, dataOfLoadActionInner);
      }
    }),
    [dataOfLoadAction, payloadOfLoadAction, runInner]
  );
}
