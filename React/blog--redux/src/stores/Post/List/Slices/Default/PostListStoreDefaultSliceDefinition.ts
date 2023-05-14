import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createPostTypeEntity } from '../../../../../data';
import {
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreState,
} from '../../../../../features';

const initialState: PostListStoreState = {
  payloadOfSetAction: [
    createPostTypeEntity({ id: '1', title: 'Title 1', content: 'Content 1', }),
    createPostTypeEntity({ id: '2', title: 'Title 2', content: 'Content 2', }),
    createPostTypeEntity({ id: '3', title: 'Title 3', content: 'Content 3', }),
  ]
};

const sliceName = createSlice({
  name: 'PostList/Default',
  initialState,
  reducers: {
    actionOfPostListAddCompleted (
      state: PostListStoreState,
      action: PayloadAction<PostListStoreAddCompletedActionPayload>
    ) {
      if (!state.payloadOfSetAction) {
        state.payloadOfSetAction = [];
      }

      state.payloadOfSetAction.push(action.payload)
    }
  }
});

export const { actionOfPostListAddCompleted } = sliceName.actions;

export default sliceName.reducer;
