import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { axios } from "../../helpers/axios";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

const ViewMercadoPago = () => {
  let [preferenceId, setPreferenceId] = useState("");

  const {
    cart: { products, total },
  } = useCart();

  useEffect(() => {
    // Inicializador MercadoPago
    initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, { locale: "es-AR" });
  }, []);

  useEffect(() => {
    const getPreference = async () => {
      try {
        const response = await axios.post("/payment", products);
        setPreferenceId(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("No se pudo procesar Mercado Pago", error.message);
      }
    };
    getPreference();
  }, [products]);

  console.log(preferenceId);

  return (
    <div>
      {preferenceId !== "" && (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      )}
    </div>
  );
};

export default ViewMercadoPago;
