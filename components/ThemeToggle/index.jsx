'use client';

import React from 'react';
import { useTheme, THEMES } from '../ThemeProvider';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { toggleTheme, getThemeName, theme } = useTheme();

  // Choose the icon based on the current theme
  const getThemeIcon = () => {
    switch (theme) {
      case THEMES.DARK:
        return <ion-icon name="moon-outline"></ion-icon>;
      case THEMES.LIGHT:
        return <ion-icon name="sunny-outline"></ion-icon>;
      case THEMES.BLUE:
        return <ion-icon name="water-outline"></ion-icon>;
      case THEMES.PLUM:
        return <ion-icon name="flower-outline"></ion-icon>;
      case THEMES.EMERALD:
        return <ion-icon name="leaf-outline"></ion-icon>;
      case THEMES.COCOA:
        return <ion-icon name="cafe-outline"></ion-icon>;
      default:
        return <ion-icon name="color-palette-outline"></ion-icon>;
    }
  };

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      title={`Current: ${getThemeName()} theme`}
      aria-label="Toggle theme"
    >
      <div className={styles.themeIcon}>
        {getThemeIcon()}
      </div>
      <span className={styles.themeLabel}>{getThemeName()}</span>
    </button>
  );
};

export default ThemeToggle;
