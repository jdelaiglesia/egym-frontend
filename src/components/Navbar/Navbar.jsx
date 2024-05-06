import { ToggleTheme, Search } from "../components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ToggleTheme/ToggleTheme";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {theme} = useTheme();

  const localUser = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const {
    cart: { count },
    clearCart,
  } = useCart();

  const user = JSON.parse(window.localStorage.getItem("user"))
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center">
        <NavLink
          to="/"
          className="p-0 w-24 btn btn-ghost"
        >
          <div className="w-12 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={theme === "black" ? '/logo-light.svg' : '/logo-dark.svg'} />
          </div>
        </NavLink>
        <div className="flex gap-2 mx-4 items-center">
          <NavLink
            to="/"
            className={
              pathname === "/" ? "btn btn-primary btn-sm" : "btn btn-sm"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/shop"
            className={
              pathname === "/shop" ? "btn btn-primary btn-sm" : "btn btn-sm"
            }
          >
            Tienda
          </NavLink>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <Search />
        </div>
        <NavLink to="/cart">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                /> 
              </svg>
              <span className="badge badge-sm indicator-item">{count}</span>
            </div>
          </div>
        </NavLink>
        {user?.token ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar online"
            >

              <div className="w-10 rounded-full">
                <img alt={localUser?.name} src={localUser?.url_image} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="justify-between" to="/profile">
                  Perfil
                  <span className="badge">Nuevo</span>
                </NavLink>
              </li>
              <li>
                <NavLink>Ajustes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <a
                  onClick={() => {
                    localStorage.setItem("user", JSON.stringify({}));
                    clearCart();
                    window.location.reload();
                  }}
                >
                  Cerrar Sesión
                </a>
              </li>
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </div>
        ) : (
          <NavLink className="btn bg-transparent no-animation" to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
            Ingresar
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
