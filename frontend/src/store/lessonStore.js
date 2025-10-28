import { create } from "zustand";
import lessonsAPI from "../api/lessonsAPI";

export const useLessonStore = create((set) => ({
  lessons: [],
  loading: false,

  fetchLessons: async () => {
    set({ loading: true });
    try {
      const res = await lessonsAPI.getAll();
      set({ lessons: res.data });
    } catch (err) {
      console.error("Fetch lessons failed", err);
    } finally {
      set({ loading: false });
    }
  },
}));
