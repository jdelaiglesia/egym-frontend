import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";

const getProducts = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
  const data = await res.json();
  const transformData = await data.map((item) => ({ ...item, quantity: 0 }));
  return transformData;
};

function Products() {
  const [products, setProducts] = useState([]);
  const [productsAux, setProductsAux] = useState([]);
  const [update, setUpdate] = useState(false);

  const ITEMS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const selectedData = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const { pathname } = useLocation();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setProductsAux(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Filters
        products={productsAux}
        setProducts={setProducts}
        update={update}
        setUpdate={setUpdate}
        setPage={setCurrentPage}
      />
      <div className="flex flex-wrap justify-center gap-8 mx-10 my-10">
        {pathname === "/disabled"
          ? products
              .slice(0, 10)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
          : selectedData.map((product) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </>
  );
}

export default Products;
