import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './TerminalText.module.css';

interface TerminalTextProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
  tag?: 'span' | 'p' | 'h2' | 'h3' | 'div';
  className?: string;
}

export function TerminalText({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  onComplete,
  tag: Tag = 'span',
  className = '',
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(cursor);
  const reducedMotion = useReducedMotion();
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (reducedMotion) {
      setDisplayedText(text);
      setShowCursor(false);
      if (onCompleteRef.current && !completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current();
      }
      return;
    }

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;

      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId!);
          intervalId = null;
          setIsTyping(false);
          if (onCompleteRef.current && !completedRef.current) {
            completedRef.current = true;
            onCompleteRef.current();
          }
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay, reducedMotion]);

  return (
    <Tag className={`${styles.terminal} ${className}`}>
      {displayedText}
      {showCursor && (
        <span
          className={`${styles.cursor} ${isTyping ? styles.cursorSolid : styles.cursorBlink}`}
          aria-hidden="true"
        >
          _
        </span>
      )}
    </Tag>
  );
}
