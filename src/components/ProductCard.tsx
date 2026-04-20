"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0], product.sizes?.[2]);
  };

  return (
    <Link
      href={`/produit/${product.slug}`}
      className="group block opacity-0 animate-fade-in-up card-3d"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-3d-inner">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-[#F6F5F3] overflow-hidden mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Hover overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 text-white text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 ${
              product.badge === "Best-seller" ? "bg-[#0A0A0A]" :
              product.badge === "Nouveau" ? "bg-[#4A5A3A]" :
              product.badge === "Tendance" ? "bg-[#C8924A]" :
              "bg-[#B5623A]"
            }`}>
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 bg-[#0A0A0A]/90 backdrop-blur-sm text-white p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#C8924A]"
            aria-label="Ajouter au panier"
          >
            <ShoppingBag size={16} />
          </button>

          {/* Promo */}
          {product.originalPrice && (
            <span className="absolute top-3 right-3 bg-[#B5623A] text-white text-[9px] tracking-wider uppercase px-2.5 py-1">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}

          {/* Bottom accent line on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C8924A] via-[#4A5A3A] to-[#C8924A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Info */}
        <div className="space-y-1.5">
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#C8924A]">
            {product.category === "sacs" ? "Sacs" : product.category === "sneakers" ? "Sneakers" : "Accessoires"}
          </p>
          <h3 className="text-sm font-medium group-hover:text-[#C8924A] transition-colors duration-200 leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{product.price} €</span>
            {product.originalPrice && (
              <span className="text-xs text-[#6B6B6B] line-through">
                {product.originalPrice} €
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-[#C8924A]" : "text-[#E5E5E5]"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[10px] text-[#6B6B6B] ml-1">({product.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
