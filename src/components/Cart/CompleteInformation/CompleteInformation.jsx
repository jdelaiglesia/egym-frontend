import { useAuth } from "../../../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import useToast from "../../../hooks/useToast";
import { axios } from "../../../helpers/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

const CompleteInformation = () => {
  const { user, auth, setUser, localAuth } = useAuth();
  const { ToastSuccess, ToastError } = useToast();

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es requerido"),
    last_name: Yup.string().required("Este campo es requerido"),
    dni: Yup.number().typeError("Ingrese un DNI valido")
      .min(10000000)
      .max(99999999)
      .required("Este campo es requerido"),
    phone_number: Yup.number().typeError("Ingrese un telefono valido")
      .min(100000000)
      .max(9999999999)
      .integer()
      .required("Este campo es requerido"),
    address: Yup.string().required("Este campo es requerido"),
    url_image: Yup.mixed(),
  });

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      last_name: user?.last_name || "",
      dni: user?.dni || "",
      phone_number: user?.phone_number || "",
      url_image: user?.url_image || "",
      address: user?.address || "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.put(
          `/user/update/${user?._id}`,
          {
            ...values,
          },
          { headers: { Authorization: `Bearer ${auth.token}` } }
        );

        document.getElementById("my_modal_3").close();

        const res = await axios.get(`/user/${localAuth.email}`);

        await ToastSuccess("¡Genial! Puedes seguir con tu compra", 1000);

        setTimeout(() => {
          setUser(res.data);
        }, 1500);
      } catch (error) {
        ToastError("Ha ocurrido un error", 1000);
      }
    },
    enableReinitialize: true,
  });

  if (!localAuth.token) {
    return (
      <NavLink className="btn" to="/login">
        Inicia sesíon
      </NavLink>
    );
  }

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Finalizar Pago
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Finalizar pago</h3>
          <p className="py-4">Completa estos datos para continuar</p>

          <form
            className="flex flex-col gap-4"
            action=""
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {/* dni */}
                <label className="input input-bordered flex items-center gap-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    name="dni"
                    placeholder="Numero de Documento"
                    maxLength={8}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.dni}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.dni ? formik.errors.dni : null}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {/* phone_number */}
                <label className="input input-bordered flex items-center gap-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    name="phone_number"
                    placeholder="Número de telefono"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.phone_number}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.phone_number
                    ? formik.errors.phone_number
                    : null}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {/* address */}
                <label className="input input-bordered flex items-center gap-2 w-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    type="text"
                    className="grow"
                    name="address"
                    placeholder="Dirección"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.address}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.address ? formik.errors.address : null}
                </span>
              </div>
            </div>
            <button className="btn btn-primary no-animation" type="submit">
              Actualizar
            </button>
          </form>
        </div>
      </dialog>
      <ToastContainer />
    </>
  );
};

export default CompleteInformation;
