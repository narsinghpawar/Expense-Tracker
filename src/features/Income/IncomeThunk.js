import { createAsyncThunk } from "@reduxjs/toolkit";
import { addIncomeService } from "./IncomeService";

export const addIncome = createAsyncThunk(
  "income/addIncome",
  async (incomeData, thunkAPI) => {
    try {
      return await addIncomeService(incomeData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
