import { create } from "zustand";

export const useThemeStore = create((set) => ({
  themeMode: localStorage.getItem("theme") || "light",
  setTheme: (mode) => {
    localStorage.setItem("theme", mode); 
    set({ themeMode: mode });
  },
}));
