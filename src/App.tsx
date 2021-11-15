import "./styles.css";
import { useState } from "react";
import {
  createMuiTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  Typography
} from "@mui/material";
import Remocon from "./Remocon";
import Settings from "./Settings";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [theme, setTheme] = useState({
    typography: {
      fontFamily: [
        "Kosugi Maru",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    },
    palette: {
      type: "dark"
    }
  });
  return (
    <ThemeProvider theme={createMuiTheme(theme as ThemeOptions)}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Remocon />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}
