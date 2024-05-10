import { useState, useEffect } from "react";
import { axios } from "../../helpers/axios";

function DiscountCoupon({ coupon, setCoupon }) {
  const [dataInput, setDataInput] = useState("");

  const changeDataInput = (e) => {
    setDataInput(e.target.value);
  };

  const searchCoupon = async () => {
    try {
      if (dataInput.length === 0) {
        setCoupon({ message: "Por favor ingresa un cupon" });
      } else {
        const { data } = await axios(`/coupon/${dataInput.toUpperCase()}`);
        setCoupon(data);
      }
    } catch (error) {
      setCoupon(error.message);
    }
  };

  useEffect(() => {
    setCoupon({});
  }, [dataInput]);

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
        <p className="text-primary my-2">{`Descuento del ${coupon.percentage}%`}</p>
      ) : coupon && coupon.message ? (
        <p className="text-error my-2">{coupon.message}</p>
      ) : (
        <p className="text-error my-2">Cupón no disponible</p>
      )}
      <button
        className="btn mt-2 btn-xs sm:btn-sm md:btn-md"
        onClick={searchCoupon}
      >
        Aplicar
      </button>
    </div>
  );
}
export default DiscountCoupon;
