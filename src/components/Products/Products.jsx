import ProductCard from "../ProductCard/ProductCard";
import { useLocation, Link } from "react-router-dom";

import { data } from "../../api/data";

function Products() {
  const products = data;
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mx-10 my-10">
        {pathname === "/"
          ? products
              .slice(0, 10)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
          : products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
      {pathname === "/" ? (
        <Link to="/shop">
          <h2 className="font-bold text-2xl text-center mb-10">
            Ver más productos...
          </h2>
        </Link>
      ) : null}
    </>
  );
}

export default Products;
