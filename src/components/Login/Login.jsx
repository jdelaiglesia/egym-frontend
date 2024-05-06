// Import Librarys, hooks Formik & Yup
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from "../../hooks/useLogin";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import url from "../../helpers/axios";
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import axios from "axios";



const Login = () => {
  const { SignIn, validationSchema } = useLogin();
  const [profile, setProfile] = useState([])

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
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json'
          }
        })
        const filteredProfile = {
          name: res.data.given_name,
          last_name: res.data.family_name,
          email: res.data.email,
          url_image: res.data.picture,
        }
        setProfile(filteredProfile);
        loginGoogle(filteredProfile)
        return console.log('acces true');
      }
    } catch (error) {
      console.log('acces denied')
    }
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dataUser(codeResponse.access_token)
    },
    onError: (error) => console.log('Login Failed:')
  })

  const loginGoogle = async (profile) => {
    try {
      const existe = await url.post('/user', profile);
      const { user } = existe.data;
      const { email, password } = user;
      SignIn({ email, password });
    } catch (error) {
      console.log('no se puede registrar/iniciar sesion');
    }
  }

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

        <button type="button"
          class="bg-slate-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-10"
          onClick={login}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            class="h-5 w-5 inline-block align-text-top mr-2"
          ></svg>
          <span>Iniciar sesión con Google</span>
        </button>

      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
