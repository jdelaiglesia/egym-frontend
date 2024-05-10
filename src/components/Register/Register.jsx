// Import Librarys, hooks Formik & Yup
import useRegister from "../../hooks/useRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

const Register = () => {
  const { SignUp, validationSchema } = useRegister();

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      dni: "",
      address: "",
      age: "",
      phone_number: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      SignUp(values);

      axios.post("/registeremail", { email: values.email });

    },
  });

  return (
    <div className="flex flex-col md:items-center my-10 gap-10 w-96 md:w-[100%]">
      <h2 className="text-4xl font-bold text-center">Regístrate</h2>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              name="name"
              className="input input-bordered w-full"
              placeholder="Nombre"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.name ? formik.errors.name : null}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              name="last_name"
              className="input input-bordered w-full"
              placeholder="Apellido"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.last_name ? formik.errors.last_name : null}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              className="input input-bordered w-full"
              placeholder="Correo electrónico"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.email ? formik.errors.email : null}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              className="input input-bordered w-full"
              placeholder="Contraseña"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.password ? formik.errors.password : null}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dni}
              maxLength={8}
              name="dni"
              className="input input-bordered w-full"
              placeholder="DNI"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.dni ? formik.errors.dni : null}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              name="address"
              className="input input-bordered w-full"
              placeholder="Dirección"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.address ? formik.errors.address : null}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              name="age"
              className="input input-bordered w-full"
              placeholder="Edad"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.age ? formik.errors.age : null}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
              name="phone_number"
              className="input input-bordered w-full"
              placeholder="Número de teléfono"
            />

            <span className="text-red-500 text-xs">
              {formik.touched.phone_number ? formik.errors.phone_number : null}
            </span>
          </div>
        </div>

        <NavLink className="text-xs mb-6 underline" to="/login">
          ¿Tienes cuenta? Inicia sesión
        </NavLink>
        <button className="btn btn-primary max-w-[27.3rem]" type="submit">
          Crear cuenta
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
