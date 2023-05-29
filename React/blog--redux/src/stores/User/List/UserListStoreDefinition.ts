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
  const result = actionResult
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

    return result;
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
    builder.addCase(createUserListStoreLoadActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Pending;
      state.resultOfLoadAction = actionResult;
    });

    builder.addCase(createUserListStoreLoadActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Fulfilled;
      state.resultOfLoadCompletedAction = state.resultOfSetAction = payload;
    });

    builder.addCase(createUserListStoreLoadActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Rejected;
      state.resultOfLoadCompletedAction = createUserDomainListGetOperationResponse(payload);
    });
  },
});

export const {
  createUserListStoreClearAction,
  createUserListStoreSetAction,
} = slice.actions;

export default slice.reducer;
