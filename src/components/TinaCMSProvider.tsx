
import React from 'react';
import { TinaCMS, TinaProvider } from 'tinacms';
import { useTina } from '@tinacms/react';

interface TinaCMSProviderProps {
  children: React.ReactNode;
}

const cms = new TinaCMS({
  api: {
    branch: 'main',
    clientId: import.meta.env.VITE_TINA_CLIENT_ID,
    token: import.meta.env.VITE_TINA_TOKEN,
    apiHost: import.meta.env.VITE_TINA_API_HOST,
  },
  media: {
    tina: {
      publicFolder: '/public',
      mediaRoot: '/uploads',
    },
  },
});

const TinaCMSProvider: React.FC<TinaCMSProviderProps> = ({ children }) => {
  return <TinaProvider cms={cms}>{children}</TinaProvider>;
};

export { cms, TinaCMSProvider, useTina };
