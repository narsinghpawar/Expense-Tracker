import { createAsyncThunk } from "@reduxjs/toolkit";

import { getReportService } from "./reportService";

export const getReportDashboard = createAsyncThunk(
  "report/dashboard",

  async (filters, { rejectWithValue }) => {
    try {
      const response = await getReportService(filters);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
