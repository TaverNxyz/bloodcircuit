export const initScrollOpacity = () => {
  const handleScroll = () => {
    const scrollPercentage = Math.min(window.scrollY / 500, 1);
    document.documentElement.style.setProperty('--scroll-opacity', `${1 - (scrollPercentage * 0.9)}`);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};