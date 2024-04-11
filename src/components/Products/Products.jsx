import ProductCard from "../ProductCard/ProductCard";

import { data } from "../../api/data";

function Products() {
  const products = data;
  return (
    <div className="flex flex-wrap justify-center gap-8 mx-10 my-10">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Products;
