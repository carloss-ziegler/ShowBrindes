import React from "react";

interface ICardProps {
  title: string;
  subtitle: string;
}
function Card({ subtitle, title }: ICardProps) {
  return (
    <div className="h-60 w-60 rounded-lg bg-[#f89809] flex flex-col items-center justify-between p-3 text-center">
      <h1 className="text-white font-poppins text-xl font-medium">{title}</h1>

      <p className="text-[#f5f5f5] font-poppins text-md font-regular">
        {subtitle}
      </p>

      <div className="h-20 w-20 bg-gray-500 rounded"></div>
    </div>
  );
}

export default Card;
