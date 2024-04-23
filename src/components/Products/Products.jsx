import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import axios from '../../helpers/axios'

const getProducts = async () => {
  const res = await axios.get("/products");
  const transformData = await res.data.map((item) => ({ ...item, quantity: 0 }));
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
      {pathname === "/shop" ? (
        <h2 className="mt-10 font-bold text-4xl text-center">Productos</h2>
      ) : (
        <h2 className="mt-10 font-bold text-4xl text-center">Más vendidos</h2>
      )}
      {pathname === "/shop" ? (
        <Filters
          products={productsAux}
          setProducts={setProducts}
          update={update}
          setUpdate={setUpdate}
          setPage={setCurrentPage}
        />
      ) : null}

      <div className="flex flex-wrap justify-center gap-8 mx-10 my-10">
        {pathname === "/"
          ? products
              .slice(0, 5)
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
      ) : (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default Products;
