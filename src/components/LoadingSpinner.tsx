const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#1EAEDB] rounded-full animate-ping" />
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#1EAEDB] rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingSpinner;