import { type ApiRequestHandler } from '../../../../../data';
import { type UserDomainRepository } from '../../../UserDomainRepository';
import { type UserDomainListGetOperationInput } from './UserDomainListGetOperationInput';
import { type UserDomainListGetOperationOutput } from './UserDomainListGetOperationOutput';
import { type UserDomainListGetOperationRequest } from './UserDomainListGetOperationRequest';
import { type UserDomainListGetOperationResponse } from './UserDomainListGetOperationResponse';

export interface UserDomainListGetOperationRequestHandler {
  handle: (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainListGetOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: UserDomainRepository;
}

class Implementation implements UserDomainListGetOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: UserDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainListGetOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInputAndOutput<
      UserDomainListGetOperationInput,
      UserDomainListGetOperationRequest,
      UserDomainListGetOperationOutput,
      UserDomainListGetOperationResponse
    >(
      request,
      async () => await this.repository.getList(request, abortSignal),
      abortSignal
    );
  }
}

export function createUserDomainListGetOperationRequestHandler (
  options: Options
): UserDomainListGetOperationRequestHandler {
  return new Implementation(options);
}
