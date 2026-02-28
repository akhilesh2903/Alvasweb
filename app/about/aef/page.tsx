"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import { useState } from "react";
import Link from "next/link";

export default function AEFPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen font-sans overflow-x-hidden" style={{ background: "linear-gradient(135deg,#fefefe 0%,#fff8ed 50%,#fffbf0 100%)" }}>

            {/* ── ANIMATED BACKGROUND ── */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,#d4a57430 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                {[
                    { icon: "fas fa-university", top: "8%", left: "6%", size: 26, dur: 18, delay: 0 },
                    { icon: "fas fa-book-open", top: "18%", left: "88%", size: 28, dur: 22, delay: -5 },
                    { icon: "fas fa-graduation-cap", top: "38%", left: "4%", size: 24, dur: 20, delay: -8 },
                    { icon: "fas fa-globe", top: "60%", left: "90%", size: 26, dur: 17, delay: -4 },
                    { icon: "fas fa-award", top: "75%", left: "6%", size: 22, dur: 24, delay: -12 },
                    { icon: "fas fa-seedling", top: "85%", left: "75%", size: 26, dur: 19, delay: -3 },
                    { icon: "fas fa-users", top: "25%", left: "48%", size: 18, dur: 28, delay: -14 },
                    { icon: "fas fa-flask", top: "55%", left: "55%", size: 20, dur: 16, delay: -7 },
                    { icon: "fas fa-theater-masks", top: "12%", left: "30%", size: 20, dur: 21, delay: -9 },
                    { icon: "fas fa-hands-helping", top: "45%", left: "20%", size: 18, dur: 15, delay: -2 },
                    { icon: "fas fa-star", top: "92%", left: "40%", size: 18, dur: 23, delay: -10 },
                    { icon: "fas fa-trophy", top: "30%", left: "68%", size: 20, dur: 20, delay: -6 },
                ].map((ic, i) => (
                    <i key={i} className={`${ic.icon} aef-float-icon`}
                        style={{
                            position: "absolute", top: ic.top, left: ic.left, fontSize: ic.size,
                            animationDuration: `${ic.dur}s`, animationDelay: `${ic.delay}s`,
                        } as React.CSSProperties}
                    />
                ))}
                <div className="aef-orb aef-orb-1" />
                <div className="aef-orb aef-orb-2" />
                <div className="aef-orb aef-orb-3" />
            </div>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

            {/* ── HERO ── */}
            <section className="relative h-[70vh] w-full mt-[80px] overflow-hidden z-10">
                <div className="absolute inset-0">
                    <img
                        src="/DJI_0135.jpg"
                        alt="Alva's Education Foundation Campus — Aerial View"
                        className="w-full h-full object-cover scale-110 aef-hero-parallax"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90 flex flex-col items-center justify-center px-6">
                    <nav className="flex items-center gap-2 text-white/55 text-sm mb-6 font-medium">
                        <Link href="/" className="hover:text-amber-400 transition">Home</Link>
                        <i className="fas fa-chevron-right text-[9px]" />
                        <Link href="/about/college" className="hover:text-amber-400 transition">About</Link>
                        <i className="fas fa-chevron-right text-[9px]" />
                        <span className="text-amber-400">AEF</span>
                    </nav>
                    <div className="text-center max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 backdrop-blur-sm aef-badge-pulse">
                            <i className="fas fa-university" /> Alva&apos;s Education Foundation
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-serif drop-shadow-2xl">
                            Nurturing{" "}
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}>
                                Excellence
                            </span>
                        </h1>
                        <p className="text-white/75 text-lg font-medium max-w-xl mx-auto leading-relaxed">
                            A legacy of education, culture, and community development spanning four decades across coastal Karnataka.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            <a href="#intro" className="bg-amber-500 hover:bg-amber-600 text-white font-black px-6 py-3 rounded-2xl transition text-sm shadow-lg shadow-amber-400/30">
                                <i className="fas fa-book-open mr-2" />Discover AEF
                            </a>
                            <a href="https://alvas.org/" target="_blank" rel="noopener noreferrer"
                                className="bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 text-white font-black px-6 py-3 rounded-2xl transition text-sm">
                                <i className="fas fa-external-link-alt mr-2" />Visit alvas.org
                            </a>
                        </div>
                    </div>
                </div>
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="#fefefe" />
                </svg>
            </section>

            {/* ── STATS STRIP ── */}
            <section className="relative z-10 py-10 px-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: "fas fa-university", value: "25+", label: "Institutions", color: "#b77a00" },
                        { icon: "fas fa-users", value: "50K+", label: "Students", color: "#10b981" },
                        { icon: "fas fa-calendar-alt", value: "40+", label: "Years of Legacy", color: "#8b5cf6" },
                        { icon: "fas fa-award", value: "100+", label: "National Awards", color: "#ef4444" },
                    ].map((s) => (
                        <div key={s.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: s.color + "20" }}>
                                <i className={`${s.icon} text-lg`} style={{ color: s.color }} />
                            </div>
                            <div className="text-2xl font-black text-slate-900 mb-0.5">{s.value}</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── INTRODUCTION ── */}
            <section id="intro" className="relative z-10 px-6 max-w-5xl mx-auto py-14">
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-4">About AEF</span>
                        <h2 className="text-4xl font-black text-slate-900 font-serif leading-tight mb-6">
                            Alva&apos;s Education<br />Foundation
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4 font-medium">
                            Alva&apos;s Education Foundation (AEF) is the visionary trust behind one of Karnataka&apos;s most celebrated educational ecosystems. Founded by <strong className="text-slate-800">Dr. M. Mohan Alva</strong>, AEF has grown from a single institution into a sprawling network of colleges, schools, and cultural organisations — all united by a single mission: empowering the next generation through quality education and cultural enrichment.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4 font-medium">
                            Headquartered in Moodbidri, Dakshina Kannada, the Foundation has earned national recognition for its unique blend of academic rigour and holistic development. AEF institutions consistently rank among the best in Karnataka for placements, research, and student welfare.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                            Beyond academics, AEF champions Tulu and Kannada culture through mega events like <strong className="text-slate-800">Yakshagana</strong> festivals, the grand <strong className="text-slate-800">Alva&apos;s Nudisiri</strong> literary gathering, and the iconic <strong className="text-slate-800">Virasat</strong> cultural programme — attracting thousands of participants each year.
                        </p>
                        <a
                            href="https://alvas.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#b77a00] hover:bg-[#966500] text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:-translate-y-0.5 text-sm"
                        >
                            <i className="fas fa-external-link-alt text-xs" />
                            Know More — Visit alvas.org
                        </a>
                    </div>

                    {/* Right: panoramic campus photo */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                            <img
                                src="/aef-campus.jpg"
                                alt="Alva's Campus — Panoramic View"
                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
                                <p className="text-white text-sm font-bold"><i className="fas fa-building mr-2 opacity-70" />Alva&apos;s campus, Moodbidri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PILLARS ── */}
            <section className="relative z-10 px-6 max-w-5xl mx-auto pb-20">
                <h2 className="text-3xl font-black text-slate-900 font-serif italic border-l-8 border-amber-400 pl-5 mb-10">
                    Our Pillars
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: "fas fa-book-open", title: "Academic Excellence", desc: "UG, PG & doctoral programmes across engineering, management, arts and sciences — affiliated to VTU, recognised by AICTE.", color: "#b77a00" },
                        { icon: "fas fa-theater-masks", title: "Cultural Heritage", desc: "Preserving Tulu & Kannada traditions through Yakshagana, folk arts, and the internationally acclaimed Alva's Virasat.", color: "#8b5cf6" },
                        { icon: "fas fa-seedling", title: "Community Development", desc: "Rural upliftment, health camps, environmental drives and women empowerment programmes across coastal Karnataka.", color: "#10b981" },
                        { icon: "fas fa-flask", title: "Research & Innovation", desc: "State-of-the-art research centres, industry collaborations, and 500+ published papers driving frontier innovation.", color: "#3b82f6" },
                        { icon: "fas fa-running", title: "Sports & Fitness", desc: "World-class facilities producing state and national champions in cricket, kabaddi, athletics, and more.", color: "#f97316" },
                        { icon: "fas fa-hands-helping", title: "Student Welfare", desc: "Scholarships, hostels, placement cells, mental health support and mentorship ensuring every student thrives.", color: "#ef4444" },
                    ].map((p) => (
                        <div key={p.title} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: p.color + "1a" }}>
                                <i className={`${p.icon} text-xl`} style={{ color: p.color }} />
                            </div>
                            <h3 className="font-black text-slate-800 text-base mb-2">{p.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="relative z-10 px-6 max-w-5xl mx-auto pb-24">
                <div className="rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg,#92400e,#b77a00,#d97706)" }}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div className="relative px-10 py-14 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-white font-serif mb-4">Explore the Full AEF Universe</h3>
                        <p className="text-white/75 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
                            Discover all institutions, events, news, and initiatives under the Alva&apos;s Education Foundation on the official website.
                        </p>
                        <a
                            href="https://alvas.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-[#b77a00] font-black px-8 py-4 rounded-2xl hover:bg-amber-50 transition-all duration-300 shadow-xl text-sm"
                        >
                            <i className="fas fa-globe text-xs" />
                            Visit alvas.org
                            <i className="fas fa-arrow-right text-xs" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        #main-header { background-color: rgba(255,255,255,0.4) !important; backdrop-filter: blur(20px) !important; border-bottom: 2px solid rgba(183,122,0,0.15) !important; }
        #main-header .nav-btn, #main-header span, #main-header i, #main-header h1, #main-header h3, #top-bar span, #top-bar a { color: #b77a00 !important; }
        #main-header img { filter: none !important; opacity: 1 !important; }
        footer { background-color: #071a34 !important; }

        /* Floating icon animation */
        .aef-float-icon { color: #b77a00; opacity: 0.08; animation: aefDrift 18s ease-in-out infinite alternate; will-change: transform; }
        @keyframes aefDrift {
          0%   { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.06; }
          30%  { transform: translate(16px,-18px) rotate(10deg) scale(1.07); opacity: 0.13; }
          60%  { transform: translate(-12px,14px) rotate(-7deg) scale(0.95); opacity: 0.07; }
          100% { transform: translate(8px,-8px) rotate(16deg) scale(1.04); opacity: 0.10; }
        }

        /* Orbs */
        .aef-orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.28; animation: aefOrbFloat 22s ease-in-out infinite alternate; }
        .aef-orb-1 { width: 480px; height: 480px; top: 2%;  left: -10%; background: radial-gradient(circle,#f59e0b44,#fde68a22); animation-duration: 24s; }
        .aef-orb-2 { width: 380px; height: 380px; top: 40%; right: -8%; background: radial-gradient(circle,#b77a0033,#fde68a22); animation-duration: 30s; animation-delay: -10s; }
        .aef-orb-3 { width: 320px; height: 320px; bottom: 6%; left: 18%; background: radial-gradient(circle,#10b98122,#6ee7b722); animation-duration: 20s; animation-delay: -16s; }
        @keyframes aefOrbFloat {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(24px,-20px) scale(1.06); }
          66%  { transform: translate(-14px,16px) scale(0.96); }
          100% { transform: translate(10px,-8px) scale(1.03); }
        }

        /* Hero parallax shimmer */
        .aef-hero-parallax { animation: aefHeroZoom 18s ease-in-out infinite alternate; }
        @keyframes aefHeroZoom {
          0%   { transform: scale(1.10); }
          100% { transform: scale(1.18); }
        }

        /* Badge pulse */
        .aef-badge-pulse { animation: aefPulse 3s ease-in-out infinite; }
        @keyframes aefPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
          50%       { box-shadow: 0 0 0 8px rgba(245,158,11,0.12); }
        }
      `}</style>
        </div>
    );
}
