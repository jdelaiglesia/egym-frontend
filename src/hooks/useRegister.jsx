import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { axios } from "../helpers/axios";
import * as Yup from "yup";

export default function useRegister() {
  const { ToastSuccess, ToastError } = useToast();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string("Ingrese un nombre.").required("Ingrese un nombre válido"),
    last_name: Yup.string().required("Ingrese un apellido válido"),
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("Ingrese un correo"),
    password: Yup.string().required("Ingrese una contraseña"),
    dni: Yup.number().min(10000000).max(99999999).required("Ingrese un DNI"),
    address: Yup.string().required("Ingrese una dirección"),
    age: Yup.number()
      .min(16, "Debe ser mayor de 16")
      .required("Ingrese una edad"),
    phone_number: Yup.number()
      .min(100000000)
      .max(9999999999)
      .integer()
      .required("Ingrese un número de teléfono"),
  });

  const SignUp = async (values) => {
    try {
      await axios.post(`/user`, values);
      await axios.post("/registeremail", { email: values.email });

      ToastSuccess("Usuario registrado", 1000);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      const message = error.response.data.message;
      if (message.includes("User already")) {
        return ToastError("Este email esta en uso", 1000);
      } else {
        ToastError("Ha ocurrido un error", 1000);
      }
    }
  };

  return { SignUp, validationSchema };
}
