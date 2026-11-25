
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { SavedTripsProvider } from "./context/SavedTripsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SavedTripsProvider>
        <App />
      </SavedTripsProvider>
    </BrowserRouter>
  </StrictMode>
);
