import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.wiera.dev/v1", // ⚠️ bạn đổi URL backend ở đây
  headers: {
    "Content-Type": "application/json",
  },
});

// Tự động xử lý token (sau này có đăng nhập)
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
