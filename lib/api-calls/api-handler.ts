import { IApiError, IApiResponse, IValidationError } from "../models/api.model";

async function handleValidationResponse(response: Response): Promise<IValidationError[]> {
  try {
    const data = await response.json() as { error: { code: string; message: string; path: string[] }[] };
    return data.error.map(error => ({
      rule: error.code,
      message: error.message,
      field: error.path[0],
    }));
  } catch (error) {
    console.error("Validation response parsing error:", error);
    return [{
      rule: "PARSE_ERROR",
      message: "Failed to parse validation response",
      field: "unknown"
    }];
  }
}

async function handleServerError(response: Response): Promise<IApiError> {
  try {
    const data = await response.json() as IApiError;
    return {
      code: data.code || 'SERVER_ERROR',
      message: data.message || 'An unexpected error occurred',
      timestamp: data.timestamp || new Date().toISOString(),
      path: data.path || response.url
    };
  } catch (error) {
    return {
      code: 'SERVER_ERROR',
      message: 'Failed to parse server error response',
      timestamp: new Date().toISOString(),
      path: response.url
    };
  }
}

export async function handleApiCall<T>(
  response: Response,
  options?: {
    errorMessage?: string;
    parseJson?: boolean;
  }
): Promise<IApiResponse<T>> {
  try {
    // Handle client errors (400-499)
    if (response.status >= 400 && response.status <= 499) {
      return { validationErrors: await handleValidationResponse(response) };
    }

    // Handle server errors (500+)
    if (response.status >= 500) {
      return { error: await handleServerError(response) };
    }

    // Handle successful response
    const data = options?.parseJson === false ? response : await response.json();
    return { data: data as T };
  } catch (error) {
    console.error("API call error:", error);
    return {
      error: {
        code: 'API_ERROR',
        message: options?.errorMessage || 'Failed to process API response',
        timestamp: new Date().toISOString(),
        path: response.url
      }
    };
  }
}

export const createApiUrl = (endpoint: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}; 