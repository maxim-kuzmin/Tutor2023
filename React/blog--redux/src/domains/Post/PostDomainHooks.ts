import { type ApiRequestHooks } from '../../data/Api/Request/ApiRequestHooks';
import { type PostDomainModule } from './PostDomainModule';
import {
  type PostDomainItemDeleteOperationRequestHandler,
  type PostDomainItemGetOperationRequestHandler,
  type PostDomainItemSaveOperationRequestHandler,
  type PostDomainListGetOperationRequestHandler,
} from './Operations';
import {
  createPostDomainItemDeleteOperationRequestHandler
} from './Operations/Item/Delete/PostDomainItemDeleteOperationRequestHandler';
import {
  createPostDomainItemGetOperationRequestHandler
} from './Operations/Item/Get/PostDomainItemGetOperationRequestHandler';
import {
  createPostDomainItemSaveOperationRequestHandler
} from './Operations/Item/Save/PostDomainItemSaveOperationRequestHandler';
import {
  createPostDomainListGetOperationRequestHandler
} from './Operations/List/Get/PostDomainListGetOperationRequestHandler';

export interface PostDomainHooks {
  readonly useItemDeleteOperationRequestHandler: () => PostDomainItemDeleteOperationRequestHandler;
  readonly useItemGetOperationRequestHandler: () => PostDomainItemGetOperationRequestHandler;
  readonly useItemSaveOperationRequestHandler: () => PostDomainItemSaveOperationRequestHandler;
  readonly useListGetOperationRequestHandler: () => PostDomainListGetOperationRequestHandler;
}

interface Options {
  readonly hooksOfApiRequest: ApiRequestHooks;
  readonly moduleOfPostDomain: PostDomainModule;
}

export function createPostDomainHooks ({
  hooksOfApiRequest,
  moduleOfPostDomain
}: Options): PostDomainHooks {
  function useItemDeleteOperationRequestHandler (): PostDomainItemDeleteOperationRequestHandler {
    return createPostDomainItemDeleteOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: true
      }),
      repository: moduleOfPostDomain.getRepository()
    });
  }

  function useItemGetOperationRequestHandler (): PostDomainItemGetOperationRequestHandler {
    return createPostDomainItemGetOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: false
      }),
      repository: moduleOfPostDomain.getRepository()
    });
  }

  function useItemSaveOperationRequestHandler (): PostDomainItemSaveOperationRequestHandler {
    return createPostDomainItemSaveOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: true
      }),
      repository: moduleOfPostDomain.getRepository()
    });
  }

  function useListGetOperationRequestHandler (): PostDomainListGetOperationRequestHandler {
    return createPostDomainListGetOperationRequestHandler({
      handlerOfApiRequest: hooksOfApiRequest.useHandler({
        shouldBeLogged: true,
        shouldBeNotified: false
      }),
      repository: moduleOfPostDomain.getRepository()
    });
  }

  return {
    useItemDeleteOperationRequestHandler,
    useItemGetOperationRequestHandler,
    useItemSaveOperationRequestHandler,
    useListGetOperationRequestHandler
  };
}
