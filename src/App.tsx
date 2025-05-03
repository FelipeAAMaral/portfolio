import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import PostDetailLocal from "./pages/PostDetailLocal";
import PostDetailContentful from "./pages/PostDetailContentful";
import Speaking from "./pages/Speaking";
import Mentorship from "./pages/Mentorship";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => {
  const { t, language } = useLanguage();
  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<PostDetailLocal />} />
              <Route path="/blog/cf/:slug" element={<PostDetailContentful />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
  );
};

export default App;
