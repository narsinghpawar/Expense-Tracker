import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;

export const addExpenseService = async (expenseData) => {
  const response = await api.post("/expense/add", expenseData);
  return response.data;
};
