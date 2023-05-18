import { type ApiResponseError } from '../Response';

export interface ApiOperationResponse {
  error?: ApiResponseError | null;
}

export function createApiOperationResponse (options?: Partial<ApiOperationResponse>): ApiOperationResponse {
  return {
    error: options?.error,
  }
}
