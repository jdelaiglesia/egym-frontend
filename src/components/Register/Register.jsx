// Import Librarys, hooks Formik & Yup
import useRegister from "../../hooks/useRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { axios } from "../../helpers/axios";

const Register = () => {
    const { SignUp, validationSchema } = useRegister();

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
        },
        validationSchema,
        onSubmit: async (values) => {
            SignUp(values);
            url.post("/registeremail",{email: values.email});
        },
    });

    return (
        <div className="w-96">
            <form
                className="flex flex-col my-10 p-10"
                onSubmit={formik.handleSubmit}
            >
                <h2 className="text-4xl font-bold text-center mb-6">
                    Regístrate
                </h2>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        name="name"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Nombre"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.name ? formik.errors.name : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                        name="last_name"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Apellido"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.last_name
                            ? formik.errors.last_name
                            : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Correo electrónico"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.email ? formik.errors.email : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        name="password"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Contraseña"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.password
                            ? formik.errors.password
                            : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dni}
                        name="dni"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="DNI"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.dni ? formik.errors.dni : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        name="address"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Dirección"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.address ? formik.errors.address : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        name="age"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Edad"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.age ? formik.errors.age : null}
                    </span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                        name="phone_number"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Número de teléfono"
                    />

                    <span className="text-red-500 text-xs">
                        {formik.touched.phone_number
                            ? formik.errors.phone_number
                            : null}
                    </span>
                </div>

                <NavLink className="text-xs mb-6 underline" to="/login">
                    ¿Tienes cuenta? Inicia sesión
                </NavLink>
                <button className="btn btn-primary" type="submit">
                    Crear cuenta
                </button>
            </form>
            <ToastContainer />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
            name="last_name"
            className="input input-bordered w-full max-w-xs"
            placeholder="Apellido"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.last_name ? formik.errors.last_name : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            className="input input-bordered w-full max-w-xs"
            placeholder="Correo electrónico"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.email ? formik.errors.email : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            className="input input-bordered w-full max-w-xs"
            placeholder="Contraseña"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.password ? formik.errors.password : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dni}
            name="dni"
            className="input input-bordered w-full max-w-xs"
            placeholder="DNI"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.dni ? formik.errors.dni : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            name="address"
            className="input input-bordered w-full max-w-xs"
            placeholder="Dirección"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.address ? formik.errors.address : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            name="age"
            className="input input-bordered w-full max-w-xs"
            placeholder="Edad"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.age ? formik.errors.age : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
            name="phone_number"
            className="input input-bordered w-full max-w-xs"
            placeholder="Número de teléfono"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.phone_number ? formik.errors.phone_number : null}
          </span>
        </div>

        <NavLink className="text-xs mb-6 underline" to="/login">
          ¿Tienes cuenta? Inicia sesión
        </NavLink>
        <button className="btn btn-primary" type="submit">
          Crear cuenta
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
