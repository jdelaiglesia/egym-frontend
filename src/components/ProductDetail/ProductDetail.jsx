import React from "react";
import { products_gym } from "../../api/data";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const product = data.find((product) => product.id === Number(id));

    if (!product) {
        return <div>Producto no encontrado!</div>;
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
                        <div className="badge badge-secondary">
                            {product.available}
                        </div>
                        <div className="rating rating-sm">
                            <input
                                type="radio"
                                name="rating-9"
                                className="rating-hidden"
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
                        <div className="badge badge-outline">
                            {product.category}
                        </div>
                        <div className="badge badge-outline">
                            Disponibles : {product.quantity}
                        </div>
                    </div>
                    <p>$ {product.price} ARS</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
