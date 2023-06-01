import { type ApiOperationResponse, type ApiRequestHandler } from '../../../../../data';
import { type PostDomainRepository } from '../../../PostDomainRepository';
import { type PostDomainItemGetOperationInput } from '../Get';
import { type PostDomainItemDeleteOperationRequest } from './PostDomainItemDeleteOperationRequest';

export interface PostDomainItemDeleteOperationRequestHandler {
  handle: (
    request: PostDomainItemDeleteOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<ApiOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: PostDomainRepository;
}

class Implementation implements PostDomainItemDeleteOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: PostDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: PostDomainItemDeleteOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<ApiOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInput<
      PostDomainItemGetOperationInput,
      PostDomainItemDeleteOperationRequest,
      ApiOperationResponse
    >(
      request,
      async () => {
        const { id } = request.input;

        const isInputValid = id !== '0';

        if (isInputValid) {
          return await this.repository.deleteItem(request, abortSignal);
        }

        return null;
      },
      abortSignal
    );
  }
}

export function createPostDomainItemDeleteOperationRequestHandler (
  options: Options
): PostDomainItemDeleteOperationRequestHandler {
  return new Implementation(options);
}
