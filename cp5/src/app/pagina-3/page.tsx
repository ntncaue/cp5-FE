import React from 'react';
import Image from "next/image"

export default function Livro() {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">Immanuel Velikovsky</h1>
      
      <Image src={"/img/livro.jpg"} alt='Immanuel Velikovsky' width={330} height={330}></Image>
      <p className="text-lg leading-relaxed text-center">
      Immanuel Velikovsky (1895–1979) foi um autor controverso que escreveu livros sobre a história do sistema solar e da Terra, incluindo o best-seller Mundos em Colisão, publicado em 1950.
      </p>
    </div>
  );
}