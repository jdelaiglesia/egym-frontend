import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSearch = () => {
    const product = products.find(
      (product) => product.name.toLowerCase() === state.toLowerCase()
    );
    if (product) {
      navigate(`/product/${product.id}`);
      setError(null);
    } else {
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
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={state}
      />
      {error && <div className="absolute text-error">{error}</div>}
    </div>
  );
};

export default Search;
