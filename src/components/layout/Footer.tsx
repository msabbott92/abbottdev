import { NAV_ITEMS } from '../../lib/constants';
import { RetroCounter } from '../retro/RetroCounter';
import styles from './Footer.module.css';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <button
              className={styles.logo}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Go to top"
            >
              <span className={styles.logoText}>abbottdev</span>
              <span className={styles.logoDot}>.ai</span>
            </button>
            <p className={styles.tagline}>Custom software & AI solutions</p>
          </div>

          {/* Nav links */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.sectionId}>
                  <button
                    className={styles.navLink}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/matthew-abbott-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/msabbott92"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Retro bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.retro}>
            <RetroCounter label="LAST_UPDATED" value="2026.02.25" />
          </div>
          <p className={styles.copyright}>
            &copy; {currentYear} Abbott Endeavors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
