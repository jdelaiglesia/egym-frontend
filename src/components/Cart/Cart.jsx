import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";
import DiscountCoupon from "../DiscountCoupon/DiscountCoupon";

function Cart() {
    const {
        cart: { products, total, count },
    } = useCart();

    return (
        <div className="cart-container relative">
            <div tabIndex={0}>
                <div>
                    {products.length === 0 ? (
                        <p className="text-xl font-bold px-4 py-2">
                            Todavía no has agregado productos.
                        </p>
                    ) : (
                        products.map((cartItem) => (
                            <CartItem product={cartItem} />
                        ))
                    )}
                    {products.length > 0 && (
                        <div className="flex justify-between items-center px-4 py-2">
                            <DiscountCoupon />
                            <div>
                                <p className="text-right">Total:</p>
                                <p className="text-right font-bold">
                                    $ {total.toLocaleString("es-AR")}
                                </p>
                                <button className="btn btn-primary">
                                    Ir a pagar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
