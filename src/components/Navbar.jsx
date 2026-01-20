import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">Portfolio.</a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: var(--navbar-bg);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--navbar-border);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .desktop-menu {
          display: none;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          opacity: 0.8;
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--accent-color);
        }
        .mobile-toggle {
          display: block;
          font-size: 1.5rem;
          color: var(--text-color);
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--secondary-bg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          border-bottom: 1px solid var(--navbar-border);
        }
        
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
