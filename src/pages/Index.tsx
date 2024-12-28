import { Suspense, useState, useEffect } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";
import InitialTerminal from "@/components/InitialTerminal";
import MainContent from "@/components/main/MainContent";

const Index = () => {
  const [showInitialTerminal, setShowInitialTerminal] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited');
    setShowInitialTerminal(!hasVisited);
  }, []);

  const handleTerminalComplete = () => {
    sessionStorage.setItem('visited', 'true');
    setShowInitialTerminal(false);
  };

  if (showInitialTerminal) {
    return <InitialTerminal onComplete={handleTerminalComplete} />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MainContent />
    </Suspense>
  );
};

export default Index;