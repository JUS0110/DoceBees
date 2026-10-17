import HeaderHero from '@/src/components/headerHero';
import Footer from '@/src/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Header e Hero */}
      <HeaderHero />

      {/* Conteúdo Principal / Seções intermediárias (Sobre, Catálogo) */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#4A2306] mb-4">Conheça Nossos Produtos</h2>
        <p className="text-gray-600">Em breve o catálogo completo aqui...</p>
      </main>

      {/* Footer com efeito de chocolate */}
      <Footer />
    </div>
  );
}
