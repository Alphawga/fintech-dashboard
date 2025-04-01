import { z } from "zod";

// Performance Schema
const PerformanceSchema = z.object({
  "1Y": z.number(),
  "3Y": z.number(),
  "5Y": z.number(),
  "10Y": z.number().optional(),
});

// Base Fund Schema
export const FundSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  icon: z.string(),
  iconBg: z.string(),
  returnPercent: z.number(),
  chartColor: z.string(),
  investors: z.string(),
  risk: z.enum(["Low Risk", "Moderate Risk", "High Risk"]),
  term: z.string(),
  type: z.enum(["mutual", "index", "etf"]),
  minInvestment: z.number().min(0),
  expenseRatio: z.number().min(0).max(100),
  rating: z.number().min(0).max(5),
  performance: PerformanceSchema,
});

// User Investment Schema extends Fund Schema
export const UserInvestmentSchema = FundSchema.extend({
  investedAmount: z.number().min(0),
  currentValue: z.number().min(0),
  profitLoss: z.number(),
  allocationPercentage: z.number().min(0).max(100),
  lastTransactionDate: z.string().datetime(),
});

// Infer types from schemas
export type IFundDTO = z.infer<typeof FundSchema>;
export type IUserInvestmentDTO = z.infer<typeof UserInvestmentSchema>;

// Response Schemas for API
export const FundsResponseSchema = z.object({
  funds: z.array(FundSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
});

export const UserInvestmentsResponseSchema = z.object({
  investments: z.array(UserInvestmentSchema),
  totalValue: z.number(),
  totalProfit: z.number(),
  totalAllocation: z.number(),
});

export type IFundsResponse = z.infer<typeof FundsResponseSchema>;
export type IUserInvestmentsResponse = z.infer<typeof UserInvestmentsResponseSchema>; 