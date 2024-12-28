const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base layer with noise texture */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#1EAEDB]/50 to-transparent transform"
            style={{
              top: `${(i + 1) * 5}%`,
              animation: `slide-right ${3 + i * 0.5}s linear infinite`,
              opacity: 0.5 - i * 0.02
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#1EAEDB]/30 to-transparent transform"
            style={{
              left: `${(i + 1) * 5}%`,
              animation: `slide-down ${4 + i * 0.5}s linear infinite`,
              opacity: 0.3 - i * 0.01
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1EAEDB]/20 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0FA0CE]/20 rounded-full filter blur-[100px] animate-pulse delay-1000" />
      </div>
      
      {/* Particle effect overlay */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;