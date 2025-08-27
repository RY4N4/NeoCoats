import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="brand">
              <h2 className="brand-name">Neocoats</h2>
              <span className="brand-tagline">Premium Textures</span>
            </div>
            <div className="nav-links">
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/features" className="nav-link">Features</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              {/* You can keep your buttons here too */}
            </div>
            {/* Include mobile menu button if needed */}
          </div>
        </div>
      </nav>

      {/* Outlet to render selected route */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        {/* Your existing footer content here */}
      </footer>
    </>
  );
};

export default Layout;
