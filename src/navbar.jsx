// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ onGetQuote, onLogin }) => (
//   <nav className="neo-navbar">
//     <div className="neo-logo-container">
//       <Link to="/" className="neo-logo-link">
//         <span className="neo-logo-text">Neocoats</span>
//         <span className="neo-logo-tagline">Premium Textures</span>
//       </Link>
//     </div>
//     <ul className="neo-nav-links">
//       <li><Link to="/services" className="neo-nav-link">Services</Link></li>
//       <li><Link to="/features" className="neo-nav-link">Features</Link></li>
//       <li><Link to="/about" className="neo-nav-link">About</Link></li>
//       <li><Link to="/contact" className="neo-nav-link">Contact</Link></li>
//     </ul>
//     <div className="neo-navbar-actions">
//       <button className="neo-btn neo-btn-primary" onClick={onGetQuote}>Get Quote</button>
//       <button className="neo-btn neo-btn-primary" onClick={onLogin}>Login</button>
//     </div>
//   </nav>
// );

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onGetQuote, onLogin }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    if (isMobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav className="neo-navbar">
      <div className="neo-logo-container">
        <Link to="/" className="neo-logo-link" onClick={handleLinkClick}>
          <span className="neo-logo-text">Neocoats</span>
          <span className="neo-logo-tagline">Premium Textures</span>
        </Link>
      </div>
      
      <button 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={toggleMobileMenu} 
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`neo-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/services" className="neo-nav-link" onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/features" className="neo-nav-link" onClick={handleLinkClick}>Features</Link></li>
        <li><Link to="/about" className="neo-nav-link" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/contact" className="neo-nav-link" onClick={handleLinkClick}>Contact</Link></li>
      </ul>

      <div className="neo-navbar-actions">
        <button className="neo-btn neo-btn-primary" onClick={onGetQuote}>Get Quote</button>
        <button className="neo-btn neo-btn-primary" onClick={onLogin}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
