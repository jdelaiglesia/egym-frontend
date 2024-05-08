// Import Components
import {
    Navbar,
    Footer,
  } from "../../components/components";
import Success from "../../components/Payment/Success";
import Unsuccess from "../../components/Payment/Unsuccess";
import Pending from "../../components/Payment/Pending";

function ViewPayment(){

    //recibe status por params de esta forma, parametros enviados por mercado pago
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    return(
        <>
            <Navbar />
            {status==="approved" ? (
                <Success/>
            ) : status==="pending" || status==="in_process" ? (
                <Pending/>
            ) : (<Unsuccess/>)}
            <Footer />
        </>
    )
}
export	default ViewPayment

//ejemplo de parametros enviados por mercado pago
// https://e35b-181-1-77-15.ngrok-free.app/payment/successful?
// collection_id=1318112710&
// collection_status=approved&
// payment_id=1318112710&
// status=approved&
// external_reference=Reference_1234&
// payment_type=credit_card&
// merchant_order_id=18466588647&
// preference_id=197253731-6801bfa5-c549-450d-8b54-a58343e2ec41&
// site_id=MLA&
// processing_mode=aggregator&
// merchant_account_id=null