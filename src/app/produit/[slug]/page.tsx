"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Truck, RotateCcw, Shield, ChevronRight, Minus, Plus } from "lucide-react";
import { getProductBySlug, getSimilarProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Produit non trouvé</h1>
          <Link href="/boutique" className="text-sm text-[#C9A96E] underline">
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  const similarProducts = getSimilarProducts(product);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, product.colors[selectedColor], product.sizes?.[selectedSize]);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
          <Link href="/" className="hover:text-[#0A0A0A] transition-colors">Accueil</Link>
          <ChevronRight size={12} />
          <Link href="/boutique" className="hover:text-[#0A0A0A] transition-colors">Boutique</Link>
          <ChevronRight size={12} />
          <Link href={`/boutique?cat=${product.category}`} className="hover:text-[#0A0A0A] transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0A0A0A]">{product.name}</span>
        </div>
      </nav>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-[#F5F0EB] overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#0A0A0A] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative aspect-square bg-[#F5F0EB] overflow-hidden transition-all ${
                      selectedImage === i ? "ring-2 ring-[#0A0A0A]" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="100px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">
              {product.category === "sacs" ? "Sacs" : product.category === "sneakers" ? "Sneakers" : "Accessoires"}
            </p>
            <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? "fill-[#C9A96E] text-[#C9A96E]" : "text-[#E5E5E5]"}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B]">
                {product.rating} ({product.reviews} avis)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl font-semibold">{product.price} €</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-[#6B6B6B] line-through">{product.originalPrice} €</span>
                  <span className="bg-[#C9A96E] text-white text-xs px-2.5 py-1 tracking-wider uppercase">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">
                Couleur : <span className="text-[#6B6B6B]">{product.colors[selectedColor]}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(i)}
                    className={`px-4 py-2 text-xs border transition-colors ${
                      selectedColor === i
                        ? "border-[#0A0A0A] bg-[#0A0A0A] text-white"
                        : "border-[#E5E5E5] hover:border-[#0A0A0A]"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            {product.sizes && (
              <div className="mb-8">
                <p className="text-xs tracking-widest uppercase mb-3">
                  Taille : <span className="text-[#6B6B6B]">{product.sizes[selectedSize]}</span>
                </p>
                <div className="flex gap-2">
                  {product.sizes.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(i)}
                      className={`w-12 h-12 text-sm border transition-colors ${
                        selectedSize === i
                          ? "border-[#0A0A0A] bg-[#0A0A0A] text-white"
                          : "border-[#E5E5E5] hover:border-[#0A0A0A]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-[#E5E5E5]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5F0EB] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5F0EB] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#0A0A0A] text-white text-sm tracking-widest uppercase hover:bg-[#C9A96E] transition-colors duration-300"
              >
                Ajouter au panier
              </button>
            </div>

            {/* Trust badges */}
            <div className="border-t border-[#E5E5E5] pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck size={18} className="text-[#C9A96E]" />
                <div>
                  <p className="text-sm font-medium">Livraison offerte dès 150€</p>
                  <p className="text-xs text-[#6B6B6B]">Expédition sous 24-48h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={18} className="text-[#C9A96E]" />
                <div>
                  <p className="text-sm font-medium">Retours gratuits</p>
                  <p className="text-xs text-[#6B6B6B]">30 jours pour changer d&apos;avis</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-[#C9A96E]" />
                <div>
                  <p className="text-sm font-medium">Paiement sécurisé</p>
                  <p className="text-xs text-[#6B6B6B]">Visa, Mastercard, Apple Pay, PayPal</p>
                </div>
              </div>
            </div>

            {/* Details accordion */}
            <div className="border-t border-[#E5E5E5] mt-6 pt-6">
              <h3 className="text-xs tracking-widest uppercase mb-4">Détails du produit</h3>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                    <span className="w-1 h-1 bg-[#C9A96E] rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Similar products */}
      {similarProducts.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#F8F8F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Vous aimerez aussi</p>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold">Produits similaires</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {similarProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
