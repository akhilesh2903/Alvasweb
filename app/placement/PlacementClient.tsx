"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Globe, Users2, Rocket } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlacementBackground from "./components/PlacementBackground";
import FloatingDriveCard from "./components/FloatingDriveCard";

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
      className="flex gap-8 overflow-hidden cursor-grab active:cursor-grabbing"
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
      <Header />

      {/* HERO SECTION - CINEMATIC STAGE */}
      <div className="relative h-[650px] w-full overflow-hidden bg-[#0F172A]">
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

        <div className="relative h-full flex items-center px-6 md:px-20">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C430]/20 border border-[#F4C430]/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4C430] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4C430]"></span>
                </span>
                <span className="text-[#F4C430] text-xs font-black uppercase tracking-[0.2em]">
                  Success Story 2026
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Placement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Highlights.
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-md font-light leading-relaxed">
                Empowering our students to secure positions in the world's most
                prestigious organizations.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl">
                <p className="text-[#F4C430] font-bold text-sm uppercase tracking-widest mb-2">
                  Highest Package Achiever
                </p>
                <h2 className="text-white text-4xl font-black mb-6 tracking-tight">
                  {slides[currentSlide].name}
                </h2>

                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-white tracking-tighter">
                    {slides[currentSlide].package.split(" ")[0]}
                  </span>
                  <span className="text-[#F4C430] text-xl font-bold mb-1 uppercase tracking-tight">
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

        <div className="absolute bottom-10 left-20 right-20 flex gap-4 z-30">
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

      {/* STATS SECTION */}
      <section className="relative py-24 px-6 md:px-20 bg-[#F8F9FB] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E2A78" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#1E2A78]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <p className="relative z-10 text-[#1E2A78] text-5xl font-black tracking-tighter mb-2 italic">320<span className="text-[#F4C430] font-bold">+</span></p>
              <p className="relative z-10 text-gray-400 font-bold uppercase tracking-widest text-xs">Students Placed</p>
              <div className="mt-6 w-12 h-1 bg-[#1E2A78] rounded-full"></div>
            </div>

            <div className="relative group bg-[#1E2A78] p-8 rounded-[2.5rem] shadow-xl transform lg:translate-y-8 transition-all duration-500">
              <p className="text-white text-5xl font-black tracking-tighter mb-2 italic">85<span className="text-[#F4C430] text-2xl ml-1">v</span></p>
              <p className="text-blue-200/60 font-bold uppercase tracking-widest text-xs">Recruiting Partners</p>
              <div className="mt-6 w-12 h-1 bg-[#F4C430] rounded-full"></div>
            </div>

            <div className="relative group bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-baseline gap-1">
                <p className="text-[#1E2A78] text-5xl font-black tracking-tighter mb-2 italic">32</p>
                <p className="text-[#1E2A78] font-bold text-lg">LPA</p>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Highest Package</p>
              <div className="mt-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => <div key={i} className="w-2 h-2 rounded-full bg-[#F4C430]" />)}
              </div>
            </div>

            <div className="relative group bg-gradient-to-br from-[#F4C430] to-[#E2B320] p-8 rounded-[2.5rem] shadow-xl transform lg:translate-y-16 transition-all duration-500">
              <div className="flex items-baseline gap-1">
                <p className="text-[#1E2A78] text-5xl font-black tracking-tighter mb-2 italic">8.5</p>
                <p className="text-[#1E2A78] font-bold text-lg">LPA</p>
              </div>
              <p className="text-[#1E2A78]/70 font-bold uppercase tracking-widest text-xs">Average CTC</p>
              <div className="mt-6 w-12 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING TABS */}
      <div className="sticky top-[80px] z-40 w-full flex justify-center py-4 pointer-events-none">
        <nav className="pointer-events-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-3 py-2 flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-500 overflow-hidden ${isActive ? "text-[#1E2A78]" : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {isActive && <div className="absolute inset-0 bg-[#F4C430] rounded-full -z-10 shadow-[0_4px_12px_rgba(244,196,48,0.3)]" />}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* OVERVIEW SECTION */}
      <section
        ref={(el) => { sectionRefs.current["overview"] = el; }}
        className="px-6 md:px-20 py-32 bg-[#F8F9FB] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E2A78]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F4C430] rounded-full opacity-20 animate-pulse"></div>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Placement Cell" className="h-[500px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-6 z-20 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <p className="text-[#1E2A78] text-4xl font-black">15+</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-tighter">Years of Excellence</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Introduction</span>
            <h2 className="text-5xl font-black text-[#1E2A78] mb-8 leading-tight">Bridging Academics <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E2A78] to-blue-500">with Industry.</span></h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-xl leading-relaxed font-light">The Placement Department has consistently achieved remarkable results, attracting reputed companies across multiple sectors every year.</p>
              <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#F4C430] pl-6 italic">Regular aptitude, technical, and communication training sessions ensure that our students aren't just graduates, but industry-ready professionals.</p>
            </div>
          </div>
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

      {/* PLACED STUDENTS */}
      <section ref={(el) => { sectionRefs.current["students"] = el; }} className="py-24 bg-white overflow-hidden">
        <div className="px-6 md:px-20 mb-10">
          <h2 className="text-3xl font-bold text-[#1E2A78] tracking-tight">Placed <span className="text-[#F4C430]">Students</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <InfiniteSlider speed={0.8}>
            {[
              { name: "Mr. Saurav N Shetty", dept: "CSE", company: "Amazon", ctc: "45.64 Lakhs", img: "https://randomuser.me/api/portraits/men/21.jpg" },
              { name: "Mr. Ujjwal Yadav", dept: "CSE", company: "Amazon", ctc: "45.64 Lakhs", img: "https://randomuser.me/api/portraits/men/22.jpg" },
              { name: "Mr. Akash Shetty", dept: "ISE", company: "Cohesity", ctc: "22.42 Lakhs", img: "https://randomuser.me/api/portraits/men/23.jpg" },
              { name: "Mr. B Ananthakrishna Rao", dept: "CSE", company: "Cohesity", ctc: "22.42 Lakhs", img: "https://randomuser.me/api/portraits/men/24.jpg" },
              { name: "Ms. Chandani Kumari", dept: "ISE", company: "Cohesity", ctc: "22.42 Lakhs", img: "https://randomuser.me/api/portraits/women/25.jpg" },
            ].map((student, index) => (
              <div key={index} className="min-w-[400px] h-32 mx-4 flex items-center bg-gray-50 rounded-full p-4 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="absolute inset-0 border-2 border-[#F4C430] rounded-full scale-110 opacity-20 group-hover:scale-100 group-hover:opacity-100 transition-all"></div>
                  <img src={student.img} alt={student.name} className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm" />
                </div>
                <div className="ml-6 flex-grow">
                  <h3 className="text-base font-bold text-[#1E2A78] leading-tight mb-1">{student.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{student.dept}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm font-black text-gray-700">{student.company}</span>
                  </div>
                  <div className="mt-2 text-[#1E2A78] font-bold text-sm"><span className="text-[10px] text-gray-400 font-medium uppercase mr-2">CTC:</span>{student.ctc}</div>
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <PlacementSlider />


      {/* GALLERY SECTION */}

      <section ref={(el) => { sectionRefs.current["gallery"] = el; }} className="px-6 md:px-20 py-24 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div><h2 className="text-4xl font-extrabold text-[#1E2A78] tracking-tight">Placement <span className="text-[#F4C430]">Memories</span></h2><p className="text-gray-500 mt-2">Capturing moments of success and professional growth.</p></div>
          <button className="px-8 py-3 bg-[#1E2A78] text-white rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1E2A78] transition-all duration-300">View All Events</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {[
            { title: "Placement Drive 2019", img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_08.jpg", size: "lg:col-span-2 lg:row-span-2" },
            { title: "Campus Recruitment", img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_06.jpg", size: "lg:col-span-1 lg:row-span-1" },
            { title: "Offer Letter Ceremony", img: "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/09/Poster-24-04-2019_Page_09.jpg", size: "lg:col-span-1 lg:row-span-2" },
          ].map((item, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-[2.5rem] ${item.size}`}>
              <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-[#F4C430] text-[10px] font-bold uppercase tracking-widest">Placement</span>
                <h3 className="text-white text-xl font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
