import { motion } from 'motion/react';
import { fadeInUp } from '../../lib/animations';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = true }: CardProps) {
  return (
    <motion.div
      className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${onClick ? styles.clickable : ''} ${className}`}
      variants={fadeInUp}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
