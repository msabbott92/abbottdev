import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';
import styles from './Clients.module.css';

const clients = [
  { name: 'GeoSure', logo: '/images/clients/geosure.png', url: 'https://geosure.com' },
  { name: 'FTN', logo: '/images/clients/ftn.png', url: 'https://ftnfantasy.com' },
  { name: 'Happy Egg', logo: '/images/clients/happyegg.png' },
  { name: 'Poplight', logo: '/images/clients/poplight.png' },
];

export function Clients() {
  if (clients.length === 0) return null;

  return (
    <SectionWrapper id="clients" label="TRUSTED_BY" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Trusted By
      </motion.h2>

      <motion.div className={styles.logoGrid} variants={fadeInUp}>
        {clients.map((client) => {
          const content = (
            <img src={client.logo} alt={client.name} className={styles.logoImg} />
          );

          return client.url ? (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              aria-label={`Visit ${client.name}`}
            >
              {content}
            </a>
          ) : (
            <div key={client.name} className={styles.logoLink} aria-label={client.name}>
              {content}
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
