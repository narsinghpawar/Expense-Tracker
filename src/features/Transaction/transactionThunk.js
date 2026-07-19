import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTransactionService } from "./TransactionService";

export const getAllTransactions = createAsyncThunk(
  "expense/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllTransactionService();

      return response.data; // ✅ returns the array
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
