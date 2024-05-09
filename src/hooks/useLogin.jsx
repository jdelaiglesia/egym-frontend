import { useNavigate } from "react-router-dom";
import { axios } from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";
import { useAuth } from "./useAuth";

export default function useLogin() {
  const { ToastSuccess, ToastError } = useToast();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("Ingrese un correo"),
    password: Yup.string().required("Ingrese una contraseña"),
  });

  const SignIn = async (values) => {
    try {
      const res = await axios.post(`/user/login`, values);
      if (res.data.user.token) {
        ToastSuccess("Iniciando sesión...", 1000);

        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        setTimeout(() => {
          setAuth(res.data.user);
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      ToastError("Credenciales invalidas", 1000);
    }
  };

  return { SignIn, validationSchema };
}
