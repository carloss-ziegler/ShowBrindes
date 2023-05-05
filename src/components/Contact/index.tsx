import React from "react";
import ButtonTalkToUs from "../ButtonTalkToUs";

function Contact() {
  return (
    <div className="bg-[#f2f1f6] flex w-full justify-center items-center p-6">
      <div className="h-[25rem] w-[80%] bg-gradient-to-b from-[#f89809] to-[#EFA74D] rounded-3xl shadow flex flex-col items-center text-center justify-center p-4 gap-9">
        <h1 className="text-white font-poppins font-semibold text-4xl">
          Tá esperando o que?
        </h1>

        <p className="text-xl text-[#fafafa] font-poppins font-medium">
          Mande uma mensagem para nós e faça o seu pedido.
          <br />
          Você não vai se arrepender!
        </p>

        <ButtonTalkToUs />
      </div>
    </div>
  );
}

export default Contact;
