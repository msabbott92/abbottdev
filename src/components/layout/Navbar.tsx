import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../../lib/constants';
import { useScrollSection } from '../../hooks/useScrollSection';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSection();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Show navbar after scrolling past the hero
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.6;
      setIsVisible(scrollY > heroHeight);
    };

    // Show navbar immediately on non-home pages
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={styles.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.container}>
          <button className={styles.logo} onClick={goHome} aria-label="Go to top">
            <span className={styles.logoText}>abbottdev</span>
            <span className={styles.logoDot}>.ai</span>
          </button>

          {/* Desktop nav */}
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <button
                  className={`${styles.navLink} ${activeSection === item.sectionId ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className={styles.mobileLinks}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.sectionId}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                >
                  <button
                    className={styles.mobileLink}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <span className={styles.mobileLinkPrefix}>{'> '}</span>
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
