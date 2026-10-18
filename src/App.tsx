import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CookieBanner />
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
