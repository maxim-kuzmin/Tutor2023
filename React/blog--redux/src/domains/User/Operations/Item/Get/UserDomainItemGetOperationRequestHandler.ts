import { type ApiRequestHandler } from '../../../../../data';
import { type UserDomainRepository } from '../../../UserDomainRepository';
import { type UserDomainItemGetOperationInput } from './UserDomainItemGetOperationInput';
import { type UserDomainItemGetOperationOutput } from './UserDomainItemGetOperationOutput';
import { type UserDomainItemGetOperationRequest } from './UserDomainItemGetOperationRequest';
import { type UserDomainItemGetOperationResponse } from './UserDomainItemGetOperationResponse';

export interface UserDomainItemGetOperationRequestHandler {
  handle: (
    request: UserDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainItemGetOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: UserDomainRepository;
}

class Implementation implements UserDomainItemGetOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: UserDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: UserDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainItemGetOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInputAndOutput<
      UserDomainItemGetOperationInput,
      UserDomainItemGetOperationRequest,
      UserDomainItemGetOperationOutput,
      UserDomainItemGetOperationResponse
    >(
      request,
      async () => {
        const { id, username } = request.input;

        const isInputValid = id !== '0' || username;

        if (isInputValid) {
          return await this.repository.getItem(request, abortSignal);
        }

        return null;
      },
      abortSignal
    );
  }
}

export function createUserDomainItemGetOperationRequestHandler (
  options: Options
): UserDomainItemGetOperationRequestHandler {
  return new Implementation(options);
}
