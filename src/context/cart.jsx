import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const navigate = useNavigate();
  const { ToastSuccess, ToastWarning, ToastError } = useToast();

  const [cart, setCart] = useState({
    products: [],
    total: 0,
    count: 0,
  });

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
    if (!localStorageCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart(localStorageCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const checkProductIndex = cart.products.findIndex(
      (cartItem) => cartItem._id === product._id
    );

    if (checkProductIndex >= 0) {
      ToastError("El producto ya esta en el carrito.", 1350);
    } else {
      if (product.quantity > product.stock) {
        ToastWarning(`El maximo de productos es ${product.stock}`, 1350);
      } else {
        setCart({
          ...cart,
          products: [
            ...cart.products,
            { ...product, quantity: Number(product.quantity) },
          ],
          total: cart.total + product.price * Number(product.quantity),
          count: cart.count + Number(product.quantity),
        });
        ToastSuccess("El producto se ha agregado al carrito", 1350);
      }
    }
  };

  const buyNow = (product) => {
    addToCart(product);
    ToastSuccess("Redirigiendo al carrito", 1350)
    setTimeout(() => {
      navigate("/cart");
    }, 2000)
  };

  const removeToCart = (product) => {
    const newCart = { ...cart };
    const productIndex = newCart.products.findIndex(
      (cartItem) => cartItem._id === product._id
    );

    if (productIndex >= 0) {
      const removeCartItem = newCart.products[productIndex];
      newCart.products.splice(productIndex, 1);
      newCart.total -= removeCartItem.price * removeCartItem.quantity;
      newCart.count -= removeCartItem.quantity;

      setCart(newCart);
    }
  };

  const decrementQty = (product) => {
    const productIndex = cart.products.findIndex(
      (cartItem) => cartItem._id === product._id
    );

    if (productIndex >= 0) {
      const newCart = { ...cart };
      newCart.products[productIndex].quantity -= 1;
      newCart.total -= product.price;
      newCart.count -= 1;

      if (newCart.products[productIndex].quantity <= 0) {
        newCart.products.splice(productIndex, 1);
      }

      setCart(newCart);
    }
  };

  const incrementQty = (product) => {
    const productIndex = cart.products.findIndex(
      (cartItem) => cartItem._id === product._id
    );

    if (productIndex >= 0) {
      const newCart = { ...cart };
      newCart.products[productIndex].quantity += 1;
      newCart.total += product.price;
      newCart.count += 1;

      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart({
      products: [],
      total: 0,
      count: 0,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        buyNow,
        removeToCart,
        incrementQty,
        decrementQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
