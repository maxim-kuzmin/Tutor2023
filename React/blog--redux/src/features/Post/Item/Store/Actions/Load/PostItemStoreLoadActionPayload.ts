import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreLoadActionResult } from './PostItemStoreLoadActionResult';

export interface PostItemStoreLoadActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  readonly actionResult: PostItemStoreLoadActionResult;
}

interface Options extends Omit<PostItemStoreLoadActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreLoadActionResult;
}

export function createPostItemStoreLoadActionPayload (
  options: Options
): PostItemStoreLoadActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
