import { type ApiRequestHooks } from '../../data/Api/Request/ApiRequestHooks';
import { type UserDomainModule } from './UserDomainModule';
import {
  type UserDomainListGetOperationRequestHandler,
} from './Operations';
import {
  createUserDomainListGetOperationRequestHandler
} from './Operations/List/Get/UserDomainListGetOperationRequestHandler';

export interface UserDomainHooks {
  readonly useListGetOperationRequestHandler: () => UserDomainListGetOperationRequestHandler;
}

interface Options {
  readonly hooksOfApiRequest: ApiRequestHooks;
  readonly moduleOfUserDomain: UserDomainModule;
}

export function createUserDomainHooks ({
  hooksOfApiRequest,
  moduleOfUserDomain
}: Options): UserDomainHooks {
  function useListGetOperationRequestHandler (): UserDomainListGetOperationRequestHandler {
    return createUserDomainListGetOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: false
      }),
      repository: moduleOfUserDomain.getRepository()
    });
  }

  return {
    useListGetOperationRequestHandler
  };
}
