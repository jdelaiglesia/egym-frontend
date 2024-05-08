import { NavLink } from "react-router-dom"
import paymentUnsuccessful from "../../../public/payment-unsuccessful.svg"

function Unsuccess(){
    
    return(
        <div className={"flex items-center justify-center flex-col my-7"} >
            <img src={paymentUnsuccessful} alt="Successful Payment" className={"w-36" }/>
            <p className={"text-4xl"}>¡Oh no! Tu pago no se completo.</p>
            <p className={"text-2xl"}>te sugerimos que vuelvas a intentarlo</p>
            <NavLink to="/cart"><button className={"btn btn-primary my-6"}>ir al carrito</button></NavLink>
        </div>
    )
}

export default Unsuccess