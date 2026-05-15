'use client';

import React from 'react';

export default function CertificateViewer({ src, title }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={src}
        alt={title ? `${title} certificate` : 'Certificate'}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
        loading="eager"
      />
    </div>
  );
}
