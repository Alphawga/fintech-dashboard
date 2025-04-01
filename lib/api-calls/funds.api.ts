import { handleApiCall, createApiUrl } from "./api-handler";
import { IApiResponse } from "../models/api.model";
import {
  FundSchema,
  UserInvestmentSchema,
  FundsResponseSchema,
  UserInvestmentsResponseSchema,
  type IFundsResponse,
  type IUserInvestmentDTO,
  type IUserInvestmentsResponse,
} from "../dto/fund.dto";

interface GetFundsParams {
  page?: number;
  limit?: number;
  type?: "mutual" | "index" | "etf";
  risk?: "Low Risk" | "Moderate Risk" | "High Risk";
  search?: string;
}

export const getFunds = async (params?: GetFundsParams): Promise<IApiResponse<IFundsResponse>> => {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const response = await fetch(
    createApiUrl(`/funds?${queryParams.toString()}`),
    { method: "GET" }
  );

  const apiResponse = await handleApiCall<IFundsResponse>(response);
  
  if (apiResponse.data) {
    try {
      const validatedData = FundsResponseSchema.parse(apiResponse.data);
      return { data: validatedData };
    } catch (error) {
      console.error("Validation error:", error);
      return {
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid response data format",
          timestamp: new Date().toISOString(),
        }
      };
    }
  }

  return apiResponse;
};

export const getUserInvestments = async (userId: string): Promise<IApiResponse<IUserInvestmentsResponse>> => {
  const response = await fetch(
    createApiUrl(`/users/${userId}/investments`),
    { method: "GET" }
  );

  const apiResponse = await handleApiCall<IUserInvestmentsResponse>(response);

  if (apiResponse.data) {
    try {
      const validatedData = UserInvestmentsResponseSchema.parse(apiResponse.data);
      return { data: validatedData };
    } catch (error) {
      console.error("Validation error:", error);
      return {
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid response data format",
          timestamp: new Date().toISOString(),
        }
      };
    }
  }

  return apiResponse;
};

export const investInFund = async (
  userId: string,
  fundId: string,
  amount: number
): Promise<IApiResponse<IUserInvestmentDTO>> => {
  const response = await fetch(
    createApiUrl(`/users/${userId}/investments`),
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fundId, amount }),
    }
  );

  const apiResponse = await handleApiCall<IUserInvestmentDTO>(response);

  if (apiResponse.data) {
    try {
      const validatedData = UserInvestmentSchema.parse(apiResponse.data);
      return { data: validatedData };
    } catch (error) {
      console.error("Validation error:", error);
      return {
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid response data format",
          timestamp: new Date().toISOString(),
        }
      };
    }
  }

  return apiResponse;
}; 