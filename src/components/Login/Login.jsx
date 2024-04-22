// Import Librarys, hooks Formik & Yup
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo invalido').required('Ingrese un email'),
    password: Yup.string().required('Ingrese una contraseña')
  })

  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:3001/api/user/login`, values);
        alert(JSON.stringify(values, null, 2))
        navigate("/");
      } catch (error) {
        alert("Error al loguearse")
      }
    }, 
  })

  return (
    <div>
      <form
        className="bg-slate-200 rounded-lg p-4 h-96 w-80 my-10"
        onSubmit={formik.handleSubmit}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        { formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.email}
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
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        {  formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {formik.errors.password}
          </p>
        )}
        <button
          className="bg-blue-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-8 text-white"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
;

export default Login;
