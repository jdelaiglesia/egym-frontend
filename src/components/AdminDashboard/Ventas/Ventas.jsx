import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconView from "../Icons/IconView";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

function Ventas() {
  const { ToastError } = useToast();
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  const getSales = () => {
    axios("/sales")
      .then(({ data }) => {
        const sortedSales = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setSales(sortedSales);
      })
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };

  useEffect(() => {
    getSales();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/sale/${id}`).then((res) => {
      getSales();
    });
  };
  const handleViewDetail = (sale) => {
    navigate("/dashboard/sale/detail", { state: { sale } });
  };
  return (
    <div className="w-full overflow-y-auto ">
      <table className="table w-full bg-transparent table-zebra">
        <thead className="w-full ">
          <tr className="flex items-center justify-between w-[98%]">
            <th className="hidden p-0 text-xs md:text-base xl:block xl:w-32">Email</th>
            <th className="hidden p-0 text-xs md:text-base md:p-2 xl:block xl:w-32">
              Direccion
            </th>
            <th className="p-0 text-xs md:text-base md:p-2 xl:hidden lg:w-32">
              Contacto
            </th>
            <th className="hidden p-0 text-xs md:text-base md:p-2 sm:block xl:w-40">
              Productos
            </th>
            <th className="p-0 text-xs md:text-base md:p-2 md:hidden">
              Detalles
            </th>
            <th className="hidden p-0 text-xs md:text-base md:p-2 md:block md:w-32 md:text-center">
              Total
            </th>
            <th className="hidden p-0 text-xs md:text-base md:p-2 md:block">
              Estado
            </th>
            <th className="hidden p-0 text-xs md:pl-10 md:text-base md:p-2 md:block">
              Fecha
            </th>
            <th className="p-0 mr-3 text-xs md:text-base md:p-2 md:pl-10">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="w-full ">
          {sales?.map((s) => {
            return (
              <tr className="flex items-center justify-between w-[98%]">
                <td
                  className={` overflow-auto hidden xl:block md:font-bold md:text-sm xl:w-40 ${
                    s.user?.email ? "text-primary" : null
                  }`}
                >
                  {s.user?.email ? s.user?.email : "Sin email"}
                </td>
                <td className="hidden overflow-auto xl:block xl:w-32">
                  {s.user?.address ? s.user?.address : "Sin dirección"}
                </td>
                <td className="flex flex-col w-24 gap-2 p-0 xl:hidden lg:w-40">
                  {/* CONTACTO XS */}
                  <p
                    className={`overflow-auto text-[13px] lg:text-sm  ${
                      s.user?.email ? "text-primary" : null
                    }`}
                  >
                    {s.user?.email ? s.user?.email : "Sin email"}
                  </p>
                  <p className="overflow-auto text-[11px] ">
                    {s.user?.address ? s.user?.address : "Sin dirección"}
                  </p>
                </td>
                
                <td className="hidden gap-1 sm:flex md:flex-wrap md:overflow-auto xl:items-center xl:justify-center md:w-32 xl:w-40">
                  {s.products.map((p) => {
                    return (
                      <div className="flex justify-center gap-1 my-1 center indicator">
                        <img
                          src={p._id.url_image}
                          alt={p._id.name}
                          className="h-8 rounded-full "
                        ></img>
                      </div>
                    );
                  })}
                </td>
                <td className="flex flex-col w-32 gap-2 p-1 text-center md:hidden">
                  {/* DETALLES XS */}
                  <p
                    className={`font-bold ${
                      s?.status === "completed"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  >
                    {s?.status === "completed" ? "Completada" : "Pendiente..."}
                  </p>
                  <p>
                    {s.date.slice(8, 10) +
                      "/" +
                      s.date.slice(5, 7) +
                      "/" +
                      s.date.slice(0, 4)}
                  </p>
                  <p>${s?.total}</p>
                </td>
                <td className="hidden text-primary md:block">${s.total}</td>
                <td
                  className={` font-bold hidden md:block ${
                    s.status === "completed" ? "text-success" : "text-warning"
                  }`}
                >
                  {s.status === "completed" ? "Completada" : "Pendiente..."}
                </td>
                <td className="hidden md:block">
                  {s.date.slice(8, 10) +
                    "/" +
                    s.date.slice(5, 7) +
                    "/" +
                    s.date.slice(0, 4)}
                </td>
                <td className="flex ">
                  <button
                    onClick={() => {
                      handleViewDetail(s);
                    }}
                    className="p-0 m-0 bg-transparent border-none shadow-none md:p-1 btn text-primary hover:bg-primary hover:text-black"
                  >
                    <IconView />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(s._id);
                    }}
                    className="p-0 m-0 bg-transparent border-none shadow-none md:p-1 btn text-primary hover:bg-error hover:text-white"
                  >
                    <IconDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default Ventas;
