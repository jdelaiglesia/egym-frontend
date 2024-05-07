// Import Hooks and utils
import useCreateOpinion from "../../../hooks/useCreateOpinion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

const CreateOpinion = ({ product_id }) => {
  const { SendOpinion, validationSchema, user } = useCreateOpinion();

  const formik = useFormik({
    initialValues: {
      product_id: product_id,
      user: user,
      body: "",
      rating: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      SendOpinion(values);
    },
  });

  return (
    <div className="flex justify-center my-10 mx-10">
      <form className="flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit}>
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

        <button className="btn btn-primary" type="submit">
          Publicar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateOpinion;
