import React from "react";
import { motion } from "framer-motion";
import cheirinho from "../../assets/Cheirinho.jpg";
import chaveiro from "../../assets/chaveiroMEtal.png";
import tapete from "../../assets/Tapete.jpg";
import sacolinha from "../../assets/sacolinha.jpg";

function ProductsCatalog() {
  return (
    <div className="bg-[#252525] h-[100vh] flex flex-col items-center justify-around w-full py-6">
      <div className="flex flex-col items-center">
        <h1 className="font-poppins text-5xl font-semibold text-white">
          Top 4 Brindes
        </h1>
        <p className="font-poppins text-2xl font-medium text-white mt-6 text-center">
          Os queridinhos dos clientes
        </p>
      </div>

      <div className="flex items-center gap-6 px-10">
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
            delay: 0.2,
          }}
        >
          <h3 className="text-center -mt-5 text-xl mb-2 text-white font-poppins">
            Cheirinho
          </h3>
          <div className="w-72 h-72 rounded-2xl bg-gray-500 overflow-hidden">
            <img
              src={cheirinho}
              className="object-cover w-full h-full hover:scale-125 duration-300"
            />
          </div>
          {/* <img src={image1} /> */}
        </motion.div>

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
            delay: 0.4,
          }}
        >
          <h3 className="text-center -mt-5 text-xl mb-2 text-white font-poppins">
            Sacolinha
          </h3>
          <div className="w-72 h-72 rounded-2xl bg-gray-500 overflow-hidden">
            <img
              src={sacolinha}
              className="object-cover w-full h-full hover:scale-125 duration-300"
            />
          </div>
        </motion.div>

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
        >
          <h3 className="text-center -mt-5 text-xl mb-2 text-white font-poppins">
            Tapete
          </h3>
          <div className="w-72 h-72 rounded-2xl bg-gray-500 overflow-hidden">
            <img
              src={tapete}
              className="object-cover w-full h-full hover:scale-125 duration-300"
            />
          </div>
        </motion.div>

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
            delay: 0.8,
          }}
        >
          <h3 className="text-center -mt-5 text-xl mb-2 text-white font-poppins">
            Chaveirinho de Metal
          </h3>
          <div className="w-72 h-72 rounded-2xl bg-gray-500 overflow-hidden">
            <img
              src={chaveiro}
              className="object-cover w-full h-full hover:scale-125 duration-300"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductsCatalog;
