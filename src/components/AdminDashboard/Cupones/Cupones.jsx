import React, { useEffect, useState } from "react";
import { axios } from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconCoupon from "../Icons/IconCoupon";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

function Cupones() {
  const [coupons, setCoupons] = useState([]);
  const { ToastError } = useToast();

  const getCoupons = () => {
    axios("/coupons")
      .then(({ data }) => {
        setCoupons(data);
      })
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };
  useEffect(() => {
    getCoupons();
  }, []);

  const handleAvailable = (coupon) => {
    const updatedCoupon = {
      name: coupon.name,
      available: !coupon.available,
    };
    axios.put(`/coupon`, updatedCoupon).then((res) => {
      getCoupons();
    });
  };
  const handleDelete = (id) => {
    axios.delete(`/coupon/${id}`).then((res) => {
      getCoupons();
    });
  };
  return (
    <div className="flex flex-col w-full bg-base-100">
      <div className="w-full overflow-auto ">
        <table className="table bg-transparent sm:mt-2 sm:ml-2 table-zebra">
          <thead>
            <tr className="flex gap-2 xs:w-[98%] xs:justify-between md:justify-evenly items-center">
              <th className="p-0 xs:w-14 xs:text-xs sm:p-2 sm:text-base sm:w-20">
                Nombre
              </th>
              <th className="p-0 md:p-2 sm:text-base xs:hidden sm:block">
                Descuento
              </th>
              <th className="p-0 xs:block sm:hidden">%</th>
              <th className="p-0 xs:text-xs md:p-2 sm:text-base xs:hidden sm:block">
                Disponibilidad
              </th>
              <th className="p-0 xs:block sm:hidden xs:w-24 xs:text-center">
                ✓
              </th>
              <th className="p-0 xs:text-xs xs:w-16 xs:text-center sm:text-start sm:p-2 sm:text-base sm:w-20 ">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons?.map((c) => {
              return (
                <tr className="flex items-center gap-2 xs:w-full xs:justify-between md:justify-evenly ">
                  <td className="font-bold text-primary xs:text-xs xs:p-1 sm:text-base sm:w-20">
                    {c.name}
                  </td>
                  <td className="xs:text-xs xs:p-1 sm:text-base sm:w-16 sm:text-center">
                    {c.percentage}%
                  </td>
                  <td
                    className={`font-bold xs:text-xs xs:p-1 sm:text-base sm:w-40 sm:text-end ${
                      c.available ? "text-success" : "text-error"
                    }`}
                  >
                    {c.available ? "Disponible" : "No disponible"}
                  </td>
                  <td className="flex xs:p-0 sm:p-2">
                    <button
                      onClick={() => {
                        handleAvailable(c);
                      }}
                      className={`btn bg-transparent border-none shadow-none m-1 xs:p-0 sm:p-2 hover:bg-${
                        c.available ? "success" : "error"
                      } ${
                        c.available
                          ? "text-success hover:text-black"
                          : "text-error hover:text-white"
                      }`}
                    >
                      <IconCoupon />
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(c._id);
                      }}
                      className="m-1 bg-transparent border-none shadow-none btn text-primary hover:bg-error hover:text-white xs:p-0 sm:p-2"
                    >
                      <IconDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cupones;
