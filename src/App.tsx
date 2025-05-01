
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import TinaCMSProvider from "./components/TinaCMSProvider";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Speaking from "./pages/Speaking";
import Mentorship from "./pages/Mentorship";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <TinaCMSProvider>
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
      </TinaCMSProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
