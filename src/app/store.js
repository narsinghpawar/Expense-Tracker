import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expense/expenseSlice";
import incomeReducer from "../features/Income/IncomeSlice";
import transactionReducer from "../features/Transaction/transactionSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import ReaportDashboard from "../features/report/reportSlice";
export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    income: incomeReducer,
    transaction: transactionReducer,
    dashboard: dashboardReducer,
    report: ReaportDashboard,
  },
});
