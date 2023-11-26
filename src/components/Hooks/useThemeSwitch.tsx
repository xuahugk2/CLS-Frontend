'use client';
import { useEffect, useState } from 'react';

const useThemeSwitch = () => {
  const preferDarkQuery = '(prefers-color-schema:dark)';
  const storageKey = 'theme';

  const toggleTheme = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    const userRef = window.localStorage.getItem(storageKey);

    return (
      userRef ?? (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light')
    );
  };

  const [mode, setMode] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return { mode, setMode };
};

export default useThemeSwitch;
