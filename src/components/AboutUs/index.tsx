import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="bg-[#f2f1f6] flex w-full justify-center items-center py-6 px-6 gap-5 h-96 relative text-center">
      {/* <motion.div
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
      ></motion.div> */}

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
        className="flex-1 text-center px-32"
      >
        <h1 className="font-poppins text-5xl font-semibold mb-5">
          Quem somos nós?
        </h1>
        <p className="text-xl font-poppins text-gray-900">
          Somos a Show Brindes, empresa com mais de 10 anos no mercado e
          especialista em produtos personalizados, com um catálogo em constante
          crescimento e de alta qualidade! Nos localizamos no Distrito Federal.
          Enviamos para todo o Brasil.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUs;
