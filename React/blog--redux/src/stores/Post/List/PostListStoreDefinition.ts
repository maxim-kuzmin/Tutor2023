import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AppStoreThunkApiConfig } from '../../../app';
import { OperationStatus, createStoreStateMap } from '../../../common';
import {
  createPostDomainListGetOperationRequest,
  createPostDomainListGetOperationResponse,
} from '../../../domains';
import {
  PostListStoreSliceName,
  type PostListStoreClearActionPayload,
  type PostListStoreLoadActionData,
  type PostListStoreLoadActionPayload,
  type PostListStoreLoadCompletedActionResult,
  type PostListStoreSetActionPayload,
  type PostListStoreStateMap,
  createPostListStoreState,
} from '../../../features';

const name = 'PostList';

const initialState: PostListStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createPostListStoreState(),
  sliceNames: [PostListStoreSliceName.Default],
});

const createAsyncAction = createAsyncThunk.withTypes<AppStoreThunkApiConfig>();

export const createPostListStoreLoadActionAsync = createAsyncAction<
  PostListStoreLoadCompletedActionResult,
  {
    data: PostListStoreLoadActionData;
    payload: PostListStoreLoadActionPayload;
  }
>(
  `${name}/Load`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfPostListStore,
    },
    payload: {
      actionResult,
    }
  }) => {
  const result = actionResult
    ? await requestHandler.handle(
        createPostDomainListGetOperationRequest(
          actionResult,
          {
            operationName: resourceOfPostListStore.getOperationNameForGet(),
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
    createPostListStoreClearAction: (
      stateMap: PostListStoreStateMap,
      action: PayloadAction<PostListStoreClearActionPayload>
    ) => {
      const { payload: { sliceName } } = action;

      const state = initialState[sliceName];

      stateMap[sliceName] = state;
    },
    createPostListStoreSetAction: (
      stateMap: PostListStoreStateMap,
      action: PayloadAction<PostListStoreSetActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      const state = stateMap[sliceName];

      state.resultOfSetAction = actionResult;
    },
  },
  extraReducers (builder) {
    //
    // Load
    //
    builder.addCase(createPostListStoreLoadActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Pending;
      state.resultOfLoadAction = actionResult;
    });

    builder.addCase(createPostListStoreLoadActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Fulfilled;
      state.resultOfLoadCompletedAction = payload;
      state.resultOfSetAction = payload;
    });

    builder.addCase(createPostListStoreLoadActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Rejected;
      state.resultOfLoadCompletedAction = createPostDomainListGetOperationResponse(payload);
    });
  },
});

export const {
  createPostListStoreClearAction,
  createPostListStoreSetAction,
} = slice.actions;

export default slice.reducer;
