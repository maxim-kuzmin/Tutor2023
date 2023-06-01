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

    const inputId = String(input.id ?? '');

    const id = inputId.length > 0 ? inputId : '0';

    const endpoint = `${controller}/${id}`;

    return await this.clientOfApi.delete({
      abortSignal,
      endpoint,
      operationName,
      operationCode,
      resourceOfApiResponse
    });
  }

  async getItem (
    request: UserDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainItemGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input } = request;

    const inputId = String(input.id ?? '');

    const id = inputId.length > 0 ? inputId : '0';

    const endpoint = `${controller}/${id}`;

    const response = await this.clientOfApi.get<UserDomainItemGetOperationOutput>({
      abortSignal,
      endpoint,
      operationName,
      operationCode,
      resourceOfApiResponse
    });

    return createUserDomainItemGetOperationResponse(response);
  }

  async getList (
    request: UserDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainListGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input: query } = request;

    const endpoint = controller;

    const response = await this.clientOfApi.get<UserDomainListGetOperationOutput>({
      abortSignal,
      endpoint,
      operationName,
      operationCode,
      query,
      resourceOfApiResponse
    });

    return createUserDomainListGetOperationResponse(response);
  }

  async saveItem (
    request: UserDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<UserDomainItemGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input: body } = request;

    const id = body.id.length > 0 ? body.id : '0';

    const endpoint = id !== '0' ? `${controller}/${id}` : controller;

    const options: ApiRequestOptionsWithBody = {
      abortSignal,
      body,
      endpoint,
      operationName,
      operationCode,
      resourceOfApiResponse
    };

    const response = id !== '0'
      ? await this.clientOfApi.put<UserDomainItemGetOperationOutput>(options)
      : await this.clientOfApi.post<UserDomainItemGetOperationOutput>(options);

    return createUserDomainItemGetOperationResponse(response);
  }
}

export function createUserDomainRepository (options: Options): UserDomainRepository {
  return new Implementation(options);
}
