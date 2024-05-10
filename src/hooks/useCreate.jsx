import { useNavigate } from "react-router-dom";
import { axios, cloudinary } from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";
import { useAuth } from "./useAuth";

export default function useCreate() {
  const { ToastSuccess, ToastError } = useToast();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese un nombre"),
    stock: Yup.number().required("Ingrese un número de stock"),
    price: Yup.number().required("Ingrese un precio"),
    url_image: Yup.mixed().required("Ingrese una imagen"),
    category: Yup.string().required("Seleccione una categoría"),
    description: Yup.string().required("Agrega una descripción"),
  });

  const createProduct = async (values) => {
    const formData = new FormData();
    formData.append("file", values.url_image);
    formData.append("upload_preset", import.meta.env.VITE_IMAGE_PRESET);

    try {
      const response = await cloudinary.post(`/image/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      values.url_image = response.data.secure_url;

      await axios.post(`/product`, values, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

      ToastSuccess("Producto publicado", 1000);

      setTimeout(() => {
        navigate("/shop");
      }, 1500);
    } catch (error) {
      ToastError("Ha ocurrido un error al publicar", 1500);
    }
  };
  return { createProduct, validationSchema };
}
