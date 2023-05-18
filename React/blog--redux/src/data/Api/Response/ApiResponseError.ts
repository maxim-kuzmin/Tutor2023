import { type ApiResponseErrorOptions } from './ApiResponseErrorOptions';

export interface ApiResponseError extends Error {
  readonly responseStatus: number;
}

class Implementation extends Error implements ApiResponseError {
  public readonly responseStatus: number;

  constructor ({
    cause,
    responseStatus,
    message,
  }: ApiResponseErrorOptions) {
    super(message ?? 'Unknown error', { cause });

    this.responseStatus = responseStatus ?? 0;
  }
}

export function createApiResponseError (options: ApiResponseErrorOptions) {
  return new Implementation(options);
}
