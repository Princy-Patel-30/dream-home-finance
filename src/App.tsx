import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Loans from "./pages/Loans";
import Borrowers from "./pages/Borrowers";
import Documents from "./pages/Documents";
import Credit from "./pages/Credit";
import IncomeVerification from "./pages/IncomeVerification";
import Underwriting from "./pages/Underwriting";
import Pricing from "./pages/Pricing";
import Workflows from "./pages/Workflows";
import Communications from "./pages/Communications";
import Compliance from "./pages/Compliance";
import Reporting from "./pages/Reporting";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import UsersPage from "./pages/UsersPage";
import Integrations from "./pages/Integrations";
import ThirdPartyServices from "./pages/ThirdPartyServices";
import Admin from "./pages/Admin";
import GamifiedEducation from "./pages/GamifiedEducation";
import PropertyTours from "./pages/PropertyTours";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/borrowers" element={<Borrowers />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/income-verification" element={<IncomeVerification />} />
            <Route path="/underwriting" element={<Underwriting />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/third-party" element={<ThirdPartyServices />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/education" element={<GamifiedEducation />} />
            <Route path="/property-tours" element={<PropertyTours />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
