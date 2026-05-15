'use client';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Polyfill for Promise.withResolvers — required by pdfjs-dist 4+
// Missing in older mobile browsers (e.g. iOS < 17, older Android WebViews)
if (typeof Promise.withResolvers === 'undefined') {
  Promise.withResolvers = function () {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

// Configure the worker for pdfjs. Uses explicit https:// to avoid protocol issues on mobile.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ file }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Document
        file={file}
        loading={
          <div style={{ color: 'var(--white-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{opacity: 0.7}}>Loading Certificate...</span>
          </div>
        }
        error={
          <div style={{ color: 'var(--accent-color)' }}>
            Failed to load PDF.
          </div>
        }
      >
        <Page 
          pageNumber={1} 
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
          className="pdf-page-wrapper"
        />
      </Document>
    </div>
  );
}
