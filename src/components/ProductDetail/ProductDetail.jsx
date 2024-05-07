// Import Hooks and utils
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { axios } from "../../helpers/axios";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

// Import Components
import CreateOpinion from "./CreateOpinion/CreateOpinion";
import Description from "./Description/Description";
import Opinions from "./Opinions/Opinions";
import Rating from "./Rating/Rating";
import Loader from "./Loader/Loader";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const url = `http://${import.meta.env.VITE_URL}/product/${id}`;

  const { addToCart, buyNow } = useCart();

  const handleChangeQty = (e) => {
    setProduct({ ...product, quantity: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`/product/${id}`)
      .then(({ data }) => {
        setProduct({ ...data, quantity: 1 });
        setIsLoading(false);
      })
      .catch((error) => null);

    return () => {
      setProduct({});
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <div className="main-detail flex justify-center bg-base-100 gap-10 mx-40 my-10"> */}
          {/* <div className="main-detail flex-col items-center mx-10 py-10 gap-4">
            <div className="detail-1 w-full flex justify-center">
              <figure className="w-[22rem]">
                <img src={product?.url_image} alt={product?.name} />
              </figure>
            </div>

            <div className="detail-2 w-full flex flex-col items-center gap-4 mx-10 my-10">
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
                  <div className="badge badge-outline">
                    Stock: {product?.stock}
                  </div>
                  <div className="badge badge-outline">
                    {product?.category?.name}
                  </div>
                </div>
                <Rating
                  rating={
                    !product?.averageRating
                      ? 0
                      : product.averageRating.toFixed(1)
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
              <div className="detail-info-2 flex flex-col gap-4 justify-center items-center w-full max-w-xs">
                <div className="detail-set-qty w-full max-w-xs flex flex-col items-center">
                  <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
                    Cant.
                    <input
                      type="number"
                      min={1}
                      max={product?.stock}
                      defaultValue={1}
                      className={`grow w-full max-w-xs ${
                        !product?.stock ? "input-disabled" : null
                      }`}
                      placeholder="Ingrese una cantidad"
                      onChange={handleChangeQty}
                      disabled={!product?.stock}
                    />
                  </label>
                </div>
                <div className="flex flex-col justify-between gap-4 w-full max-w-xs">
                  {product?.stock < 1 ? (
                    <button className="btn btn-primary" disabled>
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
                      Añadir al carrito
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
          </div> */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mx-10 my-10">
            <div className="img md:w-[50%] md:flex md:justify-end">
              <img className="md:w-[22rem]" src={product?.url_image} alt={product?.name} />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-2xl">{product?.name}</h2>

              <div className="flex gap-2 items-center">
                <div
                  className={`badge ${
                    !product?.stock ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {product?.available}
                </div>
                <div className="badge badge-outline w-max">
                  Stock: {product?.stock}
                </div>
                <div className="badge badge-outline">
                  {product?.category?.name}
                </div>
              </div>

              <Rating
                rating={
                  !product?.averageRating
                    ? 0
                    : Number(product.averageRating.toFixed(1))
                }
              />

              <span className="price text-3xl">
                ${product?.price?.toLocaleString()} ARS
              </span>

              <div className="share">
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

              <div className="actions flex flex-col w-full gap-4">
                <label className="input input-bordered flex items-center gap-2 w-full">
                  Cant.
                  <input
                    type="number"
                    min={1}
                    max={product?.stock}
                    defaultValue={1}
                    className={`grow ${
                      !product?.stock ? "input-disabled" : null
                    }`}
                    placeholder="Ingrese una cantidad"
                    onChange={handleChangeQty}
                    disabled={!product?.stock}
                  />
                </label>

                <div className="flex gap-2 flex-col md:flex-row">
                {product?.stock < 1 ? (
                    <button className="btn btn-primary" disabled>
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
                      Añadir al carrito
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
          <Description
            name={product?.name}
            description={product?.description}
          />
          <Opinions opinions={product?.comments} />
          <CreateOpinion product_id={product?._id} />
        </>
      )}
    </>
  );
};

export default ProductDetail;
