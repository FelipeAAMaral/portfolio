
import React from 'react';
import { TinaProvider } from "tinacms";
import type { TinaEditProps } from 'tinacms';

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
      enabled={!isEditing}
      clientId="21bc9557-e3ae-427a-bdac-a740447ab551"
      branch="main"
      tinaioConfig={{
        frontendUrlOverride: window.location.origin,
      }}
      onLogin={() => {
        window.location.href = "/admin";
      }}
      onLogout={() => {
        window.location.reload();
      }}
    >
      {children}
    </TinaProvider>
  );
};

export default TinaCMSProvider;
