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

const Certifications = ({ onViewCertificate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');

  const openModal = (pdf) => {
    if (onViewCertificate) {
      onViewCertificate(pdf);
    } else {
      setCurrentPdf(pdf);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentPdf('');
  };

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
    <article className={styles.certifications} data-page="certifications">
      <header>
        <h2 className={styles.articleTitle}>Certifications</h2>
      </header>

      <section className={styles.certificationsGrid}>
        {certifications.map((cert, idx) => (
          <div className={styles.certificationCard} key={idx}>            <h3 className={styles.certificationTitle}>{cert.title}</h3>
            <p className={styles.certificationOrg}>{cert.org}</p>
            <a 
              href="#" 
              className={styles.viewCertificateBtn}
              data-pdf={cert.pdf}
              onClick={(e) => {
                e.preventDefault();
                openModal(cert.pdf);
              }}
            >
              View Certificate
            </a>
          </div>
        ))}
      </section>      {/* Only render local modal if not using the parent's modal */}
      {!onViewCertificate && modalOpen && (
        <div id="certificateModal" className={styles.videoPopup}>
          <div className={styles.videoPopupContent}>
            <span className={styles.closeBtn} id="closeCertificateModal" onClick={closeModal}>&times;</span>
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
