import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreDeleteActionResult } from './PostItemStoreDeleteActionResult';

export interface PostItemStoreDeleteActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  readonly actionResult: PostItemStoreDeleteActionResult;
}

interface Options extends Omit<PostItemStoreDeleteActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreDeleteActionResult;
}

export function createPostItemStoreDeleteActionPayload (
  options: Options
): PostItemStoreDeleteActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
