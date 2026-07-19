import { createSlice } from "@reduxjs/toolkit";
import { getReportDashboard } from "./reportThunk";

const initialState = {
  report: null,
  loading: false,
  error: null,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReportDashboard.pending, (state) => {
        state.loading = true;
      })

      .addCase(getReportDashboard.fulfilled, (state, action) => {
        state.loading = false;

        state.report = action.payload;
      })

      .addCase(getReportDashboard.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default reportSlice.reducer;
