export interface ApiResponseErrorOptions extends ErrorOptions {
  readonly responseStatus?: number;
  readonly message?: string;
}
