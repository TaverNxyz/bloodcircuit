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
      className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] via-[#403E43] to-[#ea384c] animate-pulse hover:animate-none transition-all duration-300 font-['Exo_2']"
      style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
    >
      BloodCircuit
    </div>
  );
};

export default Logo;