import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppInstance, useAppStoreDispatch } from '../../../../../../app';
import { StoreDispatchType } from '../../../../../../common';
import { createUserDomainListGetOperationRequest } from '../../../../../../domains';
import {
  type UserListStoreLoadActionDispatch,
  type UserListStoreLoadActionOptions,
  type UserListStoreLoadActionPayload,
  type UserListStoreLoadActionResult,
  type UserListStoreSliceName,
  createUserListStoreLoadActionPayload,
} from '../../../../../../features';

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

  const payloadOfLoadAction = useMemo(
    () => createUserListStoreLoadActionPayload({
      actionResult: resultOfLoadAction,
      resourceOfApiResponse,
      resourceOfUserListStore,
      requestHandler
    }),
    [resultOfLoadAction, requestHandler, resourceOfApiResponse, resourceOfUserListStore]
  );

  const { run: complete } = hooks.Features.User.List.Store.useStoreLoadCompletedActionDispatch(
    sliceName,
    { callback }
  );

  const run = useCallback(
    async (payload: UserListStoreLoadActionPayload) => {
      const {
        abortSignal,
        actionResult,
        requestHandler,
        resourceOfApiResponse,
        resourceOfUserListStore
      } = payload;

      if (abortSignal?.aborted) {
        return;
      }

      dispatch({ payload, sliceName, type: UserListStoreActionType.Load });

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
    [complete, dispatch, sliceName]
  );

  useEffect(
    () => {
      if (abortController?.signal.aborted) {
        return;
      }

      const abortControllerInner = new AbortController();

      const payloadOfLoadActionInner = createUserListStoreLoadActionPayload({
        ...payloadOfLoadAction,
        abortSignal: abortControllerInner.signal,
      });

      if (dispatchType === StoreDispatchType.MountOrUpdate) {
        run(payloadOfLoadActionInner);
      }

      return () => {
        if (dispatchType === StoreDispatchType.Unmount) {
          run(payloadOfLoadActionInner);
        } else {
          abortControllerInner.abort();
        }
      };
    },
    [abortController, dispatchType, payloadOfLoadAction, run]
  );

  return useMemo<UserListStoreLoadActionDispatch>(
    () => ({
      run: async (actionResult: UserListStoreLoadActionResult, abortSignal?: AbortSignal) => {
        const payloadOfLoadActionInner = createUserListStoreLoadActionPayload({
          ...payloadOfLoadAction,
          abortSignal,
          actionResult
        });

        await run(payloadOfLoadActionInner);
      }
    }),
    [payloadOfLoadAction, run]
  );
}
