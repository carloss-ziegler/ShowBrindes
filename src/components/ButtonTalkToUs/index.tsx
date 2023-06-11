import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function ButtonTalkToUs({ isWpp }: { isWpp?: boolean }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5561984823210&text=Ol%C3%A1...+Queria+mais+informa%C3%A7%C3%B5es+sobre+produtos"
      target="_blank"
      className="font-poppins flex items-center justify-center gap-4 text-white font-medium px-4 py-2 text-lg rounded shadow relative"
      style={{
        backgroundColor: isWpp ? "#128c7e" : "#f89809",
        height: isWpp ? 50 : undefined,
        width: isWpp ? 400 : undefined,
      }}
    >
      {isWpp && (
        <>
          <div className="">
            <BsWhatsapp />
          </div>
          <p className="text-center">Fale Conosco</p>
        </>
      )}
      {!isWpp && "Fale Conosco"}
    </a>
  );
}

export default ButtonTalkToUs;
