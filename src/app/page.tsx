"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, RotateCcw, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import ProductCard from "@/components/ProductCard";
import FloatingElements from "@/components/FloatingElements";
import { getBestSellers, getNewArrivals } from "@/data/products";
import { reviews } from "@/data/reviews";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

function HeroSection() {
  return (
    <section className="relative bg-[#F5F0EB] overflow-hidden">
      {/* 3D Background Elements */}
      <Hero3D />
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[85vh] lg:min-h-[90vh] py-16 lg:py-0">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-medium opacity-0 animate-fade-in-up">
              Nouvelle Collection 2026
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] opacity-0 animate-fade-in-up stagger-1">
              Le style qui<br />
              <span className="italic text-[#C9A96E]">vous définit.</span>
            </h1>
            <p className="text-[#6B6B6B] text-base lg:text-lg max-w-md leading-relaxed opacity-0 animate-fade-in-up stagger-2">
              Sacs matelassés, sneakers tendance et accessoires mode — découvrez des pièces fortes pour un style qui ne passe jamais inaperçu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-3">
              <Link
                href="/boutique"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] transition-colors duration-300"
              >
                Explorer la collection
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/boutique?cat=sneakers"
                className="inline-flex items-center justify-center gap-2 border border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
              >
                Sneakers
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative perspective-card">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] max-h-[70vh] lg:max-h-none shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
                alt="Collection Maison Élara"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating card with glassmorphism */}
            <div className="hidden lg:block absolute -left-8 bottom-16 bg-white/85 backdrop-blur-md p-5 shadow-premium max-w-[220px] animate-fade-in-up stagger-4 border border-white/40">
              <p className="text-[10px] tracking-widest uppercase text-[#C9A96E] mb-1">Best-seller</p>
              <p className="text-sm font-medium">Matelassé Noir Élégance</p>
              <p className="text-sm font-semibold mt-1">189 €</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = [
    {
      name: "Sacs",
      slug: "sacs",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      count: "4 pièces",
    },
    {
      name: "Sneakers",
      slug: "sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      count: "4 pièces",
    },
    {
      name: "Accessoires",
      slug: "accessoires",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
      count: "4 pièces",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Nos univers</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold">Explorer par catégorie</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/boutique?cat=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-xs tracking-widest uppercase opacity-80">{cat.count}</p>
                <span className="mt-4 border border-white/60 px-6 py-2 text-xs tracking-widest uppercase group-hover:bg-white group-hover:text-[#0A0A0A] transition-all duration-300">
                  Découvrir
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellersSection() {
  const bestSellers = getBestSellers();

  return (
    <section className="py-20 lg:py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Les favoris</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Best-sellers</h2>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors group"
          >
            Tout voir
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewArrivalsSection() {
  const newArrivals = getNewArrivals();

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Just dropped</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Nouveautés &amp; Tendances</h2>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors group"
          >
            Tout voir
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {newArrivals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const reasons = [
    {
      icon: <Truck size={28} />,
      title: "Livraison soignée",
      text: "Offerte dès 150€. Emballage premium et suivi en temps réel pour chaque commande.",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Retours gratuits",
      text: "30 jours pour changer d'avis. Retours simples et remboursement rapide.",
    },
    {
      icon: <Shield size={28} />,
      title: "Qualité certifiée",
      text: "Chaque pièce est sélectionnée pour sa qualité, ses finitions et son design.",
    },
    {
      icon: <Star size={28} />,
      title: "Service client 5★",
      text: "Une équipe passionnée, disponible 7j/7 pour vous accompagner.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">L&apos;engagement Élara</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold">Pourquoi nous choisir</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="text-center p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-[#C9A96E]/30 text-[#C9A96E] mb-5">
                {reason.icon}
              </div>
              <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Témoignages</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold">Ce que disent nos clientes</h2>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div
              key={review.id}
              className="border border-[#E5E5E5] p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F0EB] flex items-center justify-center text-sm font-semibold text-[#C9A96E]">
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
          <div className="border border-[#E5E5E5] p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
              &ldquo;{reviews[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5F0EB] flex items-center justify-center text-sm font-semibold text-[#C9A96E]">
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

function NewsletterSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F0EB]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Newsletter</p>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
          Restez dans la boucle
        </h2>
        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">
          Accédez en avant-première aux nouvelles collections, aux offres exclusives et à l&apos;univers Maison Élara.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-5 py-4 bg-white border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-[#6B6B6B]/50"
          />
          <button
            type="submit"
            className="bg-[#0A0A0A] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] transition-colors"
          >
            S&apos;inscrire
          </button>
        </form>
        <p className="text-[10px] text-[#6B6B6B] mt-4">
          En vous inscrivant, vous acceptez de recevoir nos communications. Désabonnement possible à tout moment.
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <NewArrivalsSection />
      <WhyUsSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}
