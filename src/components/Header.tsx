"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/boutique", label: "Boutique" },
    { href: "/boutique?cat=sacs", label: "Sacs" },
    { href: "/boutique?cat=sneakers", label: "Sneakers" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#0A0A0A] text-white text-center py-2.5 text-[10px] tracking-[0.2em] uppercase border-b border-white/5">
        <span className="text-[#C8924A]">●</span> Livraison offerte dès 150€ — Retours gratuits sous 30 jours <span className="text-[#C8924A]">●</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#E5E5E5]/50"
            : "bg-[#0A0A0A] border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 -ml-2 transition-colors ${isScrolled ? "text-[#0A0A0A]" : "text-white"}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className={`text-xl lg:text-2xl font-display font-semibold tracking-tight transition-colors duration-500 ${
                isScrolled ? "text-[#0A0A0A]" : "text-white"
              }`}>
                MAISON ÉLARA
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 relative group ${
                    isScrolled
                      ? "text-[#6B6B6B] hover:text-[#0A0A0A]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#0A0A0A]" : "bg-[#C8924A]"
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden sm:block p-2 transition-opacity hover:opacity-60 ${
                  isScrolled ? "text-[#0A0A0A]" : "text-white"
                }`}
                aria-label="Rechercher"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-opacity hover:opacity-60 relative ${
                  isScrolled ? "text-[#0A0A0A]" : "text-white"
                }`}
                aria-label="Panier"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C8924A] text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden animate-fade-in ${isScrolled ? "bg-white border-t border-[#E5E5E5]" : "bg-[#0A0A0A] border-t border-white/5"}`}>
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base tracking-wide uppercase py-2 border-b ${
                    isScrolled
                      ? "text-[#0A0A0A] border-[#F5F0EB]"
                      : "text-white/80 border-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
