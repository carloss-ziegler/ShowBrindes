import React from "react";
import { motion } from "framer-motion";
interface ICardProps {
  title: string;
  subtitle: string;
  delay: number;
}
function Card({ subtitle, title, delay }: ICardProps) {
  return (
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
        duration: 0.8,
        delay,
      }}
      className="h-80 w-80 rounded-2xl flex flex-col items-center bg-gradient-to-b from-[#f89809] to-[#EFA74D] relative justify-center p-3 text-center"
    >
      <h1 className="text-white font-poppins text-xl font-semibold absolute top-4">
        {title}
      </h1>

      <p className="text-[#eee] font-poppins text-md font-regular">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default Card;
