import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostListStoreSliceName } from '../../Slice';
import { type PostListStoreLoadCompletedActionResult } from './PostListStoreLoadCompletedActionResult';

export interface PostListStoreLoadCompletedActionPayload
  extends StoreActionPayload<PostListStoreSliceName> {
  actionResult: PostListStoreLoadCompletedActionResult;
}

interface Options extends Omit<PostListStoreLoadCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: PostListStoreLoadCompletedActionResult;
}

export function createPostListStoreLoadCompletedActionPayload (
  options: Options
): PostListStoreLoadCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
