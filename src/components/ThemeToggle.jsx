import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";

    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full
        flex items-center
        border transition-all duration-500
        
        bg-indigo-500/20 border-indigo-500/40
      `}
      aria-label="Toggle Theme"
    >

      {/* Knob */}
      <div
        className={`
          absolute w-6 h-6 rounded-full
          flex items-center justify-center
          transition-all duration-500
          ease-[cubic-bezier(.34,1.56,.64,1)]
          shadow-lg
          ${theme === "dark"
            ? "left-1 bg-indigo-400"
            : "left-9 bg-indigo-400"}
        `}
      >
        {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      </div>
    </button>
  );
}