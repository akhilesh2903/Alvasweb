"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MobileMenu from "../../../components/MobileMenu";
import AnimatedBackground from "../../../components/AnimatedBackground";

export default function AutonomousAccreditationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans cursor-default overflow-x-hidden">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[250px] w-full mt-[80px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400/80 mb-3">About &nbsp;/&nbsp; Accreditations</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl font-serif italic uppercase tracking-wide">
            Autonomous <span className="text-yellow-400">Status</span>
          </h1>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-4" />
        </div>
      </section>

      {/* Content */}
      <div className="relative overflow-hidden bg-slate-50 flex-grow min-h-[40vh]">
        <AnimatedBackground />
        
        <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <i className="fas fa-file-upload text-3xl"></i>
            </div>
            <h2 className="text-3xl font-black text-blue-900 mb-4">Data Will Be Uploaded Soon</h2>
            <p className="text-slate-600 text-lg max-w-lg mx-auto">
              We are currently compiling the latest details and documents regarding our Autonomous status. Please check back shortly for full information.
            </p>
          </div>
        </main>
      </div>

      <Footer />

      <style jsx global>{`
        #main-header { background-color: rgba(255,255,255,0.4) !important; backdrop-filter: blur(20px) !important; border-bottom: 2px solid rgba(183,122,0,0.1) !important; }
        #main-header .nav-btn, #main-header span, #main-header i, #main-header h1, #main-header h3, #top-bar span, #top-bar a { color: #b77a00 !important; }
        #main-header img { filter: none !important; opacity: 1 !important; }
        .header-scrolled { background-color: rgba(255,255,255,0.85) !important; backdrop-filter: blur(12px) !important; border-bottom: 2px solid rgba(183,122,0,0.2) !important; }
        footer { background-color: #071a34 !important; }
      `}</style>
    </div>
  );
}
