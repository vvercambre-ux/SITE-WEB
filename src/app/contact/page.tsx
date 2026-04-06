"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F0EB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-3">Contact</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold mb-4">Parlons ensemble</h1>
          <p className="text-[#6B6B6B] max-w-lg mx-auto text-sm leading-relaxed">
            Une question sur un produit, une commande ou une collaboration ? Notre équipe est là pour vous.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">Nos coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Email</p>
                      <p className="text-sm text-[#6B6B6B]">hello@maisonelara.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Téléphone</p>
                      <p className="text-sm text-[#6B6B6B]">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Adresse</p>
                      <p className="text-sm text-[#6B6B6B]">
                        12 Rue du Faubourg Saint-Honoré<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Horaires</p>
                      <p className="text-sm text-[#6B6B6B]">
                        Lundi — Vendredi : 9h — 19h<br />
                        Samedi : 10h — 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#0A0A0A] transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#0A0A0A] transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3.5 border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#0A0A0A] transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2">Sujet</label>
                  <select className="w-full px-4 py-3.5 border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#0A0A0A] transition-colors bg-white text-[#6B6B6B]">
                    <option>Choisir un sujet</option>
                    <option>Question sur un produit</option>
                    <option>Suivi de commande</option>
                    <option>Retour / Échange</option>
                    <option>Collaboration / Presse</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3.5 border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#0A0A0A] transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0A0A0A] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
