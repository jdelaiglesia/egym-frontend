import { ToggleTheme, Search, Cart } from "../components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 items-center">
                <NavLink to="/" className="btn btn-ghost font-bold text-xl">
                    GYMPF
                </NavLink>
                <div className="flex gap-2 mx-4 items-center">
                    <NavLink
                        to="/"
                        className={
                            pathname === "/"
                                ? "link text-sm font-semibold px-2 py-1 no-underline bg-[#ffbf06] text-neutral rounded-lg"
                                : "link text-sm font-semibold px-2 py-1 no-underline  text-white rounded-lg"
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={
                            pathname === "/shop"
                                ? "link text-sm font-semibold px-2 py-1 no-underline bg-[#ffbf06] text-neutral rounded-lg"
                                : "link text-sm font-semibold px-2 py-1 no-underline  text-white rounded-lg"
                        }
                    >
                        Tienda
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={
                            pathname === "/cart"
                                ? "link text-sm font-semibold px-2 py-1 no-underline bg-[#ffbf06] text-neutral rounded-lg"
                                : "link text-sm font-semibold px-2 py-1 no-underline  text-white rounded-lg"
                        }
                    >
                        Carrito
                    </NavLink>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <Search />
                </div>
                <Cart />
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
                            <a>Cerrar sesión</a>
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
