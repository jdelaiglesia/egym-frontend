import { Home } from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import { CartProvider } from "./context/cart.jsx";
<<<<<<< HEAD
import CreateProduct from "./components/FormCreateProduct/CreateProduct.jsx";
=======
import ProductEdit from "./components/ProductEdit/ProductEdit.jsx";

>>>>>>> ded1ba7 (se agrego un boton en ProductDetail para editar y se creo un componente para editar el producto)

export const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
<<<<<<< HEAD
        <Route path="/create_product" element={<CreateProduct />}></Route>
=======
        <Route path="/edit/:id" element={<ProductEdit/>}></Route>
>>>>>>> ded1ba7 (se agrego un boton en ProductDetail para editar y se creo un componente para editar el producto)
      </Routes>
    </CartProvider>
  );
};
