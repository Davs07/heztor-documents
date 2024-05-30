import { create } from "zustand";
import themes from "@/lib/data/config/themes";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  changeTheme: (newTheme: string) => void;
}

const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: "theme-1",
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.isDarkMode;
          document.documentElement.classList.toggle("dark", newDarkMode);
          return { isDarkMode: newDarkMode };
        }),
      changeTheme: (newTheme) =>
        set(() => {
          themes.forEach((t) =>
            document.documentElement.classList.remove(t.id)
          );
          document.documentElement.classList.add(newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
