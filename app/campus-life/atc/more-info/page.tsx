"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MoreInfoPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-slate-950 flex flex-col font-sans overflow-hidden">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      {/* Top Header bar with Back button */}
      <header className="w-full h-[64px] bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-20 shadow-lg shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl transition duration-200 border border-slate-700 hover:border-slate-600 text-xs md:text-sm active:scale-95"
          >
            <i className="fas fa-arrow-left" />
            Go back to Campus Life Page
          </Link>
          <span className="hidden sm:inline-block w-px h-6 bg-slate-850" />
          <div className="hidden sm:flex items-center gap-2 text-white/50 text-xs md:text-sm font-semibold">
            <span>ATC Experience</span>
            <i className="fas fa-chevron-right text-[8px]" />
            <span className="text-white/80">Alva's EDC Portal</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-white/70 font-semibold tracking-wide uppercase hidden xs:inline-block">
            EDC Live Portal
          </span>
        </div>
      </header>

      {/* Embedded Iframe Container */}
      <div className="flex-1 w-full relative z-10 bg-slate-950">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-20">
            <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-white/70 text-sm font-semibold tracking-wider">
              Connecting to Alva's EDC Portal...
            </p>
          </div>
        )}

        <iframe
          src="https://jolly-bush-09a7ab800.7.azurestaticapps.net/"
          className="w-full h-full border-none"
          title="Alva's EDC Portal"
          sandbox="allow-same-origin allow-scripts allow-forms"
          onLoad={() => setLoading(false)}
          style={{ height: "calc(100vh - 64px)" }}
        />
      </div>
    </div>
  );
}
