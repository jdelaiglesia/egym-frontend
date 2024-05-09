import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import {axios} from "../../helpers/axios"
import { useEffect, useState } from 'react';

const ViewMercadoPago = ({products}) => {
  let [preferenceId, setPreferenceId] = useState("");
  let [idUser, setIdUser] = useState("")
  
  useEffect(() => {
    // Inicializador MercadoPago
    initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, { locale: 'es-AR' });

    //obtiene id de user del local y guarda en estado
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);
   
    setIdUser(userObject._id);
  }, []);

  useEffect(() => {
    // Reinicia preferenceId cuando cambia products
    setPreferenceId("");
  
  }, [products]);

  const getPreference = async()=>{
        try {
          const response = await axios.post("/payment", {products, idUser});
          setPreferenceId(response.data);
        } catch (error) {
          console.log(error)
      
        }
      }

  return (
    <div>
      {preferenceId!=="" ? <Wallet initialization={{ preferenceId : preferenceId}}/>: 
      <button className="btn btn-primary" onClick={()=>getPreference()}>Finalizar Pago</button>}
    </div>
  );
  
};

export default ViewMercadoPago;