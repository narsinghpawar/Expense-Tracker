import { createSlice } from "@reduxjs/toolkit";
import { addExpense, updateExpense } from "./expenseThunk";

const initialState = {
  expenses: [],
  selectedExpense: null,
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,

  reducers: {
    setSelectedExpense: (state, action) => {
      state.selectedExpense = action.payload;
    },

    clearSelectedExpense: (state) => {
      state.selectedExpense = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Add Expense
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
      })

      // Update Expense
      .addCase(updateExpense.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateExpense.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.expenses.findIndex(
          (expense) => expense.id === action.payload.id,
        );

        if (index !== -1) {
          state.expenses[index] = action.payload;
        }

        state.selectedExpense = null;
      })

      .addCase(updateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedExpense, clearSelectedExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
