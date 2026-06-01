'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const buttonClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <button
      onClick={buttonClick}
      className="px-4 py-2 rounded-xl dark:bg-gray-800 transition-colors"
    >
      {theme === 'dark' ? <IoSunny color="white" size={20} /> : <IoMoon size={20} color="black" />}
    </button>
  );
};
export default ThemeToggle;
