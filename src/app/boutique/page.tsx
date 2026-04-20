"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  { value: "all", label: "Tout" },
  { value: "sacs", label: "Sacs" },
  { value: "sneakers", label: "Sneakers" },
  { value: "accessoires", label: "Accessoires" },
];

const sortOptions = [
  { value: "featured", label: "En vedette" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "newest", label: "Nouveautés" },
  { value: "rating", label: "Mieux notés" },
];

function BoutiqueContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat") || "all";

  const [selectedCategory, setSelectedCategory] = useState(catParam);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (a.badge === "Nouveau" ? -1 : b.badge === "Nouveau" ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8924A] mb-3">Collection</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold mb-4 text-white">La Boutique</h1>
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Explorez notre sélection de pièces mode soigneusement choisies. Des sacs aux sneakers, trouvez votre prochain coup de cœur.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 lg:mb-12">
            {/* Categories - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-[#0A0A0A] text-white"
                      : "border border-[#E5E5E5] text-[#6B6B6B] hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 text-sm tracking-wide"
            >
              <SlidersHorizontal size={16} />
              Filtrer
            </button>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6B6B6B] uppercase tracking-wide">Trier :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border-b border-[#E5E5E5] focus:border-[#0A0A0A] focus:outline-none pb-1 pr-6 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile filters */}
          {showFilters && (
            <div className="sm:hidden flex flex-wrap gap-2 mb-6 animate-fade-in">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-[#0A0A0A] text-white"
                      : "border border-[#E5E5E5] text-[#6B6B6B]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Active filter */}
          {selectedCategory !== "all" && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-[#6B6B6B]">Filtre actif :</span>
              <button
                onClick={() => setSelectedCategory("all")}
                className="inline-flex items-center gap-1.5 text-xs bg-[#F5F0EB] px-3 py-1.5 hover:bg-[#E5E5E5] transition-colors"
              >
                {categories.find((c) => c.value === selectedCategory)?.label}
                <X size={12} />
              </button>
            </div>
          )}

          {/* Results count */}
          <p className="text-xs text-[#6B6B6B] mb-8">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
          </p>

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function BoutiquePage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#C8924A] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BoutiqueContent />
    </Suspense>
  );
}
