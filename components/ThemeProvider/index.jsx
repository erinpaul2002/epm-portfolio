'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// Available themes
export const THEMES = {
  DARK: 'theme-dark',
  LIGHT: 'theme-light',
  BLUE: 'theme-blue'
};

export const ThemeProvider = ({ children }) => {
  // Initialize theme state
  const [theme, setTheme] = useState(THEMES.DARK); // Default theme
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check if there is a saved theme in localStorage
    const savedTheme = localStorage.getItem('epm-theme');
    // If saved theme exists and it's in our available themes, use it
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (savedTheme === 'theme-glass') {
      // If the saved theme was Glass (now removed), default to Dark theme
      setTheme(THEMES.DARK);
    }
    setMounted(true);
  }, []);

  // Update the theme class on the body element and save to localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;

    // Remove all theme classes
    document.body.classList.remove(...Object.values(THEMES));
    
    // Add the current theme class
    document.body.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('epm-theme', theme);
  }, [theme, mounted]);
  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(currentTheme => {
      switch (currentTheme) {
        case THEMES.DARK:
          return THEMES.LIGHT;
        case THEMES.LIGHT:
          return THEMES.BLUE;
        case THEMES.BLUE:
          return THEMES.DARK;
        default:
          return THEMES.DARK;
      }
    });
  };
  // Get the current theme name for display
  const getThemeName = () => {
    switch (theme) {
      case THEMES.DARK:
        return 'Dark';
      case THEMES.LIGHT:
        return 'Light';
      case THEMES.BLUE:
        return 'Blue';
      default:
        return 'Dark';
    }
  };

  // Value to be provided by the context
  const value = {
    theme,
    toggleTheme,
    getThemeName
  };

  // Only render children when component is mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
