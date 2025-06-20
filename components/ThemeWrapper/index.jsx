'use client';

import React from 'react';
import ThemeToggle from '../ThemeToggle';

const ThemeWrapper = ({ children }) => {
  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
};

export default ThemeWrapper;
