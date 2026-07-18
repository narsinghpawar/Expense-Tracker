import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;

export const addIncomeService = async (incomeData) => {
  console.log("Src... " + incomeData.title);
  const response = await api.post("/income/add", incomeData);
  return response.data;
};
