import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setIsDark(stored === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative flex items-center w-14 h-7 rounded-full bg-muted border border-border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-primary-foreground" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary-foreground" />
        )}
      </span>
      <Sun className={`absolute left-1.5 w-3 h-3 transition-opacity ${isDark ? 'opacity-30' : 'opacity-0'} text-muted-foreground`} />
      <Moon className={`absolute right-1.5 w-3 h-3 transition-opacity ${isDark ? 'opacity-0' : 'opacity-30'} text-muted-foreground`} />
    </button>
  );
};

export default ThemeToggle;
