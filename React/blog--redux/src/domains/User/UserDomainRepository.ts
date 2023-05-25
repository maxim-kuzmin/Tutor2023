import { type ApiClient, type ApiOperationResponse } from '../../data';
import {
  type UserDomainListGetOperationRequest,
  type UserDomainListGetOperationResponse,
  type UserDomainListGetOperationOutput,
  createUserDomainListGetOperationResponse,
} from './Operations';

export interface UserDomainRepository {
  getList: (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainListGetOperationResponse>;
}

interface Options {
  clientOfApi: ApiClient;
}

class Implementation implements UserDomainRepository {
  private readonly clientOfApi: ApiClient;

  constructor (options: Options) {
    this.clientOfApi = options.clientOfApi;
  }

  async getList (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainListGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input: query } = request;

    const endpoint = 'users';

    try {
      const response = await this.clientOfApi.get<UserDomainListGetOperationOutput>({
        abortSignal,
        endpoint,
        operationName,
        operationCode,
        query,
        resourceOfApiResponse
      });

      return createUserDomainListGetOperationResponse(response);
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return createUserDomainListGetOperationResponse(response);
      }

      throw error;
    }
  }
}

export function createUserDomainRepository (options: Options): UserDomainRepository {
  return new Implementation(options);
}
