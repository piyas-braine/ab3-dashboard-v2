import axios from "axios";

export const BASE_URL_REDIRECT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
      : "http://localhost:3000";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/v1"
      : "http://localhost:4000";

export const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "X-Requested-with": "XMLHttpRequest",
    withCredentials: true,
  },
});