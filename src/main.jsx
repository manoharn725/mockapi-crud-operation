import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";
import Router from "./Router.jsx";
import { EditProvider } from "./context/EditMode/editModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <EditProvider >
        <Router />
      </EditProvider>
    </Provider>
  </StrictMode>
);
