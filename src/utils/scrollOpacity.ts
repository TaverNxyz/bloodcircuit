export const initScrollOpacity = () => {
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const opacity = Math.min(scrolled / (maxScroll * 0.2), 1);
    
    document.documentElement.style.setProperty('--scroll-opacity', opacity.toString());
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};