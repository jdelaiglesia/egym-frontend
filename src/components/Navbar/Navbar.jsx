import { ToggleTheme, Search, Cart } from "../components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const Navbar = () => {
  const { pathname } = useLocation();

  const {
    cart: { count },
  } = useCart();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center">
        <NavLink
          to="/"
          className="p-0 w-24 btn btn-ghost bg-black font-bold hover:bg-black"
        >
          <div className="w-24 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="/logo.jpg" />
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
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Ajustes</a>
            </li>
            <li>
              <NavLink to="/login">Iniciar sesión</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registrarse</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/product/create">Crear producto</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Panel</NavLink>
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {
//     pathname === "/x" ? "flex" : "block";
// }

// if (pathname === "/x") {
//     return "flex";
// } else {
//     return "block";
// }
