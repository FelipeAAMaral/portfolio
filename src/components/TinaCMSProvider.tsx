
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
  
  return (
    <TinaProvider 
      // TinaProvider doesn't accept editMode prop directly
      content={{
        enabled: false,
        onEditClick: () => {
          window.location.href = "/admin";
        }
      }}
    >
      {children}
    </TinaProvider>
  );
};

export default TinaCMSProvider;
