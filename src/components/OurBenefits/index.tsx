import React from "react";
import Card from "./components/Card";

function OurBenefits() {
  return (
    <div className="bg-[#252525] h-[100vh] flex flex-col items-center w-full py-6 justify-between">
      <h1 className="text-4xl text-white font-poppins font-semibold">
        Nossos Benefícios
      </h1>

      <div className="grid grid-cols-2 gap-7">
        <Card
          title="Personalização"
          subtitle="Oferecemos a possibilidade de personalização de brindes e acessórios para você"
        />
        <Card
          title="Qualidade"
          subtitle="Todos os nossos produtos são feitos com materiais de alta qualidade"
        />
        <Card
          title="Entrega"
          subtitle="Entregamos nossos produtos, garantindo que eles cheguem rapidamente e em perfeito estado"
        />
        <Card
          title="Atendimento"
          subtitle="Oferecemos o melhor atendimento e ajudamos você a escolher os melhores produtos"
        />
      </div>
    </div>
  );
}

export default OurBenefits;
