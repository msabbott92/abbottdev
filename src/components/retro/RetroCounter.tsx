import styles from './RetroCounter.module.css';

interface RetroCounterProps {
  label: string;
  value: string;
  className?: string;
}

export function RetroCounter({ label, value, className = '' }: RetroCounterProps) {
  return (
    <div className={`${styles.counter} ${className}`}>
      <span className={styles.label}>{label}:</span>{' '}
      <span className={styles.value}>{value}</span>
    </div>
  );
}
