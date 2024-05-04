// Import Hooks and utils
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import axios from "../../helpers/axios";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

// Import Components
import Rating from "./Rating/Rating";
import Description from "./Description/Description";
import Opinions from "./Opinions/Opinions";
import Loader from "./Loader/Loader";
import CreateOpinion from "./CreateOpinion/CreateOpinion";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const url = `http://${import.meta.env.VITE_URL}/product/${id}`;

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

  if (!product?.name) {
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
                  !product?.stock ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {product?.available}
              </div>
              <div className="badge badge-outline">Stock: {product?.stock}</div>
              <div className="badge badge-outline">
                {product?.category?.name}
              </div>
            </div>
            <Rating
              rating={
                !product?.averageRating ? 0 : product?.averageRating.toFixed(1)
              }
            />
            <div>
              <span className="text-3xl">
                ${product?.price?.toLocaleString()} ARS
              </span>
            </div>
          </div>
          <div>
            <WhatsappShareButton url={url} className="mr-1">
              <WhatsappIcon size={25} round />
            </WhatsappShareButton>
            <TelegramShareButton url={url} className="mr-1">
              <TelegramIcon size={25} round></TelegramIcon>
            </TelegramShareButton>
            <FacebookShareButton url={url} className="mr-1">
              <FacebookIcon size={25} round></FacebookIcon>
            </FacebookShareButton>
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
              {product?.stock < 1 ? (
                <button className="btn btn-primary" disabled>
                  {" "}
                  Comprar
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => buyNow(product)}
                >
                  Comprar
                </button>
              )}
              {product?.stock < 1 ? (
                <button className="btn btn-neutral" disabled>
                  {" "}
                  Añadir al carrito{" "}
                </button>
              ) : (
                <button
                  className="btn btn-neutral"
                  onClick={() => addToCart(product)}
                >
                  Añadir al carrito
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Description name={product?.name} description={product?.description} />
      <Opinions opinions={product?.comments} />
      <CreateOpinion product_id={product?._id} />
    </>
  );
};

export default ProductDetail;
