import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AppThemeProvider } from "./shared/contexts/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AppThemeProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AppThemeProvider>
);
