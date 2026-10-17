import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/src/components/navbar';

export default function HeaderHero() {
  return (
    <div className="relative w-full bg-linear-to-b from-[#4A2306] via-[#A85C14] to-[#FCE3B4] text-[#FFE8C2] pb-24 overflow-hidden">
      {/* Navbar */}
      <Navbar />
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Lado Esquerdo: Textos e CTA */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-4xl font-extrabold text-[#FFF1D6] leading-tight">
            Seus doces favoritos <br />
            no Doce Bee’s!
          </h1>
          <p className="text-xl md:text-2xl text-[#FCE3B4] max-w-md">
            Encomende bolos, tortas, doces finos e muito mais.
          </p>

          {/* Botão de WhatsApp */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href="https://wa.me/5581999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#3D1D05] border border-[#D89B36] text-[#FCE3B4] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#522908] transition-all shadow-lg hover:scale-105"
            >
              <span className="bg-[#522908] p-2 rounded-full text-[#D89B36]">
                💬
              </span>
              Orçamento por Whatsapp
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagens de Doces */}
        <div className="relative h-87.5 md:h-112.5 w-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Torta de Morango */}
            <div className="absolute top-0 left-10 w-36 md:w-48 animate-bounce-slow">
              <img src="/images/home/tortilhaMorango.png" alt="Torta de Morango" className="w-full h-auto drop-shadow-2xl" />
            </div>
            {/* Tartalete / Torta de Limão */}
            <div className="absolute top-4 right-10 w-36 md:w-44">
              <img src="/images/home/tortilhaLimao.png" alt="Torta de Limão" className="w-full h-auto drop-shadow-2xl" />
            </div>
            {/* Fatia de Bolo de Chocolate */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 md:w-72">
              <img src="/images/home/boloChocolate.png" alt="Bolo de Chocolate" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}