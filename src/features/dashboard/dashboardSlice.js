import { createSlice } from "@reduxjs/toolkit";
import { getDashboardSummary } from "./dashboardThunk";

const initialState = {
  summary: {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  },
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getDashboardSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getDashboardSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })

      .addCase(getDashboardSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
