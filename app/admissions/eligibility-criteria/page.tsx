"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function EligibilityCriteriaPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 30;
      const y = (e.clientY - window.innerHeight / 2) / 30;
      logoRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans cursor-default overflow-x-hidden">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* ── Hero ── */}
      <section className="relative h-[45vh] min-h-[260px] w-full mt-[80px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(183,122,0,0.22) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400/80 mb-3">
            Admissions &nbsp;/&nbsp; Disclaimer
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-xl font-serif italic uppercase">
            Eligibility <span className="text-yellow-400">Criteria</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-3" />
          <p className="text-white/60 text-sm font-medium">
            Bachelor&apos;s Degree Courses &amp; Programmes — I Semester
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="relative overflow-hidden bg-slate-50">
        <AnimatedBackground />
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03]">
          <img ref={logoRef} src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png"
            alt="" className="w-[70vw] max-w-[860px] h-auto object-contain transition-transform duration-700 ease-out" />
        </div>

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-14 space-y-8">

          {/* Eligibility Criteria Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center gap-3 px-7 py-5 bg-gradient-to-r from-yellow-50 to-white border-b border-slate-100">
              <span className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-graduation-cap text-yellow-600" />
              </span>
              <div>
                <h2 className="text-blue-900 font-black text-lg leading-tight">Eligibility Criteria</h2>
                <p className="text-slate-400 text-xs mt-0.5">B.E. Degree Courses — I Semester</p>
              </div>
            </div>

            {/* Checklist */}
            <ul className="px-7 py-6 space-y-4">
              {[
                {
                  text: "Passed 2nd PUC / 12th Standard with Physics and Mathematics as compulsory subjects",
                  highlight: "Physics and Mathematics",
                  color: "bg-blue-50 border-blue-200 text-blue-700",
                  icon: "fas fa-check",
                  iconBg: "bg-blue-100 text-blue-600",
                },
                {
                  text: "Along with Chemistry / Bio-Technology / Biology / Electronics / Computer Science",
                  highlight: "",
                  color: "bg-slate-50 border-slate-200 text-slate-700",
                  icon: "fas fa-check",
                  iconBg: "bg-slate-200 text-slate-600",
                },
                {
                  text: "Minimum 45% aggregate marks (40% for SC / ST / OBC of Karnataka)",
                  highlight: "45%",
                  color: "bg-blue-50 border-blue-200 text-blue-700",
                  icon: "fas fa-check",
                  iconBg: "bg-blue-100 text-blue-600",
                },
                {
                  text: "English must be one of the languages in 10+2",
                  highlight: "",
                  color: "bg-slate-50 border-slate-200 text-slate-700",
                  icon: "fas fa-check",
                  iconBg: "bg-slate-200 text-slate-600",
                },
                {
                  text: "Admission is based on academic merit — no entrance exam mandatory for management quota",
                  highlight: "no entrance exam mandatory",
                  color: "bg-green-50 border-green-200 text-green-800",
                  icon: "fas fa-check",
                  iconBg: "bg-green-100 text-green-600",
                },
                {
                  text: "Candidates who have appeared in KCET / COMEDK / JEE are also eligible",
                  highlight: "KCET / COMEDK / JEE",
                  color: "bg-amber-50 border-amber-200 text-amber-800",
                  icon: "fas fa-check",
                  iconBg: "bg-amber-100 text-amber-600",
                },
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-4 rounded-2xl border px-5 py-4 ${item.color}`}>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 ${item.iconBg}`}>
                    <i className={`${item.icon} text-xs`} />
                  </span>
                  <span className="text-sm leading-relaxed font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aggregate summary pills */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-1">General Category</p>
              <p className="text-4xl font-black text-blue-800">45%</p>
              <p className="text-xs text-blue-500 mt-1">Minimum Aggregate</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-500 mb-1">SC / ST / OBC (Karnataka)</p>
              <p className="text-4xl font-black text-amber-700">40%</p>
              <p className="text-xs text-amber-500 mt-1">Minimum Aggregate</p>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "fas fa-phone-alt", label: "Helpline", value: "8050579606 / 8050585606", bg: "bg-green-50", iconCls: "text-green-600", iconBg: "bg-green-100" },
              { icon: "fas fa-envelope",  label: "Email",    value: "principalaiet08@gmail.com", bg: "bg-blue-50", iconCls: "text-blue-700", iconBg: "bg-blue-100" },
              { icon: "fas fa-id-badge",  label: "CET Code", value: "E169",                      bg: "bg-yellow-50", iconCls: "text-yellow-700", iconBg: "bg-yellow-100" },
            ].map((c) => (
              <div key={c.label} className={`${c.bg} rounded-2xl p-5 flex flex-col items-center text-center gap-2 border border-slate-100 shadow-sm hover:-translate-y-0.5 transition-transform`}>
                <div className={`w-10 h-10 rounded-full ${c.iconBg} flex items-center justify-center ${c.iconCls}`}>
                  <i className={c.icon} />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400">{c.label}</p>
                <p className="text-sm font-bold text-slate-700">{c.value}</p>
              </div>
            ))}
          </div>

          {/* Apply button */}
          <div className="flex justify-center pb-4">
            <a href="https://admissions.alvas.org/engineering-application-form"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-white text-base hover:scale-105 active:scale-95 transition-all shadow-lg"
              style={{ background: "linear-gradient(135deg,#1e3a6e,#2563eb)", boxShadow: "0 6px 24px rgba(37,99,235,0.3)" }}>
              <i className="fas fa-paper-plane" />
              Apply for Admission
            </a>
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
