import { ToggleTheme, Search } from "../components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
const darkNavbarLogo = new Image();
darkNavbarLogo.src = "./logo-dark.svg";

const lightNavbarLogo = new Image();
lightNavbarLogo.src = "./logo-light.svg";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

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
                        <h1 className="text-2xl font-bold">EGYM</h1>
                    </div>
                    <div className="flex-none hidden lg:block lg:gap-2 lg:flex lg:items-center z-99">
                        <ul className="items-center gap-2 menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li>
                                <NavLink
                                    to="/"
                                    className={`no-animation ${
                                        pathname === "/"
                                            ? "btn btn-primary btn-sm"
                                            : "btn btn-sm"
                                    }`}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    className={`no-animation ${
                                        pathname === "/shop"
                                            ? "btn btn-primary btn-sm"
                                            : "btn btn-sm"
                                    }`}
                                >
                                    Tienda
                                </NavLink>
                            </li>
                            <li>
                                <Search />
                            </li>
                        </ul>
                        <NavLink to="/cart">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle no-animation"
                            >
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
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
                                    <span className="border-none badge badge-sm indicator-item">
                                        {count}
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        {user?.token ? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar online no-animation"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt={localUser?.name}
                                            src={localUser?.url_image}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <NavLink
                                            className="justify-between"
                                            to="/profile"
                                        >
                                            Editar perfil
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard">
                                            Panel
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "user",
                                                    JSON.stringify({})
                                                );
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
                            <NavLink
                                className="bg-transparent btn no-animation"
                                to="/login"
                            >
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
            </div>
            <div className="drawer-side z-[999]">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="h-full min-h-full gap-2 p-4 menu w-80 bg-base-200">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink
                            to="/"
                            className={` flex justify-between w-full no-animation
                            ${
                                pathname === "/"
                                    ? "btn btn-primary btn-sm"
                                    : "btn btn-sm"
                            }`}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </span>
                            <span className="">Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className={`flex justify-between w-full no-animation
                            ${
                                pathname === "/shop"
                                    ? "btn btn-primary btn-sm"
                                    : "btn btn-sm"
                            }`}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 mr-2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                                    />
                                </svg>
                            </span>
                            <span className="flex-grow text-right">Tienda</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={`flex justify-between w-full no-animation 
                            ${
                                pathname === "/cart"
                                    ? "btn btn-primary btn-sm"
                                    : "btn btn-sm"
                            }`}
                            to="/cart"
                        >
                            <div
                                className="flex justify-between w-full"
                                tabIndex={0}
                                role="button"
                            >
                                <span className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
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
                                    <span className="border-none badge badge-sm indicator-item ">
                                        {count}
                                    </span>
                                </span>
                                <span className="flex-grow text-right">
                                    Carrito
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li className="w-full p-0 hover:bg-transparent">
                        <Search />
                    </li>
                    {user?.token ? (
                        <li className="flex p-0 ">
                            <div className="flex w-full p-0 dropdown dropdown-bottom dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="flex justify-between w-full btn no-animation "
                                >
                                    <img
                                        className="w-8 rounded-full"
                                        alt={localUser?.name}
                                        src={localUser?.url_image}
                                    />
                                    <p>Perfil</p>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-100 rounded-box w-52 before:bg-transparent"
                                >
                                    <li>
                                        <NavLink
                                            className="justify-between"
                                            to="/profile"
                                        >
                                            Editar perfil
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard">
                                            Panel 
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "user",
                                                    JSON.stringify({})
                                                );
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
                        </li>
                    ) : (
                        <NavLink
                            className="bg-transparent btn no-animation"
                            to="/login"
                        >
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
                </ul>
            </div>
        </div>
        // -----------------------------------------------------------------------------------
        // <div className="navbar bg-base-100">
        //   <div className="items-center flex-1">
        //     <NavLink
        //       to="/"
        //       className="w-24 p-0 font-bold bg-black btn btn-ghost hover:bg-black"
        //     >
        //       <div className="w-24 rounded-full">
        //         <img alt="Tailwind CSS Navbar component" src="/logo.jpg" />
        //       </div>
        //     </NavLink>
        //     <div className="flex items-center gap-2 mx-4">
        // <NavLink
        //   to="/"
        //   className={
        //     pathname === "/" ? "btn btn-primary btn-sm" : "btn btn-sm"
        //   }
        // >
        //   Inicio
        // </NavLink>
        // <NavLink
        //   to="/shop"
        //   className={
        //     pathname === "/shop" ? "btn btn-primary btn-sm" : "btn btn-sm"
        //   }
        // >
        //   Tienda
        // </NavLink>
        //     </div>
        //   </div>
        //   <div className="flex-none gap-2">
        //     <div className="form-control">
        //       <Search />
        //     </div>
        //     <NavLink to="/cart">
        // <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        //   <div className="indicator">
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       className="w-5 h-5"
        //       fill="none"
        //       viewBox="0 0 24 24"
        //       stroke="currentColor"
        //     >
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         strokeWidth="2"
        //         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        //       />
        //     </svg>
        //     <span className="badge badge-sm indicator-item">{count}</span>
        //   </div>
        //  </div>
        //     </NavLink>
        // {user?.token ? (
        //   <div className="dropdown dropdown-end">
        //     <div
        //       tabIndex={0}
        //       role="button"
        //       className="btn btn-ghost btn-circle avatar online"
        //     >
        //       <div className="w-10 rounded-full">
        //         <img alt={localUser?.name} src={localUser?.url_image} />
        //       </div>
        //     </div>
        //     <ul
        //       tabIndex={0}
        //       className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        //     >
        //       <li>
        //         <NavLink className="justify-between" to="/profile">
        //           Perfil
        //           <span className="badge">Nuevo</span>
        //         </NavLink>
        //       </li>
        //       <li>
        //         <NavLink to="/dashboard">Dashboard</NavLink>
        //       </li>
        //       <li>
        //         <a
        //           onClick={() => {
        //             localStorage.setItem("user", JSON.stringify({}));
        //             clearCart();
        //             window.location.reload();
        //           }}
        //         >
        //           Cerrar Sesión
        //         </a>
        //       </li>
        //       <li>
        //         <ToggleTheme />
        //       </li>
        //     </ul>
        //   </div>
        // ) : (
        //   <NavLink className="bg-transparent btn no-animation" to="/login">
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       fill="none"
        //       viewBox="0 0 24 24"
        //       strokeWidth={1.5}
        //       stroke="currentColor"
        //       className="w-6 h-6"
        //     >
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
        //       />
        //     </svg>
        //     Ingresar
        //   </NavLink>
        // )}
        //   </div>
        // </div>
    );
};

export default Navbar;
