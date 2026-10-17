import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contato" className="relative bg-white text-[#D09332] pt-24 pb-12 px-6 overflow-hidden">
      {/* Imagem/Efeito da Calda de Chocolate Derramada */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <img
          src="/images/footer/chocolate.png"
          alt="Calda de Chocolate"
          className="w-full h-auto min-h-[120px] object-cover object-top"
        />
      </div>

      <div className="max-w-7xl mx-auto pt-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative z-20">
        {/* Coluna 1: Logo e Direitos */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-[#EBB44E] flex items-center gap-1">
             Doce Bee’s
            </span>
          </div>
          <p className="text-sm font-medium text-[#D09332]/90 leading-relaxed max-w-xs">
            ©Doce Bee’s 2026. Todos os direitos reservados.
          </p>
        </div>

        {/* Coluna 2: Redes Sociais */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#D09332]">Redes sociais</h3>
          <ul className="space-y-3 text-base font-medium">
            <li>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <FaInstagram className="w-6 h-6" />
                <span>@doce.bees</span>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <FaFacebook className="w-6 h-6" />
                <span>@doce_bees</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/5581999999999" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <FaWhatsapp className="w-6 h-6" />
                <span>(81) 9 9999-9999</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Endereço */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#D09332]">Endereço</h3>
          <p className="text-base font-medium text-[#D09332] leading-relaxed">
            Rua do caju, <br />
            nº988 - Aldeia <br />
            Camaragibe/PE.
          </p>
        </div>
      </div>
    </footer>
  );
}