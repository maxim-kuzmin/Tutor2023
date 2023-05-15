import { createSlice } from '@reduxjs/toolkit';
import { createUserTypeEntity } from '../../../../../data';
import { createUserDomainEntity } from '../../../../../domains';
import {
  UserListStoreSliceName,
  type UserListStoreState,
} from '../../../../../features';

const initialState: UserListStoreState = {
  payloadOfSetAction: [
    createUserDomainEntity({
      data: createUserTypeEntity({
        id: '0',
        name: 'Tianna Jenkins',
      }),
    }),
    createUserDomainEntity({
      data: createUserTypeEntity({
        id: '1',
        name: 'Kevin Grant',
      }),
    }),
    createUserDomainEntity({
      data: createUserTypeEntity({
        id: '2',
        name: 'Madison Price',
      }),
    }),
  ]
};

const slice = createSlice({
  name: UserListStoreSliceName.Default,
  initialState,
  reducers: {},
});

export default slice.reducer;
