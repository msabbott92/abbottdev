import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './BootSequence.module.css';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  'ABBOTT SYSTEMS v2.6',
  '============================',
  'LOADING MODULES........... OK',
  'INITIALIZING DESIGN....... OK',
  'CONNECTING TO CLIENT...... OK',
  '',
  '> WELCOME TO ABBOTTDEV.AI_',
];

const LINE_DELAY = 350;
const CHAR_SPEED = 20;
const FINAL_PAUSE = 800;

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const reducedMotion = useReducedMotion();

  const finishBoot = useCallback(() => {
    setIsExiting(true);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  // Skip animation if reduced motion
  useEffect(() => {
    if (reducedMotion) {
      finishBoot();
    }
  }, [reducedMotion, finishBoot]);

  // Type out lines one by one
  useEffect(() => {
    if (reducedMotion || isExiting) return;
    if (lineIndex >= BOOT_LINES.length) {
      const timeout = setTimeout(finishBoot, FINAL_PAUSE);
      return () => clearTimeout(timeout);
    }

    const targetLine = BOOT_LINES[lineIndex];

    if (targetLine === '') {
      // Empty line — just add it
      setLines((prev) => [...prev, '']);
      setCurrentLine('');
      const timeout = setTimeout(() => setLineIndex((i) => i + 1), LINE_DELAY / 2);
      return () => clearTimeout(timeout);
    }

    let charIndex = 0;
    setCurrentLine('');

    const interval = setInterval(() => {
      if (charIndex < targetLine.length) {
        setCurrentLine(targetLine.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setLines((prev) => [...prev, targetLine]);
        setCurrentLine('');
        setTimeout(() => setLineIndex((i) => i + 1), LINE_DELAY);
      }
    }, CHAR_SPEED);

    return () => clearInterval(interval);
  }, [lineIndex, isExiting, reducedMotion, finishBoot]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.terminal}>
            <div className={styles.output}>
              {lines.map((line, i) => (
                <div key={i} className={styles.line}>
                  {line}
                </div>
              ))}
              {currentLine && (
                <div className={styles.line}>
                  {currentLine}
                  <span className={styles.cursor}>|</span>
                </div>
              )}
            </div>
          </div>

          <button className={styles.skip} onClick={finishBoot}>
            SKIP &rarr;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
