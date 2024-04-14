import { Home } from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import { CartProvider } from "./context/cart.jsx";

export const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </CartProvider>
  );
};
