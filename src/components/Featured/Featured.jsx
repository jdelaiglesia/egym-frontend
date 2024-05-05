// Import Hooks
import { NavLink } from "react-router-dom";

const Featured = () => {
  return (
    <div
      className="flex justify-center items-center w-full bg-cover min-h-screen"
      style={{
        backgroundImage: "url(/public/hero-1.png)",
      }}
    >
      <div className="text-center bg-base-100 bg-opacity-60 backdrop-blur-lg rounded-3xl py-32 px-8 text-neutral-content">
        <div className="max-w-md flex flex-col">
          <h1 className="mb-5 text-4xl font-bold">Hazte miembro</h1>
          <p className="mb-5 font-semibold text-lg">¡Entrena con nosotros!</p>
          <NavLink to="/shop" className="btn btn-primary font-bold">
            ¡Quiero unirme!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Featured;
