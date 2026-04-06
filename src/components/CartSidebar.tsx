"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E5E5]">
          <h2 className="font-display text-lg font-semibold">Votre Panier</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-[#E5E5E5] mb-4" />
              <p className="text-[#6B6B6B] mb-2">Votre panier est vide</p>
              <p className="text-sm text-[#6B6B6B]/60 mb-6">
                Découvrez nos pièces mode et ajoutez vos coups de cœur.
              </p>
              <Link
                href="/boutique"
                onClick={() => setIsCartOpen(false)}
                className="bg-[#0A0A0A] text-white px-8 py-3 text-sm tracking-wide uppercase hover:bg-[#C9A96E] transition-colors"
              >
                Explorer la boutique
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-[#F5F0EB] flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                    <p className="text-xs text-[#6B6B6B] mt-1">
                      {item.selectedColor}
                      {item.selectedSize && ` — Taille ${item.selectedSize}`}
                    </p>
                    <p className="text-sm font-semibold mt-2">{item.product.price} €</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 border border-[#E5E5E5] flex items-center justify-center hover:border-[#0A0A0A] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 border border-[#E5E5E5] flex items-center justify-center hover:border-[#0A0A0A] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-xs text-[#6B6B6B] underline hover:text-[#0A0A0A] transition-colors"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E5E5E5] px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B6B6B]">Sous-total</span>
              <span className="text-lg font-semibold">{totalPrice} €</span>
            </div>
            <p className="text-xs text-[#6B6B6B]">
              Livraison offerte dès 150€. Taxes calculées à la commande.
            </p>
            <Link
              href="/panier"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-[#0A0A0A] text-white text-center py-4 text-sm tracking-wide uppercase hover:bg-[#C9A96E] transition-colors"
            >
              Voir le panier — {totalPrice} €
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
