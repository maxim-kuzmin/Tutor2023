import { type ApiRequestHooks } from '../../data/Api/Request/ApiRequestHooks';
import { type UserDomainModule } from './UserDomainModule';
import {
  type UserDomainItemDeleteOperationRequestHandler,
  type UserDomainItemGetOperationRequestHandler,
  type UserDomainItemSaveOperationRequestHandler,
  type UserDomainListGetOperationRequestHandler,
} from './Operations';
import {
  createUserDomainItemDeleteOperationRequestHandler
} from './Operations/Item/Delete/UserDomainItemDeleteOperationRequestHandler';
import {
  createUserDomainItemGetOperationRequestHandler
} from './Operations/Item/Get/UserDomainItemGetOperationRequestHandler';
import {
  createUserDomainItemSaveOperationRequestHandler
} from './Operations/Item/Save/UserDomainItemSaveOperationRequestHandler';
import {
  createUserDomainListGetOperationRequestHandler
} from './Operations/List/Get/UserDomainListGetOperationRequestHandler';

export interface UserDomainHooks {
  readonly useItemDeleteOperationRequestHandler: () => UserDomainItemDeleteOperationRequestHandler;
  readonly useItemGetOperationRequestHandler: () => UserDomainItemGetOperationRequestHandler;
  readonly useItemSaveOperationRequestHandler: () => UserDomainItemSaveOperationRequestHandler;
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
  function useItemDeleteOperationRequestHandler (): UserDomainItemDeleteOperationRequestHandler {
    return createUserDomainItemDeleteOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: true
      }),
      repository: moduleOfUserDomain.getRepository()
    });
  }

  function useItemGetOperationRequestHandler (): UserDomainItemGetOperationRequestHandler {
    return createUserDomainItemGetOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: false
      }),
      repository: moduleOfUserDomain.getRepository()
    });
  }

  function useItemSaveOperationRequestHandler (): UserDomainItemSaveOperationRequestHandler {
    return createUserDomainItemSaveOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: true
      }),
      repository: moduleOfUserDomain.getRepository()
    });
  }

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
    useItemDeleteOperationRequestHandler,
    useItemGetOperationRequestHandler,
    useItemSaveOperationRequestHandler,
    useListGetOperationRequestHandler
  };
}
