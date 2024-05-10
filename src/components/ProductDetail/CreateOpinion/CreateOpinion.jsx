// Import Hooks and utils
import useCreateOpinion from "../../../hooks/useCreateOpinion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

const CreateOpinion = ({ product_id }) => {
  const { SendOpinion, validationSchema, user, auth } = useCreateOpinion();

  const formik = useFormik({
    initialValues: {
      product_id: product_id,
      user: auth._id,
      body: "",
      rating: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      SendOpinion(values);
    },
    enableReinitialize: true,
  });

  return (
    <div className="flex justify-center flex-col gap-4 my-10 mx-10 md:w-96 md:justify-start">
      <h2 className="font-bold text-2xl">Crear opinión</h2>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-2 items-center">
          <textarea
            className="textarea textarea-bordered w-full"
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
              className="mask mask-star-2 hidden"
              defaultChecked={true}
            />
            <input
              type="radio"
              name="rating"
              value={1}
              className="mask mask-star-2"
              onChange={formik.handleChange}
              defaultChecked={formik.values.rating === 1}
            />
            <input
              type="radio"
              name="rating"
              value={2}
              className="mask mask-star-2"
              onChange={formik.handleChange}
              defaultChecked={formik.values.rating === 2}
            />
            <input
              type="radio"
              name="rating"
              value={3}
              className="mask mask-star-2"
              onChange={formik.handleChange}
              defaultChecked={formik.values.rating === 3}
            />
            <input
              type="radio"
              name="rating"
              value={4}
              className="mask mask-star-2"
              onChange={formik.handleChange}
              defaultChecked={formik.values.rating === 4}
            />
            <input
              type="radio"
              name="rating"
              value={5}
              className="mask mask-star-2"
              onChange={formik.handleChange}
              defaultChecked={formik.values.rating === 5}
            />
          </div>
          <span className="text-red-500 text-xs">
            {formik.touched.rating ? formik.errors.rating : null}
          </span>
        </div>
        {!auth.token ? (
          <button disabled className="btn btn-disabled" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Inicia sesión para comentar
          </button>
        ) : (
          <button className="btn btn-primary" type="submit">
            Publicar
          </button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateOpinion;
