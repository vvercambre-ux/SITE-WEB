"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag size={64} className="mx-auto text-[#E5E5E5] mb-6" />
          <h1 className="font-display text-3xl font-semibold mb-4">Votre panier est vide</h1>
          <p className="text-[#6B6B6B] mb-8 text-sm leading-relaxed">
            Vous n&apos;avez pas encore ajouté de produits. Parcourez notre boutique et trouvez votre prochaine pièce favorite.
          </p>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#C8924A] transition-colors"
          >
            Découvrir la boutique
          </Link>
        </div>
      </section>
    );
  }

  const shippingFree = totalPrice >= 150;
  const remaining = 150 - totalPrice;

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F0EB] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C8924A] mb-2">Panier</p>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold">
            Votre sélection ({items.length} article{items.length > 1 ? "s" : ""})
          </h1>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2">
              {/* Shipping progress */}
              {!shippingFree && (
                <div className="bg-[#F5F0EB] p-4 mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck size={16} className="text-[#C8924A]" />
                    <p className="text-sm">
                      Plus que <span className="font-semibold">{remaining.toFixed(0)} €</span> pour la livraison offerte
                    </p>
                  </div>
                  <div className="w-full h-1.5 bg-[#E5E5E5]">
                    <div
                      className="h-full bg-[#C8924A] transition-all duration-500"
                      style={{ width: `${Math.min(100, (totalPrice / 150) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
              {shippingFree && (
                <div className="bg-[#F5F0EB] p-4 mb-8 flex items-center gap-2">
                  <Truck size={16} className="text-[#C8924A]" />
                  <p className="text-sm font-medium">Livraison offerte pour votre commande !</p>
                </div>
              )}

              {/* Product rows */}
              <div className="divide-y divide-[#E5E5E5]">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 sm:gap-6 py-6 first:pt-0">
                    <div className="relative w-24 h-32 sm:w-28 sm:h-36 bg-[#F5F0EB] flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/produit/${item.product.slug}`}
                            className="text-sm font-medium hover:text-[#C8924A] transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-[#6B6B6B] mt-1">
                            {item.selectedColor}
                            {item.selectedSize && ` — Taille ${item.selectedSize}`}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
                          aria-label="Supprimer"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        <div className="flex items-center border border-[#E5E5E5]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 hover:bg-[#F5F0EB] transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-10 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-[#F5F0EB] transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold">
                          {item.product.price * item.quantity} €
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E5E5E5]">
                <Link
                  href="/boutique"
                  className="inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
                >
                  <ArrowLeft size={14} />
                  Continuer les achats
                </Link>
                <button
                  onClick={clearCart}
                  className="text-xs text-[#6B6B6B] underline hover:text-[#0A0A0A] transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#F8F8F8] p-6 lg:p-8 sticky top-28">
                <h2 className="font-display text-lg font-semibold mb-6">Résumé</h2>
                <div className="space-y-3 pb-6 border-b border-[#E5E5E5]">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B6B6B]">Sous-total</span>
                    <span>{totalPrice} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B6B6B]">Livraison</span>
                    <span>{shippingFree ? "Offerte" : "4,90 €"}</span>
                  </div>
                </div>
                <div className="flex justify-between py-6">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-semibold">
                    {shippingFree ? totalPrice : totalPrice + 4.9} €
                  </span>
                </div>
                <button className="w-full bg-[#0A0A0A] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#C8924A] transition-colors mb-4">
                  Commander
                </button>
                <p className="text-[10px] text-[#6B6B6B] text-center">
                  Paiement sécurisé — Visa, Mastercard, Apple Pay, PayPal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
