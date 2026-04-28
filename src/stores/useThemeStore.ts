import { create } from "zustand";
import type { TTheme } from "../types/theme";
import { persist } from "zustand/middleware";

type TUseThemeStore = {
  currentTheme: TTheme;
  changeTheme: (theme: TTheme) => void;
};

export const useThemeStore = create<TUseThemeStore>()(
  persist(
    (set) => ({
      currentTheme: "light",
      changeTheme: (theme: TTheme) => set({ currentTheme: theme }),
    }),
    { name: "currentTheme" },
  ),
);
