import { useState } from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps {
  children: React.ReactNode;
  tag?: 'span' | 'h1' | 'h2' | 'h3';
  className?: string;
}

export function GlitchText({ children, tag: Tag = 'span', className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <Tag
      className={`${styles.glitch} ${isGlitching ? styles.active : ''} ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
      data-text={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Tag>
  );
}
