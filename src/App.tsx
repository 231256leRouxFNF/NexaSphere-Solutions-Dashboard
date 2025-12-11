import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Dashboard } from "@/pages/dashboard";
import { WidgetGallery } from "@/pages/widget-gallery";
import { LandingPage } from "@/pages/landing";
import { AuthProvider } from "@/context/auth-context";
import { DashboardProvider } from "@/hooks/use-dashboard-state";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nexasphere-theme">
      <AuthProvider>
        <DashboardProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/widgets" element={<WidgetGallery />} />
            </Routes>
          </BrowserRouter>
        </DashboardProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
