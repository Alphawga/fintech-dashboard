export interface IApiError {
  code: string;
  message: string;
  timestamp?: string;
  path?: string;
}

export interface IValidationError {
  rule: string;
  message: string;
  field: string;
}

export interface IApiResponse<T> {
  data?: T;
  error?: IApiError;
  validationErrors?: IValidationError[];
} 