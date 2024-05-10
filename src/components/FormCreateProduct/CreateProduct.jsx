import React, { useState } from "react";
import axios from "axios";
import validation from "./validation";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    available: "",
  });
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setProductData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));

    const validationErrors = validation({ ...productData, [name]: value });
    setErrors(validationErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL, productData);
    } catch (error) {
      throw error;
    }
  };

  const disableButton = () => {
    const fieldEmpty =
      !productData.name || !productData.price || !productData.available;

    const hasErrors = Object.keys(errors).some((key) => errors[key]);
    return fieldEmpty || hasErrors;
  };

  return (
    <div>
      <form
        className="bg-slate-200 w-80 mx-auto mt-32 rounded-lg p-4 h-96"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 mb-12">
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
        {errors.name && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.name}
          </p>
        )}
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
        {errors.price && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {errors.price}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-5 mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={productData.available}
            name="available"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2">Available</span>
        </label>

        <button
          className="bg-blue-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-4 text-white"
          type="submit"
          disabled={disableButton()}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
