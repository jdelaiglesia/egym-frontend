// Import Hooks and utils
import { Routes, Route } from "react-router-dom";

// Import CartProvider
import { CartProvider } from "./context/cart.jsx";

// Import Views
import {
  ViewDashboard,
  ViewHome,
  ViewShop,
  ViewLogin,
  ViewRegister,
  ViewCart,
  ViewProductDetail,
  ViewCreateProduct,
  ViewEditProduct
} from "./views/views.jsx";

export const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<ViewHome />}></Route>
        <Route path="/shop" element={<ViewShop />}></Route>
        <Route path="/shop/product/:id" element={<ViewProductDetail />}></Route>
        <Route path="/cart" element={<ViewCart />}></Route>
        <Route path="/login" element={<ViewLogin />}></Route>
        <Route path="/register" element={<ViewRegister />}></Route>
        <Route path="/dashboard" element={<ViewDashboard />}></Route>
        <Route path="/dashboard/product/create" element={<ViewCreateProduct />}></Route>
        <Route path="/dashboard/product/edit" element={<ViewEditProduct />}></Route>
      </Routes>
    </CartProvider>
  );
};
