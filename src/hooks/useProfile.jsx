import axios from "../helpers/axios";
import useToast from "./useToast";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export default function useProfile() {
  const { ToastSuccess, ToastError } = useToast();

  const localUser = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/user/${localUser.email}`)
      .then(({ data }) => setUser(data))
      .catch((e) => console.log(e));
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es requerido"),
    last_name: Yup.string().required("Este campo es requerido"),
    dni: Yup.number()
      .min(10000000)
      .max(99999999)
      .required("Este campo es requerido"),
    phone_number: Yup.number()
      .min(100000000)
      .max(9999999999)
      .integer()
      .required("Este campo es requerido"),
    password: Yup.string().required(
      "Para confirmar cambios ingrese su contraseña"
    ),
  });

  const updateProfile = async (values) => {
    try {
      await axios.put(`/user/update/${user?._id}`, {
        ...values,
      });
      ToastSuccess("Datos actualizados", 1000);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...localUser, name: values.name })
      );
      setTimeout(() => {
        window.location.reload();
      }, 1400);
    } catch (error) {
      ToastError("Ha ocurrido un error al actualizar", 1000);
    }
  };

  return { validationSchema, updateProfile, user };
}
