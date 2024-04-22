import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";

function Cart() {
  const {
    cart: { products, total },
  } = useCart();

  return (
    <div className="cart-container mx-4 mb-10 mt-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Carrito</h2>
        {products.length === 0 ? (
          <span className="text-2xl font-semibold">
            Todavía no has agregado productos.
          </span>
        ) : (
          products.map((cartItem) => <CartItem product={cartItem} />)
        )}
        {products.length > 0 && (
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-3xl">
                ${total.toLocaleString("es-AR")}
              </span>
            </div>
            <div>
              <button className="btn btn-primary">Ir a pagar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
