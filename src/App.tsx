import { ThemeProvider } from "@/components/theme-provider";
import { Dashboard } from "@/pages/dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nexasphere-theme">
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
