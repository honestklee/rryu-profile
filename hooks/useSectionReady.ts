'use client';

import { useState, useEffect } from 'react';

/**
 * Flips to true after mount + delay so skeletons can show until the section is "ready".
 */
export function useSectionReady(delayMs = 320) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  return ready;
}
