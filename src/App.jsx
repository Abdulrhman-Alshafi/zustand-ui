import { useEffect } from "react";
import {
  MoonIcon as Moon,
  SunIcon as Sun,
  PlusIcon as Plus,
  MinusIcon as Minus,
  ResetIcon as RotateCcw,
} from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Switch from "@radix-ui/react-switch";
import { useBearStore } from "./store/useBearStore";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { bears, increase, decrease, reset } = useBearStore();
  const { theme, toggleTheme } = useThemeStore();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Header + Theme Switch */}
        <header className="flex items-center justify-between mb-16">
          <h1 className="text-4xl font-bold tracking-tight">
            React + Zustand + Radix + Tailwind
          </h1>

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

        {/* Main Card */}
        <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-8">Bears {bears} Bears</h2>

            <div className="flex items-center justify-center gap-6">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button
                      onClick={decrease}
                      className="p-4 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition"
                    >
                      <Minus className="w-6 h-6" />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Content className="bg-gray-900 text-white text-sm px-3 py-2 rounded-md">
                    Remove a bear
                    <Tooltip.Arrow className="fill-gray-900" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>

              <button
                onClick={reset}
                className="p-4 bg-gray-500 hover:bg-gray-600 text-white rounded-full shadow-lg hover:shadow-xl transition"
              >
                <RotateCcw className="w-6 h-6" />
              </button>

              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button
                      onClick={() => increase(1)}
                      className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition"
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Content className="bg-gray-900 text-white text-sm px-3 py-2 rounded-md">
                    Add a bear
                    <Tooltip.Arrow className="fill-gray-900" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>
        </main>

        <footer className="mt-16 text-center text-sm text-gray-500">
          JS version • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default App;
