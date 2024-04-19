// Import Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { addToCart } = useCart();

  const handleChangeQty = (e) => {
    setProduct({ ...product, quantity: e.target.value });
  };

  const getProduct = async () => {
    const res = await fetch(`http://localhost:3001/api/product/${id}`);
    const data = await res.json();
    const reform = { ...data, quantity: 1 };
    return reform;
  };

  useEffect(() => {
    getProduct()
      .then((data) => setProduct(data))
      .catch((error) => alert(error.message));
    return () => {
      setProduct({});
    };
  }, []);

  if (!product.name) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4.5rem)]">
        <span className="loading loading-spinner w-[10rem]"></span>
      </div>
    );
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
              <div className="badge badge-outline">{product?.category}</div>
            </div>
            <div className="rating rating-sm items-baseline">
              <span>4.5</span>
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
            <div>
              <span className="text-3xl">
                ${product?.price?.toLocaleString()} ARS
              </span>
            </div>
          </div>

          <div className="detail-info-2 flex flex-col gap-4 justify-around">
            <div className="">
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
              <button className="btn btn-primary">Comprar</button>
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
      <div className="detail-description flex flex-col gap-2 mx-40 my-10">
        <h2 className="font-bold text-2xl">Descripción</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          eligendi velit nihil sapiente eius quam totam rerum veniam placeat
          optio est ab quia, possimus ex ea vero, neque, fugiat labore. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Officia, iste.
          Perferendis dolor, ex voluptatum unde consequatur fuga esse.
          Repellendus iure officia cumque dicta fugiat accusantium nisi fuga
          corporis amet atque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Neque minus sequi vitae sunt molestias quaerat magni
          necessitatibus rem odio numquam repudiandae quisquam enim, quo
          nesciunt ad nihil eveniet ipsam soluta?
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
