import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash in the URL
    if (!hash) {
      // Temporarily set scroll behavior to 'auto' to override smooth scrolling
      document.documentElement.style.scrollBehavior = 'auto';
      // Scroll to top
      window.scrollTo(0, 0);
      // Remove the inline style so it falls back to the CSS rule
      document.documentElement.style.scrollBehavior = '';
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
