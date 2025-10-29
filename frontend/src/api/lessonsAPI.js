import axiosClient from "./axiosClient";

const lessonApi = {
  getByGroup: async (group) => {
    const res = await axiosClient.get(`/images/${group}`);
    return res.data; // Flask trả JSON đơn giản, không cần .data.data
  },
};

export default lessonApi;
