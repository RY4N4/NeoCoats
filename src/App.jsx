// import React, { useState, useEffect, useRef } from 'react';
// import './style.css'; // Import the main CSS file
// import ImageAnalysis from './ImageAnalysis';
// import ContactForm from './Contact';
// import QuoteModal from './QuoteModal';


// function App() {
//   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
//   const [notification, setNotification] = useState(null);

//   const appRef = useRef(null); // Ref for the main app container

//   // Utility Functions
//   const smoothScrollTo = (target) => {
//     try {
//       const element = document.querySelector(target);
//       if (element) {
//         const headerOffset = 80;
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       } else {
//         console.warn(`Element with selector ${target} not found`);
//       }
//     } catch (error) {
//       console.error('Error in smooth scroll:', error);
//     }
//   };

//   const openModal = (modalId) => {
//     if (modalId === 'quoteModal') {
//       setIsQuoteModalOpen(true);
//       document.body.style.overflow = 'hidden';
//       // Focus first input
//       setTimeout(() => {
//         const modal = document.getElementById(modalId);
//         if (modal) {
//           const firstInput = modal.querySelector('input, select, textarea');
//           if (firstInput) {
//             firstInput.focus();
//           }
//         }
//       }, 100);
//     }
//   };

//   const closeModal = (modalId) => {
//     if (modalId === 'quoteModal') {
//       setIsQuoteModalOpen(false);
//       document.body.style.overflow = '';
//     }
//   };

//   const handleScroll = () => {
//     const navbar = document.querySelector('.navbar');
//     if (navbar) {
//       if (window.scrollY > 100) {
//         navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.98)';
//       } else {
//         navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.95)';
//       }
//     }
//   };

//   const handleResize = () => {
//     const navLinksContainer = document.querySelector('.nav-links');
//     if (navLinksContainer && window.innerWidth > 768) {
//       navLinksContainer.classList.remove('active');
//     }
//   };

//   const showNotification = (message, type = 'info') => {
//     setNotification({ message, type });
//     // Auto remove after 5 seconds
//     setTimeout(() => setNotification(null), 5000);
//   };

//   const removeNotification = () => {
//     setNotification(null);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape') {
//         closeModal('quoteModal');
//       }
//     });

//     // Function to open a modal by ID
// function openModal(modalId) {
//   const modal = document.getElementById(modalId);
//   if (modal) {
//     modal.style.display = 'block';
//   }
// }

// // Function to close a modal by ID
// function closeModal(modalId) {
//   const modal = document.getElementById(modalId);
//   if (modal) {
//     modal.style.display = 'none';
//   }
// }


//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//       document.removeEventListener('keydown', (e) => {
//         if (e.key === 'Escape') {
//           closeModal('quoteModal');
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="App" ref={appRef}>
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="container">
//           <div className="nav-content">
//             <div className="brand">
//               <h2 className="brand-name">Neocoats</h2>
//               <span className="brand-tagline">Premium Textures</span>
//             </div>
//             <div className="nav-links">
//               <a Link to="#services" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Services</a>
//               <a Link to="#features" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('#features'); }}>Features</a>
//               <a Link to="/About" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }}>About</a>
//               <a Link to="/Contact" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }}>Contact</a>
//               <button className="btn btn--primary" id="quoteBtn" onClick={() => openModal('quoteModal')}>Get Quote</button>
//               <button className="btn btn--primary" id="login" onClick={() => openModal('login')}>Login</button>
//             </div>
//             <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={(e) => { e.preventDefault(); document.querySelector('.nav-links').classList.toggle('active'); e.currentTarget.classList.toggle('active'); }}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero" id="hero">
//         <div className="container">
//           <div className="hero-content">
//             <div className="hero-text">
//               <h1 className="hero-title">Premium Wall Texture Painting Services in Mumbai</h1>
//               <p className="hero-subtitle">Supreme Quality texture coatings with 10-year warranty. Transform your spaces with European imported materials and professional installation.</p>
//               <div className="hero-actions">
//                 <button className="btn btn--primary btn--lg" id="getQuoteBtn" onClick={() => openModal('quoteModal')}>Get Free Quote</button>
//                 <button className="btn btn--outline btn--lg" id="viewServicesBtn" onClick={() => smoothScrollTo('#services')}>View Services</button>
//               </div>
//               <div className="hero-features">
//                 <div className="hero-feature">
//                   <span className="feature-icon">✓</span>
//                   <span>10-Year Warranty</span>
//                 </div>
//                 <div className="hero-feature">
//                   <span className="feature-icon">✓</span>
//                   <span>European Imports</span>
//                 </div>
//                 <div className="hero-feature">
//                   <span className="feature-icon">✓</span>
//                   <span>Professional Installation</span>
//                 </div>
//               </div>
//             </div>
//             <div className="hero-visual">
//               <div className="texture-showcase">
//                 <div className="texture-sample texture-1"></div>
//                 <div className="texture-sample texture-2"></div>
//                 <div className="texture-sample texture-3"></div>
//                 <div className="texture-sample texture-4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services" id="services">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Our Premium Services</h2>
//             <p className="section-subtitle">Complete texture solutions from manufacturing to installation</p>
//           </div>
//           <div className="services-grid">
//             <div className="service-card">
//               <div className="service-icon">🏛️</div>
//               <h3 className="service-title">Quartz Plaster</h3>
//               <p className="service-description">Seamless look with tough nature, stone and glass combination for vibrant walls and floors</p>
//               <ul className="service-features">
//                 <li>Durable</li>
//                 <li>Seamless</li>
//                 <li>Vibrant finish</li>
//               </ul>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">🎨</div>
//               <h3 className="service-title">Texture Coatings</h3>
//               <p className="service-description">End-to-end solution from manufacturing to installation with 10-year warranty</p>
//               <ul className="service-features">
//                 <li>Manufacturing</li>
//                 <li>Installation</li>
//                 <li>10-year warranty</li>
//               </ul>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">🌧️</div>
//               <h3 className="service-title">Exterior Textures</h3>
//               <p className="service-description">Weather-resistant, waterproof textures for homes and buildings</p>
//               <ul className="service-features">
//                 <li>Weather resistant</li>
//                 <li>Waterproof</li>
//                 <li>Long lasting</li>
//               </ul>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">🏠</div>
//               <h3 className="service-title">Interior Solutions</h3>
//               <p className="service-description">Ceiling to floor applications with monotonous look</p>
//               <ul className="service-features">
//                 <li>Versatile</li>
//                 <li>Complete coverage</li>
//                 <li>Uniform appearance</li>
//               </ul>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">🔳</div>
//               <h3 className="service-title">Polyurethane Flooring</h3>
//               <p className="service-description">Seamless flooring in various shades, easy maintenance for homes and commercial spaces</p>
//               <ul className="service-features">
//                 <li>Seamless</li>
//                 <li>Various shades</li>
//                 <li>Easy maintenance</li>
//               </ul>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">🌿</div>
//               <h3 className="service-title">Lime Materials</h3>
//               <p className="service-description">Different lime forms creating patterns from matte to glossy, smooth to rough</p>
//               <ul className="service-features">
//                 <li>Versatile patterns</li>
//                 <li>Multiple finishes</li>
//                 <li>Natural material</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features" id="features">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Why Choose Neocoats</h2>
//             <p className="section-subtitle">Premium quality with unmatched durability and service</p>
//           </div>
//           <div className="features-grid">
//             <div className="feature-item">
//               <div className="feature-icon">🛡️</div>
//               <h3>10-Year Warranty</h3>
//               <p>Comprehensive warranty after installation</p>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">⛅</div>
//               <h3>Weather Resistance</h3>
//               <p>All surfaces protected against weather</p>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">🇪🇺</div>
//               <h3>European Imports</h3>
//               <p>Premium imported materials and products</p>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">🔧</div>
//               <h3>End-to-End Solutions</h3>
//               <p>Manufacturing to installation services</p>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">💰</div>
//               <h3>Affordable Range</h3>
//               <p>Affordable to high-end pricing options</p>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">✅</div>
//               <h3>Quality Assurance</h3>
//               <p>Professional quality control standards</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Image Analysis Section */}
//       <ImageAnalysis showNotification={showNotification} openModal={openModal} />

//       {/* About Section */}
//       <section className="about" id="about">
//         <div className="container">
//           <div className="about-content">
//             <div className="about-text">
//               <h2 className="section-title">About Neocoats</h2>
//               <p>With years of expertise in premium wall texture painting, Neocoats has established itself as Mumbai's leading provider of high-quality texture coating solutions. We specialize in European imported materials and advanced application techniques.</p>
//               <p>Our commitment to quality is reflected in our comprehensive 10-year warranty and end-to-end service approach. From manufacturing to installation, we ensure every project meets the highest standards of durability and aesthetic appeal.</p>
//               <div className="about-stats">
//                 <div className="stat-item">
//                   <h3>500+</h3>
//                   <p>Projects Completed</p>
//                 </div>
//                 <div className="stat-item">
//                   <h3>10</h3>
//                   <p>Year Warranty</p>
//                 </div>
//                 <div className="stat-item">
//                   <h3>100%</h3>
//                   <p>Client Satisfaction</p>
//                 </div>
//               </div>
//             </div>
//             <div className="about-visual">
//               <div className="quality-badge">
//                 <h3>Premium Quality</h3>
//                 <p>European Standards</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <ContactForm showNotification={showNotification} />

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <h3>Neocoats</h3>
//               <p>Premium Wall Texture Painting Services Mumbai</p>
//             </div>
//             <div className="footer-links">
//               <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Services</a>
//               <a href="#features" onClick={(e) => { e.preventDefault(); smoothScrollTo('#features'); }}>Features</a>
//               <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }}>About</a>
//               <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }}>Contact</a>
              
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2025 Neocoats. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Notification */}
//       {notification && (
//         <div className={`notification notification--${notification.type}`} style={{
//           position: 'fixed',
//           top: '20px',
//           right: '20px',
//           zIndex: '3000',
//           maxWidth: '400px',
//           padding: '16px',
//           borderRadius: '8px',
//           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//           backgroundColor: notification.type === 'success' ? '#10B981' : notification.type === 'error' ? '#EF4444' : '#3B82F6',
//           color: 'white',
//           transform: notification ? 'translateX(0)' : 'translateX(100%)',
//           transition: 'transform 0.3s ease-in-out'
//         }}>
//           <div className="notification-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <span className="notification-message">{notification.message}</span>
//             <button className="notification-close" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '4px', marginLeft: '12px' }} onClick={removeNotification}>&times;</button>
//           </div>
//         </div>
//       )}

//       {/* Quote Modal */}
//       {isQuoteModalOpen && (
//         <QuoteModal closeModal={closeModal} showNotification={showNotification} />
//       )}
//     </div>
//   );
// }

// export default App;






import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './style.css'; // Import the main CSS file
import ImageAnalysis from './ImageAnalysis';
import ContactForm from './Contact';
import QuoteModal from './QuoteModal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Services from "./Services";
// import Features from "./Features";
// import Quote from "./Quote";
import Login from "./Login";


function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const appRef = useRef(null); // Ref for the main app container

  // Utility Functions
  const smoothScrollTo = (target) => {
    try {
      const element = document.querySelector(target);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with selector ${target} not found`);
      }
    } catch (error) {
      console.error('Error in smooth scroll:', error);
    }
  };

  const openModal = (modalId) => {
    if (modalId === 'quoteModal') {
      setIsQuoteModalOpen(true);
      document.body.style.overflow = 'hidden';
      // Focus first input
      setTimeout(() => {
        const modal = document.getElementById(modalId);
        if (modal) {
          const firstInput = modal.querySelector('input, select, textarea');
          if (firstInput) {
            firstInput.focus();
          }
        }
      }, 100);
    }
  };

  const closeModal = (modalId) => {
    if (modalId === 'quoteModal') {
      setIsQuoteModalOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.98)';
      } else {
        navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.95)';
      }
    }
  };

  const handleResize = () => {
    const navLinksContainer = document.querySelector('.nav-links');
    if (navLinksContainer && window.innerWidth > 768) {
      navLinksContainer.classList.remove('active');
    }
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    // Auto remove after 5 seconds
    setTimeout(() => setNotification(null), 5000);
  };

  const removeNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal('quoteModal');
      }
    });

    // Function to open a modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

// Function to close a modal by ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal('quoteModal');
        }
      });
    };
  }, []);

  return (
  <Router>
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo">NeoCoats</Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".nav-links").classList.toggle("active");
              e.currentTarget.classList.toggle("active");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav Links */}
          <div className="nav-links">
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>

            {/* Action Buttons */}
            <div className="nav-actions">
              <Link to="/quote">
                <button className="btn btn--primary" id="quoteBtn">Get Quote</button>
              </Link>
              <Link to="/login">
                <button className="btn btn--secondary" id="login">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/quote" element={<Quote />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>


      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Premium Wall Texture Painting Services in Mumbai</h1>
              <p className="hero-subtitle">Supreme Quality texture coatings with 10-year warranty. Transform your spaces with European imported materials and professional installation.</p>
              <div className="hero-actions">
                <button className="btn btn--primary btn--lg" id="getQuoteBtn" onClick={() => openModal('quoteModal')}>Get Free Quote</button>
                <button className="btn btn--outline btn--lg" id="viewServicesBtn" onClick={() => smoothScrollTo('#services')}>View Services</button>
              </div>
              <div className="hero-features">
                <div className="hero-feature">
                  <span className="feature-icon">✓</span>
                  <span>10-Year Warranty</span>
                </div>
                <div className="hero-feature">
                  <span className="feature-icon">✓</span>
                  <span>European Imports</span>
                </div>
                <div className="hero-feature">
                  <span className="feature-icon">✓</span>
                  <span>Professional Installation</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="texture-showcase">
                <div className="texture-sample texture-1"></div>
                <div className="texture-sample texture-2"></div>
                <div className="texture-sample texture-3"></div>
                <div className="texture-sample texture-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">Complete texture solutions from manufacturing to installation</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3 className="service-title">Quartz Plaster</h3>
              <p className="service-description">Seamless look with tough nature, stone and glass combination for vibrant walls and floors</p>
              <ul className="service-features">
                <li>Durable</li>
                <li>Seamless</li>
                <li>Vibrant finish</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">Texture Coatings</h3>
              <p className="service-description">End-to-end solution from manufacturing to installation with 10-year warranty</p>
              <ul className="service-features">
                <li>Manufacturing</li>
                <li>Installation</li>
                <li>10-year warranty</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🌧️</div>
              <h3 className="service-title">Exterior Textures</h3>
              <p className="service-description">Weather-resistant, waterproof textures for homes and buildings</p>
              <ul className="service-features">
                <li>Weather resistant</li>
                <li>Waterproof</li>
                <li>Long lasting</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3 className="service-title">Interior Solutions</h3>
              <p className="service-description">Ceiling to floor applications with monotonous look</p>
              <ul className="service-features">
                <li>Versatile</li>
                <li>Complete coverage</li>
                <li>Uniform appearance</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔳</div>
              <h3 className="service-title">Polyurethane Flooring</h3>
              <p className="service-description">Seamless flooring in various shades, easy maintenance for homes and commercial spaces</p>
              <ul className="service-features">
                <li>Seamless</li>
                <li>Various shades</li>
                <li>Easy maintenance</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3 className="service-title">Lime Materials</h3>
              <p className="service-description">Different lime forms creating patterns from matte to glossy, smooth to rough</p>
              <ul className="service-features">
                <li>Versatile patterns</li>
                <li>Multiple finishes</li>
                <li>Natural material</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Neocoats</h2>
            <p className="section-subtitle">Premium quality with unmatched durability and service</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>10-Year Warranty</h3>
              <p>Comprehensive warranty after installation</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⛅</div>
              <h3>Weather Resistance</h3>
              <p>All surfaces protected against weather</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🇪🇺</div>
              <h3>European Imports</h3>
              <p>Premium imported materials and products</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3>End-to-End Solutions</h3>
              <p>Manufacturing to installation services</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Affordable Range</h3>
              <p>Affordable to high-end pricing options</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h3>Quality Assurance</h3>
              <p>Professional quality control standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Analysis Section */}
      <ImageAnalysis showNotification={showNotification} openModal={openModal} />

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Neocoats</h2>
              <p>With years of expertise in premium wall texture painting, Neocoats has established itself as Mumbai's leading provider of high-quality texture coating solutions. We specialize in European imported materials and advanced application techniques.</p>
              <p>Our commitment to quality is reflected in our comprehensive 10-year warranty and end-to-end service approach. From manufacturing to installation, we ensure every project meets the highest standards of durability and aesthetic appeal.</p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>10</h3>
                  <p>Year Warranty</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="quality-badge">
                <h3>Premium Quality</h3>
                <p>European Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm showNotification={showNotification} />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Neocoats</h3>
              <p>Premium Wall Texture Painting Services Mumbai</p>
            </div>
            <div className="footer-links">
              <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Services</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); smoothScrollTo('#features'); }}>Features</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('#about'); }}>About</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }}>Contact</a>
              
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Neocoats. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Notification */}
      {notification && (
        <div className={`notification notification--${notification.type}`} style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: '3000',
          maxWidth: '400px',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          backgroundColor: notification.type === 'success' ? '#10B981' : notification.type === 'error' ? '#EF4444' : '#3B82F6',
          color: 'white',
          transform: notification ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out'
        }}>
          <div className="notification-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="notification-message">{notification.message}</span>
            <button className="notification-close" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '4px', marginLeft: '12px' }} onClick={removeNotification}>&times;</button>
          </div>
        </div>
      )}
      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <QuoteModal closeModal={closeModal} showNotification={showNotification} />
      )}
      
      </Router>
    
  );
}

export default App;
