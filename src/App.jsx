// Import Hooks and utils
import { Routes, Route } from "react-router-dom";
import Whatsapp from "./components/Whatsapp/Whatsapp.jsx";


// Import CartProvider
import { CartProvider } from "./context/cart.jsx";
import ViewMercadoPago from "./views/viewMercadoPago/viewMercadoPago.jsx";

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
  ViewEditProduct,
  ViewProfile,
} from "./views/views.jsx";

export const App = () => {
  return (
    <CartProvider>
    <Whatsapp/>
      <Routes>
        <Route path="/" element={<ViewHome />}></Route>
        <Route path="/shop" element={<ViewShop />}></Route>
        <Route path="/shop/product/:id" element={<ViewProductDetail />}></Route>
        <Route path="/cart" element={<ViewCart />}></Route>
        <Route path="/login" element={<ViewLogin />}></Route>
        <Route path="/register" element={<ViewRegister />}></Route>
        <Route path="/profile" element={<ViewProfile />}></Route>
        <Route path="/dashboard" element={<ViewDashboard />}></Route>
        <Route path="/dashboard/create" element={<ViewCreateProduct />}></Route>
        {/* <Route path="/payment" element={<ViewMercadoPago/>}></Route> */}
        <Route
          path="/dashboard/product/create"
          element={<ViewCreateProduct />}
        ></Route>
        <Route
          path="/dashboard/product/edit"
          element={<ViewEditProduct />}
        ></Route>
      </Routes>
    </CartProvider>
  );
};
