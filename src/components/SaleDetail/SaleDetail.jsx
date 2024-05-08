import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function SaleDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sale, setSale] = useState();
  
  useEffect(() => {
    if (location.state.sale) {
      setSale(location.state.sale);
    }
  }, []);

  const handleBack = () => {
    navigate("/dashboard");
  };
  
  return (
    <div className="flex justify-center h-screen">
      <div className="flex gap-10 p-10 mt-10 shadow-xl h-3/4">
        <div className="flex flex-col gap-2 text-sm md:text-xl justify-evenly ">
          <div className="flex flex-col gap-3 text">
            <p className="text-primary">
              {sale?.date.slice(8, 10) +
                "/" +
                sale?.date.slice(5, 7) +
                "/" +
                sale?.date.slice(0, 4)}
            </p>

            {sale?.user ? (
              <div className="flex flex-col gap-1">
                <p>{sale.user?.name + " " + sale.user?.last_name}</p>
                <p>{sale.user?.email}</p>
                <p>{sale.user?.address}</p>
                <p>
                  {sale?.user.phone_number
                    ? sale?.user.phone_number
                    : "Sin telefono"}
                </p>
              </div>
            ) : (
              <p>Sin informacion del usuario</p>
            )}
            <p className="text-success">${sale?.total}</p>
            <p
              className={`max-w-xs ${
                sale?.status === "completed" ? "text-success" : "text-warning"
              }`}
            >
              {sale?.status === "completed" ? "Completada" : "Pendiente..."}
            </p>
          </div>
          <button
            className="m-1 bg-transparent border-none shadow-none btn text-primary hover:bg-primary hover:text-black"
            onClick={handleBack}
          >
            Volver
          </button>
        </div>
        <div className="flex flex-col justify-center gap-2 pl-3 overflow-y-auto border-l max-full">
          {sale?.products.map((p) => {
            return (
              <div className="flex items-center gap-1 my-1 ">
                <img
                  src={p._id.url_image}
                  alt={p._id.name}
                  className="h-8 rounded-full md:h-10 "
                ></img>
                <p className="ml-2 text-sm md:text-lg">
                  {p._id.name} x {p.quantity}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SaleDetail;
