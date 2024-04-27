import { useState } from "react";
import Productos from "./Productos/Productos";
import Ventas from "./Ventas/Ventas";
import Usuarios from "./Usuarios/Usuarios";
import Cupones from "./Cupones/Cupones";

function AdminDashboard() {
  const [component, setComponent] = useState("Productos");
  const [activeButton, setActiveButton] = useState("Productos");

  const handleClick = (event) => {
    setComponent(event.target.name);
    setActiveButton(event.target.name);
  };
  return (
    <div className="flex flex-row gap-2">
      <ul className="menu w-56 bg-base-100 h-screen rounded-box text-lg">
        <li>
          <h2 className="menu-title text-primary text-lg">Panel</h2>
          <button
            name="Productos"
            className={` ml-4 ${
              activeButton === "Productos"
                ? "bg-primary  text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            Productos
          </button>
          <button
            name="Cupones"
            className={` ml-4 ${
              activeButton === "Cupones"
                ? "bg-primary  text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            Cupones
          </button>
          <button
            name="Usuarios"
            className={` ml-4 ${
              activeButton === "Usuarios"
                ? "bg-primary  text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            Usuarios
          </button>
          <button
            name="Ventas"
            className={` ml-4 ${
              activeButton === "Ventas"
                ? "bg-primary  text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            Ventas
          </button>
        </li>
      </ul>
      {component === "Productos" && <Productos />}
      {component === "Usuarios" && <Usuarios />}
      {component === "Ventas" && <Ventas />}
      {component === "Cupones" && <Cupones />}
    </div>
  );
}

export default AdminDashboard;
