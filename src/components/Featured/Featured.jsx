// Import Hooks
import { NavLink } from "react-router-dom";

const Featured = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwZ3ltfGVufDB8fDB8fHww)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">E GYM</h1>
          <p className="mb-5">Tu gimnasio, gestionado desde tu casa.</p>
          <NavLink to="/shop" className="btn btn-primary">
            Ver nuestros productos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Featured;
