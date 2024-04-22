// Import Librarys, hooks Formik & Yup
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Register = () => {
  const validationSchema = Yup.object({
    name: Yup.string("Ingrese un nombre.").required('Ingrese un nombre valido'),
    last_name: Yup.string().required('Ingrese un apellido valido'),
    email: Yup.string().email('Correo invalido').required('Ingrese un email'),
    password: Yup.string().required('Ingrese una contraseña valida'),
    dni: Yup.number().min(10000000).max(99999999).required("Ingrese un DNI"),
    address: Yup.string().required('Ingrese una dirección'),
    age: Yup.number().min(16, "Debe ser mayor de 16").max(100, "A la madre wey").required("Ingrese una edad"),
    phone_number: Yup.number().min(100000000).max(9999999999).integer().required("Ingrese un telefono")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      dni: "",
      address: "",
      age: "",
      phone_number: "",
    }, validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:3001/api/user`, values);
        alert("Usuario registrado con esito")
      } catch (error) {
        alert("Hubo un error a la hora de registrar un usuario pero no se cual es porque no se especificaaaaaaaaa!. 😡")
      }
    }
  });

  return (
    <>
      <form
        className="bg-slate-200 w-1/2 mx-auto mt-32 rounded-lg p-4 h-1/2 mb-40"
        onSubmit={formik.handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            className="grow"
            placeholder="Rafael"
          />
        </label>
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.name}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
            name="last_name"
            className="grow"
            placeholder="Apeyido"
          />
        </label>
        {formik.touched.last_name && formik.errors.last_name && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.last_name}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            className="grow"
            placeholder="Correo electrico"
          />
        </label>
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.email}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            className="grow"
            placeholder="Clave"
          />
        </label>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.password}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dni}
            name="dni"
            className="grow"
            placeholder="Documento Nacional de Identidad"
          />
        </label>
        {formik.touched.dni && formik.errors.dni && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.dni}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            name="address"
            className="grow"
            placeholder="Diresion"
          />
        </label>
        {formik.touched.address && formik.errors.address && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.address}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-12 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            name="age"
            className="grow"
            placeholder="Anios"
          />
        </label>
        {formik.touched.age && formik.errors.age && (
          <p className="text-red-500 text-xs mb-8 -mt-10 absolute">
            {formik.errors.age}
          </p>
        )}
        <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-1 h-4 opacity-70"
          ></svg>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
            name="phone_number"
            className="grow"
            placeholder="+54 9 11 12312312"
          />
        </label>
        {formik.touched.phone_number && formik.errors.phone_number && (
          <p className="text-red-500 text-xs mb-5 -mt-2 absolute">
            {formik.errors.phone_number}
          </p>
        )}
        <button
          className="bg-blue-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full mt-10 text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default Register;
