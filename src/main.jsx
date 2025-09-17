import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import StoreContextProvider from "./context/storeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);
