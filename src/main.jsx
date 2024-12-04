import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppContextWrapper from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextWrapper>
    <BrowserRouter>
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode> */}
    </BrowserRouter>
  </AppContextWrapper>
);
