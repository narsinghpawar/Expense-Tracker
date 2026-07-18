import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTransactionService } from "./TransactionService";

export const getAllTransactions = createAsyncThunk(
  "transaction/getAllTransactions",
  async (_, thunkAPI) => {
    try {
      return await getAllTransactionService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
