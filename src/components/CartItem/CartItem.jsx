function CartItem({ product }) {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <div className="flex gap-4 items-center">
        <p className="w-[2rem]">{product.quantity}</p>
        <img className="w-10" src={product.url_image} alt="" />
      </div>
      <h2>{product.name}</h2>
      <p className="text-end">$ {product.price.toLocaleString()}</p>
    </div>
  );
}

export default CartItem;
