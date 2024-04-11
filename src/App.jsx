import { Home } from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";

//Commit de prueba
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
    </Routes>
  );
};
