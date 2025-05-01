
import React from 'react';

interface TinaCMSProviderProps {
  children: React.ReactNode;
}

const TinaCMSProvider: React.FC<TinaCMSProviderProps> = ({ children }) => {
  // Simply render children without Tina integration
  return <>{children}</>;
};

export default TinaCMSProvider;
