'use client';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the worker for pdfjs. This allows parsing the PDF in a background thread.
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
