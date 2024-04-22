import { useState, useEffect } from "react";
import axios from "../../helpers/axios";

function DiscountCoupon() {
  const [coupon, setCoupon] = useState({});
  const [dataInput, setDataInput] = useState("");

  const changeDataInput = (e) => {
    setDataInput(e.target.value);
  };

  const searchCoupon = async () => {
    try {
      if (dataInput.length === 0) {
        setCoupon({ message: "por favor ingresa un cupon" });
      } else {
        const { data } = await axios(
          `/coupon/${dataInput}`
        );
        setCoupon(data);
      }
    } catch (error) {
      setCoupon(error.message);
    }
  };

  useEffect(() => {
    setCoupon({});
  }, [dataInput]);

  console.log(coupon);
  return (
    <div>
      <p className="my-2">¿Cupón de descuento?</p>
      <input
        className="input input-bordered input-sm w-full max-w-xs"
        type="text"
        placeholder="Ingrese un cupón de descuento"
        value={dataInput}
        onChange={changeDataInput}
      />
      {Object.keys(coupon).length === 0 ? (
        false
      ) : coupon && coupon.available === true ? (
        <p className="text-primary my-2">{`descuento del ${coupon.percentage}%`}</p>
      ) : coupon && coupon.message ? (
        <p className="text-error my-2">{coupon.message}</p>
      ) : (
        <p className="text-error my-2">Cupón no disponible</p>
      )}
      <button className="btn btn-xs my-2" onClick={searchCoupon}>
        Aplicar
      </button>
    </div>
  );
}
export default DiscountCoupon;
