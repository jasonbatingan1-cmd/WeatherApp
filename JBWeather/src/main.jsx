import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeWrapper from "./theme/ThemeWrapper";
import { CssBaseline, useTheme } from "@mui/material";

function ThemedApp() {
  const theme = useTheme();

  return (
    <div
      style={{
        background: theme.palette.background.default,
        minHeight: "100dvh",
        transition: "background 0.3s ease",
      }}
    >
      <App />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeWrapper>
    <CssBaseline />
    <ThemedApp />
  </ThemeWrapper>
);
