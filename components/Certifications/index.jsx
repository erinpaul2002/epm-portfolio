'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CertificateViewer from './CertificateViewer';
import styles from './Certifications.module.css';

const certifications = [
  {
    title: 'CareOps Hackathon',
    org: 'Humanity Founders',
    image: './assets/images/certificate-CareOps-Hackathon.png',
  },
  {
    title: 'FaithConnect Hackathon',
    org: 'Humanity Founders',
    image: './assets/images/certificate-FaithConnect-Hackathon.png',
  },
  {
    title: 'Deep Learning',
    org: 'NPTEL · IIT Ropar',
    image: './assets/images/certificate-DeepLearning-IITRopar-NPTEL.png',
  },
  {
    title: 'Deep Learning for Computer Vision',
    org: 'NPTEL · IIT Hyderabad',
    image: './assets/images/certificate-DeepLearning-ComputerVision-NPTEL.png',
  },
  {
    title: 'Generative AI',
    org: 'IBM',
    image: './assets/images/certificate-GenAI-IBM.png',
  },
  {
    title: 'Data Science',
    org: 'IBM',
    image: './assets/images/certificate-DataScience-IBM.png',
  },
  {
    title: 'JavaScript DSA',
    org: 'FreeCodeCamp',
    image: './assets/images/certificate-JavaScript-DSA-FreeCodeCamp.png',
  },
  {
    title: 'Responsive Web Design',
    org: 'FreeCodeCamp',
    image: './assets/images/certificate-Responsive-WebDesign-FreeCodeCamp.png',
  },
];

const Certifications = ({ onViewCertificate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);

  const openModal = (certificate) => {
    if (onViewCertificate) {
      onViewCertificate(certificate);
      return;
    }

    setCurrentCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCertificate(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById('certificateModal');
      if (modal && event.target === modal) {
        closeModal();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }

      if (!modalOpen) {
        if (event.key === 'ArrowRight') handleNext();
        if (event.key === 'ArrowLeft') handlePrev();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const onDragEnd = (event, info) => {
    const threshold = 50;

    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <article className={styles.certifications} data-page="certifications">
      <div className={styles.carouselWrapper}>
        <motion.div
          className={styles.carouselContainer}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {certifications.map((cert, index) => {
            let offset = index - activeIndex;

            if (offset > certifications.length / 2) offset -= certifications.length;
            if (offset < -certifications.length / 2) offset += certifications.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 3;
            const xVal = offset * 180;
            const zVal = Math.abs(offset) * -250;
            const rotateYVal = offset * -35;
            const scaleVal = 1 - Math.abs(offset) * 0.1;
            const opacityVal = isVisible ? 1 - Math.abs(offset) * 0.25 : 0;

            return (
              <motion.div
                key={index}
                className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
                onClick={() => {
                  if (isActive) {
                    openModal(cert);
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
                  zIndex: certifications.length - Math.abs(offset),
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  mass: 1,
                }}
                style={{
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                aria-hidden={!isActive}
              >
                <motion.div
                  className={styles.cardGlassOverlay}
                  animate={{ opacity: isActive ? 0 : 0.6 }}
                  transition={{ duration: 0.3 }}
                />

                <div className={styles.cardPreview}>
                  {isVisible && (
                    <div className={styles.previewImageWrapper}>
                      <img
                        src={cert.image}
                        className={styles.previewImage}
                        alt={`${cert.title} certificate preview`}
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
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrev}
          aria-label="Previous certification"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next certification"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

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

      <AnimatePresence>
        {!onViewCertificate && modalOpen && currentCertificate && (
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
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Certificate View</h3>
                <button
                  className={styles.closeBtn}
                  id="closeCertificateModal"
                  onClick={closeModal}
                  aria-label="Close certificate viewer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className={styles.modalBody}>
                <CertificateViewer
                  src={currentCertificate.image}
                  title={currentCertificate.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Certifications;
