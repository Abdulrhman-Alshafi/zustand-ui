import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: () => set((state) => ({ count: Math.max(0, state.count - 1) })),
  reset: () => set({ count: 0 }),
}));
