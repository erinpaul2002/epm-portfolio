'use client';
import React, { useState, useEffect } from 'react';
import styles from './Certifications.module.css'; 

const certifications = [
  {
    title: 'Deep Learning',
    org: 'NPTEL-IIT Ropar',
    pdf: './assets/certificates/DeepLearning-IITRopar-NPTEL.pdf',
  },
  {
    title: 'Deep Learning for Computer Vision',
    org: 'NPTEL-IIT Hyderabad',
    pdf: './assets/certificates/DeepLearning-ComputerVision-NPTEL.pdf',
  },
  {
    title: 'Generative AI',
    org: 'IBM',
    pdf: './assets/certificates/GenAI-IBM.pdf',
  },
  {
    title: 'Data Science',
    org: 'IBM',
    pdf: './assets/certificates/DataScience-IBM.pdf',
  },
  {
    title: 'JavaScript DSA',
    org: 'FreeCodeCamp',
    pdf: './assets/certificates/JavaScript-DSA-FreeCodeCamp.pdf',
  },
  {
    title: 'Responsive Web Design',
    org: 'FreeCodeCamp',
    pdf: './assets/certificates/Responsive-WebDesign-FreeCodeCamp.pdf',
  },
];

// Define proper prop types
const Certifications = ({ onViewCertificate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');

  const openModal = (pdf) => {
    // If onViewCertificate prop is provided, use it
    if (onViewCertificate) {
      onViewCertificate(pdf);
    } else {
      // Otherwise use local state for backwards compatibility
      setCurrentPdf(pdf);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentPdf('');
  };

  // Close modal when clicking outside content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById('certificateModal');
      if (modal && event.target === modal) {
        closeModal();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <article className="content-card certifications" data-page="certifications">
      <header>
        <h2 className="h2 article-title">Certifications</h2>
      </header>

      <section className={styles.certificationsList}>
        <ul>
          {certifications.map((cert, idx) => (
            <li className={styles.certificationItem} key={idx}>
              <h3 className={styles.certificationTitle}>{cert.title}</h3>
              <p className={styles.certificationOrg}>{cert.org}</p>
              <a 
                href="#" 
                className="view-certificate-btn" 
                data-pdf={cert.pdf}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(cert.pdf);
                }}
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Only render local modal if not using the parent's modal */}
      {!onViewCertificate && modalOpen && (
        <div id="certificateModal" className="video-popup" style={{ 
          display: 'block', 
          zIndex: 9999, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }}>
          <div className="video-popup-content" style={{ 
            background: 'var(--eerie-black-1)', 
            zIndex: 10000,
            position: 'relative',
            width: '80%',
            maxWidth: '800px',
            height: '80%',
            margin: '5% auto',
            padding: '20px'
          }}>
            <span className="close-btn" id="closeCertificateModal" onClick={closeModal}>&times;</span>
            <iframe
              id="certificateIframe"
              src={currentPdf}
              width="100%"
              height="90%"
              frameBorder="0"
              title="Certificate PDF"
            ></iframe>
          </div>
        </div>
      )}
    </article>
  );
};

export default Certifications;
