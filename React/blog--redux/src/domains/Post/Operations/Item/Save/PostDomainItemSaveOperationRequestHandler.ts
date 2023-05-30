import { type PostTypeEntity, type ApiRequestHandler } from '../../../../../data';
import { type PostDomainRepository } from '../../../PostDomainRepository';
import { type PostDomainItemGetOperationOutput, type PostDomainItemGetOperationResponse } from '../Get';
import { type PostDomainItemSaveOperationRequest } from './PostDomainItemSaveOperationRequest';

export interface PostDomainItemSaveOperationRequestHandler {
  handle: (
    request: PostDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<PostDomainItemGetOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: PostDomainRepository;
}

class Implementation implements PostDomainItemSaveOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: PostDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: PostDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<PostDomainItemGetOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInputAndOutput<
      PostTypeEntity,
      PostDomainItemSaveOperationRequest,
      PostDomainItemGetOperationOutput,
      PostDomainItemGetOperationResponse
    >(
      request,
      async () => {
        const { title, content, userId } = request.input;

        const isInputValid = title && content && Number(userId ?? 0) > 0;

        if (isInputValid) {
          return await this.repository.saveItem(request, abortSignal);
        }

        return null;
      },
      abortSignal
    );
  }
}

export function createPostDomainItemSaveOperationRequestHandler (
  options: Options
): PostDomainItemSaveOperationRequestHandler {
  return new Implementation(options);
}
