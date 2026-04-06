import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  scrollProgress: number;
}

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: 'down',
    scrollProgress: 0
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / documentHeight, 1);
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';

      setScrollPosition({
        scrollY,
        scrollDirection,
        scrollProgress
      });

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    updateScrollPosition();

    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return scrollPosition;
};
