import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../helpers/axios";
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
    <>
      <div className="overflow-x-auto w-full ">
        <table className="table table-zebra bg-transparent mt-2 ml-2">
          <thead className="max-w-md w-full">
            <tr>
              <th className="text-base p-2 max-w-xs overflow-auto">Email</th>
              <th className="text-base p-2 max-w-xs overflow-auto">
                Direccion
              </th>
              <th className="text-base p-2 max-w-xs overflow-auto">
                Productos
              </th>
              <th className="text-base p-2 max-w-xs overflow-auto">Total</th>
              <th className="text-base p-2 max-w-xs overflow-auto">Status</th>
              <th className="text-base p-2 pl-10 max-w-xs overflow-auto">
                Fecha
              </th>
              <th className="text-base p-2 pl-10 max-w-xs overflow-auto">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="max-w-md w-full">
            {sales?.map((s) => {
              return (
                <tr className="overflow-hidden">
                  <td className={`max-w-xs overflow-auto ${s.user?.email ? "text-primary" : null}`}>
                    {s.user?.email ? s.user?.email : "Sin email"}
                  </td>
                  <td className="max-w-xs overflow-auto">
                    {s.user?.address ? s.user?.address : "Sin dirección"}
                  </td>
                  <td className="flex flex-wrap gap-1 max-w-40 overflow-auto max-h-[105px]">
                    {s.products.map((p) => {
                      return (
                        <div className="indicator flex gap-1 my-1 items-center">
                          <img
                            src={p._id.url_image}
                            alt={p._id.name}
                            className="h-8 rounded-full "
                          ></img>
                        </div>
                      );
                    })}
                  </td>
                  <td className="max-w-xs text-primary">${s.total}</td>
                  <td
                    className={`max-w-xs font-bold ${
                      s.status === "completed" ? "text-success" : "text-warning"
                    }`}
                  >
                    {s.status === "completed" ? "Completada" : "Pendiente..."}
                  </td>
                  <td className="max-w-xs ">
                    {s.date.slice(8, 10) +
                      "/" +
                      s.date.slice(5, 7) +
                      "/" +
                      s.date.slice(0, 4)}
                  </td>
                  <td className="flex max-w-xs ">
                    <button
                      onClick={() => {
                        handleViewDetail(s);
                      }}
                      className="btn bg-transparent border-none shadow-none text-primary m-1 hover:bg-primary hover:text-black"
                    >
                      <IconView />
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(s._id);
                      }}
                      className="btn bg-transparent border-none shadow-none m-1 text-primary hover:bg-error hover:text-white"
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
    </>
  );
}

export default Ventas;
