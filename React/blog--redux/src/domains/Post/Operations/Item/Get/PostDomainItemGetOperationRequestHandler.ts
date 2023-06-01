import { type ApiRequestHandler } from '../../../../../data';
import { type PostDomainRepository } from '../../../PostDomainRepository';
import { type PostDomainItemGetOperationInput } from './PostDomainItemGetOperationInput';
import { type PostDomainItemGetOperationOutput } from './PostDomainItemGetOperationOutput';
import { type PostDomainItemGetOperationRequest } from './PostDomainItemGetOperationRequest';
import { type PostDomainItemGetOperationResponse } from './PostDomainItemGetOperationResponse';

export interface PostDomainItemGetOperationRequestHandler {
  handle: (
    request: PostDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<PostDomainItemGetOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: PostDomainRepository;
}

class Implementation implements PostDomainItemGetOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: PostDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: PostDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<PostDomainItemGetOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInputAndOutput<
      PostDomainItemGetOperationInput,
      PostDomainItemGetOperationRequest,
      PostDomainItemGetOperationOutput,
      PostDomainItemGetOperationResponse
    >(
      request,
      async () => {
        const { id } = request.input;

        const isInputValid = id !== '0';

        if (isInputValid) {
          return await this.repository.getItem(request, abortSignal);
        }

        return null;
      },
      abortSignal
    );
  }
}

export function createPostDomainItemGetOperationRequestHandler (
  options: Options
): PostDomainItemGetOperationRequestHandler {
  return new Implementation(options);
}
