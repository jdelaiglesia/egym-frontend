import { useCart } from "../../hooks/useCart.jsx";

function CartItem({ product }) {
  const { incrementQty, decrementQty, removeToCart } = useCart();

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2">
      <div className="product-information flex items-center gap-4">
        <figure className="w-12">
          <img src={product.url_image} alt="" />
        </figure>
        <div className="flex flex-col gap-2">
          <p className="text-base">{product.name}</p>
          <p>
            {product.quantity} x ${product.price.toLocaleString("es-AR")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 py-3 px-4 rounded-lg bg-base-200">
          <button onClick={() => decrementQty(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <span>{product.quantity}</span>

          <button onClick={() => incrementQty(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div className="product-del-btn">
          <button
            className="btn btn-circle"
            onClick={() => removeToCart(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
