export const initScrollOpacity = () => {
  const handleScroll = () => {
    const scrollPercentage = Math.min(window.scrollY / 500, 1);
    document.documentElement.style.setProperty('--scroll-opacity', `${1 - (scrollPercentage * 0.9)}`);
  };

  // Initial call to set the initial opacity
  handleScroll();

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
};