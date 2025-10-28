import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  progress: {},
  setUser: (user) => set({ user }),
  updateProgress: (lessonId, value) =>
    set((state) => ({
      progress: { ...state.progress, [lessonId]: value },
    })),
}));
