import { createSlice } from "@reduxjs/toolkit";
import { addExpense } from "./expenseThunk";

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(addExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses.push(action.payload);
      })

      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default expenseSlice.reducer;
