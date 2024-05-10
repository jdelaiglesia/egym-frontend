import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <Link to={`/shop/product/${product?._id}`}>
        <figure className="w-full h-64">
          <img src={product?.url_image} alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title truncate">{product?.name}</h2>
        <div className="flex">
          <p
            className={
              product?.stock === 0 ? "text-lg line-through" : "text-lg"
            }
          >
            ${product?.price?.toLocaleString()}
          </p>
          {product?.stock === 0 ? <p className="text-end">Agotado</p> : null}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
