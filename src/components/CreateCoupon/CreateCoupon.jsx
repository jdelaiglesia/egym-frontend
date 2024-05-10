import { useFormik } from "formik";
import { axios } from "../../helpers/axios";
import { ToastContainer } from "react-toastify";
import useToast from "../../hooks/useToast";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const CreateCoupon = () => {
  const { ToastSuccess, ToastError } = useToast();

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese un nombre"),
    percentage: Yup.number()
      .min(1, "El minimo es 1")
      .max(100, "El maximo es 100")
      .required("Ingrese un porcentaje"),
    available: Yup.string().required("Ingrese una disponibilidad"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      percentage: "",
      available: true,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post("/coupon", values);
        ToastSuccess("Cupón creado correctamente", 3000);
      } catch (error) {
        const message = error.response.data.message;
        if (message.includes("coupon already exists")) {
          return ToastError("Ya existe un cupón con ese nombre", 3000);
        } else {
          return ToastError("Ha ocurrido un error", 3000);
        }
      }
    },
  });

  return (
    <div className="w-96">
      <form className="flex flex-col my-10 p-10" onSubmit={formik.handleSubmit}>
        <h2 className="text-4xl font-bold text-center mb-6">Crear cupón</h2>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            className="input input-bordered w-full max-w-xs"
            placeholder="Nombre del cupón"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.name ? formik.errors.name : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="percentage"
            className="input input-bordered w-full max-w-xs"
            placeholder="Porcentaje de descuento"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.percentage ? formik.errors.percentage : null}
          </span>
        </div>

        <button className="btn btn-primary" type="submit">
          Crear cupón
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateCoupon;
