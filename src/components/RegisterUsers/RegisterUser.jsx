import React, { useState } from "react";
import validation from "./validation";
import axios from "axios";

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    dni: "",
    address: "",
    age: "",
    phoneNumber: "",
    rank: 1
  });
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    dni: "",
    address: "",
    age: "",
    phoneNumber: "",
  });

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
    const numericDni = parseInt(userData.dni);
    const numericAge = parseInt(userData.age);
    const numericPhoneNum = parseInt(userData.phoneNumber);
    const upperCaseName = userData.name.charAt(0).toUpperCase() + userData.name.slice(1).toLowerCase()
    const upperCaseLastname = userData.lastname.charAt(0).toUpperCase() + userData.lastname.slice(1).toLowerCase();

    const allInfo = {
      ...userData,
      name: upperCaseName,
      last_name: upperCaseLastname,
      dni: numericDni,
      age: numericAge,
      phone_number: numericPhoneNum,
      rank: 1
    };
    try {
      await axios.post(`http://localhost:3001/api/user`, allInfo);
    } catch (error) {
      throw error;
    }
  };
  const disableButton = () => {
    const hasErrors = Object.keys(errors).some((key) => errors[key]);
    return hasErrors
  };
  return (
    <>
      <form
        className="bg-slate-200 w-1/2 mx-auto mt-32 rounded-lg p-4 h-1/2 mb-40"
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
            value={userData.name}
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
            value={userData.lastname}
            name="lastname"
            className="grow"
            placeholder="Lastname"
          />
        </label>
        {errors.lastname && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.lastname}
          </p>
        )}
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
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
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
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.password}
          </p>
        )}
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
            value={userData.dni}
            name="dni"
            className="grow"
            placeholder="DNI"
          />
        </label>
        {errors.dni && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.dni}
          </p>
        )}
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
            value={userData.address}
            name="address"
            className="grow"
            placeholder="Address"
          />
        </label>
        {errors.address && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.address}
          </p>
        )}
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
            value={userData.age}
            name="age"
            className="grow"
            placeholder="Age"
          />
        </label>
        {errors.age && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {errors.age}
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
            value={userData.phoneNumber}
            name="phoneNumber"
            className="grow"
            placeholder="Phone number"
          />
        </label>
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {errors.phoneNumber}
          </p>
        )}
        <button
          className="bg-blue-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-10 text-white"
          type="submit"
          disabled={disableButton()}
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default RegisterUser;
