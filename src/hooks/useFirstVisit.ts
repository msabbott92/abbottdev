import { useState, useCallback } from 'react';

const STORAGE_KEY = 'abbottdev_visited';

/**
 * Checks if this is the user's first visit to the site.
 * Returns { isFirstVisit, markVisited } — call markVisited()
 * after the boot sequence completes.
 */
export function useFirstVisit() {
  const [isFirstVisit] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      // If localStorage isn't available, skip the boot sequence
      return false;
    }
  });

  const markVisited = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Silent fail
    }
  }, []);

  return { isFirstVisit, markVisited };
}
