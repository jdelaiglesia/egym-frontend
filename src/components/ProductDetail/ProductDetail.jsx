// Import Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

// Import Components
import Rating from "./Rating/Rating";
import Description from "./Description/Description";
import Opinions from "./Opinions/Opinions";
import Loader from "./Loader/Loader";

import axios from "../../helpers/axios";


const opinionsList = [
  {
    username: "Rafael",
    body: "La verdad que muy buen producto, 100% recomendable",
  },
  {
    username: "Matias",
    body: "Desde que lo añadi a mi rutina de dieta, la verdad he notado que es un producto bastante bueno.",
  },
  {
    username: "Oscar",
    body: "Un 1000 este producto, 100% recomendable.",
  },
  {
    username: "Santiago",
    body: "Un espectaculo, me comparia 10000 unidades :D",
  },
];

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const { addToCart, buyNow } = useCart();

  const handleChangeQty = (e) => {
    setProduct({ ...product, quantity: e.target.value });
  };

  const getProduct = async () => {
    const res = await axios.get(`/product/${id}`);
    const reform = { ...res.data, quantity: 1 };
    return reform;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct()
      .then((data) => setProduct(data))
      .catch((error) => alert(error.message));
    return () => {
      setProduct({});
    };
  }, []);

  if (!product.name) {
    return <Loader />;
  }

  return (
    <>
      <div className="main-detail flex justify-center bg-base-100 gap-10 mx-40 my-10">
        <div className="detail-1 w-[50%] flex justify-end">
          <figure className="w-[22rem]">
            <img src={product?.url_image} alt={product?.name} />
          </figure>
        </div>

        <div className="detail-2 w-[50%] flex flex-col justify-between items-start gap-4">
          <div className="detail-info-1 flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">{product?.name}</h2>
            <div className="flex gap-2 items-center">
              <div
                className={`badge ${
                  !product?.stock || !product?.available
                    ? "bg-red-600"
                    : "bg-green-600"
                }`}
              >
                {product?.available}
              </div>
              <div className="badge badge-outline">Stock: {product?.stock}</div>
              <div className="badge badge-outline">
                {product?.category?.name}
              </div>
            </div>
            <Rating rating={4.5} />
            <div>
              <span className="text-3xl">
                ${product?.price?.toLocaleString()} ARS
              </span>
            </div>
          </div>
          <div className="detail-info-2 flex flex-col gap-4 justify-around">
            <div className="detail-set-qty">
              <label className="input input-bordered flex items-center gap-2">
                Cant.
                <input
                  type="number"
                  min={1}
                  max={product?.stock}
                  defaultValue={1}
                  className="grow"
                  placeholder="Ingrese una cantidad"
                  onChange={handleChangeQty}
                />
              </label>
            </div>
            <div className="flex justify-between gap-4">
              <button
                className="btn btn-primary"
                onClick={() => buyNow(product)}
              >
                Comprar
              </button>
              <button
                className="btn btn-neutral"
                onClick={() => addToCart(product)}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <Description name={product.name} description={null} />
      <Opinions opinions={opinionsList} />
    </>
  );
};

export default ProductDetail;
