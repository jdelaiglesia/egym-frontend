// Import Hooks
import { axios } from "../../../helpers/axios";
import useToast from "../../../hooks/useToast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginDashboard = () => {
  const { ToastError } = useToast();
  const { auth, setAuth } = useAuth();
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
        const res = await axios.post("/dashboard/auth", values, {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setAuth(res.data.user)
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } catch (error) {
        ToastError("Credenciales invalidas", 1350);
      }
    },
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="flex flex-col my-10 p-10" onSubmit={formik.handleSubmit}>
        <h2 className="text-4xl font-bold text-center mb-6">Dashboard</h2>

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
        <button className="btn btn-primary no-animation" type="submit">
          Ingresar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginDashboard;
