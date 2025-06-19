import React from 'react';


const Navbar = ({ activePage, onNavClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'about' ? 'active' : ''}`} 
            data-nav-link
            onClick={() => onNavClick('about')}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`} 
            data-nav-link
            onClick={() => onNavClick('resume')}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`} 
            data-nav-link
            onClick={() => onNavClick('portfolio')}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'certifications' ? 'active' : ''}`} 
            data-nav-link
            onClick={() => onNavClick('certifications')}
          >
            Certifications
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`} 
            data-nav-link
            onClick={() => onNavClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
