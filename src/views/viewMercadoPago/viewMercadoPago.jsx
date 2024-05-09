import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { axios } from "../../helpers/axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const ViewMercadoPago = ({ products }) => {
  let [preferenceId, setPreferenceId] = useState("");
  let [idUser, setIdUser] = useState("");
  const { auth } = useAuth();

  useEffect(() => {
    // Inicializador MercadoPago
    initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, { locale: "es-AR" });

    //obtiene id de user del local y guarda en estado
    const userString = localStorage.getItem("user");
    const userObject = JSON.parse(userString);
    setIdUser(userObject._id);
  }, []);
  console.log(idUser);
  useEffect(() => {
    // Reinicia preferenceId cuando cambia products
    setPreferenceId("");
    // console.log("asdasd")
  }, [products]);

  const getPreference = async () => {
    try {
      const response = await axios.post(
        "/payment",
        { products, idUser },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );
      setPreferenceId(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("No se pudo procesar Mercado Pago", error.message);
    }
  };
  // console.log(products)
  return (
    <div>
      {preferenceId !== "" ? (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      ) : (
        <button className="btn btn-primary" onClick={() => getPreference()}>
          Finalizar Pago
        </button>
      )}
    </div>
  );
};

export default ViewMercadoPago;
