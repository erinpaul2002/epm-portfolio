'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import styles from '../components/Certifications/Certifications.module.css';

// Dynamically import ionicons
const IonIcons = dynamic(
  () => import('../components/IonIcons'),
  { ssr: false }
);

export default function Home() {
  const [activePage, setActivePage] = useState('about');
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [certificateSrc, setCertificateSrc] = useState('');

  // Handle navigation
  const handleNavClick = (page: string) => {
    setActivePage(page);
  };

  // Handle opening certificate modal
  const handleCertificateView = (pdfPath: string) => {
    setCertificateSrc(pdfPath);
    setCertificateModalOpen(true);
  };

  // Handle closing certificate modal
  const handleCloseModal = () => {
    setCertificateModalOpen(false);
    setCertificateSrc('');
  };

  // Initialize tech carousel on component mount
  useEffect(() => {
    // Client-side navigation functionality
    const initNavigation = () => {
      // Navigation between pages
      const navLinks = document.querySelectorAll('[data-nav-link]');
      const pages = document.querySelectorAll('[data-page]');

      if (navLinks.length && pages.length) {
        navLinks.forEach(link => {
          link.addEventListener('click', function(this: HTMLElement) {
            const targetPage = this.innerHTML.toLowerCase();
            
            pages.forEach(page => {
              if ((page as HTMLElement).dataset.page === targetPage) {
                page.classList.add('active');
              } else {
                page.classList.remove('active');
              }
            });
          });
        });
      }

      // Sidebar toggle functionality
      const sidebar = document.querySelector('[data-sidebar]');
      const sidebarBtn = document.querySelector('[data-sidebar-btn]');
      
      if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener('click', function() {
          sidebar.classList.toggle('active');
        });
      }

      // Custom select for portfolio filter
      const select = document.querySelector('[data-select]');
      const selectItems = document.querySelectorAll('[data-select-item]');
      const selectValue = document.querySelector('[data-selecct-value]');
      const filterBtn = document.querySelectorAll('[data-filter-btn]');
      const filterItems = document.querySelectorAll('[data-filter-item]');

      if (select && selectItems.length && filterItems.length) {
        select.addEventListener('click', function(this: HTMLElement) {
          this.classList.toggle('active');
        });

        // Filter functionality
        const filterFunc = function(selectedValue: string) {
          filterItems.forEach(item => {
            if (selectedValue === 'all' || selectedValue === (item as HTMLElement).dataset.category) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
        };

        // Handle select items click
        selectItems.forEach(item => {
          item.addEventListener('click', function(this: HTMLElement) {
            const selectedValue = this.innerText.toLowerCase();
            if (selectValue) (selectValue as HTMLElement).innerText = this.innerText;
            if (select) select.classList.remove('active');
            filterFunc(selectedValue);
          });
        });

        // Handle filter buttons click
        if (filterBtn.length) {
          let lastClickedBtn = filterBtn[0];
          
          filterBtn.forEach(btn => {
            btn.addEventListener('click', function(this: HTMLElement) {
              const selectedValue = this.innerText.toLowerCase();
              if (selectValue) (selectValue as HTMLElement).innerText = this.innerText;
              filterFunc(selectedValue);

              lastClickedBtn.classList.remove('active');
              this.classList.add('active');
              lastClickedBtn = btn;
            });
          });
        }
      }

      // Contact form validation
      const form = document.querySelector('[data-form]');
      const formInputs = document.querySelectorAll('[data-form-input]');
      const formBtn = document.querySelector('[data-form-btn]');

      if (form && formInputs.length && formBtn) {
        formInputs.forEach(input => {
          input.addEventListener('input', function() {
            if ((form as HTMLFormElement).checkValidity()) {
              formBtn.removeAttribute('disabled');
            } else {
              formBtn.setAttribute('disabled', '');
            }
          });
        });
      }
    };

    // Initialize navigation
    initNavigation();
    
    // Tech stack carousel functionality
    const initTechCarousel = () => {
      const carousel = document.getElementById('techCarousel');
      if (!carousel) return;

      // Get all original tech items
      const items = Array.from(carousel.querySelectorAll('.tech-item'));
      if (items.length === 0) return;

      // Calculate dimensions
      const firstElement = items[0] as HTMLElement;
      const itemWidth = firstElement.offsetWidth;
      const carouselStyle = window.getComputedStyle(carousel);
      const itemGap = parseInt(carouselStyle.gap || '35');

      let position = 0;
      const speed = 1;
      let paused = false;
      let animationId: number | null = null;

      carousel.addEventListener('mouseenter', () => { paused = true; });
      carousel.addEventListener('mouseleave', () => { paused = false; });

      function animate() {
        if (!paused && carousel) {
          position += speed;
          carousel.style.transition = 'transform 0s linear';
          carousel.style.transform = `translateX(-${position}px)`;

          // When the first item is fully out of view, move it to the end
          if (position >= itemWidth + itemGap) {
            position = 0;
            const firstItem = carousel.firstElementChild;
            if (firstItem) {
              carousel.appendChild(firstItem.cloneNode(true));
              carousel.removeChild(firstItem);
            }
          }
        }
        animationId = requestAnimationFrame(animate);
      }

      animate();

      // Handle visibility changes
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        } else if (!document.hidden && animationId === null) {
          animate();
        }
      });
    };

    // Initialize carousel after DOM is fully loaded
    const timer = setTimeout(() => {
      initTechCarousel();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar activePage={activePage} onNavClick={handleNavClick} />

        {/* Pages */}
        <div className={`about ${activePage === 'about' ? 'active' : ''}`} data-page="about">
          <About />
        </div>

        <div className={`resume ${activePage === 'resume' ? 'active' : ''}`} data-page="resume">
          <Resume />
        </div>

        <div className={`portfolio ${activePage === 'portfolio' ? 'active' : ''}`} data-page="portfolio">
          <Portfolio />
        </div>

        <div className={`certifications ${activePage === 'certifications' ? 'active' : ''}`} data-page="certifications">
          <Certifications onViewCertificate={handleCertificateView} />
        </div>

        <div className={`contact ${activePage === 'contact' ? 'active' : ''}`} data-page="contact">
          <Contact />
        </div>
      </div>

      {/* Certificate Modal */}
      {certificateModalOpen && (
        <div id="certificateModal" className={styles.videoPopup}>
          <div className={styles.videoPopupContent}>
            <span className={styles.closeBtn} onClick={handleCloseModal}>&times;</span>
            <iframe 
              id="certificateIframe" 
              src={certificateSrc}
              width="100%" 
              height="90%" 
              frameBorder="0"
              title="Certificate Viewer"
            ></iframe>
          </div>
        </div>
      )}

      {/* Load ionicons */}
      <IonIcons />
    </main>
  );
}
