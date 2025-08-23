import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
      <ToastContainer />
    </RouterProvider>
  </StrictMode>
);
