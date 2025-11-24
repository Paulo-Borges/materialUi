import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes/Light.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);
