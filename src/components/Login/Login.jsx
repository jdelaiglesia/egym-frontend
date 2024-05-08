// Import Librarys, hooks Formik & Yup
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from "../../hooks/useLogin";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { axios } from "../../helpers/axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios_base from "axios";

//Login google

const Login = () => {
  const { SignIn, validationSchema } = useLogin();
  const [profile, setProfile] = useState([]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      SignIn(values);
    },
  });

  const dataUser = async (access_token) => {
    try {
      if (access_token) {
        const res = await axios_base.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              Accept: "application/json",
            },
          }
        );
        const filteredProfile = {
          name: res.data.given_name,
          last_name: res.data.family_name,
          email: res.data.email,
          url_image: res.data.picture,
        };
        setProfile(filteredProfile);
        loginGoogle(filteredProfile);
        return console.log("acces true");
      }
    } catch (error) {
      console.log("acces denied");
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dataUser(codeResponse.access_token);
    },
    onError: (error) => console.log("Login Failed:"),
  });

  const loginGoogle = async (profile) => {
    try {
      const existe = await axios.post("/user", profile);
      const { user } = existe.data;
      const { email, password } = user;
      SignIn({ email, password });
    } catch (error) {
      console.log("no se puede registrar/iniciar sesion");
    }
  };

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

        <button
          type="button"
          className="btn bg-base-10 font-bold py-2 px-4 rounded-full mt-10"
          onClick={login}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.98em"
            height="1em"
            viewBox="0 0 256 262"
            className="w-5 h-5"
          >
            <path
              fill="#4285f4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34a853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#fbbc05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
            ></path>
            <path
              fill="#eb4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
          <span>Iniciar sesión con Google</span>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
