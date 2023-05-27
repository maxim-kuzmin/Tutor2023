import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import { createUserDomainListGetOperationRequest } from '../../../../../../domains';
import {
  type UserListStoreLoadActionData,
  type UserListStoreLoadActionDispatch,
  type UserListStoreLoadActionOptions,
  type UserListStoreLoadActionPayload,
  type UserListStoreLoadActionResult,
  type UserListStoreSliceName,
  createUserListStoreLoadActionData,
  createUserListStoreLoadActionPayload,
} from '../../../../../../features';
import { createUserListStoreLoadAction } from '../../../UserListStoreDefinition';

export function useStoreLoadActionDispatch (
  sliceName: UserListStoreSliceName,
  {
    callback,
    dispatchType,
    abortController,
    resultOfLoadAction
  }: UserListStoreLoadActionOptions = {}
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

  const { run: complete } = hooks.Features.User.List.Store.useStoreLoadCompletedActionDispatch(
    sliceName,
    { callback }
  );

  const run = useCallback(
    async (
      payload: UserListStoreLoadActionPayload,
      dataOfLoadAction: UserListStoreLoadActionData
    ) => {
      const {
        abortSignal,
        requestHandler,
        resourceOfApiResponse,
        resourceOfUserListStore
      } = dataOfLoadAction;

      const { actionResult } = payload;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch(createUserListStoreLoadAction(payload));

      const response = actionResult
        ? await requestHandler.handle(
            createUserDomainListGetOperationRequest(
              actionResult,
              {
                operationName: resourceOfUserListStore.getOperationNameForGet(),
                resourceOfApiResponse
              }
            ),
            abortSignal
          )
        : null;

      if (abortSignal?.aborted) {
        return;
      }

      complete(response);
    },
    [complete, dispatch]
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
        run(payloadOfLoadAction, dataOfLoadActionInner);
      }

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          run(payloadOfLoadAction, dataOfLoadActionInner);
        } else {
          abortControllerInner.abort();
        }
      };
    },
    [aborted, dataOfLoadAction, dispatchType, payloadOfLoadAction, run]
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

        await run(payloadOfLoadActionInner, dataOfLoadActionInner);
      }
    }),
    [dataOfLoadAction, payloadOfLoadAction, run]
  );
}
