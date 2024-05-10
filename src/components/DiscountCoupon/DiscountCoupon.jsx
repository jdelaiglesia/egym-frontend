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
    <div className="flex flex-col">
      <div className="flex flex-row gap-2">
      <input
        className="input input-bordered w-full max-w-28"
        type="text"
        placeholder="¿Cupón?"
        value={dataInput}
        onChange={changeDataInput}
      />
      <button
        className="btn"
        onClick={searchCoupon}
      >
        Aplicar
      </button>
      </div>

      {Object.keys(coupon).length === 0 ? (
        false
      ) : coupon && coupon.available === true ? (
        <p className="text-primary text-xs font-semibold my-1">{`Descuento del ${coupon.percentage}%`}</p>
      ) : coupon && coupon.message ? (
        <p className="text-error text-xs font-semibold my-1">{coupon.message}</p>
      ) : (
        <p className="text-error text-xs font-semibold my-1">Cupón no disponible</p>
      )}

    </div>
  );
}
export default DiscountCoupon;
