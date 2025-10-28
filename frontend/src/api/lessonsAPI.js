import axiosClient from "./axiosClient";

const lessonApi = {
  async getByGroup(group) {
    const res = await axiosClient.get(`/images/${group}`);
    return res.data; // { data: { 'a.png': 'base64...' } }
  },
};

export default lessonApi;
