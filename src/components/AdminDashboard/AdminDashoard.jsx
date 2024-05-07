import { useState } from "react";
import Productos from "./Productos/Productos";
import Ventas from "./Ventas/Ventas";
import Usuarios from "./Usuarios/Usuarios";
import Cupones from "./Cupones/Cupones";
import Estadisticas from "./Estadisticas/Estadisticas";
import IconStore from "./Icons/IconStore";
import IconCoupon from "./Icons/IconCoupon";
import IconUsers from "./Icons/IconUsers";
import IconScale from "./Icons/IconScale";
import IconMoney from "./Icons/IconMoney";

function AdminDashboard() {
  const [component, setComponent] = useState("Productos");
  const [activeButton, setActiveButton] = useState("Productos");

  const handleClick = (event) => {
    setComponent(event.currentTarget.name);
    setActiveButton(event.currentTarget.name);
    console.log(event.currentTarget.name);
  };
  return (
    <div className="flex flex-row w-full gap-2 mb-8 overflow-x-hidden">
      <ul className="h-full p-0 text-lg menu lg:w-56 bg-base-100 rounded-box">
        <li className="hidden lg:block md:w-[50%] ">
          <button
            name="Productos"
            className={` ml-4 ${
              activeButton === "Productos"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconStore />
            <span className="font-semibold">Productos</span>
          </button>
          <button
            name="Cupones"
            className={` ml-4 ${
              activeButton === "Cupones"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconCoupon />
            <span className="font-semibold">Cupones</span>
          </button>
          <button
            name="Usuarios"
            className={` ml-4 ${
              activeButton === "Usuarios"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconUsers />
            <span className="font-semibold">Usuarios</span>
          </button>
          <button
            name="Ventas"
            className={` ml-4 ${
              activeButton === "Ventas"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconMoney />
            <span className="font-semibold">Ventas</span>
          </button>
          <button
            name="Estadisticas"
            className={` ml-4 ${
              activeButton === "Estadisticas"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconScale />
            <span className="font-semibold">Estadisticas</span>
          </button>
        </li>
        <li className="block lg:hidden xs:pl-1">
          <button
            name="Productos"
            className={` p-1 ${
              activeButton === "Productos"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconStore />
          </button>
          <button
            name="Cupones"
            className={`p-1 ${
              activeButton === "Cupones"
                ? "bg-primary text-black focus:bg-primary focus:text-black m-0"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconCoupon />
          </button>
          <button
            name="Usuarios"
            className={` p-1 ${
              activeButton === "Usuarios"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconUsers />
          </button>
          <button
            name="Ventas"
            className={` p-1 ${
              activeButton === "Ventas"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconMoney />
          </button>
          <button
            name="Estadisticas"
            className={` p-1 ${
              activeButton === "Estadisticas"
                ? "bg-primary text-black focus:bg-primary focus:text-black"
                : ""
            }`}
            onClick={handleClick}
          >
            <IconScale />
          </button>
        </li>
      </ul>
      {component === "Productos" && <Productos />}
      {component === "Usuarios" && <Usuarios />}
      {component === "Ventas" && <Ventas />}
      {component === "Cupones" && <Cupones />}
      {component === "Estadisticas" && <Estadisticas />}
    </div>
  );
}

export default AdminDashboard;
