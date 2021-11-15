import "./styles.css";
import { useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  Typography
} from "@mui/material";
import Remocon from "./Remocon";
import Settings from "./Settings";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const theme = createTheme({
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
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Remocon />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}
