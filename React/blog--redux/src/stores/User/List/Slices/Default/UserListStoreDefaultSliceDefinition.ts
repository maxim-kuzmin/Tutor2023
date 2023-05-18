import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AppStoreThunkApiConfig } from '../../../../../app/';
import { OperationStatus } from '../../../../../common';
import {
  type UserDomainListGetOperationOutput,
  type UserDomainListGetOperationResponse,
  createUserDomainListGetOperationResponse,
} from '../../../../../domains';
import {
  UserListStoreSliceName,
  type UserListStoreState,
  createUserListStoreState,
} from '../../../../../features';

const name = UserListStoreSliceName.Default;

const initialState: UserListStoreState = createUserListStoreState();

const createAsyncAction = createAsyncThunk.withTypes<AppStoreThunkApiConfig>();

export const actionOfUserListLoad = createAsyncAction<UserDomainListGetOperationResponse>(
  `${name}/actionOfUserListLoad`,
  async (_, { extra: { modules } }) => {
    const clientOfApi = modules.Data.Api.getClient();

    const response = await clientOfApi.get<UserDomainListGetOperationOutput>({ endpoint: '/fakeApi/users' });

    return createUserDomainListGetOperationResponse(response);
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(actionOfUserListLoad.fulfilled, (state, action) => {
      state.payloadOfSetAction = action.payload;
      state.statusOfLoadAction = OperationStatus.Fulfilled;
    });

    builder.addCase(actionOfUserListLoad.rejected, (state, action) => {
      state.payloadOfSetAction = createUserDomainListGetOperationResponse(action.payload);
      state.statusOfLoadAction = OperationStatus.Rejected;
    });
  },
});

export default slice.reducer;
