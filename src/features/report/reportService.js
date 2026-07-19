import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getReportService = async (params) => {
  const response = await api.get("/report/dashboard", {
    params,
  });

  return response.data;
};
