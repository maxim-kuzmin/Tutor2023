import { type PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns'
import { createPostTypeEntity } from '../../../../../data';
import { createPostDomainEntity } from '../../../../../domains';
import {
  PostListStoreSliceName,
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreAddReactionCompletedActionPayload,
  type PostListStoreUpdateCompletedActionPayload,
  type PostListStoreState,
} from '../../../../../features';

const initialState: PostListStoreState = {
  payloadOfSetAction: [
    createPostDomainEntity({
      data: createPostTypeEntity({
        id: '1',
        title: 'First Post!',
        content: 'Hello!',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        userId: '0',
      }),
    }),
    createPostDomainEntity({
      data: createPostTypeEntity({
        id: '2',
        title: 'Second Post',
        content: 'More text',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        userId: '2',
      }),
    }),
  ]
};

const slice = createSlice({
  name: PostListStoreSliceName.Default,
  initialState,
  reducers: {
    actionOfPostListAddCompleted: {
      reducer (
        state: PostListStoreState,
        action: PayloadAction<PostListStoreAddCompletedActionPayload>
      ) {
        if (!state.payloadOfSetAction) {
          state.payloadOfSetAction = [];
        }

        state.payloadOfSetAction.push(action.payload)
      },
      prepare (payload: PostListStoreAddCompletedActionPayload) {
        const { data } = payload;

        if (!data.id) {
          data.id = nanoid();
        }

        if (!data.date) {
          data.date = new Date().toISOString();
        }

        return {
          payload
        };
      },
    },
    actionOfPostListAddReactionCompleted (
      state: PostListStoreState,
      action: PayloadAction<PostListStoreAddReactionCompletedActionPayload>
    ) {
      const { postId, reaction } = action.payload;

      const entity = state.payloadOfSetAction?.find((item) => item.data.id === postId);

      if (entity) {
        entity.reactions[reaction]++;
      }
    },
    actionOfPostListUpdateCompleted (
      state: PostListStoreState,
      action: PayloadAction<PostListStoreUpdateCompletedActionPayload>
    ) {
      const { id, title, content } = action.payload.data;

      const entity = state.payloadOfSetAction?.find((item) => item.data.id === id);

      if (entity) {
        const { data } = entity;

        data.title = title
        data.content = content
      }
    },
  },
});

export const {
  actionOfPostListAddCompleted,
  actionOfPostListAddReactionCompleted,
  actionOfPostListUpdateCompleted,
} = slice.actions;

export default slice.reducer;
