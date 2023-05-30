import { type ApiClient, type ApiOperationResponse, type ApiRequestOptionsWithBody } from '../../data';
import {
  type UserDomainItemDeleteOperationRequest,
  type UserDomainItemGetOperationOutput,
  type UserDomainItemGetOperationRequest,
  type UserDomainItemGetOperationResponse,
  type UserDomainItemSaveOperationRequest,
  type UserDomainListGetOperationRequest,
  type UserDomainListGetOperationResponse,
  type UserDomainListGetOperationOutput,
  createUserDomainItemGetOperationResponse,
  createUserDomainListGetOperationResponse,
} from './Operations';

export interface UserDomainRepository {
  deleteItem: (
    request: UserDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<ApiOperationResponse>;

  getItem: (
    request: UserDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainItemGetOperationResponse>;

  getList: (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainListGetOperationResponse>;

  saveItem: (
    request: UserDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<UserDomainItemGetOperationResponse>;
}

const controller = 'users';

interface Options {
  clientOfApi: ApiClient;
}

class Implementation implements UserDomainRepository {
  private readonly clientOfApi: ApiClient;

  constructor (options: Options) {
    this.clientOfApi = options.clientOfApi;
  }

  async deleteItem (
    request: UserDomainItemDeleteOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<ApiOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input } = request;

    const endpoint = `${controller}/${Number(input.id ?? 0)}`;

    try {
      return await this.clientOfApi.delete({
        abortSignal,
        endpoint,
        operationName,
        operationCode,
        resourceOfApiResponse
      });
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return response;
      }

      throw error;
    }
  }

  async getItem (
    request: UserDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainItemGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input } = request;

    const endpoint = `${controller}/${Number(input.id ?? 0)}`;

    try {
      const response = await this.clientOfApi.get<UserDomainItemGetOperationOutput>({
        abortSignal,
        endpoint,
        operationName,
        operationCode,
        resourceOfApiResponse
      });

      return createUserDomainItemGetOperationResponse(response);
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return createUserDomainItemGetOperationResponse(response);
      }

      throw error;
    }
  }

  async getList (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainListGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input: query } = request;

    const endpoint = controller;

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

  async saveItem (
    request: UserDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainItemGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input: body } = request;

    const id = Number(body.id ?? 0);

    const endpoint = id > 0 ? `${controller}/${id}` : controller;

    const options: ApiRequestOptionsWithBody = {
      abortSignal,
      body,
      endpoint,
      operationName,
      operationCode,
      resourceOfApiResponse
    };

    try {
      const response = id > 0
        ? await this.clientOfApi.put<UserDomainItemGetOperationOutput>(options)
        : await this.clientOfApi.post<UserDomainItemGetOperationOutput>(options);

      return createUserDomainItemGetOperationResponse(response);
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return createUserDomainItemGetOperationResponse(response);
      }

      throw error;
    }
  }
}

export function createUserDomainRepository (options: Options): UserDomainRepository {
  return new Implementation(options);
}
