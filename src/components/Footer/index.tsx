import React from "react";
import Logo from "../../assets/LogoBrindes.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="h-[30vh] bg-[#252525] flex items-center justify-center px-3 relative py-2">
      <img src={Logo} className="h-44 w-44 absolute left-10" alt="" />

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

      <div className="flex flex-col items-center text-white text-lg gap-5 absolute right-10">
        <div className="cursor-pointer">
          <AiOutlineMail />
        </div>

        <a
          href="https://www.instagram.com/showbrindes._/"
          target="_blank"
          className="cursor-pointer"
        >
          <BsInstagram />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5561984823210&text=Ol%C3%A1...+Queria+mais+informa%C3%A7%C3%B5es+sobre+produtos"
          target="_blank"
          className="cursor-pointer"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Footer;
