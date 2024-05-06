import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "../../../helpers/axios";

const Search = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [error, setError] = useState(null);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSearch = () => {
    const search = Object.values(products).find(
      (product) => product.name.toLowerCase() === state.toLowerCase()
    );
    try {
      if(search){
        navigate(`/shop/product/${search._id}`);
        setError(null);
      } else {
        const productsMatch = products.filter(p => {
          return p.name.toLowerCase().includes(state.toLowerCase());
        });
        navigate('/shop', {state: {productsMatch}});
        setError(null);
      }
    } catch (error) {
      setError("Producto no encontrado!");
    }
    
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setState(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(state);
      setState("");
    }
  };

  return (
    <div className="flex flex-col items-start w-full gap-0 p-0 hover:bg-transparent">
      <input
        type="text"
        placeholder="Buscar productos"
        className="input input-bordered h-10 w-full lg:w-max focus:outline-none"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={state}
      />
      {error && <div className="absolute text-error">{error}</div>}
    </div>
  );
};

export default Search;
