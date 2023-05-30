import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  type PostTypeEntity,
  createApiRequestWithInput
} from '../../../../../data';

export interface PostDomainItemSaveOperationRequest extends ApiRequestWithInput<PostTypeEntity> {}

export function createPostDomainItemSaveOperationRequest (
  input: PostTypeEntity,
  options: ApiRequestCreationOptions
): PostDomainItemSaveOperationRequest {
  return createApiRequestWithInput(input, options);
}
