import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AppStoreThunkApiConfig } from '../../../app';
import { OperationStatus, createStoreStateMap } from '../../../common';
import {
  createUserDomainListGetOperationRequest,
  createUserDomainListGetOperationResponse,
} from '../../../domains';
import {
  UserListStoreSliceName,
  type UserListStoreClearActionPayload,
  type UserListStoreLoadActionData,
  type UserListStoreLoadActionPayload,
  type UserListStoreLoadCompletedActionPayload,
  type UserListStoreLoadCompletedActionResult,
  type UserListStoreSetActionPayload,
  type UserListStoreStateMap,
  createUserListStoreState,
} from '../../../features';

const name = 'UserList';

const initialState: UserListStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createUserListStoreState(),
  sliceNames: [UserListStoreSliceName.Default],
});

const createAsyncAction = createAsyncThunk.withTypes<AppStoreThunkApiConfig>();

export const createUserListStoreLoadActionAsync = createAsyncAction<
  UserListStoreLoadCompletedActionResult,
  {
    data: UserListStoreLoadActionData;
    payload: UserListStoreLoadActionPayload;
  }
>(
  `${name}/Load`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfUserListStore,
    },
    payload: {
      actionResult,
    }
  }) => {
  return actionResult
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
  },
);

const slice = createSlice({
  name,
  initialState,
  reducers: {
    createUserListStoreClearAction: (
      stateMap: UserListStoreStateMap,
      action: PayloadAction<UserListStoreClearActionPayload>
    ) => {
      const { payload: { sliceName } } = action;

      const state = initialState[sliceName];

      stateMap[sliceName] = state;
    },
    createUserListStoreLoadAction: (
      stateMap: UserListStoreStateMap,
      action: PayloadAction<UserListStoreLoadActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      const state = stateMap[sliceName];

      state.resultOfLoadAction = actionResult;
      state.statusOfLoadAction = OperationStatus.Pending;
    },
    createUserListStoreLoadCompletedAction: (
      stateMap: UserListStoreStateMap,
      action: PayloadAction<UserListStoreLoadCompletedActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      const state = stateMap[sliceName];

      state.resultOfLoadCompletedAction = actionResult;

      if (!actionResult?.error) {
        state.resultOfSetAction = actionResult
      }

      state.statusOfLoadAction = OperationStatus.Fulfilled;
    },
    createUserListStoreSetAction: (
      stateMap: UserListStoreStateMap,
      action: PayloadAction<UserListStoreSetActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      const state = stateMap[sliceName];

      state.resultOfSetAction = actionResult;
    },
  },
  extraReducers (builder) {
    builder.addCase(createUserListStoreLoadActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.resultOfLoadCompletedAction = payload;
      state.resultOfLoadAction = actionResult;
      state.resultOfSetAction = payload;
      state.statusOfLoadAction = OperationStatus.Fulfilled;
    });

    builder.addCase(createUserListStoreLoadActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.resultOfLoadCompletedAction = createUserDomainListGetOperationResponse(payload);
      state.resultOfLoadAction = actionResult;
      state.statusOfLoadAction = OperationStatus.Rejected;
    });
  },
});

export const {
  createUserListStoreClearAction,
  createUserListStoreLoadAction,
  createUserListStoreLoadCompletedAction,
  createUserListStoreSetAction,
} = slice.actions;

export default slice.reducer;
