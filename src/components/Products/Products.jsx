import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Fallback from "../ProductCard/Fallback";
import { axios } from "../../helpers/axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [productsAux, setProductsAux] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const ITEMS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const selectedData = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const { pathname } = useLocation();
  const location = useLocation();

  const getProducts = () => {
    axios
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
        setProductsAux(data);
        setIsLoading(false);
      })
      .catch((error) => null);
  };

  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    window.scrollTo(0, 0);
    if(location.state?.productsMatch && location.state?.productsMatch.length >= 1){
      setProducts(location.state?.productsMatch);
      setProductsAux(location.state?.productsMatch);
      setIsLoading(false);
      setCurrentPage(1)
      setKey(Math.random()); // Forzar una nueva renderización
    } else{
      getProducts();
    }
  }, [location.state]);

  return (
    <div key={key}>
      {pathname === "/shop" ? (
        <>
          <h2 className="mt-10 font-bold text-4xl text-center">Productos</h2>
          <div className="flex justify-center pt-10">
          <button onClick={getProducts} className="btn m-1 ">
            Todos los productos
          </button>
          <Filters
            products={productsAux}
            setProducts={setProducts}
            update={update}
            setUpdate={setUpdate}
            setPage={setCurrentPage}
          />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mx-10 my-10">
            {pathname === "/shop" && isLoading
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <Fallback key={item} />
                ))
              : selectedData.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
          />
        </>
      ) : pathname === "/" ? (
        <>
          <h2 className="mt-10 font-bold text-4xl text-center">Más vendidos</h2>
          <div className="flex flex-wrap justify-center gap-8 mx-10 my-10">
            {pathname === "/" && isLoading
              ? [1, 2, 3, 4, 5].map((item) => <Fallback key={item} />)
              : selectedData
                  .map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))
                  .slice(0, 5)}
          </div>
          <Link to="/shop">
            <h2 className="font-bold text-2xl text-center mb-10">
              Ver más productos...
            </h2>
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default Products;
