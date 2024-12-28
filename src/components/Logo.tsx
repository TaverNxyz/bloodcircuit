import { useEffect, useRef } from 'react';

const Logo = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      element.style.setProperty('--x', `${x * 100}%`);
      element.style.setProperty('--y', `${y * 100}%`);
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={ref}
      className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-gray-200 to-red-600 animate-pulse hover:animate-none transition-all duration-300 font-['JetBrains_Mono']"
      style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
    >
      BloodCircuit
    </div>
  );
};

export default Logo;