// Import Hooks
import { axios } from "../../../helpers/axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";

const Pedidos = () => {
  const { auth } = useAuth();

  const [sales, setSales] = useState([]);

  const convertDay = (number) => {
    if (number === 7) return "Domingo";
    if (number === 6) return "Sabado";
    if (number === 5) return "Viernes";
    if (number === 4) return "Jueves";
    if (number === 3) return "Miercoles";
    if (number === 2) return "Martes";
    if (number === 1) return "Lunes";
  };

  useEffect(() => {
    axios.get("/sales").then(({ data }) => {
      const newData = data.filter((sale) => sale.user?.email === auth.email);
      setSales(newData);
    });
  }, []);

  if (sales.length === 0) {
    return <h2 className="text-4xl">Todavía no tienes pedidos</h2>;
  }

  return (
    <div className="flex flex-col gap-2">
      {sales.map((sale, index) => (
        <div className="collapse collapse-arrow bg-base-200" key={index}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <h2 className="font-bold text-md">
              Pedido{" "}
              {`${convertDay(new Date(sale?.date).getDay())} ${new Date(
                sale?.date
              ).getDate()}/${new Date(sale?.date).getMonth() + 1}`}
            </h2>
            <span
              className={`text-sm ${
                sale?.status === "completed"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {sale?.status === "completed" ? "Completada" : "Pendiente"}
            </span>
          </div>
          <div className="collapse-content">
            <p className="mb-2">Productos:</p>
            <ul>
              {sale.products?.map((product,index) => (
                <li className="flex gap-2 mb-2 items-center" key={index}>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={product._id.url_image}
                    alt={product._id.name}
                  />
                  <span>
                    {product.quantity} x {product._id.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="divider"></div>
            <span className="font-semibold">Total:</span>
            <h2 className="text-2xl font-bold">${sale.total}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pedidos;
