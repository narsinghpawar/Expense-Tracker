import { createSlice } from "@reduxjs/toolkit";
import { addIncome } from "./IncomeThunk";

const initialState = {
  income: [],
  loading: false,
  error: null,
};

const IncomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addIncome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addIncome.fulfilled, (state, action) => {
        state.loading = false;

        // If your thunk returns response.data
        state.income.push(action.payload.data);
      })

      .addCase(addIncome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default IncomeSlice.reducer;
