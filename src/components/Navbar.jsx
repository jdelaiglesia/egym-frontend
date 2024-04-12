import { ToggleTheme } from "./ToggleTheme";
import { NavLink } from "react-router-dom";
import Search from "./SearchByName";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost text-xl">
                    GYMPF
                </NavLink>
            </div>
            <div className="flex-none gap-2">
                <ToggleTheme />
                <div className="form-control">
                    <Search/>
                </div>
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
                    </ul>
                </div>
            </div>
        </div>
    );
};
