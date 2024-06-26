import React from "react";
import useThemeStore from "@/hooks/useThemeStore"; // Ajusta la ruta según tu estructura de proyecto
import themes, { Theme } from "@/lib/data/config/themes";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ThemeSwitcher = () => {
  const { theme, isDarkMode, toggleDarkMode, changeTheme } = useThemeStore();

  return (
    <div className="min-h-max bg-background text-foreground flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h5>Modo</h5>

        <label
          className="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-card "
          onChange={toggleDarkMode}>
          <span className="absolute inset-[0.1em] rounded-full border-[1px] border-primary"></span>
          <div className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
            <div className="h-[1.5em] w-[1.5em] rounded-full bg-secondary-foreground shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"></div>
          </div>
          <div className="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-input shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"></div>
          <input
            className="peer h-[1em] w-[1em] opacity-0"
            id=""
            name=""
            type="checkbox"
          />
          <span className="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
            <span className="relative h-full w-full rounded-full">
              <span className="absolute inset-[0.1em] rounded-full border border-input"></span>
            </span>
          </span>
        </label>
      </div>
      <div className="flex flex-col gap-3">
        <h5>Tema</h5>
        <div className="grid grid-cols-2 gap-4 w-full max-w-[540px]">
          {themes.map((t) => (
            <Card
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className={cn(
                "w-full h-max gap-4 border-4 rounded-lg border-input bg-background grid grid-cols-2 place-items-center p-6 cursor-pointer",
                theme === t.id && "border-primary"
              )}>
              <h6
                className="font-semibold"
                style={{
                  color: `hsl(${t.main})`,
                }}>
                {t.name}
              </h6>
              <Card className="w-12 h-8 bg-card rounded-lg"></Card>
              <Card className=" w-12 h-8 bg-card rounded-lg"></Card>
              <Card
                className={`w-12 h-8 rounded-lg text-primary`}
                style={{ backgroundColor: `hsl(${t.main})` }}>
                {/* {t.name} */}
              </Card>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
