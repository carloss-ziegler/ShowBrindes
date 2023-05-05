import React from "react";

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
          ainda mais especial
        </p>
      </div>

      <div className="flex items-center gap-8">
        <div className="h-80 w-80 rounded-2xl bg-gray-500"></div>
        <div className="h-80 w-80 rounded-2xl bg-gray-500"></div>
        <div className="h-80 w-80 rounded-2xl bg-gray-500"></div>
      </div>
    </div>
  );
}

export default ProductsCatalog;
