import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { TinaProvider, TinaCMS } from "tinacms";
import tinaConfig from '../tina/__generated__/config.prebuild';
import { useLanguage } from "./context/LanguageContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Speaking from "./pages/Speaking";
import Mentorship from "./pages/Mentorship";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { useMemo } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const { t, language } = useLanguage();
  console.log('App rendered with language:', language);
  console.log('Translation test:', t('hero.greeting'));
  console.log('Tina config:', tinaConfig);

  // Instancia o CMS corretamente usando o objeto de configuração
  const cms = useMemo(() => new TinaCMS(tinaConfig), []);

  return (
    <TinaProvider cms={cms}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </TinaProvider>
  );
};

export default App;
