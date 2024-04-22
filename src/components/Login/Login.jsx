// Import Librarys, hooks Formik & Yup
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("Ingrese un correo"),
    password: Yup.string().required("Ingrese una contraseña"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `http://localhost:3001/api/user/login`,
          values
        );
        if (!res.data.access) {
          alert("Email o contraseña invalidos.");
        } else {
          navigate("/");
        }
      } catch (error) {
        alert("Ha ocurrido un error en el servidor.");
      }
    },
  });

  return (
    <div className="w-96">
      <form className="flex flex-col my-10 p-10" onSubmit={formik.handleSubmit}>
        <h2 className="text-4xl font-bold text-center mb-6">Iniciar sesión</h2>

        <div className="email flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            className="input input-bordered w-full max-w-xs"
            placeholder="Correo electrónico"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.email ? formik.errors.email : null}
          </span>
        </div>

        <div className="email flex flex-col gap-2 mb-4">
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            className="input input-bordered w-full max-w-xs"
            placeholder="Contraseña"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.password ? formik.errors.password : null}
          </span>
        </div>
        <NavLink className="text-xs mb-6 underline" to="/register">
          ¿No tienes cuenta? Regístrate
        </NavLink>
        <button className="btn btn-primary" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};
export default Login;
