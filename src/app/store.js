import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expense/expenseSlice";
import incomeReducer from "../features/Income/IncomeSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    income: incomeReducer,
  },
});
