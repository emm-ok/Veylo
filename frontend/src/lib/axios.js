import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
  withCredentials: true,
});

// export const setupAxiosAuth = (getToken) => {
//   return api.interceptors.request.use(
//     async (config) => {
//       const token = await getToken();

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }

//       return config;
//     },
//     (error) => Promise.reject(error),
//   );
// };