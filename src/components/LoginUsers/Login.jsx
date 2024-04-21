import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "./validation";
import { Footer } from "../Footer";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({email: "", password: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
    const validationErrors = validation({ ...userData, [name]: value });
    setErrors(validationErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3001/api/`, userData);
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

  const disableButton = () => {
    const fieldEmpty =
      !userData.email || !userData.password;

    const hasErrors = Object.keys(errors).some((key) => errors[key]);
    return fieldEmpty || hasErrors;
  };

  return (
    <div>
      <form
        className="bg-slate-200 w-80 mx-auto mt-5 rounded-lg p-4 h-96 mr-36 mb-8"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={handleChange}
            value={userData.email}
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        {errors.email && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.email}
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
            type="password"
            onChange={handleChange}
            value={userData.password}
            name="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        {errors.password && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {errors.password}
          </p>
        )}
        <button
          className="bg-blue-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-8 text-white"
          type="submit"
          disabled={disableButton()}
        >
          Ingresar
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
