import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../helpers/axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese un nombre"),
    stock: Yup.number().required("Ingrese un número de stock"),
    price: Yup.number().required("Ingrese un precio"),
  });

  const product = location.state.product;
  const formik = useFormik({
    initialValues: {
      name: product?.name,
      stock: product.stock,
      price: product.price,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.put(`/product/${product._id}`, values);

        toast.success("Producto editado.", {
          position: "bottom-right",
          autoClose: 1350,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } catch (error) {
        toast.error("Ha ocurrido un error al editar.", {
          position: "bottom-right",
          autoClose: 1350,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  });

  return (
    <div className="flex justify-center">
      <form className="flex flex-col my-10 p-10 w-96" onSubmit={formik.handleSubmit}>
        <h2 className="text-4xl font-bold text-center mb-6">Editar producto</h2>
        <div className="flex flex-col gap-2 mb-4">
          <img src={product.url_image} alt={product.name} />
        <div className="label">
            <span className="label-text">Nombre</span>
          </div>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            className="input input-bordered w-full max-w-xs"
            placeholder="Nombre del producto"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.name ? formik.errors.name : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <div className="label">
            <span className="label-text">Precio</span>
          </div>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            className="input input-bordered w-full max-w-xs"
            placeholder="Precio"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.price ? formik.errors.price : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
        <div className="label">
            <span className="label-text">Stock</span>
          </div>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
            name="stock"
            className="input input-bordered w-full max-w-xs"
            placeholder="Número de stock"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.stock ? formik.errors.stock : null}
          </span>
        </div>
        <button className="btn btn-primary" type="submit">
          Editar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
