const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Ray vectors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-orange-500/20 via-transparent to-transparent animate-pulse delay-700" />
      </div>
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-slide-right"
            style={{ top: `${20 * (i + 1)}%`, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;