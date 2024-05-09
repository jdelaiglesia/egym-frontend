import { NavLink } from "react-router-dom"
import paymentPending from "../../../public/payment-pending.svg"

function Pending(){
   
    return(
        <div className={"flex items-center justify-center flex-col my-7"} >
            <img src={paymentPending} alt="Successful Payment" className={"w-40" }/>
            <p className={"text-4xl"}>¡Genial! Tu pago quedo pendiente.</p>
            <p className={"text-2xl"}>Recibiras mas informacion cuando se complete con exito</p>
            <NavLink to="/"><button className={"btn btn-primary my-6"}>volver a home</button></NavLink>
        </div>
    )
}

export default Pending