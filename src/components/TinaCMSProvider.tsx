
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
      enabled={false}
      clientId="21bc9557-e3ae-427a-bdac-a740447ab551"
      onEdit={() => {
        window.location.href = "/admin";
      }}
    >
      {children}
    </TinaProvider>
  );
};

export default TinaCMSProvider;
