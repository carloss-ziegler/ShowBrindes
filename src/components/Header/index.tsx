import Logo from "../../assets/LogoBrindes.png";
import ButtonTalkToUs from "../ButtonTalkToUs";

function Header() {
  return (
    <div className="h-20 bg-[#252525] flex items-center justify-between shadow px-6 py-1">
      <img src={Logo} className="h-20 w-20" alt="Logo" />

      <div className="flex items-center gap-10">
        <a
          href="#products"
          className="text-md text-white font-poppins font-medium hover:border-[#f89809] hover:border-b"
        >
          Produtos
        </a>
        <a
          href="#aboutUs"
          className="text-md text-white font-poppins font-medium hover:border-[#f89809] hover:border-b"
        >
          Sobre Nós
        </a>
        <a
          href="#benefits"
          className="text-md text-white font-poppins font-medium hover:border-[#f89809] hover:border-b"
        >
          Benefícios
        </a>
        <ButtonTalkToUs />
      </div>
    </div>
  );
}

export default Header;
