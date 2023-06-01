import { type ApiOperationResponse, type ApiRequestHandler } from '../../../../../data';
import { type UserDomainRepository } from '../../../UserDomainRepository';
import { type UserDomainItemGetOperationInput } from '../Get';
import { type UserDomainItemDeleteOperationRequest } from './UserDomainItemDeleteOperationRequest';

export interface UserDomainItemDeleteOperationRequestHandler {
  handle: (
    request: UserDomainItemDeleteOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<ApiOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: UserDomainRepository;
}

class Implementation implements UserDomainItemDeleteOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: UserDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: UserDomainItemDeleteOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<ApiOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInput<
      UserDomainItemGetOperationInput,
      UserDomainItemDeleteOperationRequest,
      ApiOperationResponse
    >(
      request,
      async () => {
        const { id, username } = request.input;

        const isInputValid = id !== '0' || username;

        if (isInputValid) {
          return await this.repository.deleteItem(request, abortSignal);
        }

        return null;
      },
      abortSignal
    );
  }
}

export function createUserDomainItemDeleteOperationRequestHandler (
  options: Options
): UserDomainItemDeleteOperationRequestHandler {
  return new Implementation(options);
}
