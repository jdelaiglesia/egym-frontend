import { NavLink } from "react-router-dom"
import paymentSuccessful from "../../../public/payment-success.svg"

function Success() {

    return (
        <div className={"flex items-center justify-center flex-col my-7"} >
            <img src={paymentSuccessful} alt="Successful Payment" className={"w-40"} />
            <p className={"text-4xl"}>¡Felicidades! Realizaste tu compra con exito.</p>
            <p className={"text-2xl"}>Te invitamos que sigas viendo la tienda</p>
            <NavLink to="/shop"><button className={"btn btn-primary my-6"}>Ver tienda</button></NavLink>
        </div>
    )
}

export default Success