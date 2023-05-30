import { type ApiClient, type ApiOperationResponse, type ApiRequestOptionsWithBody } from '../../data';
import {
  type PostDomainItemDeleteOperationRequest,
  type PostDomainItemGetOperationOutput,
  type PostDomainItemGetOperationRequest,
  type PostDomainItemGetOperationResponse,
  type PostDomainItemSaveOperationRequest,
  type PostDomainListGetOperationRequest,
  type PostDomainListGetOperationResponse,
  type PostDomainListGetOperationOutput,
  createPostDomainItemGetOperationResponse,
  createPostDomainListGetOperationResponse,
} from './Operations';

export interface PostDomainRepository {
  deleteItem: (
    request: PostDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<ApiOperationResponse>;

  getItem: (
    request: PostDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<PostDomainItemGetOperationResponse>;

  getList: (
    request: PostDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<PostDomainListGetOperationResponse>;

  saveItem: (
    request: PostDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ) => Promise<PostDomainItemGetOperationResponse>;
}

const controller = 'posts';

interface Options {
  clientOfApi: ApiClient;
}

class Implementation implements PostDomainRepository {
  private readonly clientOfApi: ApiClient;

  constructor (options: Options) {
    this.clientOfApi = options.clientOfApi;
  }

  async deleteItem (
    request: PostDomainItemDeleteOperationRequest,
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
    request: PostDomainItemGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<PostDomainItemGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input } = request;

    const endpoint = `${controller}/${Number(input.id ?? 0)}`;

    try {
      const response = await this.clientOfApi.get<PostDomainItemGetOperationOutput>({
        abortSignal,
        endpoint,
        operationName,
        operationCode,
        resourceOfApiResponse
      });

      return createPostDomainItemGetOperationResponse(response);
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return createPostDomainItemGetOperationResponse(response);
      }

      throw error;
    }
  }

  async getList (
    request: PostDomainListGetOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<PostDomainListGetOperationResponse> {
    const { operationCode, operationName, resourceOfApiResponse, input: query } = request;

    const endpoint = controller;

    try {
      const response = await this.clientOfApi.get<PostDomainListGetOperationOutput>({
        abortSignal,
        endpoint,
        operationName,
        operationCode,
        query,
        resourceOfApiResponse
      });

      return createPostDomainListGetOperationResponse(response);
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return createPostDomainListGetOperationResponse(response);
      }

      throw error;
    }
  }

  async saveItem (
    request: PostDomainItemSaveOperationRequest,
    abortSignal?: AbortSignal
  ): Promise<PostDomainItemGetOperationResponse> {
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
        ? await this.clientOfApi.put<PostDomainItemGetOperationOutput>(options)
        : await this.clientOfApi.post<PostDomainItemGetOperationOutput>(options);

      return createPostDomainItemGetOperationResponse(response);
    } catch (error: unknown) {
      const response = error as ApiOperationResponse;

      if (response) {
        return createPostDomainItemGetOperationResponse(response);
      }

      throw error;
    }
  }
}

export function createPostDomainRepository (options: Options): PostDomainRepository {
  return new Implementation(options);
}
