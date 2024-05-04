import React, { useEffect, useState } from "react";
import axios from "../../../helpers/axios";
import IconScale from "../Icons/IconScale";
import IconUsers from "../Icons/IconUsers";
import IconStar from "../Icons/IconStar";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
}

function Rating({ averageRating }) {
  const roundedRating = Math.round(averageRating);

  return (
    <div className="text-primary flex">
      {[...Array(roundedRating)].map((_, i) => (
        <p key={i}>
          <IconStar />
        </p>
      ))}
    </div>
  );
}

function Estadisticas() {
  const { ToastError } = useToast();
  const [stats, setStats] = useState({});

  const getStats = () => {
    axios("/stats")
      .then(({ data }) => setStats(data))
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };
  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className="m-8 w-3/5">
      <div className="flex flex-col">
        <div className="flex border-none mb-3">
          <div className="flex justify-between w-full px-10 ">
            <div className="flex flex-col">
              <div className="text-md pl-1">Ingresos totales</div>
              <div className="font-bold text-4xl text-success">
                ${formatNumber(stats.sales?.totalMoney)}
              </div>
              <div className="text-sm pl-1">
                Ventas totales: {stats.sales?.totalSales}
              </div>
            </div>
            <div className="stat-figure text-primary">
              <IconScale />
            </div>
          </div>

          <div className="flex justify-between w-full px-10 ">
            <div className="flex flex-col">
              <div className="text-md pl-1">Usuarios totales</div>
              <div className="font-bold text-4xl text-primary">
                {stats.users?.total}
              </div>
              <div className="text-sm pl-1">
                <p className=" ">
                  <span className="text-success ">
                    {Math.round(
                      (stats.users?.members * 100) / stats.users?.total
                    )}
                    %
                  </span>{" "}
                  de los Usuarios son miembros
                </p>
              </div>
            </div>
            <div className="stat-figure text-primary">
              <IconUsers />
            </div>
          </div>
        </div>

        <div className="border-none ">
          <p className="text-center border-primary border-t pt-1 text-xl text-primary">
            Productos
          </p>
          <div className="flex">
            <div className="stat">
              <p className="text-lg">Mas vendidos</p>
              <div>
                {stats.products?.bestSellers.map((p) => {
                  return (
                    <div className="flex items-center">
                      <img
                        src={p.url_image}
                        alt={p.name}
                        className="w-12 rounded-full m-1"
                      />
                      <div>
                        <p className="text-lg">{p.name}</p>
                        <p className="text-sm text-primary">
                          {p.quantity} vendidos
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="stat">
              <p className="text-lg">Mas populares</p>
              <div>
                {stats.products?.bestsRating.map((p) => {
                  return (
                    <div className="flex items-center">
                      <img
                        src={p.url_image}
                        alt={p.name}
                        className="w-12 rounded-full m-1"
                      />
                      <div>
                        <p>{p.name}</p>
                        <Rating averageRating={p.averageRating} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Estadisticas;
