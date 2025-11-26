import { MoonIcon as Moon, SunIcon as Sun } from "@radix-ui/react-icons";
import * as Switch from "@radix-ui/react-switch";
import { useThemeStore } from "../store/useThemeStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <header className="flex items-center justify-between mb-16">
      <h1 className="text-4xl font-bold tracking-tight">Zustand-UI</h1>

      <div className="flex items-center gap-3">
        <Sun className="w-5 h-5" />
        <Switch.Root
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
          className={`w-11 h-6 rounded-full relative transition-colors ${
            theme === "dark" ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          <Switch.Thumb
            className={`block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-5`}
          />
        </Switch.Root>
        <Moon className="w-5 h-5" />
      </div>
    </header>
  );
};

export default Header;
