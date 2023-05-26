import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OperationStatus, createStoreStateMap } from '../../../common';
import {
  UserListStoreSliceName,
  type UserListStoreClearActionPayload,
  type UserListStoreLoadActionPayload,
  type UserListStoreLoadCompletedActionPayload,
  type UserListStoreSetActionPayload,
  type UserListStoreStateMap,
  createUserListStoreState,
} from '../../../features';

const name = 'UserList';

const initialState: UserListStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createUserListStoreState(),
  sliceNames: [UserListStoreSliceName.Default],
});

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
