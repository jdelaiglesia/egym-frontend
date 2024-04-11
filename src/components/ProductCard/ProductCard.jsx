import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/product/${product.id}`}>
        <figure>
          <img src={product.url_image} alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title truncate">{product.name}</h2>
        <p
          className={
            product.quantity === 0 || !product.available
              ? "text-lg line-through"
              : "text-lg"
          }
        >
          ${product.price}
        </p>
        {product.quantity === 0 || !product.available ? (
          <div className="card-actions justify-end">
            <button disabled className="btn w-full font-bold my-2 btn-primary">
              Sin stock
            </button>
          </div>
        ) : (
          <div className="card-actions justify-end">
            <button
              className="btn w-full font-bold my-2 btn-primary"
              onClick={() => alert("Hay stock de este producto.")}
            >
              Agregar al carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
