"use client";

import React from "react";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* ═══ AMBIENT GLOW ORBS ═══ */}

      {/* Caramel glow - top right */}
      <div
        className="ambient-glow w-[500px] h-[500px] -top-40 -right-40"
        style={{ background: "radial-gradient(circle, rgba(200,146,74,0.15) 0%, transparent 70%)" }}
      />

      {/* Olive glow - bottom left */}
      <div
        className="ambient-glow w-[400px] h-[400px] bottom-10 -left-40"
        style={{
          background: "radial-gradient(circle, rgba(74,90,58,0.12) 0%, transparent 70%)",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
      />

      {/* Terracotta glow - center */}
      <div
        className="ambient-glow w-[300px] h-[300px] top-1/3 left-1/2 -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(181,98,58,0.08) 0%, transparent 70%)",
          animation: "pulse-glow 8s ease-in-out infinite 2s",
        }}
      />

      {/* ═══ GEOMETRIC SHAPES ═══ */}

      {/* Rotating ring - right side */}
      <div
        className="absolute top-[20%] right-[8%] w-24 h-24 border border-[#C8924A]/10 rounded-full ring-rotate"
      />

      {/* Second ring - smaller, offset */}
      <div
        className="absolute top-[22%] right-[9%] w-16 h-16 border border-[#4A5A3A]/10 rounded-full ring-rotate"
        style={{ animationDirection: "reverse", animationDuration: "15s" }}
      />

      {/* Diamond - left */}
      <div
        className="absolute top-[30%] left-[5%] w-8 h-8 border border-[#C8924A]/10"
        style={{
          transform: "rotate(45deg)",
          animation: "floatSlow 8s ease-in-out infinite",
        }}
      />

      {/* ═══ FLOATING DOTS ═══ */}

      <div
        className="absolute top-[12%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#C8924A]/30"
        style={{ animation: "float 5s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[55%] left-[12%] w-1 h-1 rounded-full bg-[#4A5A3A]/25"
        style={{ animation: "float 7s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute bottom-[25%] right-[18%] w-2 h-2 rounded-full bg-[#C8924A]/15"
        style={{ animation: "float 6s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute top-[70%] left-[30%] w-1 h-1 rounded-full bg-[#B5623A]/20"
        style={{ animation: "float 9s ease-in-out infinite 3s" }}
      />
      <div
        className="absolute top-[40%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#F5ECD7]/20"
        style={{ animation: "float 8s ease-in-out infinite 1.5s" }}
      />

      {/* ═══ LIGHT BEAMS ═══ */}

      {/* Vertical light beam - subtle */}
      <div
        className="absolute top-0 right-[30%] w-[1px] h-full"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(200,146,74,0.06) 30%, rgba(200,146,74,0.06) 70%, transparent 100%)",
        }}
      />

      {/* Diagonal light beam */}
      <div
        className="absolute -top-20 -right-20 w-[1px] h-[140%]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(74,90,58,0.05) 40%, transparent 100%)",
          transform: "rotate(-25deg)",
          transformOrigin: "top right",
        }}
      />

      {/* ═══ SCAN LINE ═══ */}
      <div className="absolute inset-0 scan-line overflow-hidden" />
    </div>
  );
}
