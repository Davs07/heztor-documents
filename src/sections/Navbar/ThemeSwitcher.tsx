// src/components/ThemeSwitcher.jsx
import React, { useState, useEffect } from "react";
import themes from "@/lib/data/config/themes";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("theme-1");

  const root = window.document.documentElement;

  useEffect(() => {
    themes.forEach((t) => root.classList.remove(t.id));
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="space-x-2">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`m-4 p-2 rounded bg-main text-white`}
          style={{ backgroundColor: `hsl(${t.main})` }}>
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
