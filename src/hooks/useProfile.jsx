import { axios, cloudinary } from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function useProfile() {
  const { ToastSuccess, ToastError } = useToast();
  const navigate = useNavigate();
  const { auth, localAuth, user, setAuth } = useAuth();

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es requerido"),
    last_name: Yup.string().required("Este campo es requerido"),
    dni: Yup.number()
      .min(10000000).typeError("Ingrese un DNI valido ")
      .max(99999999).typeError("Ingrese un DNI valido ")
      .required("Este campo es requerido"),
    phone_number: Yup.number()
      .min(100000000).typeError("Ingrese un telefono valido ")
      .max(9999999999).typeError("Ingrese un telefono valido ")
      .integer()
      .required("Este campo es requerido"),
    address: Yup.string().required("Este campo es requerido"),
    url_image: Yup.mixed(),
  });

  const updateProfile = async (values) => {
    const formData = new FormData();
    formData.append("file", values.url_image);
    formData.append("upload_preset", import.meta.env.VITE_IMAGE_PRESET);

    try {
      const response = await cloudinary.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      values.url_image = response.data.secure_url;

      await axios.put(
        `/user/update/${user?._id}`,
        {
          ...values,
        },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      );

      ToastSuccess("Datos actualizados", 1000);

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...localAuth,
          name: values.name,
          last_name: values.last_name,
          url_image: values.url_image,
        })
      );

      setAuth({
        ...auth,
        name: values.name,
        last_name: values.last_name,
        url_image: values.url_image,
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (error) {
      ToastError("Ha ocurrido un error al actualizar", 1000);
    }
  };

  return { validationSchema, updateProfile, user };
}
