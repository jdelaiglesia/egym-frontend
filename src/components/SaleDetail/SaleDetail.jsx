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
      <div className="flex h-3/4 gap-10 mt-10 p-10 shadow-xl">
        <div className="flex flex-col justify-evenly text-xl gap-2 ">
          <div className="flex flex-col text gap-3">
            <p className="text-primary">
              {sale?.date.slice(8, 10) +
                "/" +
                sale?.date.slice(5, 7) +
                "/" +
                sale?.date.slice(0, 4)}
            </p>

              {sale?.user ? (<div>
                <p>{sale.user?.name + " " + sale.user?.last_name}</p>
            <p>{sale.user?.email}</p>
            <p>{sale.user?.address}</p>
            <p>
              {sale?.user.phone_number
                ? sale?.user.phone_number
                : "Sin telefono"}
            </p>
              </div>) : (<p>Sin informacion del usuario</p>)}
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
            className="btn bg-transparent border-none shadow-none text-primary m-1 hover:bg-primary hover:text-black"
            onClick={handleBack}
          >
            Volver
          </button>
        </div>
        <div className="flex flex-col max-full overflow-y-auto border-l pl-3 justify-center gap-2">
          {sale?.products.map((p) => {
            return (
              <div className="flex gap-1 my-1 items-center ">
                <img
                  src={p._id.url_image}
                  alt={p._id.name}
                  className="h-10 rounded-full "
                ></img>
                <p className="text-lg ml-2">
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
