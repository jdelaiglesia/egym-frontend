import { Home } from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product.jsx";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
    </Routes>
  );
};
