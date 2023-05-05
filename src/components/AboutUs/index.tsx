import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="bg-[#f2f1f6] flex w-full justify-center items-center py-6 px-4 gap-5">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="bg-gray-500 w-72 h-96 rounded-2xl flex-1"
      ></motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.7,
        }}
        className="flex-1 text-right"
      >
        <h1 className="font-poppins text-5xl font-semibold">Quem somos nós?</h1>
        <p className="text-xl font-poppins text-gray-900">
          Somos a Show Brindes, especialistas em brindes personalizados para
          carros. Com anos de experiência no mercado, oferecemos produtos de
          alta qualidade e atendimento personalizado aos nossos clientes.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUs;
