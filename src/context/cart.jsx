import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
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
      (cartItem) => cartItem.id === product.id
    );

    if (checkProductIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart.products[checkProductIndex].quantity += 1;
      newCart.total += product.price;
      newCart.count += product.quantity;
      setCart(newCart);
    } else {
      setCart({
        ...cart,
        products: [
          ...cart.products,
          { ...product, quantity: (product.quantity += 1) },
        ],
        total: cart.total + product.price,
        count: cart.count + product.quantity,
      });
    }
  };

  const removeToCart = (product) => {
    // Completar.
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
