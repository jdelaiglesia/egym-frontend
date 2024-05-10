import { axios } from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export default function useCreateOpinion() {
  const { ToastSuccess, ToastError } = useToast();
  const navigate = useNavigate();
  const { user, auth } = useAuth();

  const validationSchema = Yup.object({
    product_id: Yup.string().required("Ingrese un nombre"),
    user: Yup.string().required("Inicie sesion"),
    body: Yup.string().required("Escriba una opinión"),
    rating: Yup.number().required("Elija una puntuación"),
  });

  const SendOpinion = async (values) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };

      await axios.post(`/comment`, values, config);
      ToastSuccess("Opinión publicada", 1000);
      setTimeout(() => {
        navigate(0);
        window.scrollTo(0, 0);
      }, 1500);
    } catch (error) {
      ToastError("Error al publicar", 1000);
    }
  };

  return { SendOpinion, validationSchema, user, auth };
}
