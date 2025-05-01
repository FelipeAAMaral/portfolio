
import React from 'react';
import { TinaProvider } from "tinacms";

interface TinaCMSProviderProps {
  children: React.ReactNode;
}

const TinaCMSProvider: React.FC<TinaCMSProviderProps> = ({ children }) => {
  const isEditing = window.location.pathname.includes("/admin");
  
  if (isEditing) {
    return <>{children}</>;
  }
  
  // Using TinaProvider instead of TinaEditProvider which is not available
  return (
    <TinaProvider 
      editMode={false}
      onEditChange={() => {
        window.location.href = "/admin";
      }}
    >
      {children}
    </TinaProvider>
  );
};

export default TinaCMSProvider;
