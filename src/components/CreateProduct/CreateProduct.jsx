import axios from "axios";
import { useState, useEffect } from "react"
import { useFormik } from "formik";
import * as  Yup from 'yup';

const CreateProduct = () => {

  const [categories, setCategories] = useState([])

  const validationSchema = Yup.object({
    name: Yup.string().required('Ingrese un producto valido'),
    stock: Yup.number().required('Stock requerido'),
    price: Yup.number().required('Precio requerido'),
    url_image: Yup.string().required('Imagen requerida'),
    available: Yup.boolean().required('Disponibilidad requerida'),
    category: Yup.string().required('Categoria requerida'),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      stock: "",
      available: "",
      price: "",
      url_image: "",
      category: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:3001/api/product`, values);
        alert("Producto publicado")
      } catch (error) {
        alert("Hubo un error al publicar el producto.")
      }
    }
  })

  useEffect(() => {
    axios("http://localhost:3001/api/categories").then(({ data }) => setCategories(data))
  }, [])

  return (
    <div>
      <form
        className="bg-base-100 w-1/2 mx-auto mt-32 rounded-lg p-4 h-1/2 mb-40"
        onSubmit={formik.handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            className="grow"
            placeholder="Nombre"
          />
        </label>
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-xs absolute">
            {formik.errors.name}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-10 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
            name="stock"
            className="grow"
            placeholder="Stock"
          />
        </label>
        {formik.touched.stock && formik.errors.stock && (
          <p className="text-red-500 text-xs -mt-8 mb-5">
            {formik.errors.stock}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            className="grow"
            placeholder="Precio"
          />
        </label>
        {formik.touched.price && formik.errors.price && (
          <p className="text-red-500 text-xs mb-5 -mt-8">
            {formik.errors.price}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url_image}
            name="url_image"
            className="grow"
            placeholder="Imagen URL"
          />
        </label>
        {formik.touched.url_image && formik.errors.url_image && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {formik.errors.url_image}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-5 mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            name="available"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.available}
          >
            <option value="">Seleccione una opcion</option>
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>
          <span className="ml-2">Available</span>

          {formik.touched.available && formik.errors.available && (
            <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
              {formik.errors.available}
            </p>
          )}</label>

        <select
          className="select select-bordered select-sm w-full max-w-xs"
          name="category"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.category}
        >
          {categories.map(category => <option value={category._id}>{category.name}</option>)}
        </select>
        {formik.touched.category && formik.errors.category && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {formik.errors.category}
          </p>
        )}
        <button
          className="bg-blue-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-10 text-white"
          type="submit"
        >
          Publicar
        </button>
      </form>
      <p>{JSON.stringify(formik.values)}</p>
    </div>
  );
};

export default CreateProduct;
