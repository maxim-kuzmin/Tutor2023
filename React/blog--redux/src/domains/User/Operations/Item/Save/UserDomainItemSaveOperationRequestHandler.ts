import { type UserTypeEntity, type ApiRequestHandler } from '../../../../../data';
import { type UserDomainRepository } from '../../../UserDomainRepository';
import { type UserDomainItemGetOperationOutput, type UserDomainItemGetOperationResponse } from '../Get';
import { type UserDomainItemSaveOperationRequest } from './UserDomainItemSaveOperationRequest';

export interface UserDomainItemSaveOperationRequestHandler {
  handle: (
    request: UserDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainItemGetOperationResponse | null>;
}

interface Options {
  handlerOfApiRequest: ApiRequestHandler;
  repository: UserDomainRepository;
}

class Implementation implements UserDomainItemSaveOperationRequestHandler {
  private readonly handlerOfApiRequest: ApiRequestHandler;
  private readonly repository: UserDomainRepository;

  constructor (options: Options) {
    this.handlerOfApiRequest = options.handlerOfApiRequest;
    this.repository = options.repository;
  }

  async handle (
    request: UserDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainItemGetOperationResponse | null> {
    return await this.handlerOfApiRequest.handleWithInputAndOutput<
      UserTypeEntity,
      UserDomainItemSaveOperationRequest,
      UserDomainItemGetOperationOutput,
      UserDomainItemGetOperationResponse
    >(
      request,
      async () => {
        const { firstName, lastName, name, username } = request.input;

        const isInputValid = firstName &&
          lastName &&
          name &&
          username;

        if (isInputValid) {
          return await this.repository.saveItem(request, abortSignal);
        }

        return null;
      },
      abortSignal
    );
  }
}

export function createUserDomainItemSaveOperationRequestHandler (
  options: Options
): UserDomainItemSaveOperationRequestHandler {
  return new Implementation(options);
}
