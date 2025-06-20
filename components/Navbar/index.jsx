import React from 'react';
import styles from './Navbar.module.css';


const Navbar = ({ activePage, onNavClick }) => {  return (
    <nav className={styles.navbar} data-page="navbar">
      <ul className={styles.navbarList}><li className={styles.navbarItem}>
          <button 
            className={`${styles.navbarLink} ${activePage === 'about' ? styles.active : ''}`} 
            data-nav-link
            onClick={() => onNavClick('about')}
          >
            About
          </button>
        </li>
        <li className={styles.navbarItem}>
          <button 
            className={`${styles.navbarLink} ${activePage === 'resume' ? styles.active : ''}`} 
            data-nav-link
            onClick={() => onNavClick('resume')}
          >
            Resume
          </button>
        </li>
        <li className={styles.navbarItem}>
          <button 
            className={`${styles.navbarLink} ${activePage === 'portfolio' ? styles.active : ''}`} 
            data-nav-link
            onClick={() => onNavClick('portfolio')}
          >
            Portfolio
          </button>
        </li>
        <li className={styles.navbarItem}>
          <button 
            className={`${styles.navbarLink} ${activePage === 'certifications' ? styles.active : ''}`} 
            data-nav-link
            onClick={() => onNavClick('certifications')}          >
            Certifications
          </button>
        </li>
        <li className={styles.navbarItem}>
          <button 
            className={`${styles.navbarLink} ${activePage === 'contact' ? styles.active : ''}`} 
            data-nav-link
            onClick={() => onNavClick('contact')}
          >
            Contact
          </button>
        </li></ul>
    </nav>
  );
};

export default Navbar;
