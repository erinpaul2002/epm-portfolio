'use client';

import { useEffect } from 'react';

const IonIcons = () => {
  useEffect(() => {
    // Avoid duplicate injection
    if (document.querySelector('[data-ionicons-loaded]')) return;

    // ESM version — must be loaded as type="module"
    const esmScript = document.createElement('script');
    esmScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    esmScript.type = 'module';
    esmScript.async = true;
    esmScript.setAttribute('data-ionicons-loaded', 'true');
    document.body.appendChild(esmScript);

    // Legacy fallback — only loads when browser does NOT support modules
    const legacyScript = document.createElement('script');
    legacyScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    legacyScript.setAttribute('nomodule', '');
    legacyScript.async = true;
    document.body.appendChild(legacyScript);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default IonIcons;
