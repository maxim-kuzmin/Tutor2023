import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AppStoreThunkApiConfig } from '../../../app';
import { OperationStatus, createStoreStateMap } from '../../../common';
import {
  type UserDomainListGetOperationResponse,
  createUserDomainListGetOperationRequest,
} from '../../../domains';
import {
  UserListStoreSliceName,
  type UserListStoreClearActionPayload,
  type UserListStoreLoadActionData,
  type UserListStoreLoadActionPayload,
  type UserListStoreLoadCompletedActionPayload,
  type UserListStoreSetActionPayload,
  type UserListStoreLoadActionResult,
  type UserListStoreStateMap,
  createUserListStoreState,
} from '../../../features';

const name = 'UserList';

const initialState: UserListStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createUserListStoreState(),
  sliceNames: [UserListStoreSliceName.Default],
});

const createAsyncAction = createAsyncThunk.withTypes<AppStoreThunkApiConfig>();

export function createUserListStoreLoadActionAsync ({
  abortSignal,
  requestHandler,
  resourceOfUserListStore,
  resourceOfApiResponse,
}: UserListStoreLoadActionData) {
  return createAsyncAction<
    UserDomainListGetOperationResponse | null,
    UserListStoreLoadActionResult
  >(
    `${name}/Load`,
    async (payload) => {
      return payload
        ? await requestHandler.handle(
            createUserDomainListGetOperationRequest(
              payload,
              {
                operationName: resourceOfUserListStore.getOperationNameForGet(),
                resourceOfApiResponse
              }
            ),
            abortSignal
          )
        : null;
    }
  );
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
      state.statusOfLoadAction = OperationStatus.Fulfilled;
      state.resultOfSetAction = actionResult?.error ? state.resultOfSetAction : actionResult
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
});

export const {
  createUserListStoreClearAction,
  createUserListStoreLoadAction,
  createUserListStoreLoadCompletedAction,
  createUserListStoreSetAction,
} = slice.actions;

export default slice.reducer;
