import { create } from "zustand";
import lessonApi from "../api/lessonApi";

const useLessonStore = create((set) => ({
  lessons: [],
  loading: false,
  error: null,

  fetchLessons: async (group) => {
    try {
      set({ loading: true, error: null });
      const res = await lessonApi.getByGroup(group);
      const images = Object.entries(res.data || {}).map(([name, base64]) => ({
        label: name.replace(".png", "").toUpperCase(),
        url: `data:image/png;base64,${base64}`,
      }));
      set({ lessons: images });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useLessonStore;
