import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">MAISON ÉLARA</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              L&apos;élégance accessible. Des pièces mode soigneusement sélectionnées pour celles qui veulent un style affirmé sans compromis sur la qualité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A96E] transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A96E] transition-colors" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[#C9A96E]">Boutique</h4>
            <ul className="space-y-3">
              <li><Link href="/boutique?cat=sacs" className="text-sm text-gray-400 hover:text-white transition-colors">Sacs</Link></li>
              <li><Link href="/boutique?cat=sneakers" className="text-sm text-gray-400 hover:text-white transition-colors">Sneakers</Link></li>
              <li><Link href="/boutique?cat=accessoires" className="text-sm text-gray-400 hover:text-white transition-colors">Accessoires</Link></li>
              <li><Link href="/boutique" className="text-sm text-gray-400 hover:text-white transition-colors">Nouveautés</Link></li>
              <li><Link href="/boutique" className="text-sm text-gray-400 hover:text-white transition-colors">Best-sellers</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[#C9A96E]">Informations</h4>
            <ul className="space-y-3">
              <li><Link href="/a-propos" className="text-sm text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Livraison & Retours</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">CGV</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[#C9A96E]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>hello@maisonelara.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>12 Rue du Faubourg Saint-Honoré<br />75008 Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Maison Élara. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-gray-500">Visa</span>
            <span className="text-xs text-gray-500">Mastercard</span>
            <span className="text-xs text-gray-500">Apple Pay</span>
            <span className="text-xs text-gray-500">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
