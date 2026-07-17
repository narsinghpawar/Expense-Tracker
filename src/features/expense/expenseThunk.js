import { createAsyncThunk } from "@reduxjs/toolkit";
import { addExpenseService } from "./expenseService";

export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async (expenseData, thunkAPI) => {
    try {
      return await addExpenseService(expenseData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
