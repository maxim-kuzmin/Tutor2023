export interface ApiResponseErrorOptions extends ErrorOptions {
  readonly message?: string;
  readonly responseStatus?: number;
}
