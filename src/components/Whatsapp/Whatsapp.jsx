import React from "react";
import whatsappIcon from "../../../public/whatsapp.svg";
import { NavLink } from "react-router-dom";
const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <NavLink to="https://wa.link/xhuhnq" target="_blank">
        <img src={whatsappIcon} alt="whatsapp logo" className="w-16 h-16"></img>
      </NavLink>
    </div>
  );
};

export default Whatsapp;
