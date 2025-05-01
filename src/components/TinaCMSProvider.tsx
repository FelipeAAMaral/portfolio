
import React from 'react';
import { TinaProvider, TinaEdit } from "tinacms";

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
      // Configure Tina's connection to your content repo
      branch="main"
      clientId="21bc9557-e3ae-427a-bdac-a740447ab551"
      isLocalClient={false}
    >
      <TinaEdit
        editMode={false}
        enterEditMode={() => {
          window.location.href = "/admin";
        }}
      >
        {children}
      </TinaEdit>
    </TinaProvider>
  );
};

export default TinaCMSProvider;
