import React from "react";
import Logo from "../../assets/LogoBrindes.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="h-[30vh] bg-[#252525] flex items-center justify-around px-4 py-2">
      <img src={Logo} className="h-20 w-20" alt="" />

      <div className="text-center">
        <button
          onClick={() =>
            (window.location.href = "mailto:chziegler445@gmail.com")
          }
          className="text-white font-medium font-poppins text-lg"
        >
          contato@showsbrindes.com
        </button>
        <p className="text-white font-medium font-poppins text-lg">
          &copy; 2023 Show Brindes. Todos os direitos reservados.
        </p>
      </div>

      <div className="flex flex-col items-center text-white text-lg gap-5">
        <div className="cursor-pointer">
          <AiOutlineMail />
        </div>

        <div className="cursor-pointer">
          <BsInstagram />
        </div>

        <div className="cursor-pointer">
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
}

export default Footer;
