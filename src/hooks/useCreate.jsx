import { useNavigate } from "react-router-dom";
import axios from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";

export default function useCreate() {
  const { ToastSuccess, ToastError } = useToast();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese un nombre"),
    stock: Yup.number().required("Ingrese un número de stock"),
    price: Yup.number().required("Ingrese un precio"),
    url_image: Yup.mixed().required("Ingrese una imagen"),
    available: Yup.boolean().required("Seleccione una disponibilidad"),
    category: Yup.string().required("Seleccione una categoría"),
    description: Yup.string().required("Agrega una descripción"),
  });

  const createProduct = async (values) => {
    const formData = new FormData();
    formData.append("file", values.url_image);
    formData.append("upload_preset", import.meta.env.VITE_IMAGE_PRESET);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      };

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      values.url_image = response.data.secure_url;

      await axios.post(`/product`, values, config);

      ToastSuccess("Producto publicado", 2000);

      setTimeout(() => {
        navigate("/shop");
      }, 2000);
    } catch (error) {
      ToastError("Ha ocurrido un error al publicar", 2000);
    }
  };
  return { createProduct, validationSchema };
}
