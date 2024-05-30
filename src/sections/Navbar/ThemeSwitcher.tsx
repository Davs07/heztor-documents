import React from "react";
import useThemeStore from "@/hooks/useThemeStore"; // Ajusta la ruta según tu estructura de proyecto

const ThemeSwitcher = () => {
  const { theme, isDarkMode, themes, toggleDarkMode, changeTheme } =
    useThemeStore();

  return (
    <div className="min-h-max bg-background text-foreground flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h5>Modo</h5>
        <button
          onClick={toggleDarkMode}
          className="m-4 p-2 bg-primary-foreground text-primary rounded">
          Toggle Dark/Light
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h5>Tema</h5>
        <div className="grid-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className={`m-4 p-2 rounded bg-main text-white`}
              style={{ backgroundColor: `hsl(${t.main})` }}>
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
