import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// created by myself

import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      {/* to use Context API */}
      <AppContextProvider>
        <App />
      </AppContextProvider>
  </BrowserRouter>

);
