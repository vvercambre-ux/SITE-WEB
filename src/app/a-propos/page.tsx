import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F0EB] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Notre histoire</p>
              <h1 className="font-display text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                L&apos;élégance<br />
                <span className="italic text-[#C9A96E]">accessible.</span>
              </h1>
              <p className="text-[#6B6B6B] leading-relaxed mb-4">
                Maison Élara est née d&apos;une conviction simple : le style ne devrait pas être réservé à une élite. Nous créons et sélectionnons des pièces mode — sacs, sneakers, accessoires — qui allient design contemporain, qualité premium et prix justes.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                Chaque produit est pensé pour les femmes qui veulent affirmer leur style au quotidien, sans compromis. Des matières soigneusement choisies, des finitions impeccables et une esthétique qui traverse les saisons.
              </p>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="L'univers Maison Élara"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Nos valeurs</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Ce qui nous guide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F5F0EB] flex items-center justify-center">
                <span className="font-display text-2xl text-[#C9A96E]">01</span>
              </div>
              <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Design intemporel</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Nous créons des pièces qui traversent les tendances. Un style affirmé mais jamais daté, pour une garde-robe qui dure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F5F0EB] flex items-center justify-center">
                <span className="font-display text-2xl text-[#C9A96E]">02</span>
              </div>
              <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Qualité accessible</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Des matériaux premium, des finitions soignées et un rapport qualité-prix exceptionnel. Le luxe sans l&apos;arrogance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F5F0EB] flex items-center justify-center">
                <span className="font-display text-2xl text-[#C9A96E]">03</span>
              </div>
              <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Engagement responsable</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Cuir vegan, emballages recyclés, production raisonnée. Nous avançons chaque jour vers une mode plus consciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl lg:text-5xl text-[#C9A96E] mb-2">15K+</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Clientes satisfaites</p>
            </div>
            <div>
              <p className="font-display text-4xl lg:text-5xl text-[#C9A96E] mb-2">4.8</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Note moyenne</p>
            </div>
            <div>
              <p className="font-display text-4xl lg:text-5xl text-[#C9A96E] mb-2">200+</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Pièces créées</p>
            </div>
            <div>
              <p className="font-display text-4xl lg:text-5xl text-[#C9A96E] mb-2">12</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Pays livrés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Prête à affirmer votre style ?
          </h2>
          <p className="text-[#6B6B6B] mb-8 leading-relaxed">
            Explorez notre collection et trouvez les pièces qui vous ressemblent.
          </p>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] transition-colors"
          >
            Découvrir la boutique
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
