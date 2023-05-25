import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createStoreStateMap } from '../../../common';
import {
  UserListStoreSliceName,
  type UserListStoreSetActionPayload,
  type UserListStoreStateMap,
  createUserListStoreState,
} from '../../../features';

const name = 'UserList';

const initialState: UserListStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createUserListStoreState(),
  sliceNames: [UserListStoreSliceName.Default],
});

function createClearActionReducer (sliceName: UserListStoreSliceName) {
  return (stateMap: UserListStoreStateMap) => {
    const state = initialState[sliceName];

    stateMap[sliceName] = state;
  };
}

function createSetActionReducer (sliceName: UserListStoreSliceName) {
  return (
    stateMap: UserListStoreStateMap,
    action: PayloadAction<UserListStoreSetActionPayload>
  ) => {
    const state = stateMap[sliceName];

    state.resultOfSetAction = action.payload.actionResult;
  };
}

const slice = createSlice({
  name,
  initialState,
  reducers: {
    defaultUserListStoreClearAction: createClearActionReducer(UserListStoreSliceName.Default),
    defaultUserListStoreSetAction: createSetActionReducer(UserListStoreSliceName.Default),
  },
});

export const {
  defaultUserListStoreClearAction,
  defaultUserListStoreSetAction,
} = slice.actions;

export default slice.reducer;
