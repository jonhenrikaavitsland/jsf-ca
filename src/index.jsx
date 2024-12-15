import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./stores/cartStore/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
