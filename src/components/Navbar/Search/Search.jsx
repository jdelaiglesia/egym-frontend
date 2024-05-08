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
    <div>
      <input
        type="text"
        placeholder="Buscar productos"
        className="input input-bordered w-24 md:w-auto focus:outline-none"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={state}
      />
      {error && <div className="absolute text-error">{error}</div>}
    </div>
  );
};

export default Search;
