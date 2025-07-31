// src/App.jsx
import React, { useEffect } from "react";
import feather from "feather-icons";
import "./assets/css/theme.min.css";
import "./vendors/simplebar/simplebar.min.css";

// Route Entry Point
import AppRoutes from "./routes/IndexRouter";

const App = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
      <AppRoutes />
  );
};

export default App;
