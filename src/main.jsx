import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource-variable/comfortaa";
import Toaster from "./components/Toaster.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/Store.js";
import { BrowserRouter } from "react-router-dom";
import ProjectRoutes from "./routes/ProjectRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <NextUIProvider>
          <ProjectRoutes />
          <Toaster />
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

