import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;

export const getAllTransactionService = async () => {
  const response = await api.get("/transaction/getAll");
  return response.data;
};
