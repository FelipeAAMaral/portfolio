
import React from 'react';
import { TinaEditProvider } from "tinacms";

interface TinaCMSProviderProps {
  children: React.ReactNode;
}

const TinaCMSProvider: React.FC<TinaCMSProviderProps> = ({ children }) => {
  const isEditing = window.location.pathname.includes("/admin");
  
  if (isEditing) {
    return <>{children}</>;
  }
  
  return (
    <TinaEditProvider 
      editMode={false}
      enterEditMode={() => {
        window.location.href = "/admin";
      }}
    >
      {children}
    </TinaEditProvider>
  );
};

export default TinaCMSProvider;
