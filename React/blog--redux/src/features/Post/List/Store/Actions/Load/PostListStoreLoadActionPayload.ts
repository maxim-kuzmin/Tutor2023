import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostListStoreSliceName } from '../../Slice';
import { type PostListStoreLoadActionResult } from './PostListStoreLoadActionResult';

export interface PostListStoreLoadActionPayload
  extends StoreActionPayload<PostListStoreSliceName> {
  readonly actionResult: PostListStoreLoadActionResult;
}

interface Options extends Omit<PostListStoreLoadActionPayload, 'actionResult'> {
  readonly actionResult?: PostListStoreLoadActionResult;
}

export function createPostListStoreLoadActionPayload (
  options: Options
): PostListStoreLoadActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
