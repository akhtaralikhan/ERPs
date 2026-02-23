// src/App.jsx
import React, { useEffect } from "react";
import feather from "feather-icons";
import { useLocation } from "react-router-dom";
import "../src/assets/css/theme.min.css";
import "../src/vendors/simplebar/simplebar.min.css";

// Route Entry Point
import AppRoutes from "./routes/IndexRouter";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    feather.replace();
  }, [location.pathname, location.search, location.hash]);

  return (
      <AppRoutes/>
  );
};

export default App;
