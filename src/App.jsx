import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, useConfig } from "./context/ConfigContext";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/navbar/Navbar";
import DynamicPage from "./pages/DynamicPage";

const AppContent = () => {
  const config = useConfig();
  useTheme(config.theme);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <Navbar navItems={config.navigation} />
        <Routes>
          <Route path="/" element={<DynamicPage />} />
          <Route path="/:pageId" element={<DynamicPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <ConfigProvider>
    <AppContent />
  </ConfigProvider>
);

export default App;
