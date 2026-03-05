"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Globe, Globe2, Users2, Rocket, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlacementBackground from "./components/PlacementBackground";
import FloatingDriveCard from "./components/FloatingDriveCard";
import MobileMenu from "../components/MobileMenu";


const COMPANIES = [
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Tata_Consultancy_Services_Logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/HCL_Technologies_logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
];

const PlacementSlider = () => {
  // We double the array to ensure the loop is seamless
  const duplicatedCompanies = [...COMPANIES, ...COMPANIES];

  return (
    <section className="py-16 bg-white border-y border-gray-50 overflow-hidden">
      {/* --- Section Header --- */}
      <div className="flex items-center gap-4 px-6 md:px-20 mb-12">
        <span className="h-px w-8 bg-[#F4C430] rounded-full" />
        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">
          Our Placement Partners
        </p>
        <span className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent" />
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            500+ Companies
          </p>
        </div>
      </div>

      {/* --- Slider Wrapper --- */}
      <div className="relative group">
        {/* Modern Gradient Fades (Left & Right) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* --- The Animated Track --- */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex flex-none gap-12 md:gap-20 items-center"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 35, // Adjust speed here (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }}
            // Pauses animation when user hovers
            whileHover={{ transition: { duration: 100000 } }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-none h-10 md:h-12 w-auto flex items-center justify-center transition-all duration-500"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-auto object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "placement-types", label: "Placement Types Offered" },
  { id: "team", label: "Our Team" },
  { id: "students", label: "Placed Students" },
  { id: "companies", label: "Companies Visited" },
  { id: "gallery", label: "Placement Gallery" },
  { id: "alvas-pragathi", label: "Alvas Pragathi" },
];

const slides = [
  {
    image: "https://picsum.photos/1600/700?random=1",
    name: "Ananya Rao",
    package: "₹32 LPA",
  },
  {
    image: "https://picsum.photos/1600/700?random=2",
    name: "Rahul Sharma",
    package: "₹28 LPA",
  },
];

function StatCard({
  number,
  label,
  decimal = false,
}: {
  number: number;
  label: string;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = number / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        setCount(decimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [number, decimal]);

  return (
    <div>
      <h3 className="text-4xl font-bold text-[#1E2A78]">
        {count}
        {label.includes("Placed") || label.includes("Visited") ? "+" : ""}
      </h3>
      <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

function InfiniteSlider({
  children,
  speed = 0.7,
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto loop scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (!isPaused && !isDragging) {
        slider.scrollLeft += speed;

        // TRUE LOOP RESET
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, speed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const slider = sliderRef.current;
    if (!slider) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      className="flex gap-4 md:gap-8 overflow-hidden cursor-grab active:cursor-grabbing py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {children} {/* duplicate for seamless loop */}
    </div>
  );
}

export default function PlacementClient() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const drives = [
    {
      id: "on-campus",
      title: "On Campus",
      description: "Direct recruitment drives from global giants like Amazon, IBM, and Infosys right at our doorstep.",
      fillLevel: 92,
      color: "#1E2A78",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      id: "off-campus",
      title: "Off Campus",
      description: "Guided pathways and application mentorship for roles at top-tier startups and multinational corporations.",
      fillLevel: 85,
      color: "#3b82f6",
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: "pool-campus",
      title: "Pool Campus",
      description: "Collaborative recruitment events bringing multiple colleges together for high-volume hiring opportunities.",
      fillLevel: 88,
      color: "#10b981",
      icon: <Users2 className="w-8 h-8" />
    },
    {
      id: "alvas-pragathi",
      title: "Pragathi",
      description: "India's premier mega-job fair hosted by Alva's, connecting thousands with their dream careers.",
      fillLevel: 96,
      color: "#F4C430",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  // Hero Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      tabs.forEach((tab) => {
        const el = sectionRefs.current[tab.id];
        if (el) {
          if (
            scrollY >= el.offsetTop &&
            scrollY < el.offsetTop + el.offsetHeight
          ) {
            setActiveTab(tab.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F5F6F8] text-gray-800">
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* HERO SECTION - CINEMATIC STAGE */}
      <div className="relative min-h-[500px] md:h-[650px] w-full overflow-hidden bg-[#0F172A] pt-[80px] md:pt-0">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img
            src={slides[currentSlide].image}
            alt="Hero Slide"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex items-center px-6 md:px-20 py-12 md:py-0">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT CONTENT: Headline */}
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C430]/20 border border-[#F4C430]/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4C430] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4C430]"></span>
                </span>
                <span className="text-[#F4C430] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                  Success Story 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Placement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Highlights.
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-xl max-w-md font-light leading-relaxed">
                Empowering our students to secure positions in the world's most
                prestigious organizations.
              </p>
            </div>

            {/* RIGHT CONTENT: Glassmorphic Achievement Card */}
            <div className="relative group mt-8 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded-[2rem] md:rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
                <p className="text-[#F4C430] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-2">
                  Highest Package Achiever
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight">
                  {slides[currentSlide].name}
                </h2>

                <div className="flex items-end gap-2">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {slides[currentSlide].package.split(" ")[0]}
                  </span>
                  <span className="text-[#F4C430] text-sm md:text-xl font-bold mb-1 uppercase tracking-tight">
                    Lakhs Per Annum
                  </span>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-gray-800 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="alumni"
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-[#F4C430] flex items-center justify-center text-[10px] font-bold text-[#1E2A78]">
                      +500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE PROGRESS BAR - UNIQUE ATTRACTIVE INDICATOR */}
        <div className="absolute bottom-6 md:bottom-10 left-10 md:left-20 right-10 md:right-20 flex gap-2 md:gap-4 z-30">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setCurrentSlide(idx)}
            >
              <div
                className={`h-full bg-[#F4C430] transition-all duration-[5000ms] linear ${currentSlide === idx ? "w-full" : "w-0 transition-none"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.2); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>

      {/* STATS SECTION - DASHBOARD STYLE */}
      <section className="relative py-16 md:py-24 px-6 md:px-20 bg-[#F8F9FB] overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E2A78" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Stat 1: Students Placed (High Emphasis) */}
            <div className="relative group bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#1E2A78]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <p className="text-[#1E2A78] text-4xl md:text-5xl font-black tracking-tighter mb-2 italic">
                  320<span className="text-[#F4C430] font-bold">+</span>
                </p>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  Students Placed
                </p>
                <div className="mt-4 md:mt-6 w-12 h-1 bg-[#1E2A78] rounded-full"></div>
              </div>
            </div>

            {/* Stat 2: Companies Visited */}
            <div className="relative group bg-[#1E2A78] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:transform lg:translate-y-8 transition-all duration-500">
              <div className="relative z-10">
                <p className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-2 italic">
                  85<span className="text-[#F4C430] text-xl md:text-2xl ml-1">+</span>
                </p>
                <p className="text-blue-200/60 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  Recruiting Partners
                </p>
                <div className="mt-4 md:mt-6 w-12 h-1 bg-[#F4C430] rounded-full"></div>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
            </div>

            {/* Stat 3: Highest Package */}
            <div className="relative group bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white hover:shadow-2xl transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <p className="text-[#1E2A78] text-4xl md:text-5xl font-black tracking-tighter mb-2 italic">
                    32
                  </p>
                  <p className="text-[#1E2A78] font-bold text-base md:text-lg">LPA</p>
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  Highest Package
                </p>
                <div className="mt-4 md:mt-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F4C430]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stat 4: Average Package */}
            <div className="relative group bg-gradient-to-br from-[#F4C430] to-[#E2B320] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:transform lg:translate-y-16 transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <p className="text-[#1E2A78] text-4xl md:text-5xl font-black tracking-tighter mb-2 italic">
                    8.5
                  </p>
                  <p className="text-[#1E2A78] font-bold text-base md:text-lg">LPA</p>
                </div>
                <p className="text-[#1E2A78]/70 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  Average CTC
                </p>
                <div className="mt-4 md:mt-6 w-12 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE FLOATING GLASS TABS */}
      <div className="sticky top-[70px] md:top-[80px] z-40 w-full flex justify-center py-4 pointer-events-none">
        <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-2 md:px-3 py-1.5 md:py-2 flex items-center gap-0.5 md:gap-1 max-w-[95vw] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-sm font-bold tracking-wide uppercase transition-all duration-500 whitespace-nowrap overflow-hidden flex-shrink-0 ${isActive
                  ? "text-[#1E2A78]"
                  : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {/* Active Background Indicator (Animated) */}
                {isActive && (
                  <div
                    className="absolute inset-0 bg-[#F4C430] rounded-full -z-10 shadow-[0_4px_12px_rgba(244,196,48,0.3)]"
                  />
                )}

                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* OVERVIEW SECTION */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* OVERVIEW + VISION + MISSION */}
      <section
        ref={(el) => { sectionRefs.current["overview"] = el; }}
        className="px-6 md:px-20 py-32 bg-[#F8F9FB] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E2A78]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        {/* ===== OVERVIEW SECTION - ASYMMETRIC LAYOUT ===== */}
        <div className="relative flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-24 md:mb-40">
          {/* LEFT: Stacked Image Effect */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-24 md:w-32 h-24 md:h-32 bg-[#F4C430] rounded-full opacity-20 animate-pulse"></div>
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Placement Cell"
                className="h-[300px] md:h-[500px] w-full object-cover"
              />
            </div>
            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 z-20 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-gray-100">
              <p className="text-[#1E2A78] text-2xl md:text-4xl font-black">15+</p>
              <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-tighter">
                Years of Excellence
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 block">
              Introduction
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1E2A78] mb-6 md:mb-8 leading-tight">
              Bridging Academics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E2A78] to-blue-500">
                with Industry.
              </span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                The Placement Department has consistently achieved remarkable
                results, attracting reputed companies across multiple sectors
                every year.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed border-l-4 border-[#F4C430] pl-4 md:pl-6 italic">
                Regular aptitude, technical, and communication training sessions
                ensure that our students aren't just graduates, but
                industry-ready professionals.
              </p>
            </div>
          </div>
        </div>

        {/* ===== VISION, MISSION & CONTACT - GRID SYSTEM ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F4C430]/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-[#F4C430]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1E2A78] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              To ensure every student leaves with a dream offer, fully prepared
              to lead in a competitive global career environment.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1E2A78]/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-[#1E2A78]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1E2A78] mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3">
              {[
                "Adequate internships",
                "Skilled professionals",
                "Corporate partnerships",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430]"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card - High Contrast */}
          <div className="lg:col-span-1 bg-[#13294B] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 relative z-10">
              Get in Touch
            </h3>

            <div className="space-y-4 md:space-y-6 relative z-10">
              <div>
                <p className="text-[#F4C430] font-bold text-base md:text-lg">
                  Ms Ranjitha Raviprasad Acharya
                </p>
                <p className="text-gray-400 text-xs md:text-sm">Head-Training & Placement</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs md:text-base">
                <p className="flex items-center gap-4 hover:text-[#F4C430] transition-colors cursor-pointer">
                  <span className="opacity-60">Cell:</span> +91 99864 75517
                </p>
                <p className="flex items-center gap-4 hover:text-[#F4C430] transition-colors cursor-pointer">
                  <span className="opacity-60">Email:</span>{" "}
                  placements@college.edu
                </p>
              </div>

              <button className="w-full py-3 md:py-4 mt-2 md:mt-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl md:rounded-2xl font-bold transition-all backdrop-blur-md text-sm">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT TYPES OFFERED TAB SECTION */}
      <section
        ref={(el) => {
          sectionRefs.current["placement-types"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E2A78] serif">
            Placement Types Offered
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mt-6"></div>
        </div>

        {/* ===== PLACEMENT TYPES OFFERED - GRID SYSTEM ===== */}
        <div
          id="placement-types-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              title: "On Campus",
              description:
                "Direct recruitment drives from global giants like Amazon, IBM, and Infosys right at our doorstep.",
              icon: <Building2 className="w-8 h-8" />,
              rate: "92%",
              color: "bg-indigo-600",
              lightColor: "bg-indigo-50",
              textColor: "text-indigo-900",
            },
            {
              title: "Off Campus",
              description:
                "Guided pathways and application mentorship for roles at top-tier startups and multinational corporations.",
              icon: <Globe2 className="w-8 h-8" />,
              rate: "85%",
              color: "bg-blue-600",
              lightColor: "bg-blue-50",
              textColor: "text-blue-900",
            },
            {
              title: "Pool Campus",
              description:
                "Collaborative recruitment events bringing multiple colleges together for high-volume hiring opportunities.",
              icon: <Users2 className="w-8 h-8" />,
              rate: "88%",
              color: "bg-emerald-600",
              lightColor: "bg-emerald-50",
              textColor: "text-emerald-900",
            },
            {
              title: "Pragathi",
              description:
                "India's premier mega-job fair hosted by Alva's, connecting thousands with their dream careers.",
              icon: <Rocket className="w-8 h-8 text-amber-600" />,
              rate: "96%",
              color: "bg-amber-500",
              lightColor: "bg-amber-50",
              textColor: "text-amber-900",
            },
          ].map((type, i) => (
            <motion.div
              key={i}
              whileHover="hover"
              initial="initial"
              className={`group relative bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-default h-full flex flex-col`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${type.lightColor} rounded-full -mr-16 -mt-16 opacity-60`}
              ></div>
              <div
                className={`w-14 h-14 ${type.lightColor} rounded-2xl flex items-center justify-center mb-8 relative z-10`}
              >
                <div className={`${type.textColor}`}>{type.icon}</div>
              </div>
              <h3
                className={`text-2xl font-black ${type.textColor} mb-4 relative z-10 serif`}
              >
                {type.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 relative z-10 flex-1 font-medium">
                {type.description}
              </p>
              <div className="mt-auto relative z-10">
                <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-2">
                  Success Rate
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-3xl font-black ${type.textColor}`}>
                    {type.rate}
                  </span>
                  <motion.div
                    className={`w-10 h-10 ${type.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    variants={{ hover: { x: 5, scale: 1.1 } }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 ${type.color} opacity-40`}
                variants={{
                  hover: {
                    height: "70%",
                    opacity: 0.05,
                    transition: { duration: 0.6, ease: "circOut" },
                  },
                }}
              />
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-[2px] ${type.color} z-20`}
                variants={{
                  hover: {
                    bottom: "30%",
                    transition: { duration: 0.5, ease: "backOut" },
                  },
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* STRATEGIC DRIVE ARCHITECTURE */}
      <section
        ref={(el) => {
          sectionRefs.current["team"] = el;
          sectionRefs.current["alvas-pragathi"] = el;
        }}
        className="relative px-6 md:px-20 py-44 overflow-hidden bg-[#F0F4FF]"
      >
        <PlacementBackground />
        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Section Header ── */}
          <motion.div
            className="mb-24 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F4C430]/20 border border-[#F4C430]/40 text-[#F4C430] font-black uppercase tracking-[0.35em] text-xs mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
              Strategic Recruitment Architecture
            </motion.span>
            <h2 className="text-6xl lg:text-7xl font-black text-[#0D1A56] mb-6 tracking-tighter leading-none">
              A Culture of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-[#1E2A78]">
                Opportunity.
              </span>
            </h2>
            <p className="max-w-2xl text-xl text-slate-500 font-medium leading-relaxed">
              We engineer multi-tiered pathways that connect every student with the career they deserve — at scale.
            </p>
          </motion.div>

          {/* ── Drive Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drives.map((drive, idx) => (
              <motion.div
                key={drive.id}
                id={drive.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              >
                <FloatingDriveCard {...drive} accentColor={drive.color} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT TEAM */}
      <section
        ref={(el) => {
          sectionRefs.current["team"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-[#F8F9FB]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-[#1E2A78] border-l-4 border-[#F4C430] pl-6">
            Our Placement Team
          </h2>

          {/* HEAD OF PLACEMENT - FEATURE CARD */}
          <div className="relative mb-16 md:mb-24 overflow-hidden rounded-[2rem] md:rounded-3xl bg-white shadow-xl flex flex-col md:flex-row items-center">
            {/* LEFT TEXT CONTENT */}
            <div className="p-8 md:p-16 flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-[#F4C430]/10 text-[#D4AF37] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-4 md:mb-6">
                Head – Placements
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#1E2A78] mb-6 tracking-tight leading-tight">
                Ms Ranjitha Raviprasad Acharya
              </h3>
              <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-[#F4C430] text-lg">🎓</span>
                  <span>
                    <span className="font-bold text-[#1E2A78]">
                      Qualification:
                    </span>{" "}
                    M.Sc, B.Ed
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-[#F4C430] text-lg">📞</span>
                  <span>
                    <span className="font-bold text-[#1E2A78]">Phone:</span> +91
                    9731953123
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-[#F4C430] text-lg">✉️</span>
                  <span>
                    <span className="font-bold text-[#1E2A78]">Email:</span>{" "}
                    ranjitha@alvascollege.com
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE WITH STYLED BACKGROUND */}
            <div className="relative w-full md:w-[420px] h-[350px] md:h-[480px] bg-[#1E2A78]">
              <img
                src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/05/Rnjitha.jpg"
                alt="Ms Ranjitha Raviprasad Acharya"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative accent */}
              <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#F4C430] translate-x-12 md:translate-x-16 translate-y-12 md:translate-y-16 rotate-45 opacity-20"></div>
            </div>
          </div>

          {/* TEAM MEMBERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Mr.Samyak Jain",
                role: "Training & Placement Officer",
                img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/05/Kumar-Swamy-MC.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Circular Image with Border Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#F4C430] group-hover:rotate-180 transition-transform duration-1000"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover object-top p-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(member.name) +
                        "&background=1E2A78&color=F4C430&size=128";
                    }}
                  />
                </div>

                <h4 className="font-bold text-xl text-[#1E2A78] group-hover:text-[#F4C430] transition-colors">
                  {member.name}
                </h4>

                <p className="text-sm font-medium text-gray-400 uppercase tracking-tighter mt-2">
                  {member.role}
                </p>

                {/* Subtle Accent Line */}
                <div className="w-8 h-1 bg-[#F4C430] mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACED STUDENTS - SLEEK HORIZONTAL CARDS */}
      <section
        ref={(el) => {
          sectionRefs.current["students"] = el;
        }}
        className="py-16 bg-white overflow-hidden"
      >
        <div className="px-6 md:px-20 mb-10">
          <h2 className="text-3xl font-bold text-[#1E2A78] tracking-tight">
            Placed <span className="text-[#F4C430]">Students</span>
          </h2>
        </div>

        <div className="relative">
          {/* Clean Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <InfiniteSlider speed={0.8}>
            {[
              {
                name: "Mr. Saurav N Shetty",
                dept: "CSE",
                company: "Amazon",
                ctc: "45.64 Lakhs",
                img: "https://randomuser.me/api/portraits/men/21.jpg",
              },
              {
                name: "Mr. Ujjwal Yadav",
                dept: "CSE",
                company: "Amazon",
                ctc: "45.64 Lakhs",
                img: "https://randomuser.me/api/portraits/men/22.jpg",
              },
              {
                name: "Mr. Akash Shetty",
                dept: "ISE",
                company: "Cohesity",
                ctc: "22.42 Lakhs",
                img: "https://randomuser.me/api/portraits/men/23.jpg",
              },
              {
                name: "Mr. B Ananthakrishna Rao",
                dept: "CSE",
                company: "Cohesity",
                ctc: "22.42 Lakhs",
                img: "https://randomuser.me/api/portraits/men/24.jpg",
              },
              {
                name: "Ms. Chandani Kumari",
                dept: "ISE",
                company: "Cohesity",
                ctc: "22.42 Lakhs",
                img: "https://randomuser.me/api/portraits/women/25.jpg",
              },
              {
                name: "Ms. Kavya Nair",
                dept: "CSE",
                company: "Infosys",
                ctc: "18.20 Lakhs",
                img: "https://randomuser.me/api/portraits/women/26.jpg",
              },
              {
                name: "Mr. Rahul Verma",
                dept: "ECE",
                company: "IBM",
                ctc: "12.50 Lakhs",
                img: "https://randomuser.me/api/portraits/men/27.jpg",
              },
              {
                name: "Ms. Priya Iyer",
                dept: "CSE",
                company: "Capgemini",
                ctc: "10.80 Lakhs",
                img: "https://randomuser.me/api/portraits/women/28.jpg",
              },
            ]
              .concat(/* Tripling data for perfect continuous loop */)
              .map((student, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[400px] h-24 md:h-32 mx-2 md:mx-4 flex items-center bg-gray-50 rounded-full p-2 md:p-4 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-[#1E2A78]/5 transition-all duration-300 group"
                >
                  {/* Circle Image with Ring */}
                  <div className="relative w-16 md:w-24 h-16 md:h-24 flex-shrink-0">
                    <div className="absolute inset-0 border-2 border-[#F4C430] rounded-full scale-110 opacity-20 group-hover:scale-100 group-hover:opacity-100 transition-all"></div>
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-full rounded-full object-cover border-[3px] md:border-4 border-white shadow-sm"
                    />
                  </div>

                  {/* Details - Compact List */}
                  <div className="ml-4 md:ml-6 flex-grow">
                    <h3 className="text-sm md:text-base font-bold text-[#1E2A78] leading-tight mb-0.5 md:mb-1">
                      {student.name}
                    </h3>

                    <div className="flex items-center gap-2 md:gap-3">
                      <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        {student.dept}
                      </span>
                      <span className="w-0.5 md:w-1 h-0.5 md:h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-xs md:text-sm font-black text-gray-700">
                        {student.company}
                      </span>
                    </div>

                    <div className="mt-1 md:mt-2 text-[#1E2A78] font-bold text-xs md:text-sm">
                      <span className="text-[8px] md:text-[10px] text-gray-400 font-medium uppercase mr-1 md:mr-2">
                        CTC:
                      </span>
                      {student.ctc}
                    </div>
                  </div>
                </div>
              ))}
          </InfiniteSlider>
        </div>
      </section>

      {/* COMPANIES SLIDER - SINGLE ROW COMPACT */}
      <section
        ref={(el) => {
          sectionRefs.current["companies"] = el;
        }}
        className="py-12 bg-[#0B0F1A] overflow-hidden"
      >
        <div className="px-6 md:px-20 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#F4C430]"></span>
            <h2 className="text-[#F4C430] text-[10px] font-black uppercase tracking-[0.3em]">
              Placement Partners
            </h2>
          </div>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
            500+ Global Enterprises
          </p>
        </div>

        <div className="relative">
          {/* High-Contrast Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0F1A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0F1A] to-transparent z-10 pointer-events-none" />

          <InfiniteSlider speed={0.7} direction="left">
            {[
              {
                name: "Infosys",
                logo: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-rgb.png",
              },
              {
                name: "TCS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
              },
              {
                name: "Wipro",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo.svg",
              },
              {
                name: "Accenture",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "Capgemini",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
              },
              {
                name: "Cognizant",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
              },
              {
                name: "IBM",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              },
              {
                name: "Microsoft",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
              },
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Oracle",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
              },
              {
                name: "Cisco",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
              },
            ]
              .concat(/* Triple Spread for Seamless Hand-off */)
              .concat(/* Repeat again */)
              .map((company, index) => (
                <div
                  key={`comp-${index}`}
                  className="mx-6 group flex flex-col items-center gap-3"
                >
                  <div className="w-40 h-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#F4C430]/50 transition-all duration-500 p-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-full w-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <span className="text-[10px] font-black text-white/90 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {company.name}
                  </span>
                </div>
              ))}
          </InfiniteSlider>
        </div>
      </section>

      {/* PLACEMENT GALLERY - DYNAMIC MASONRY */}
      <section
        ref={(el) => {
          sectionRefs.current["gallery"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-white"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-[#1E2A78] tracking-tight">
              Placement <span className="text-[#F4C430]">Memories</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Capturing moments of success and professional growth.
            </p>
          </div>
          <button className="px-8 py-3 bg-[#1E2A78] text-white rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1E2A78] transition-all duration-300 shadow-lg shadow-[#1E2A78]/20">
            View All Events
          </button>
        </div>

        {/* Unique Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
          {[
            {
              title: "Placement Drive 2019",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_08.jpg",
              size: "lg:col-span-2 lg:row-span-2",
            }, // Large Square
            {
              title: "Campus Recruitment",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_06.jpg",
              size: "lg:col-span-1 lg:row-span-1",
            }, // Small Square
            {
              title: "Offer Letter Ceremony",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_09.jpg",
              size: "lg:col-span-1 lg:row-span-2",
            }, // Tall
            {
              title: "Industry Interaction",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_10.jpg",
              size: "lg:col-span-1 lg:row-span-1",
            }, // Small Square
            {
              title: "Placement 2025",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-10.44.25-AM-1-2048x2048.jpeg",
              size: "lg:col-span-2 lg:row-span-1",
            }, // Wide
            {
              title: "Recruitment Day",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-10.44.25-AM-2048x2048.jpeg",
              size: "lg:col-span-1 lg:row-span-2",
            }, // Tall
            {
              title: "Student Achievement",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-10.44.18-AM-1.jpeg",
              size: "lg:col-span-1 lg:row-span-1",
            }, // Small
            {
              title: "Corporate Visit",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-10.44.18-AM-2.jpeg",
              size: "lg:col-span-1 lg:row-span-1",
            }, // Small
            {
              title: "Placement Success",
              img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-10.44.18-AM.jpeg",
              size: "lg:col-span-1 lg:row-span-1",
            }, // Small
          ].map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${item.size}`}
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Floating Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/90 via-transparent to-transparent opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F4C430] text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                    Placement 2024
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Corner Accent for empty state */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-10 h-8 md:h-10 border-t-2 border-r-2 border-white/30 rounded-tr-lg md:rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}

          {/* Mobile View Indicators for Gallery (Only visible when needed) */}
          <div className="md:hidden pt-8 text-center">
            <p className="text-[#1E2A78] text-xs font-bold uppercase tracking-widest opacity-50">
              Tap to view details
            </p>
          </div>
        </div>
      </section>

      {/* ALVAS PRAGATHI SECTION */}
      <section
        ref={(el) => {
          sectionRefs.current["alvas-pragathi"] = el;
        }}
        className="px-6 md:px-20 py-16 md:py-24 bg-[#F8F9FB] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-12 md:mb-20">
            <div className="w-full lg:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A78]/5 border border-[#1E2A78]/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F4C430]"></span>
                <span className="text-[#1E2A78] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  Mega Placement Drive
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E2A78] mb-6 md:mb-8 leading-tight">
                Alva's <span className="text-[#F4C430]">Pragati.</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                Alva's Pragati is a premier mega placement drive organized by
                Alva's Education Foundation, Moodbidri. Established in 2010, it
                has grown to become one of the most significant recruitment
                events in the region, connecting thousands of job seekers with
                hundreds of premier companies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 text-left">
                {[
                  {
                    title: "Zero Registration Fee",
                    desc: "A purely cause-driven event with no charges for candidates or companies.",
                  },
                  {
                    title: "CCP Strategy",
                    desc: "Corporate Career Profiling aligns candidate skills with specific company requirements.",
                  },
                  {
                    title: "Enrichment Center",
                    desc: "Professional counselors guide students to their most suitable job roles.",
                  },
                  {
                    title: "Color Coding System",
                    desc: "Unique system to help candidates easily identify relevant companies.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F4C430] flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#1E2A78]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E2A78] mb-1 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-[11px] md:text-xs text-gray-500 leading-snug">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.alvaspragati.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E2A78] text-white rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1E2A78] transition-all duration-300 shadow-xl shadow-[#1E2A78]/20 group text-sm"
              >
                Visit Official Website
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg h-48 md:h-64 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi.jpg"
                    alt="Alva's Pragati Campus View"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg h-36 md:h-48 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi2.jpg"
                    alt="Recruitment Interaction"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-4 md:pt-8">
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg h-36 md:h-48 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi1.jpg"
                    alt="Inauguration Ceremony"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg h-48 md:h-64 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi3.jpg"
                    alt="Student Registration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Leadership Card ── */}
          <motion.div
            className="mt-20 relative overflow-hidden rounded-[3rem] shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* animated gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1A56] via-[#1E2A78] to-[#1a3a8f]" />
            {/* grid decoration */}
            <div className="absolute inset-0 opacity-[0.04]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="lgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lgrid)" />
              </svg>
            </div>
            {/* glowing orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F4C430]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
              {/* Text side */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 text-[#F4C430] font-black uppercase tracking-[0.3em] text-xs mb-6 block">
                  <span className="w-6 h-[2px] bg-[#F4C430]" />
                  Head of Strategic Placements
                </span>
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
                  Ms Ranjitha<br />Raviprasad Acharya
                </h3>
                <p className="text-blue-200/60 font-medium text-lg mb-10 leading-relaxed max-w-lg">
                  Leading the charge in creating global career opportunities for the next generation of industry pioneers.
                </p>
                {/* Stats strip */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {[["15+", "Years of Leadership"], ["500+", "Companies Partnered"], ["320+", "Students Placed"]].map(([n, l]) => (
                    <div key={l} className="flex flex-col">
                      <span className="text-3xl font-black text-[#F4C430] tracking-tighter">{n}</span>
                      <span className="text-blue-200/50 text-xs font-bold uppercase tracking-wider">{l}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:ranjitha@alvascollege.com" className="flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white text-sm font-bold transition-all">
                    <span className="text-[#F4C430]">✉️</span> ranjitha@alvascollege.com
                  </a>
                  <a href="tel:+919731953123" className="flex items-center gap-3 px-5 py-3 bg-[#F4C430]/20 hover:bg-[#F4C430]/30 border border-[#F4C430]/30 rounded-2xl text-[#F4C430] text-sm font-bold transition-all">
                    <span>📞</span> +91 9731953123
                  </a>
                </div>
              </div>

              {/* Photo side */}
              <div className="relative flex-shrink-0">
                {/* Spinning ring */}
                <motion.div
                  className="absolute inset-0 rounded-[2.5rem] border-2 border-dashed border-[#F4C430]/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative w-52 h-52 lg:w-72 lg:h-72 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2025/05/Rnjitha.jpg"
                    alt="Ms Ranjitha Raviprasad Acharya"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-3 -right-3 bg-[#F4C430] text-[#1E2A78] font-black text-xs px-4 py-2 rounded-2xl shadow-lg tracking-widest uppercase">
                  Placement Head
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

