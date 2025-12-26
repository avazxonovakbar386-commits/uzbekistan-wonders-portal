// Main App Component with React Router v6 routing
// Dynamic payment route: /payment/:id
// Invalid tour IDs redirect to home (no 404 shown for tour routes)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Tours from "./pages/Tours";
import TravelInfo from "./pages/TravelInfo";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Layout Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/travel-info" element={<TravelInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* Auth Routes (no layout) */}
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          {/* Dynamic Payment Route - reads tour ID from URL */}
          <Route path="/payment/:id" element={<Payment />} />
          {/* 404 - Must be last route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
