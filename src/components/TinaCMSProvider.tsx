
import { TinaEditProvider } from "tinacms/dist/edit-state";

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
