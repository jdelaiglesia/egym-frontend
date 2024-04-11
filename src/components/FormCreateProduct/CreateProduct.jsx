import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    available: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3001/product`, productData);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <form className="bg-slate-200 w-80 mx-auto mt-32 rounded-lg p-4" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={handleChange}
            value={productData.name}
            name="name"
            className="grow"
            placeholder="Name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={handleChange}
            value={productData.price}
            name="price"
            className="grow"
            placeholder="Price"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={handleChange}
            value={productData.available}
            name="available"
            className="grow"
            placeholder="Available"
          />
        </label>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-4" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
