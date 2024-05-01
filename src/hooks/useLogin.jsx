import axios from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";

export default function useLogin() {
  const { ToastSuccess, ToastError } = useToast();

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
        ToastSuccess("Iniciando sesión...", 1350);
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.href = "/";
        }, 2250);
      }
    } catch (error) {
      ToastError("Credenciales invalidas", 1350);
    }
  };

  return { SignIn, validationSchema };
}
