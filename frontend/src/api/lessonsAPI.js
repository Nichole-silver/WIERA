import axiosClient from "./axiosClient";

const lessonsAPI = {
  getAll: () => axiosClient.get("/lessons"),
  getById: (id) => axiosClient.get(`/lessons/${id}`),
  updateProgress: (lessonId, progress) =>
    axiosClient.post(`/progress/${lessonId}`, { progress }),
};

export default lessonsAPI;
