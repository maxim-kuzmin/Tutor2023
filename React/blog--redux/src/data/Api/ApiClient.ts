import { type HttpConfig, type HttpClient, type HttpResponse } from '../../common';
import { type ApiOptions } from './ApiOptions';
import { type ApiOperationResponse, type ApiOperationResponseWithData } from './Operation';
import { type ApiRequestOptionsWithBody, type ApiRequestOptions } from './Request';

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
  readonly getRequestResult: () => Promise<HttpResponse>;
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
      getRequestResult: async () => await this.httpClient.delete(
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
      getRequestResult: async () => await this.httpClient.get(
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
      getRequestResult: async () => await this.httpClient.post(
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
      getRequestResult: async () => await this.httpClient.put(
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
    getRequestResult
  }: RequestOptions): Promise<ApiOperationResponse> {
    let data = null;

    try {
      const { headers, ok, status, value, statusText, url } = await getRequestResult();

      data = value;

      if (ok) {
        return {
          headers,
          status,
          url,
        };
      }

      throw new Error(statusText);
    } catch (error: any) {
      return await Promise.reject(error.message ?? data)
    }
  }

  private async requestWithData<TData> ({
    getRequestResult
  }: RequestOptions): Promise<ApiOperationResponseWithData<TData>> {
    let data;

    try {
      const { headers, ok, status, value, statusText, url } = await getRequestResult();

      data = value;

      if (ok) {
        return {
          data: value,
          headers,
          status,
          url,
        };
      }

      throw new Error(statusText);
    } catch (error: any) {
      return await Promise.reject(error.message ?? data)
    }
  }
}

export function createApiClient (options: Options): ApiClient {
  return new Implementation(options);
}
