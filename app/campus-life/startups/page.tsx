"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";

/* ─── DATA ───────────────────────────────────────────────────────── */
const startups = [
  {
    name: "HomZa Cart India Pvt. Ltd.",
    tagline: "Redefining convenience with seamless delivery services",
    category: "E-Commerce",
    founded: "2024",
    founders: "Anjali Desai",
    stage: "Seed",
    desc: "Redefining convenience with seamless delivery services for food and groceries. Mission: Simplify life through efficient doorstep delivery.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    color: "#f97316",
    icon: "fas fa-store",
    tags: ["Food Delivery", "Groceries", "Hyperlocal"],
    website: "https://jolly-bush-09a7ab800.7.azurestaticapps.net/startups",
  },
  {
    name: "Vulcans Academy",
    tagline: "Elevating careers through innovative testing solutions",
    category: "EdTech",
    founded: "2024",
    founders: "Anjali Desai",
    stage: "Pre-Seed",
    desc: "Edutech platform elevating careers through innovative testing solutions and practical skill development for BPO roles and study abroad programs.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    color: "#6366f1",
    icon: "fas fa-graduation-cap",
    tags: ["EdTech", "BPO Training", "Study Abroad"],
    website: "https://jolly-bush-09a7ab800.7.azurestaticapps.net/startups",
  },
  {
    name: "Vithsutra Technologies",
    tagline: "Bridging IoT, Robotics & Industrial Automation",
    category: "Deep Tech",
    founded: "2023",
    founders: "Kiran Kashyap",
    stage: "Seed",
    desc: "Bridging IoT, Robotics, and Industrial Automation with practical business solutions. Focus: Enhanced product life and customer satisfaction.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    color: "#10b981",
    icon: "fas fa-microchip",
    tags: ["IoT", "Robotics", "Industrial Automation"],
    website: "https://jolly-bush-09a7ab800.7.azurestaticapps.net/startups",
  },
  {
    name: "HacFy",
    tagline: "Cybersecurity education and consultancy",
    category: "CyberSec",
    founded: "2024",
    founders: "Sujay Kumar",
    stage: "Pre-Seed",
    desc: "Cybersecurity education and consultancy offering ethical hacking training, VAPT services, and digital environment security solutions.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    color: "#e53935",
    icon: "fas fa-shield-alt",
    tags: ["Cybersecurity", "Ethical Hacking", "VAPT"],
    website: "https://jolly-bush-09a7ab800.7.azurestaticapps.net/startups",
  },
];

const stats = [
  { value: "4", label: "Active Startups", icon: "fas fa-rocket" },
  { value: "4", label: "Sectors Covered", icon: "fas fa-th-large" },
  { value: "ATC", label: "Incubation Centre", icon: "fas fa-building" },
  { value: "2024", label: "Cohort Year", icon: "fas fa-calendar-alt" },
];

const stageColor: Record<string, string> = {
  "Pre-Seed": "bg-slate-100 text-slate-700",
  Seed: "bg-green-100 text-green-800",
  "Series A": "bg-blue-100 text-blue-800",
  Growth: "bg-amber-100 text-amber-800",
};

/* ─── PAGE ────────────────────────────────────────────────────────── */
export default function StartupsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const heroImgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(startups.map((s) => s.category))),
  ];
  const filtered =
    activeFilter === "All"
      ? startups
      : startups.filter((s) => s.category === activeFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (heroImgRef.current) {
      gsap.to(heroImgRef.current, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: heroImgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll(".stat-item"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
        },
      );
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll(".startup-card"),
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.07,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    }
  }, [activeFilter]);

  return (
    <div
      className="relative min-h-screen font-sans overflow-x-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fefefe 0%,#f8f4ff 45%,#f0f7ff 100%)",
      }}
    >
      {/* ── ANIMATED BACKGROUND ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle,#b39ddb30 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="su-orb su-orb-1" />
        <div className="su-orb su-orb-2" />
        <div className="su-orb su-orb-3" />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* ── HERO ── */}
      <section className="relative h-[65vh] w-full mt-[80px] overflow-hidden z-10">
        <div ref={heroImgRef} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/55 to-slate-900/85 flex flex-col items-center justify-center p-6">
          <nav className="flex items-center gap-2 text-white/55 text-sm mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400 transition">
              Home
            </Link>
            <i className="fas fa-chevron-right text-[9px]" />
            <Link
              href="/campus-life"
              className="hover:text-amber-400 transition"
            >
              Campus Life
            </Link>
            <i className="fas fa-chevron-right text-[9px]" />
            <span className="text-amber-400">Startups</span>
          </nav>
          <div className="text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
              <i className="fas fa-rocket" /> Innovation Hub · AIET
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-serif drop-shadow-2xl">
              Student <span className="text-amber-400">Startups</span>
            </h1>
            <p className="text-white/75 text-lg font-medium max-w-xl mx-auto leading-relaxed">
              Where bold ideas become real ventures. Meet the entrepreneurial
              minds of Alva's Institute of Engineering & Technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href="#startups"
                className="bg-amber-500 hover:bg-amber-600 text-white font-black px-6 py-3 rounded-2xl transition shadow-lg shadow-amber-400/30 text-sm"
              >
                <i className="fas fa-th-large mr-2" />
                Explore Startups
              </a>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="#fefefe" />
        </svg>
      </section>

      {/* ── STATS ── */}
      <section
        className="relative z-10 py-14 px-6 max-w-5xl mx-auto"
        ref={statsRef}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-item bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                <i className={`${s.icon} text-violet-600 text-lg`} />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-0.5">
                {s.value}
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STARTUPS GRID ── */}
      <section
        id="startups"
        className="relative z-10 px-6 max-w-6xl mx-auto pb-24"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 font-serif italic border-l-8 border-amber-400 pl-5">
              Our Startups
            </h2>
            <p className="text-slate-500 mt-1 font-medium pl-5">
              {filtered.length} venture{filtered.length !== 1 ? "s" : ""} listed
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all border ${
                  activeFilter === c
                    ? "bg-violet-700 text-white border-violet-700 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-violet-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filtered.map((startup, i) => (
            <div
              key={i}
              className="startup-card group bg-white/85 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden shrink-0">
                <img
                  src={startup.img}
                  alt={startup.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-black/50 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                  {startup.category}
                </span>
                <span
                  className={`absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${stageColor[startup.stage] ?? "bg-slate-100 text-slate-700"}`}
                >
                  {startup.stage}
                </span>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: startup.color + "33",
                      border: `1.5px solid ${startup.color}66`,
                    }}
                  >
                    <i
                      className={`${startup.icon} text-sm`}
                      style={{ color: startup.color }}
                    />
                  </div>
                  <p className="text-white font-black text-lg drop-shadow">
                    {startup.name}
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-500 text-xs font-bold italic mb-3">
                  {startup.tagline}
                </p>
                <p className="text-slate-700 text-sm font-medium leading-relaxed mb-5 flex-1">
                  {startup.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {startup.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold text-violet-700 bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 text-xs font-bold text-slate-600 mb-5">
                  <div>
                    <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider mb-0.5">
                      Founded
                    </span>
                    {startup.founded}
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider mb-0.5">
                      Stage
                    </span>
                    {startup.stage}
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider mb-0.5">
                      Founders
                    </span>
                    {startup.founders}
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider mb-0.5">
                      Sector
                    </span>
                    {startup.category}
                  </div>
                </div>
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-black text-xs px-5 py-2.5 rounded-xl transition active:scale-95"
                >
                  <i className="fas fa-external-link-alt" /> Learn More
                </a>
              </div>
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(to right,${startup.color},transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        #main-header {
          background-color: rgba(255, 255, 255, 0.4) !important;
          backdrop-filter: blur(20px) !important;
          border-bottom: 2px solid rgba(124, 58, 237, 0.1) !important;
        }
        #main-header .nav-btn,
        #main-header span,
        #main-header i,
        #main-header h1,
        #main-header h3,
        #top-bar span,
        #top-bar a {
          color: #b77a00 !important;
        }
        #main-header img {
          filter: none !important;
          opacity: 1 !important;
        }
        .header-scrolled {
          background-color: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(12px) !important;
        }
        footer {
          background-color: #071a34 !important;
        }
        .su-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.3;
          animation: suFloat 20s ease-in-out infinite alternate;
        }
        .su-orb-1 {
          width: 480px;
          height: 480px;
          top: 5%;
          left: -10%;
          background: radial-gradient(circle, #7c3aed44, #a78bfa22);
          animation-duration: 22s;
        }
        .su-orb-2 {
          width: 380px;
          height: 380px;
          top: 40%;
          right: -8%;
          background: radial-gradient(circle, #f59e0b44, #fbbf2422);
          animation-duration: 26s;
          animation-delay: -8s;
        }
        .su-orb-3 {
          width: 320px;
          height: 320px;
          bottom: 10%;
          left: 25%;
          background: radial-gradient(circle, #3b82f633, #6366f122);
          animation-duration: 20s;
          animation-delay: -14s;
        }
        @keyframes suFloat {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(28px, -22px) scale(1.05); }
          66% { transform: translate(-18px, 18px) scale(0.97); }
          100% { transform: translate(14px, -10px) scale(1.03); }
        }
      `}</style>
    </div>
  );
}
