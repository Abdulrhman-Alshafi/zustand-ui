import { useEffect } from "react";
import {
  PlusIcon as Plus,
  MinusIcon as Minus,
  ResetIcon as RotateCcw,
} from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useCountStore } from "./store/useCountStore";
import { useThemeStore } from "./store/useThemeStore";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  const { count, increase, decrease, reset } = useCountStore();
  const { theme } = useThemeStore();
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
        <Header />
        <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-8"> {count} </h2>

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
                    Remove
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
                    Add
                    <Tooltip.Arrow className="fill-gray-900" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
