import { axios } from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";

export default function useCreateOpinion() {
  const { ToastSuccess, ToastError } = useToast();
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))._id
    : "Unknown";

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
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      };

      await axios.post(`/comment`, values, config);
      ToastSuccess("Opinión publicada", 1350);
      setTimeout(() => {
        window.location.reload()
        window.scrollTo(0,0)
      }, 1550);
    } catch (error) {
      ToastError("Error al publicar", 2000);
    }
  };

  return { SendOpinion, validationSchema, user };
}
