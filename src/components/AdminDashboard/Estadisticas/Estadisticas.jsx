import React, { useEffect, useState } from "react";
import { axios } from "../../../helpers/axios";
import IconScaleStats from "../Icons/IconScaleStats";
import IconUsersStats from "../Icons/IconUsersStats";
import IconStar from "../Icons/IconStar";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

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
    <div className="flex text-primary">
      {[...Array(roundedRating)].map((_, i) => (
        <p key={i}>
          <IconStar />
        </p>
      ))}
    </div>
  );
}

function Estadisticas() {
  const { auth } = useAuth();
  const { ToastError } = useToast();
  const [stats, setStats] = useState({});

  const getStats = () => {
    axios("/stats", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then(({ data }) => setStats(data))
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };
  useEffect(() => {
    getStats();
  }, []);
  return stats.sales ? (
    <div className="overflow-auto xl:m-8 xl:w-3/5">
      <div className="flex flex-col overflow-auto">
        <div className="flex flex-col border-none md:flex-row xl:mb-3 xl:px-10 ">
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-center md:pl-2">
              <div className="pl-1 text-md xl:text-md">Ingresos totales</div>
              <div className="pl-4 text-xl font-bold md:pl-1 xl:text-4xl text-success">
                ${formatNumber(stats.sales?.totalMoney)}
              </div>
              <div className="pl-1 text-sm">
                Ventas totales: {stats.sales?.totalSales}
              </div>
            </div>
            <div className="mr-10 stat-figure text-primary">
              <IconScaleStats />
            </div>
          </div>

          <div className="flex justify-between w-full border-t border-primary md:border-none ">
            <div className="flex flex-col md:border-l md:border-primary md:pl-2">
              <div className="pl-1 text-md md:text-md">Usuarios totales</div>
              <div className="pl-4 text-xl font-bold md:text-4xl text-primary">
                {stats.users?.total}
              </div>
              <div className="pl-1 text-xs md:text-md">
                <p className="">
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
            <div className="mr-10 stat-figure text-primary w-[20px]">
              <IconUsersStats />
            </div>
          </div>
        </div>

        <div className="mt-1 border-none">
          <p className="pt-1 text-center border-t text-md md:text-xl border-primary text-primary">
            Productos
          </p>
          <div className="flex ">
            <div className="p-1 md:p-4 stat">
              <p className="text-sm md:text-lg">Mas vendidos</p>
              <div className="text-xs md:text-lg">
                {stats.products?.bestSellers.map((p, index) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <img
                        src={p.url_image}
                        alt={p.name}
                        className="w-8 m-1 rounded-full md:w-12"
                      />
                      <div>
                        <p className="text-sm">{p.name}</p>
                        <p className="text-xs text-primary">
                          {p.quantity} vendidos
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-1 md:p-4 stat">
              <p className="text-sm md:text-lg">Mas populares</p>
              <div>
                {stats.products?.bestsRating.map((p, index) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <img
                        src={p.url_image}
                        alt={p.name}
                        className="w-8 m-1 rounded-full md:w-12"
                      />
                      <div>
                        <p className="text-sm">{p.name}</p>
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
  ) : (
    <div className="flex items-center w-full font-bold justify-evenly text-primary text:sm md:text-lg lg:text:2xl">
      <p>Calculando estadisticas...</p>
      <ToastContainer />
    </div>
  );
}

export default Estadisticas;
