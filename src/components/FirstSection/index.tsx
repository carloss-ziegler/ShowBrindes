import React from "react";
import { motion } from "framer-motion";

function FirstSection() {
  return (
    <div className="bg-[#f2f1f6] h-[100vh] flex w-full justify-center">
      <div className="flex flex-1 max-w-6xl items-center justify-center gap-1">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="flex-1"
        >
          <h1 className="text-5xl font-poppins font-medium text-black">
            Dê um toque de
            <br />
            personalidade ao
            <br />
            seu dia!
          </h1>
          <p className="text-2xl font-regular font-poppins text-[#252525]">
            Brindes personalizados que
            <br />
            fazem a diferença!
          </p>
        </motion.div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.3,
          }}
          className="flex-1 bg-[#999999] h-[600px] w-[600px] flex items-center justify-center"
        >
          img
        </motion.div>
      </div>
    </div>
  );
}

export default FirstSection;
