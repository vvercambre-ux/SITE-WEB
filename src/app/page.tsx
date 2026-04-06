"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, RotateCcw, Shield, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import ProductCard from "@/components/ProductCard";
import FloatingElements from "@/components/FloatingElements";
import { getBestSellers, getNewArrivals, products } from "@/data/products";
import { reviews } from "@/data/reviews";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

/* ═══════════════════════════════════════
   HERO SECTION — Dark Immersive
   ═══════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden noise-overlay min-h-screen flex items-center">
      {/* 3D Background */}
      <Hero3D />
      <FloatingElements />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 opacity-0 animate-fade-in-up">
              <Sparkles size={14} className="text-[#C8924A]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">Collection 2026</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] text-white opacity-0 animate-fade-in-up stagger-1">
              L&apos;attitude<br />
              <span className="italic text-[#C8924A] glow-text">avant tout.</span>
            </h1>

            <p className="text-white/50 text-base lg:text-lg max-w-md leading-relaxed opacity-0 animate-fade-in-up stagger-2">
              Sacs puffer, sneakers chunky et accessoires mode. Des pièces fortes pour un style qui marque les esprits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-3">
              <Link
                href="/boutique"
                className="btn-futuristic inline-flex items-center justify-center gap-3 bg-[#C8924A] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase"
              >
                <span className="flex items-center gap-3">
                  Explorer
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link
                href="/boutique?cat=sneakers"
                className="inline-flex items-center justify-center gap-2 glass text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
              >
                Sneakers
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4 opacity-0 animate-fade-in-up stagger-4">
              <div>
                <p className="text-2xl font-semibold text-white">15K+</p>
                <p className="text-[10px] tracking-widest uppercase text-white/40">Clientes</p>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <p className="text-2xl font-semibold text-white">4.8<span className="text-[#C8924A]">★</span></p>
                <p className="text-[10px] tracking-widest uppercase text-white/40">Note moyenne</p>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <p className="text-2xl font-semibold text-white">48h</p>
                <p className="text-[10px] tracking-widest uppercase text-white/40">Livraison</p>
              </div>
            </div>
          </div>

          {/* Hero product showcase */}
          <div className="relative hidden lg:block">
            {/* Main product image with 3D effect */}
            <div className="perspective-card">
              <div className="relative w-[420px] h-[520px] mx-auto shadow-futuristic">
                <Image
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
                  alt="Collection Maison Élara"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/20" />

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass p-4">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8924A]">Puffer Collection</p>
                    <p className="text-white text-sm font-medium mt-1">Sac Puffer Noir — 89 €</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating secondary product */}
            <div
              className="absolute -left-16 bottom-20 w-[180px] opacity-0 animate-fade-in-up stagger-5"
              style={{ animation: "floatSlow 6s ease-in-out infinite" }}
            >
              <div className="glass-dark p-3 shadow-futuristic">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80"
                    alt="Sneakers"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[9px] tracking-widest uppercase text-[#C8924A]">Sneakers</p>
                <p className="text-white text-xs mt-0.5">Gazelle Bold</p>
              </div>
            </div>

            {/* Orbiting decorative ring */}
            <div className="absolute top-10 -right-10 w-32 h-32 border border-[#C8924A]/10 rounded-full ring-rotate" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}

/* ═══════════════════════════════════════
   CATEGORIES — Visual cards
   ═══════════════════════════════════════ */
function CategoriesSection() {
  const categories = [
    {
      name: "Sacs Puffer",
      slug: "sacs",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      count: "4 modèles",
      accent: "#4A5A3A",
    },
    {
      name: "Sneakers",
      slug: "sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      count: "4 modèles",
      accent: "#C8924A",
    },
    {
      name: "Accessoires",
      slug: "accessoires",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
      count: "4 modèles",
      accent: "#B5623A",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">Nos univers</p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold">Explorer par catégorie</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/boutique?cat=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden card-3d opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="card-3d-inner relative w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

                {/* Accent line top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-8">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-1">{cat.name}</h3>
                  <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-5">{cat.count}</p>
                  <span className="glass px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase group-hover:bg-white/20 transition-all duration-300">
                    Découvrir
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   BEST SELLERS
   ═══════════════════════════════════════ */
function BestSellersSection() {
  const bestSellers = getBestSellers();

  return (
    <section className="py-24 lg:py-32 bg-[#F6F5F3] grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">Les favoris</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold">Best-sellers</h2>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors group"
          >
            Tout voir
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   IMMERSIVE BANNER — Full dark
   ═══════════════════════════════════════ */
function ImmersiveBanner() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#0A0A0A] overflow-hidden noise-overlay">
      {/* Ambient glows */}
      <div className="ambient-glow w-[600px] h-[600px] top-0 left-1/4" style={{ background: "radial-gradient(circle, rgba(200,146,74,0.08) 0%, transparent 70%)" }} />
      <div className="ambient-glow w-[400px] h-[400px] bottom-0 right-1/4" style={{ background: "radial-gradient(circle, rgba(74,90,58,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8924A] mb-6">L&apos;univers Élara</p>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold text-white leading-tight mb-8">
          Le luxe se réinvente.<br />
          <span className="italic text-[#C8924A]">Le style reste.</span>
        </h2>
        <p className="text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
          Chaque pièce est pensée pour durer. Des matières premium, un design intemporel et une attention aux détails qui fait toute la différence.
        </p>
        <Link
          href="/boutique"
          className="btn-futuristic inline-flex items-center gap-3 bg-transparent border border-[#C8924A]/50 text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C8924A] hover:border-[#C8924A] transition-all duration-500"
        >
          <span className="flex items-center gap-3">
            Découvrir la collection
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   NEW ARRIVALS
   ═══════════════════════════════════════ */
function NewArrivalsSection() {
  const newArrivals = getNewArrivals();

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">Just dropped</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold">Nouveautés</h2>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors group"
          >
            Tout voir
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {newArrivals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   WHY US — Futuristic cards
   ═══════════════════════════════════════ */
function WhyUsSection() {
  const reasons = [
    {
      icon: <Truck size={24} />,
      title: "Livraison express",
      text: "Offerte dès 150€. Emballage premium, suivi en temps réel, expédition 24-48h.",
    },
    {
      icon: <RotateCcw size={24} />,
      title: "Retours gratuits",
      text: "30 jours pour changer d'avis. Retours simples et remboursement rapide.",
    },
    {
      icon: <Shield size={24} />,
      title: "Qualité certifiée",
      text: "Chaque pièce est sélectionnée pour sa qualité, ses finitions et son design.",
    },
    {
      icon: <Star size={24} />,
      title: "Service 5★",
      text: "Une équipe passionnée, disponible 7j/7 pour vous accompagner.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] text-white relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">L&apos;engagement Élara</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold">Pourquoi nous choisir</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="glass text-center p-8 opacity-0 animate-fade-in-up hover:bg-white/[0.06] transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 border border-[#C8924A]/30 text-[#C8924A] mb-5">
                {reason.icon}
              </div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-3">{reason.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   REVIEWS — Glass cards
   ═══════════════════════════════════════ */
function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 lg:py-32 bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">Témoignages</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold">Ce que disent nos clientes</h2>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div
              key={review.id}
              className="bg-white p-8 shadow-premium border border-[#E5E5E5]/50 opacity-0 animate-fade-in-up hover:shadow-futuristic transition-shadow duration-500"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C8924A] text-[#C8924A]" />
                ))}
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center text-sm font-semibold text-[#C8924A]">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-[10px] text-[#6B6B6B]">{review.product} — {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <div className="bg-white p-8 shadow-premium border border-[#E5E5E5]/50">
            <div className="flex gap-1 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-[#C8924A] text-[#C8924A]" />
              ))}
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
              &ldquo;{reviews[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center text-sm font-semibold text-[#C8924A]">
                {reviews[currentIndex].avatar}
              </div>
              <div>
                <p className="text-sm font-medium">{reviews[currentIndex].name}</p>
                <p className="text-[10px] text-[#6B6B6B]">
                  {reviews[currentIndex].product} — {reviews[currentIndex].date}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors">
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs text-[#6B6B6B]">{currentIndex + 1} / {reviews.length}</span>
            <button onClick={next} className="p-2 border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   NEWSLETTER — Dark futuristic
   ═══════════════════════════════════════ */
function NewsletterSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden noise-overlay">
      {/* Glow */}
      <div className="ambient-glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(200,146,74,0.08) 0%, transparent 60%)" }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">Newsletter</p>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
          Restez dans la boucle
        </h2>
        <p className="text-white/40 text-sm leading-relaxed mb-10">
          Accédez en avant-première aux nouvelles collections, aux offres exclusives et à l&apos;univers Maison Élara.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-5 py-4 bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#C8924A]/50 transition-colors placeholder:text-white/30"
          />
          <button
            type="submit"
            className="bg-[#C8924A] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-[#B5623A] transition-colors"
          >
            S&apos;inscrire
          </button>
        </form>
        <p className="text-[10px] text-white/25 mt-4">
          En vous inscrivant, vous acceptez de recevoir nos communications. Désabonnement possible à tout moment.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <ImmersiveBanner />
      <NewArrivalsSection />
      <WhyUsSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}
