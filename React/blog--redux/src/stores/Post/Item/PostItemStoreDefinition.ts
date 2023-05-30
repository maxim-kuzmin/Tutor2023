import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AppStoreThunkApiConfig } from '../../../app';
import { OperationStatus, createStoreStateMap } from '../../../common';
import {
  createPostDomainItemDeleteOperationRequest,
  createPostDomainItemGetOperationRequest,
  createPostDomainItemGetOperationResponse,
  createPostDomainItemSaveOperationRequest,
} from '../../../domains';
import {
  PostItemStoreSliceName,
  type PostItemStoreClearActionPayload,
  type PostItemStoreDeleteActionData,
  type PostItemStoreDeleteActionPayload,
  type PostItemStoreDeleteCompletedActionResult,
  type PostItemStoreLoadActionData,
  type PostItemStoreLoadActionPayload,
  type PostItemStoreLoadCompletedActionResult,
  type PostItemStoreSaveActionData,
  type PostItemStoreSaveActionPayload,
  type PostItemStoreSaveCompletedActionResult,
  type PostItemStoreSetActionPayload,
  type PostItemStoreStateMap,
  createPostItemStoreState,
} from '../../../features';

const name = 'PostItem';

const initialState: PostItemStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createPostItemStoreState(),
  sliceNames: [PostItemStoreSliceName.Default],
});

const createAsyncAction = createAsyncThunk.withTypes<AppStoreThunkApiConfig>();

export const createPostItemStoreDeleteActionAsync = createAsyncAction<
  PostItemStoreDeleteCompletedActionResult,
  {
    data: PostItemStoreDeleteActionData;
    payload: PostItemStoreDeleteActionPayload;
  }
>(
  `${name}/Delete`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfPostItemStore,
    },
    payload: {
      actionResult,
    }
  }) => {
  const result = actionResult
    ? await requestHandler.handle(
        createPostDomainItemDeleteOperationRequest(
          actionResult,
          {
            operationName: resourceOfPostItemStore.getOperationNameForDelete(),
            resourceOfApiResponse
          }
        ),
        abortSignal
      )
    : null;

    return result;
  },
);

export const createPostItemStoreLoadActionAsync = createAsyncAction<
  PostItemStoreLoadCompletedActionResult,
  {
    data: PostItemStoreLoadActionData;
    payload: PostItemStoreLoadActionPayload;
  }
>(
  `${name}/Load`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfPostItemStore,
    },
    payload: {
      actionResult,
    }
  }) => {
  const result = actionResult
    ? await requestHandler.handle(
        createPostDomainItemGetOperationRequest(
          actionResult,
          {
            operationName: resourceOfPostItemStore.getOperationNameForGet(),
            resourceOfApiResponse
          }
        ),
        abortSignal
      )
    : null;

    return result;
  },
);

export const createPostItemStoreSaveActionAsync = createAsyncAction<
  PostItemStoreSaveCompletedActionResult,
  {
    data: PostItemStoreSaveActionData;
    payload: PostItemStoreSaveActionPayload;
  }
>(
  `${name}/Save`,
  async ({
    data: {
      abortSignal,
      requestHandler,
      resourceOfApiResponse,
      resourceOfPostItemStore,
    },
    payload: {
      actionResult,
    }
  }) => {
  const result = actionResult
    ? await requestHandler.handle(
        createPostDomainItemSaveOperationRequest(
          actionResult,
          {
            operationName: resourceOfPostItemStore.getOperationNameForSave(),
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
    createPostItemStoreClearAction: (
      stateMap: PostItemStoreStateMap,
      action: PayloadAction<PostItemStoreClearActionPayload>
    ) => {
      const { payload: { sliceName } } = action;

      const state = initialState[sliceName];

      stateMap[sliceName] = state;
    },
    createPostItemStoreSetAction: (
      stateMap: PostItemStoreStateMap,
      action: PayloadAction<PostItemStoreSetActionPayload>
    ) => {
      const { payload: { actionResult, sliceName } } = action;

      const state = stateMap[sliceName];

      state.resultOfSetAction = actionResult;
    },
  },
  extraReducers (builder) {
    //
    // Delete
    //
    builder.addCase(createPostItemStoreDeleteActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfDeleteAction = OperationStatus.Pending;
      state.resultOfDeleteAction = actionResult;
    });

    builder.addCase(createPostItemStoreDeleteActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfDeleteAction = OperationStatus.Fulfilled;
      state.resultOfDeleteCompletedAction = payload;
      state.resultOfSetAction = null;
    });

    builder.addCase(createPostItemStoreDeleteActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfDeleteAction = OperationStatus.Rejected;
      state.resultOfDeleteCompletedAction = payload ?? null;
    });
    //
    // Load
    //
    builder.addCase(createPostItemStoreLoadActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Pending;
      state.resultOfLoadAction = actionResult;
    });

    builder.addCase(createPostItemStoreLoadActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Fulfilled;
      state.resultOfLoadCompletedAction = payload;
      state.resultOfSetAction = payload;
    });

    builder.addCase(createPostItemStoreLoadActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfLoadAction = OperationStatus.Rejected;
      state.resultOfLoadCompletedAction = createPostDomainItemGetOperationResponse(payload);
    });
    //
    // Save
    //
    builder.addCase(createPostItemStoreSaveActionAsync.pending, (stateMap, action) => {
      const { meta: { arg: { data: { abortSignal }, payload: { actionResult, sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfSaveAction = OperationStatus.Pending;
      state.resultOfSaveAction = actionResult;
    });

    builder.addCase(createPostItemStoreSaveActionAsync.fulfilled, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfSaveAction = OperationStatus.Fulfilled;
      state.resultOfSaveCompletedAction = payload;
      state.resultOfSetAction = payload;
    });

    builder.addCase(createPostItemStoreSaveActionAsync.rejected, (stateMap, action) => {
      const { payload, meta: { arg: { data: { abortSignal }, payload: { sliceName } } } } = action;

      if (abortSignal?.aborted) {
        return;
      }

      const state = stateMap[sliceName];

      state.statusOfSaveAction = OperationStatus.Rejected;
      state.resultOfSaveCompletedAction = createPostDomainItemGetOperationResponse(payload);
    });
  },
});

export const {
  createPostItemStoreClearAction,
  createPostItemStoreSetAction,
} = slice.actions;

export default slice.reducer;
