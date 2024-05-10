// Import Components
import { ToggleTheme } from "../../components";

// Import Hooks
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/theme";
import { useContext } from "react";
import { useAuth } from "../../../hooks/useAuth";

const NavbarDashboard = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const { pathname } = useLocation();
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost no-animation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <NavLink
              to="/"
              className="p-0 w-24 h-10 no-animation flex items-center"
            >
              <img
                className=""
                alt="Tailwind CSS Navbar component"
                src={theme === "black" ? "/logo-light.svg" : "/logo-dark.svg"}
              />
            </NavLink>
          </div>
          <div className="flex-none hidden lg:gap-2 lg:flex lg:items-center z-99">
            <ul className="items-center gap-2 menu menu-horizontal">
              {/* Navbar menu content here */}
              {pathname === "/dashboard/login" ? (
                <>
                  <li>
                    <ToggleTheme />
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost btn-sm justify-start"
                      to="/"
                    >
                      Inicio
                    </NavLink>
                  </li>
                </>
              ) : (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar online no-animation"
                  >
                    <div className="w-10 rounded-full">
                      <img alt={auth?.name} src={auth?.url_image} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        className="btn btn-ghost btn-sm justify-start"
                        to="/"
                      >
                        Volver a la web
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="btn btn-ghost btn-sm justify-start"
                        to="/dashboard"
                      >
                        Panel
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="btn btn-ghost btn-sm justify-start"
                        to="/dashboard/create/product"
                      >
                        Crear producto
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="btn btn-ghost btn-sm justify-start"
                        to="/dashboard/create/category"
                      >
                        Crear categoría
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="btn btn-ghost btn-sm justify-start"
                        to="/dashboard/create/coupon"
                      >
                        Crear cupón
                      </NavLink>
                    </li>
                    <li>
                      <a
                        className="btn btn-ghost btn-sm justify-start"
                        onClick={() => {
                          localStorage.setItem("user", JSON.stringify({}));
                          setAuth({});
                          navigate("/");
                        }}
                      >
                        Cerrar sesión
                      </a>
                    </li>
                    <li>
                      <ToggleTheme />
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="h-full min-h-full gap-2 p-4 menu w-80 bg-base-200">
          {/* Sidebar content here */}
          {pathname === "/dashboard/login" ? (
            <>
              <li>
                <ToggleTheme />
              </li>
              <li>
                <NavLink className="btn btn-ghost btn-sm justify-start" to="/">
                  Volver a la web
                </NavLink>
              </li>
            </>
          ) : (
            <li className="flex p-0">
              <div className="flex w-full p-0 dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex justify-between w-full btn no-animation"
                >
                  <img
                    className="w-10 rounded-full z-[9999]"
                    alt={auth?.name}
                    src={auth?.url_image}
                  />
                  <p>Perfil</p>
                </div>
                <ul
                  tabIndex={0}
                  className="before:hidden mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      className="btn btn-ghost btn-sm justify-start"
                      to="/"
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost btn-sm justify-start"
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost btn-sm justify-start"
                      to="/dashboard/create/product"
                    >
                      Crear producto
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost btn-sm justify-start"
                      to="/dashboard/create/category"
                    >
                      Crear categoría
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost btn-sm justify-start"
                      to="/dashboard/create/coupon"
                    >
                      Crear cupón
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="btn btn-ghost btn-sm justify-start"
                      onClick={() => {
                        localStorage.setItem("user", JSON.stringify({}));
                        setAuth({});
                        navigate("/");
                      }}
                    >
                      Cerrar sesión
                    </a>
                  </li>
                  <li>
                    <ToggleTheme />
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDashboard;
