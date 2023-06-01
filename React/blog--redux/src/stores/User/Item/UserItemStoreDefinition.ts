import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AppStoreThunkApiConfig } from '../../../app';
import { OperationStatus, createStoreStateMap } from '../../../common';
import {
  createUserDomainItemDeleteOperationRequest,
  createUserDomainItemGetOperationRequest,
  createUserDomainItemGetOperationResponse,
  createUserDomainItemSaveOperationRequest,
} from '../../../domains';
import {
  UserItemStoreSliceName,
  type UserItemStoreClearActionPayload,
  type UserItemStoreDeleteActionData,
  type UserItemStoreDeleteActionPayload,
  type UserItemStoreDeleteCompletedActionResult,
  type UserItemStoreLoadActionData,
  type UserItemStoreLoadActionPayload,
  type UserItemStoreLoadCompletedActionResult,
  type UserItemStoreSaveActionData,
  type UserItemStoreSaveActionPayload,
  type UserItemStoreSaveCompletedActionResult,
  type UserItemStoreSetActionPayload,
  type UserItemStoreStateMap,
  createUserItemStoreState,
} from '../../../features';

const name = 'UserItem';

const initialState: UserItemStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createUserItemStoreState(),
  sliceNames: [UserItemStoreSliceName.Default],
});

const createAsyncAction = createAsyncThunk.withTypes<AppStoreThunkApiConfig>();

export const createUserItemStoreDeleteActionAsync = createAsyncAction<
  UserItemStoreDeleteCompletedActionResult,
  {
    data: UserItemStoreDeleteActionData;
    payload: UserItemStoreDeleteActionPayload;
  }
>(
  `${name}/Delete`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfUserItemStore,
    },
    payload: {
      actionResult,
    }
  }) => {
    return actionResult
      ? await requestHandler.handle(
          createUserDomainItemDeleteOperationRequest(
            actionResult,
            {
              operationName: resourceOfUserItemStore.getOperationNameForDelete(),
              resourceOfApiResponse
            }
          ),
          abortSignal
        )
      : null;
  },
);

export const createUserItemStoreLoadActionAsync = createAsyncAction<
  UserItemStoreLoadCompletedActionResult,
  {
    data: UserItemStoreLoadActionData;
    payload: UserItemStoreLoadActionPayload;
  }
>(
  `${name}/Load`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfUserItemStore,
    },
    payload: {
      actionResult,
    }
  }) => {
    return actionResult
      ? await requestHandler.handle(
          createUserDomainItemGetOperationRequest(
            actionResult,
            {
              operationName: resourceOfUserItemStore.getOperationNameForGet(),
              resourceOfApiResponse
            }
          ),
          abortSignal
        )
      : null;
  },
);

export const createUserItemStoreSaveActionAsync = createAsyncAction<
  UserItemStoreSaveCompletedActionResult,
  {
    data: UserItemStoreSaveActionData;
    payload: UserItemStoreSaveActionPayload;
  }
>(
  `${name}/Save`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfUserItemStore,
    },
    payload: {
      actionResult,
    }
  }) => {
    return actionResult
      ? await requestHandler.handle(
          createUserDomainItemSaveOperationRequest(
            actionResult,
            {
              operationName: resourceOfUserItemStore.getOperationNameForSave(),
              resourceOfApiResponse
            }
          ),
          abortSignal
        )
      : null;
  },
);

const slice = createSlice({
  name,
  initialState,
  reducers: {
    createUserItemStoreClearAction: (
      stateMap: UserItemStoreStateMap,
      action: PayloadAction<UserItemStoreClearActionPayload>
    ) => {
      const { payload: { sliceName } } = action;

      const state = initialState[sliceName];

      stateMap[sliceName] = state;
    },
    createUserItemStoreSetAction: (
      stateMap: UserItemStoreStateMap,
      action: PayloadAction<UserItemStoreSetActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      const state = stateMap[sliceName];

      state.resultOfSetAction = actionResult;
    },
  },
  extraReducers (builder) {
    //
    // Delete
    //
    builder.addCase(createUserItemStoreDeleteActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfDeleteAction = OperationStatus.Pending;
      state.resultOfDeleteAction = actionResult;
    });

    builder.addCase(createUserItemStoreDeleteActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfDeleteAction = OperationStatus.Fulfilled;
      state.resultOfDeleteCompletedAction = payload;
      state.resultOfSetAction = null;
    });

    builder.addCase(createUserItemStoreDeleteActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfDeleteAction = OperationStatus.Rejected;
      state.resultOfDeleteCompletedAction = payload ?? null;
    });
    //
    // Load
    //
    builder.addCase(createUserItemStoreLoadActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Pending;
      state.resultOfLoadAction = actionResult;
    });

    builder.addCase(createUserItemStoreLoadActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Fulfilled;
      state.resultOfLoadCompletedAction = payload;
      state.resultOfSetAction = payload;
    });

    builder.addCase(createUserItemStoreLoadActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Rejected;
      state.resultOfLoadCompletedAction = createUserDomainItemGetOperationResponse(payload);
    });
    //
    // Save
    //
    builder.addCase(createUserItemStoreSaveActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfSaveAction = OperationStatus.Pending;
      state.resultOfSaveAction = actionResult;
    });

    builder.addCase(createUserItemStoreSaveActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfSaveAction = OperationStatus.Fulfilled;
      state.resultOfSaveCompletedAction = payload;
      state.resultOfSetAction = payload;
    });

    builder.addCase(createUserItemStoreSaveActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfSaveAction = OperationStatus.Rejected;
      state.resultOfSaveCompletedAction = createUserDomainItemGetOperationResponse(payload);
    });
  },
});

export const {
  createUserItemStoreClearAction,
  createUserItemStoreSetAction,
} = slice.actions;

export default slice.reducer;
