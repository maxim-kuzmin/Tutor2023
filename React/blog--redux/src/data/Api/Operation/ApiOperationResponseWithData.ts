import { type ApiOperationResponse, createApiOperationResponse } from './ApiOperationResponse';

export interface ApiOperationResponseWithData<TData> extends ApiOperationResponse {
  readonly data: TData;
}

interface Options<TData> extends Partial<ApiOperationResponse> {
  data: TData;
}

export function createApiOperationResponseWithData<TData> (
  options: Options<TData>
): ApiOperationResponseWithData<TData> {
  const base = createApiOperationResponse(options);

  const { data } = options;

  return { ...base, data };
}
