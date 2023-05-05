import React from "react";
import Logo from "../../assets/LogoBrindes.png";
import ButtonTalkToUs from "../ButtonTalkToUs";

function Header() {
  return (
    <div className="h-16 bg-[#f89809] flex items-center justify-between shadow px-6 py-1">
      <img src={Logo} className="h-16 w-16" alt="Logo" />

      <div className="flex items-center gap-10">
        <button className="text-md font-poppins font-medium">Produtos</button>
        <button className="text-md font-poppins font-medium">Sobre Nós</button>
        <button className="text-md font-poppins font-medium">Benefícios</button>
        <ButtonTalkToUs />
      </div>
    </div>
  );
}

export default Header;
