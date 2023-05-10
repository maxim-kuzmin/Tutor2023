import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createPostTypeEntity } from '../../../../data';
import {
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreState,
} from '../../../../features';

const initialState: PostListStoreState = {
  payloadOfSetAction: [
    createPostTypeEntity({ id: 1, title: 'Title 1', content: 'Content 1', }),
    createPostTypeEntity({ id: 2, title: 'Title 2', content: 'Content 2', }),
    createPostTypeEntity({ id: 3, title: 'Title 3', content: 'Content 3', }),
  ]
};

const slice = createSlice({
  name: 'PostList',
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

export const { actionOfPostListAddCompleted } = slice.actions;

export default slice.reducer;
