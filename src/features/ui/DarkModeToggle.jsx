import { Moon, Sun } from "@phosphor-icons/react";
import { useDarkMode } from "../../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative block rounded-full px-2 py-2 outline-none transition-all duration-300  hover:text-cyan focus:ring-2 focus:ring-offset-2 dark:hover:text-cyan"
    >
      {isDarkMode ? (
        <Sun size={16} weight="bold" />
      ) : (
        <Moon size={16} weight="bold" />
      )}
    </button>
  );
}

export default DarkModeToggle;
