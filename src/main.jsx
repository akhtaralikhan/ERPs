import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/storeContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
// import "flatpickr/dist/flatpickr.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <ThemeProvider>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);
