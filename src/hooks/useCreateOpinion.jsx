import axios from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";

export default function useCreateOpinion() {
  const { ToastSuccess, ToastError } = useToast();

  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).name
    : "Unknown";

  const validationSchema = Yup.object({
    product_id: Yup.string().required("Ingrese un nombre"),
    username: Yup.string().required("Ingrese un número de stock"),
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
      ToastSuccess("Opinión publicada", 2000);
    } catch (error) {
      ToastError("Error al publicar", 2000);
    }
  };

  return { SendOpinion, validationSchema, user };
}
