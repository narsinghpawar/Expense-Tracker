import { createAsyncThunk } from "@reduxjs/toolkit";
import { addExpenseService, updateExpenseService } from "./expenseService";

// Add Expense
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

// Update Expense
export const updateExpense = createAsyncThunk(
  "expense/updateExpense",
  async (expenseData, thunkAPI) => {
    try {
      return await updateExpenseService(expenseData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
