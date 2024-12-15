import { Routes, Route } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../pages/Home";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ContactPage from "../../pages/ContactPage";
import CheckoutSuccessPage from "../../pages/CheckoutSuccessPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/checkout/" element={<CheckoutPage />} />
          <Route path="/success/" element={<CheckoutSuccessPage />} />
          <Route path="/contact/" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}
