import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    // Buscamos el indice de el producto.
    const productInCart = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    // Si el indice es >= a 0 es porque esta en el carrito.
    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      setCountProducts(countProducts + product.quantity);
      setTotal(total + product.price);
      return setCart(newCart);
    } else {
      setCart((prevState) => [
        ...prevState,
        { ...product, quantity: (product.quantity += 1) },
      ]);
      setCountProducts(countProducts + product.quantity);
      setTotal(total + product.price);
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
        countProducts,
        setCountProducts,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
