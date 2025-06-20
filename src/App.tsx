import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";


import PatientLogin from "./pages/PatientLogin";
import PatientSignp from "./pages/PatientSignup"
import UserDashboard from "./pages/UserDashboard";

import DocSetting from "./components/Settings/docSetting"
import DoctorLogin from "./pages/DoctorLogin";
import DoctorSignup from "./pages/DoctorSignup"
import DoctorDashboard from "./pages/DoctorDashboard";

import ClinicAdminSignup from "./pages/AdminSignup";
import ClinicAdminLogin from "./pages/clinicAdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import HospitalProfile from "./pages/HospitalProfile";
import NotificationPage from "./components/Notification/Notification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/patient-signup" element={<PatientSignp />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />

          <Route path = "/doc-setting" element = {<DocSetting />} />
          <Route path="/doctor-login" element={<DoctorLogin/>} />
          <Route path="/doctor-signup" element={<DoctorSignup/>} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

          <Route path="/clinic-admin-login" element={<ClinicAdminLogin />} />
          <Route path="/admin-signup" element={<ClinicAdminSignup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/hospital-profile" element={<HospitalProfile />} />

          <Route path = "notification" element = {<NotificationPage />} />

          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
