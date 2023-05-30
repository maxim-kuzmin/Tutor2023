import { type ApiRequestHandler } from '../../../../../data';
import { type PostDomainRepository } from '../../../PostDomainRepository';
import { type PostDomainListGetOperationInput } from './PostDomainListGetOperationInput';
import { type PostDomainListGetOperationOutput } from './PostDomainListGetOperationOutput';
import { type PostDomainListGetOperationRequest } from './PostDomainListGetOperationRequest';
import { type PostDomainListGetOperationResponse } from './PostDomainListGetOperationResponse';

export interface PostDomainListGetOperationRequestHandler {
  handle: (
    request: PostDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<PostDomainListGetOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: PostDomainRepository;
}

class Implementation implements PostDomainListGetOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: PostDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: PostDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<PostDomainListGetOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInputAndOutput<
      PostDomainListGetOperationInput,
      PostDomainListGetOperationRequest,
      PostDomainListGetOperationOutput,
      PostDomainListGetOperationResponse
    >(
      request,
      async () => await this.repository.getList(request, abortSignal),
      abortSignal
    );
  }
}

export function createPostDomainListGetOperationRequestHandler (
  options: Options
): PostDomainListGetOperationRequestHandler {
  return new Implementation(options);
}
