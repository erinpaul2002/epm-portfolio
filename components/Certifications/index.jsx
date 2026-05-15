'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './Certifications.module.css';

const PdfViewer = dynamic(() => import('./PdfViewer'), {
  ssr: false,
  loading: () => <div style={{ color: 'var(--white-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}><span style={{opacity: 0.7}}>Loading Viewer...</span></div>
});

const certifications = [
  {
    title: 'CareOps Hackathon',
    org: 'Humanity Founders',
    pdf: './assets/certificates/CareOps-Hackathon.pdf',
  },
  {
    title: 'FaithConnect Hackathon',
    org: 'Humanity Founders',
    pdf: './assets/certificates/FaithConnect-Hackathon.pdf',
  },
  {
    title: 'Deep Learning',
    org: 'NPTEL · IIT Ropar',
    pdf: './assets/certificates/DeepLearning-IITRopar-NPTEL.pdf',
  },
  {
    title: 'Deep Learning for Computer Vision',
    org: 'NPTEL · IIT Hyderabad',
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
  const [activeIndex, setActiveIndex] = useState(0);
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
      if (modal && event.target === modal) closeModal();
    };
    const handleKeyDown = (e) => { 
      if (e.key === 'Escape') closeModal(); 
      if (!modalOpen) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const onDragEnd = (event, info) => {
    // Swipe detection
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <article 
      className={styles.certifications} 
      data-page="certifications"
    >


      <div className={styles.carouselWrapper}>
        <motion.div 
          className={styles.carouselContainer}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {certifications.map((cert, index) => {
            // Calculate distance/offset from active card
            let offset = index - activeIndex;
            // Shortest path for infinite feel visual
            if (offset > certifications.length / 2) offset -= certifications.length;
            if (offset < -certifications.length / 2) offset += certifications.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 3; 

            // Calculate 3D transforms
            const xVal = offset * 180;
            const zVal = Math.abs(offset) * -250;
            const rotateYVal = offset * -35; 
            const scaleVal = 1 - Math.abs(offset) * 0.1;
            const opacityVal = isVisible ? (1 - Math.abs(offset) * 0.25) : 0;
            
            return (
              <motion.div
                key={index}
                className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
                onClick={() => {
                  if (isActive) {
                    openModal(cert.pdf);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                initial={false}
                animate={{
                  x: xVal,
                  z: zVal,
                  rotateY: rotateYVal,
                  scale: scaleVal,
                  opacity: opacityVal,
                  zIndex: certifications.length - Math.abs(offset)
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  mass: 1
                }}
                style={{
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                aria-hidden={!isActive}
              >
                {/* Visual Glass Overlay for non-active cards to enhance 3D depth */}
                <motion.div 
                  className={styles.cardGlassOverlay} 
                  animate={{ opacity: isActive ? 0 : 0.6 }} 
                  transition={{ duration: 0.3 }}
                />

                {/* PDF Thumbnail Preview */}
                <div className={styles.cardPreview}>
                  {isVisible && (
                    <div className={styles.previewIframeWrapper}>
                      <iframe 
                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        className={styles.previewIframe}
                        title={`${cert.title} Preview`}
                        tabIndex="-1"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={styles.previewOverlay} />
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.cardOrg}>{cert.org}</p>
                  <h3 className={styles.cardTitle}>{cert.title}</h3>
                  
                  <motion.div 
                    className={styles.cardCta}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
                  >
                    View Certificate
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Side Navigation Buttons */}
        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous certification">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next certification">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        {/* Carousel Navigation Dots */}
        <div className={styles.navControls}>
          <div className={styles.dots}>
            {certifications.map((_, idx) => (
              <button 
                key={idx} 
                className={`${styles.dot} ${activeIndex === idx ? styles.activeDot : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to certification ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {!onViewCertificate && modalOpen && (
          <motion.div 
            id="certificateModal" 
            className={styles.videoPopup} 
            role="dialog" 
            aria-modal="true" 
            aria-label="Certificate viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.videoPopupContent}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Certificate View</h3>
                <button
                  className={styles.closeBtn}
                  id="closeCertificateModal"
                  onClick={closeModal}
                  aria-label="Close certificate viewer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className={styles.modalBody}>
                <PdfViewer file={currentPdf} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Certifications;
