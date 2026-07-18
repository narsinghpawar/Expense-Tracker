import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
//http://localhost:5000/api/expense/add

// Add Expense
export const addExpenseService = async (expenseData) => {
  const response = await api.post("/expense/add", expenseData);
  return response.data;
};

// Update Expense
export const updateExpenseService = async (expenseData) => {
  console.log("expenseData.... " + expenseData);
  const response = await api.put(
    `/expense/update/${expenseData.id}`,
    expenseData,
  );

  return response.data;
};
