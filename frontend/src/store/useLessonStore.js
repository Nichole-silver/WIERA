import { create } from "zustand";
import lessonApi from "../api/lessonApi";

const useLessonStore = create((set) => ({
  lessons: [],
  loading: false,
  error: null,

  fetchLessons: async (group) => {
    try {
      set({ loading: true, error: null, lessons: [] });
      const images = await lessonApi.getByGroup(group);

      const parsed = Object.entries(images).map(([name, base64]) => ({
        label: name.replace(/\.[^/.]+$/, "").toUpperCase(),
        url: `data:image/png;base64,${base64}`,
        category: group,
      }));

      set({ lessons: parsed });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useLessonStore;
