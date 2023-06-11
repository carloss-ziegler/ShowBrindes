import React from "react";
import Card from "./components/Card";

function OurBenefits() {
  return (
    <div className="bg-[#252525] h-[100vh] flex flex-col items-center justify-center w-full py-6 relative">
      <h1 className="text-4xl text-white font-poppins font-semibold absolute top-8">
        Nossos Benefícios
      </h1>

      <div className="flex gap-7 items-center justify-center">
        <Card
          delay={0.2}
          title="Benefício"
          subtitle="Os cheirinhos são ótimos para fidelizar seus clientes. No setor de limpeza automotivo, se o cheiro acabou, significa que está na hora de voltar, enquanto em outras áreas é um lembrete diário da sua marca!"
        />
        <Card
          delay={0.4}
          title="Memórias Olfativas"
          subtitle="Sabe aquele cheiro que te faz lembrar de algum momento especial? Isso acontece porque temos uma incrível capacidade de associar cheiros a memórias no cérebro, ou seja, o cheirinho pode criar laços afetivos entre cliente e marca!"
        />
        <Card
          delay={0.6}
          title="Corte"
          subtitle="Além dos vários modelos que possuímos, nós ainda temos a opção de corte exclusivo, tudo para sua logo rodar por aí da melhor forma possível."
        />
      </div>
    </div>
  );
}

export default OurBenefits;
