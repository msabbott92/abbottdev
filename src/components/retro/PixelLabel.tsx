import styles from './PixelLabel.module.css';

interface PixelLabelProps {
  text: string;
  className?: string;
}

export function PixelLabel({ text, className = '' }: PixelLabelProps) {
  return (
    <span className={`${styles.label} ${className}`}>
      {'> '}
      {text}
    </span>
  );
}
