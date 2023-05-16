export interface ApiOperationResponse {
  readonly headers: Headers;
  readonly status: number;
  readonly url: string;
}

export function createApiOperationResponse (options?: Partial<ApiOperationResponse>): ApiOperationResponse {
  return {
    headers: options?.headers ?? new Headers(),
    status: options?.status ?? 0,
    url: options?.url ?? '',
  }
}
