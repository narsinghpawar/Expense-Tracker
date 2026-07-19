import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getDashboardSummaryService = async () => {
  const response = await api.get("/dashboard/summary");
  return response.data;
};
