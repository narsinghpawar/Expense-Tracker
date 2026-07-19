import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardSummaryService } from "./dashboardService";

export const getDashboardSummary = createAsyncThunk(
  "dashboard/getSummary",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getDashboardSummaryService();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
