import React from "react";
import { motion } from "framer-motion";

function ProductsCatalog() {
  return (
    <div className="bg-[#252525] h-[100vh] flex flex-col items-center justify-around w-full py-6">
      <div className="flex flex-col items-center">
        <h1 className="font-poppins text-5xl font-semibold text-white">
          Catálogo de Produtos
        </h1>
        <p className="font-poppins text-2xl font-medium text-white mt-6 text-center">
          Acessórios personalizados para deixar o seu carro
          <br />
          ainda mais especial!
        </p>
      </div>

      <div className="flex items-center gap-8">
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
            delay: 0.3,
          }}
          className="h-80 w-80 rounded-2xl bg-gray-500"
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
            delay: 0.6,
          }}
          className="h-80 w-80 rounded-2xl bg-gray-500"
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
            delay: 0.9,
          }}
          className="h-80 w-80 rounded-2xl bg-gray-500"
        ></motion.div>
      </div>
    </div>
  );
}

export default ProductsCatalog;
