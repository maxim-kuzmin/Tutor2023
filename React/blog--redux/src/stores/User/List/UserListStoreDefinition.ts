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
  type UserListStoreLoadActionResult,
  type UserListStoreLoadCompletedActionPayload,
  type UserListStoreLoadCompletedActionResult,
  type UserListStoreSetActionPayload,
  type UserListStoreStateMap,
  createUserListStoreState,
  type UserListStoreSetActionCallback,
  type UserListStoreState,
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
    callback?: UserListStoreSetActionCallback;
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

function handleLoadAction (
  state: UserListStoreState,
  actionResult: UserListStoreLoadActionResult
) {
  state.resultOfLoadAction = actionResult;
  state.statusOfLoadAction = OperationStatus.Pending;
}

function handleLoadCompletedAction (
  state: UserListStoreState,
  actionResult: UserListStoreLoadCompletedActionResult
) {
  state.resultOfLoadCompletedAction = actionResult;

  if (actionResult?.error) {
    state.statusOfLoadAction = OperationStatus.Rejected;
  } else {
    state.statusOfLoadAction = OperationStatus.Fulfilled;
    state.resultOfSetAction = actionResult;
  }
}

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
    createUserListStoreLoadCompletedAction: (
      stateMap: UserListStoreStateMap,
      action: PayloadAction<UserListStoreLoadCompletedActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      handleLoadCompletedAction(stateMap[sliceName], actionResult);
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

      handleLoadAction(stateMap[sliceName], actionResult);
    });

    builder.addCase(createUserListStoreLoadActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { callback, data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      handleLoadCompletedAction(stateMap[sliceName], payload);

      if (callback) {
        callback(payload);
      }
    });

    builder.addCase(createUserListStoreLoadActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      handleLoadCompletedAction(stateMap[sliceName], createUserDomainListGetOperationResponse(payload));
    });
  },
});

export const {
  createUserListStoreClearAction,
  createUserListStoreLoadCompletedAction,
  createUserListStoreSetAction,
} = slice.actions;

export default slice.reducer;
