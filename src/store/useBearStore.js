import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  decrease: () => set((state) => ({ bears: Math.max(0, state.bears - 1) })),
  reset: () => set({ bears: 0 }),
}));
