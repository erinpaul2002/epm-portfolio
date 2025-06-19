'use client';

import { useEffect } from 'react';

const IonIcons = () => {
  useEffect(() => {
    // Load ionicons scripts
    const addScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    addScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js');
    addScript('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js');

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default IonIcons;
