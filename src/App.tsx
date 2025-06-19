
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PatientLogin from "./pages/PatientLogin";
import PatientSignp from "./pages/PatientSignup"
import UserDashboard from "./pages/UserDashboard";


import DoctorLogin from "./pages/DoctorLogin";
import DoctorSignup from "./pages/DoctorSignup"
import DoctorDashboard from "./pages/DoctorDashboard";

import ClinicAdminSignup from "./pages/PatientSignup";
import ClinicAdminLogin from "./pages/clinicAdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Patient Login page */}
          <Route path="/patient-login" element={<PatientLogin />} />

          {/* Patient Signup page */}
          <Route path = "/patient-signup" element = {<PatientSignp />} />

          {/* User Dashboard */}
          <Route path="/user-dashboard" element={<UserDashboard />} />

          {/* Doctor Login page */}
          <Route path="/doctor-login" element={<DoctorLogin />} />

          {/* Doctor Signup page */}
           <Route path="/doctor-signup" element={<DoctorSignup />} />

          {/* Doctor Dashboard */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

        

          {/* Admin Login page */}
          <Route path="/clinic-admin-login" element={<ClinicAdminLogin />} />

          {/* Admin Signup page */}
          <Route path = "/admin-signup" element = {<ClinicAdminSignup />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
