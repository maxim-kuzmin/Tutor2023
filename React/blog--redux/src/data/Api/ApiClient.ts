import { type HttpConfig, type HttpClient, type HttpResponse } from '../../common';
import { type ApiOptions } from './ApiOptions';
import {
  type ApiOperationResponse,
  type ApiOperationResponseWithData,
  createApiOperationResponse,
  createApiOperationResponseWithData,
} from './Operation';
import { type ApiRequestOptionsWithBody, type ApiRequestOptions } from './Request';
import { type ApiResponseError, createApiResponseError } from './Response';

export interface ApiClient {
  readonly delete: (options: ApiRequestOptions) => Promise<ApiOperationResponse>;
  readonly get: <TData>(options: ApiRequestOptions) => Promise<ApiOperationResponseWithData<TData>>;
  readonly post: <TData>(options: ApiRequestOptionsWithBody) => Promise<ApiOperationResponseWithData<TData>>;
  readonly put: <TData>(options: ApiRequestOptionsWithBody) => Promise<ApiOperationResponseWithData<TData>>;
}

interface Options {
  readonly httpClient: HttpClient;
  readonly optionsOfApi: ApiOptions;
}

interface RequestOptions {
  readonly getResponse: () => Promise<HttpResponse>;
}

interface HttpConfigOptions {
  readonly query?: any;
}

function createHttpConfig ({
  query,
}: HttpConfigOptions): HttpConfig {
  return {
    query,
    init: {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  }
};

class Implementation implements ApiClient {
  private readonly httpClient: HttpClient;
  private readonly optionsOfApi: ApiOptions;

  constructor ({
    httpClient,
    optionsOfApi
  }: Options) {
    this.httpClient = httpClient;
    this.optionsOfApi = optionsOfApi;
  }

  async delete ({
    endpoint,
    query,
  }: ApiRequestOptions): Promise<ApiOperationResponse> {
    return await this.request({
      getResponse: async () => await this.httpClient.delete(
        this.createUrl(endpoint),
        createHttpConfig({
          query,
        })
      ),
    });
  }

  async get<TData> ({
    endpoint,
    query,
  }: ApiRequestOptions): Promise<ApiOperationResponseWithData<TData>> {
    return await this.requestWithData({
      getResponse: async () => await this.httpClient.get(
        this.createUrl(endpoint),
        createHttpConfig({
          query,
        })
      ),
    });
  }

  async post<TData> ({
    body,
    endpoint,
    query,
  }: ApiRequestOptionsWithBody): Promise<ApiOperationResponseWithData<TData>> {
    return await this.requestWithData({
      getResponse: async () => await this.httpClient.post(
        this.createUrl(endpoint),
        body,
        createHttpConfig({
          query,
        })
      ),
    });
  }

  async put<TData> ({
    body,
    endpoint,
    query,
  }: ApiRequestOptionsWithBody): Promise<ApiOperationResponseWithData<TData>> {
    return await this.requestWithData({
      getResponse: async () => await this.httpClient.put(
        this.createUrl(endpoint),
        body,
        createHttpConfig({
          query,
        })
      ),
    });
  }

  private createUrl (endpoint: string) {
    return `${this.optionsOfApi.url}/${endpoint}`;
  }

  private async request ({
    getResponse
  }: RequestOptions): Promise<ApiOperationResponse> {
    let errorOfApiResponse: ApiResponseError;

    try {
      const { ok, status, statusText } = await getResponse();

      if (ok) {
        return createApiOperationResponse();
      }

      errorOfApiResponse = createApiResponseError({ message: statusText, responseStatus: status });
    } catch (error: any) {
      errorOfApiResponse = createApiResponseError({ message: String(error.message ?? '') });
    }

    return await Promise.reject(createApiOperationResponse({ error: errorOfApiResponse }));
  }

  private async requestWithData<TData> ({
    getResponse
  }: RequestOptions): Promise<ApiOperationResponseWithData<TData>> {
    let errorOfApiResponse: ApiResponseError;

    try {
      const { ok, value, status, statusText } = await getResponse();

      if (ok) {
        return createApiOperationResponseWithData({
          data: value
        });
      }

      errorOfApiResponse = createApiResponseError({ message: statusText, responseStatus: status });
    } catch (error: any) {
      errorOfApiResponse = createApiResponseError({ message: String(error.message ?? '') });
    }

    return await Promise.reject(createApiOperationResponse({ error: errorOfApiResponse }));
  }
}

export function createApiClient (options: Options): ApiClient {
  return new Implementation(options);
}
