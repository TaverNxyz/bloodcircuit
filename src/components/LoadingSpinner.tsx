const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-[#FF6B00]"></div>
    </div>
  );
};

export default LoadingSpinner;