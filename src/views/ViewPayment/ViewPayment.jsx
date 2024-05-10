// Import Components
import {
    Navbar,
    Footer,
} from "../../components/components";
import Success from "../../components/Payment/Success";
import Unsuccess from "../../components/Payment/Unsuccess";
import Pending from "../../components/Payment/Pending";

function ViewPayment() {

    //recibe status por params de esta forma, parametros enviados por mercado pago
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {status === "approved" ? (
                <Success />
            ) : status === "pending" || status === "in_process" ? (
                <Pending />
            ) : (<Unsuccess />)}
            <Footer />
        </div>
    )
}
export default ViewPayment