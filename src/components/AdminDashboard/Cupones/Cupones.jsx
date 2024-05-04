import React, { useEffect, useState } from "react";
import { axios } from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconCoupon from "../Icons/IconCoupon";

function Cupones() {
  const [coupons, setCoupons] = useState([]);

  const getCoupons = () => {
    axios("/coupons")
      .then(({ data }) => {
        setCoupons(data);
      })
      .catch((error) => window.alert(error));
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
    <div className="flex flex-col bg-base-100 h-screen w-full">
      <div className="overflow-hidden w-full ">
        <table className="table table-zebra bg-transparent mt-2 ml-2">
          <thead>
            <tr>
              <th className="text-base p-2">Nombre</th>
              <th className="text-base p-2">Porcentaje</th>
              <th className="text-base p-2">Disponible</th>
              <th className="text-base p-2 pl-10">Accion</th>
            </tr>
          </thead>
          <tbody>
            {coupons?.map((c) => {
              return (
                <tr>
                  <td className="font-bold text-primary">{c.name}</td>
                  <td className="">{c.percentage}</td>
                  <td
                    className={`font-bold ${
                      c.available ? "text-success" : "text-error"
                    }`}
                  >
                    {c.available ? "Disponible" : "No disponible"}
                  </td>
                  <td className="flex">
                    <button
                      onClick={() => {
                        handleAvailable(c);
                      }}
                      className={`btn bg-transparent border-none shadow-none m-1 hover:bg-${
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
      </div>
    </div>
  );
}

export default Cupones;
