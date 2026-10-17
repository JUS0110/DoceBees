import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-start gap-12 relative z-20">
      {/* 1. Logo à esquerda */}
      <Link href="#home" className="flex items-center gap-3 cursor-pointer shrink-0">
        <div className="relative w-44 md:w-56 h-auto flex items-center justify-center shrink-0">
          <Image
            src="/images/home/logoNavbar.png"
            alt="Logo Doce Bee's"
            width={300}
            height={100}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </Link>

      {/* 2. Container dos Links em Pílula com Borda Fina */}
      <nav className="hidden md:flex items-center justify-between gap-28 border border-[#8C4A1A]/60 px-12 py-3 rounded-full bg-[#2A1004]/30 backdrop-blur-xs">
        <Link
          href="#home"
          className="text-[#E8A030] font-normal hover:text-[#FFC256] transition-colors text-lg whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          href="#sobre"
          className="text-[#E8A030] font-normal hover:text-[#FFC256] transition-colors text-lg whitespace-nowrap"
        >
          Sobre
        </Link>
        <Link
          href="#catalogo"
          className="text-[#E8A030] font-normal hover:text-[#FFC256] transition-colors text-lg whitespace-nowrap"
        >
          Catálogo
        </Link>
        <Link
          href="#contato"
          className="text-[#E8A030] font-normal hover:text-[#FFC256] transition-colors text-lg whitespace-nowrap"
        >
          Informações e contato
        </Link>
      </nav>
    </header>
  );
}