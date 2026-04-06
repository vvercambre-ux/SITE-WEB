"use client";

import React from "react";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Floating geometric shapes */}

      {/* Large circle - top right */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Diamond shape - left */}
      <div
        className="absolute top-1/4 -left-8 w-16 h-16 opacity-[0.08]"
        style={{
          background: "#C9A96E",
          transform: "rotate(45deg)",
          animation: "float 6s ease-in-out infinite 1s",
        }}
      />

      {/* Small circles */}
      <div
        className="absolute top-[15%] right-[15%] w-3 h-3 rounded-full bg-[#C9A96E] opacity-20"
        style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
      />
      <div
        className="absolute top-[60%] left-[10%] w-2 h-2 rounded-full bg-[#C9A96E] opacity-15"
        style={{ animation: "float 7s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute bottom-[20%] right-[25%] w-4 h-4 rounded-full bg-[#C9A96E] opacity-10"
        style={{ animation: "float 9s ease-in-out infinite 1.5s" }}
      />

      {/* Decorative line */}
      <div
        className="absolute top-[40%] right-[5%] w-[1px] h-24 opacity-10"
        style={{
          background: "linear-gradient(to bottom, transparent, #C9A96E, transparent)",
          animation: "float 6s ease-in-out infinite 3s",
        }}
      />

      {/* Ring */}
      <div
        className="absolute bottom-[30%] left-[5%] w-20 h-20 rounded-full border border-[#C9A96E] opacity-[0.06]"
        style={{ animation: "float 10s ease-in-out infinite 2s" }}
      />
    </div>
  );
}
