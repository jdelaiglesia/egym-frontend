import { useState, useEffect } from "react";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { products_gym } from "../../api/data";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await fetch(`http://localhost:3001/api/product/${id}`);
    const data = await res.json();
    const reform = { ...data, quantity: 0 };
    return reform;
  };

  useEffect(() => {
    getProduct()
      .then((data) => setProduct(data[0]))
      .catch((error) => alert("HAY UN RE PROBLEMA"));
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="font-bold text-2xl">Producto no encontrado </h2>
        <img
          src="https://media.stickerswiki.app/whatsapp_cups/883394.512.webp"
          alt=""
        />
      </div>
    );
  }
    return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product.url_image} alt={product.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">{product.available}</div>
            <div className="rating rating-sm">
              <input type="radio" name="rating-9" className="rating-hidden" />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                checked
              />
            </div>
          </h2>
          <p>Descripcion del producto</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.category}</div>
            <div className="badge badge-outline">
              Disponibles : {product.stock}
            </div>
          </div>
          <p>$ {product.price} ARS</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn">
            Comprar
          </button>
          <Link to={`/edit/${id}`}>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn">
              Editar Producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
