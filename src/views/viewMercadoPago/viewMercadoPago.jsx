import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "../../helpers/axios"
import { useEffect, useState } from 'react';

const ViewMercadoPago = ({products}) => {
  let [preferenceId, setPreferenceId] = useState("");

  useEffect(() => {
    // Inicializador MercadoPago
    initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, { locale: 'es-AR' });
  }, []);

  useEffect(() => {
    // Reinicia preferenceId cuando cambia products
    setPreferenceId("");
    // console.log("asdasd")
  }, [products]);

  const getPreference = async()=>{
        try {
          const response = await axios.post("/payment", products);
          setPreferenceId(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("No se pudo procesar Mercado Pago", error.message);
        }
      }
// console.log(products)
  return (
    <div>
      {preferenceId!=="" ? <Wallet initialization={{ preferenceId : preferenceId}}/>: 
      <button className="btn btn-primary" onClick={()=>getPreference()}>Finalizar Pago</button>}
    </div>
  );
  
};

export default ViewMercadoPago;