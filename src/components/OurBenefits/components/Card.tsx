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
      className="h-60 w-60 rounded-lg bg-gradient-to-b from-[#f89809] to-[#EFA74D] flex flex-col items-center justify-between p-3 text-center"
    >
      <h1 className="text-white font-poppins text-xl font-semibold">{title}</h1>

      <p className="text-[#eee] font-poppins text-md font-regular">
        {subtitle}
      </p>

      <div className="h-20 w-20 bg-gray-500 rounded"></div>
    </motion.div>
  );
}

export default Card;
