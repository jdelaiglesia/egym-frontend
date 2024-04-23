// Import Hooks and utils
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import axios from "axios";

const CreateOpinion = ({ product_id }) => {
  const validationSchema = Yup.object({
    product_id: Yup.string().required("Ingrese un nombre"),
    username: Yup.string().required("Ingrese un número de stock"),
    body: Yup.string().required("Escriba una opinión"),
    rating: Yup.number().required("Elija una puntuación"),
  });

  const formik = useFormik({
    initialValues: {
      product_id: product_id,
      username: "Rafael",
      body: "",
      rating: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:3001/api/comment`, values);
        toast.success("Opinión publicada.", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        toast.error("Error al publicar.", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error.message);
      }
    },
  });

  return (
    <div className="flex justify-center my-10">
      <form className="flex flex-col gap-4 w-60" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2 items-center">
          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Ingrese una opinión"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="body"
          ></textarea>
          <span className="text-red-500 text-xs">
            {formik.touched.body ? formik.errors.body : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="rating rating-sm items-center justify-center">
            <input
              type="radio"
              name="rating"
              value={1}
              className="mask mask-star-2"
              onChange={formik.handleChange}
            />
            <input
              type="radio"
              name="rating"
              value={2}
              className="mask mask-star-2"
              onChange={formik.handleChange}
            />
            <input
              type="radio"
              name="rating"
              value={3}
              className="mask mask-star-2"
              onChange={formik.handleChange}
            />
            <input
              type="radio"
              name="rating"
              value={4}
              className="mask mask-star-2"
              onChange={formik.handleChange}
            />
            <input
              type="radio"
              name="rating"
              value={5}
              className="mask mask-star-2"
              onChange={formik.handleChange}
            />
          </div>
          <span className="text-red-500 text-xs">
            {formik.touched.body ? formik.errors.body : null}
          </span>
        </div>
        <button className="btn btn-primary" type="submit">
          Publicar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateOpinion;
