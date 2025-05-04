import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-accent dark:bg-dark-accent hover:bg-light-accent/80 dark:hover:bg-dark-accent/80 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-light-text" />
      ) : (
        <Sun className="w-5 h-5 text-dark-text" />
      )}
    </button>
  );
};

export default ThemeToggle;