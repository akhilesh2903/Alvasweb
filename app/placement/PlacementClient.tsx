"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Globe2, Users2, Rocket, ArrowRight, X } from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "training-programs", label: "Training Programs" },
  { id: "placement-types", label: "Placement Types" },
  { id: "internships", label: "Internships" },
  { id: "team", label: "Our Team" },
  { id: "students", label: "Placed Students" },
  { id: "companies", label: "Companies" },
  { id: "gallery", label: "Placement Gallery" },
  { id: "alvas-pragathi", label: "Alvas Pragati" },
];

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    name: "Thulasi Uchila",
    package: "21",
    company: "Juspay",
  },
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    name: "Anooj Raj",
    package: "21",
    company: "Juspay",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    name: "Vishal Nayak",
    package: "20",
    company: "Amazon",
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
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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
          {/* Multi-layered Overlay: Deep Navy Vignette + Subtle Texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex items-center px-6 md:px-20">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT: Headline */}
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
                Empowering our students to secure positions in the world&apos;s most
                prestigious organizations.
              </p>
            </div>

            {/* RIGHT CONTENT: Glassmorphic Achievement Card */}
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
                {slides[currentSlide].company && (
                  <div className="mt-2 text-white font-medium text-lg">
                    Placed at <span className="font-bold text-[#F4C430]">{slides[currentSlide].company}</span>
                  </div>
                )}

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
                  <button className="text-white text-sm font-bold flex items-center gap-2 hover:text-[#F4C430] transition-colors">
                    Read Story
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE PROGRESS BAR - UNIQUE ATTRACTIVE INDICATOR */}
        <div className="absolute bottom-10 left-20 right-20 flex gap-4 z-30">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setCurrentSlide(idx)}
            >
              <div
                className={`h-full bg-[#F4C430] transition-all duration-[5000ms] linear ${
                  currentSlide === idx ? "w-full" : "w-0 transition-none"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.2);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>
      {/* STATS SECTION - DASHBOARD STYLE */}
      <section className="relative py-24 px-6 md:px-20 bg-[#F8F9FB] overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#1E2A78"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1: Students Placed (High Emphasis) */}
            <div className="relative group bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#1E2A78]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <p className="text-[#1E2A78] text-5xl font-black tracking-tighter mb-2 italic">
                  1000<span className="text-[#F4C430] font-bold">+</span>
                </p>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  Students Placed
                </p>
                <div className="mt-6 w-12 h-1 bg-[#1E2A78] rounded-full"></div>
              </div>
            </div>

            {/* Stat 2: Companies Visited */}
            <div className="relative group bg-[#1E2A78] p-8 rounded-[2.5rem] shadow-xl transform lg:translate-y-8 transition-all duration-500">
              <div className="relative z-10">
                <p className="text-white text-5xl font-black tracking-tighter mb-2 italic">
                  320+<span className="text-[#F4C430] text-2xl ml-1">v</span>
                </p>
                <p className="text-blue-200/60 font-bold uppercase tracking-widest text-xs">
                  Recruiting Partners
                </p>
                <div className="mt-6 w-12 h-1 bg-[#F4C430] rounded-full"></div>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
            </div>

            {/* Stat 3: Highest Package */}
            <div className="relative group bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white hover:shadow-2xl transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <p className="text-[#1E2A78] text-5xl font-black tracking-tighter mb-2 italic">
                    21
                  </p>
                  <p className="text-[#1E2A78] font-bold text-lg">LPA</p>
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  Highest Package
                </p>
                <div className="mt-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#F4C430]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stat 4: Average Package */}
            <div className="relative group bg-gradient-to-br from-[#F4C430] to-[#E2B320] p-8 rounded-[2.5rem] shadow-xl transform lg:translate-y-16 transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <p className="text-[#1E2A78] text-5xl font-black tracking-tighter mb-2 italic">
                    4.5
                  </p>
                  <p className="text-[#1E2A78] font-bold text-lg">LPA</p>
                </div>
                <p className="text-[#1E2A78]/70 font-bold uppercase tracking-widest text-xs">
                  Average CTC
                </p>
                <div className="mt-6 w-12 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE FLOATING GLASS TABS */}
      <div className="sticky top-[80px] z-40 w-full flex justify-center py-4 pointer-events-none">
        <nav className="pointer-events-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-3 py-2 flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollTo(tab.id);
                }}
                className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-500 overflow-hidden ${
                  isActive
                    ? "text-[#1E2A78]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {/* Active Background Indicator (Animated) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#F4C430] rounded-full -z-10 shadow-[0_4px_12px_rgba(244,196,48,0.3)]"
                  />
                )}

                <span className="relative z-10">{tab.label}</span>

                {/* Subtle Dot Indicator for non-active items on hover */}
                {!isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1E2A78] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* OVERVIEW + VISION + MISSION */}
      <section
        ref={(el) => {
          sectionRefs.current["overview"] = el;
        }}
        className="px-6 md:px-20 py-32 bg-[#F8F9FB] relative overflow-hidden"
      >
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E2A78]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        {/* ===== OVERVIEW SECTION - ASYMMETRIC LAYOUT ===== */}
        <div className="relative flex flex-col lg:flex-row items-center gap-16 mb-40">
          {/* LEFT: Stacked Image Effect */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F4C430] rounded-full opacity-20 animate-pulse"></div>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={imageProxyUrl("https://drive.google.com/uc?export=view&id=1diQ-cnIOcqsbvTeK6_pGoPDhCVy1UiMq")}
                alt="Placement Cell Overview"
                className="h-[500px] w-full object-cover"
              />
            </div>
            {/* Floating Stat Badge */}
            <div className="absolute -bottom-10 -right-6 z-20 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-gray-100">
              <p className="text-[#1E2A78] text-4xl font-black">15+</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-tighter">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* RIGHT: Typography-Focused Text */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Introduction
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E2A78] mb-8 leading-tight">
              Empowering Future Engineers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E2A78] to-blue-500">
                with Industry-Focused Training.
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Alva’s Institute of Engineering and Technology (AIET), the Training & Placement Department is dedicated to transforming students into highly skilled, industry-ready professionals. Through comprehensive training programs, strategic corporate partnerships, internships, and large-scale campus recruitment initiatives, AIET ensures students are fully prepared to excel in today’s competitive job market.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#F4C430] pl-6 italic">
                As one of the leading engineering colleges in Karnataka, AIET bridges the gap between academic excellence and professional success by providing students with the technical expertise, employability skills, and career guidance required for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMS SECTION */}
      <section
        ref={(el) => {
          sectionRefs.current["training-programs"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Skill Development
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E2A78] serif">
              Employability Enhancement Programs
            </h2>
            <div className="w-24 h-1 bg-[#F4C430] mx-auto mt-6 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              AIET’s Training & Placement Department offers structured programs designed to prepare students for successful professional careers. We focus on holistic professional development to create versatile professionals capable of thriving in dynamic work environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Soft Skills */}
            <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A78] mb-4">Soft Skills & Personality Development</h3>
              <ul className="space-y-3 text-gray-600">
                {["Communication skills", "Public speaking", "Leadership development", "Team collaboration", "Group discussions", "Professional etiquette", "Time management", "Problem-solving"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-[#F4C430] flex-shrink-0" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Training */}
            <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A78] mb-4">Technical Training Programs</h3>
              <ul className="space-y-3 text-gray-600">
                {["Core engineering skills", "IT and software development competencies", "Programming languages", "Domain-specific workshops and Hackathons", "Industry-relevant tools and technologies", "Technical aptitude development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-[#F4C430] flex-shrink-0" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Preparation */}
            <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A78] mb-4">Career Preparation Modules</h3>
              <ul className="space-y-3 text-gray-600">
                {["Mock interviews by company professionals", "Resume writing workshops", "LinkedIn profile building", "HR interview coaching", "Technical assessments", "Competitive aptitude training"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-[#F4C430] flex-shrink-0" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-bold text-[#1E2A78] italic border-t border-gray-200 pt-4">
                These initiatives ensure graduates are professionally confident, technically competent, and placement-ready.
              </p>
            </div>

            {/* Holistic Dev */}
            <div className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A78] mb-4">Holistic Professional Development</h3>
              <ul className="space-y-3 text-gray-600">
                {["Leadership workshops", "Communication mastery sessions", "Team-building activities", "Entrepreneurship awareness programs", "Innovation and creativity sessions", "Workplace readiness training"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-[#F4C430] flex-shrink-0" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT TYPES OFFERED TAB SECTION */}
      <section
        ref={(el) => {
          sectionRefs.current["placement-types"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-[#F8F9FB]"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E2A78] serif">
            Campus Recruitment Opportunities
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mt-6 mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AIET provides diverse recruitment opportunities to maximize student placements. This strategic approach consistently enhances placement outcomes for students across all engineering disciplines.
          </p>
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
                "Leading national and multinational companies recruit directly from campus.",
              icon: <Building2 className="w-8 h-8" />,
              rate: "",
              color: "bg-indigo-600",
              lightColor: "bg-indigo-50",
              textColor: "text-indigo-900",
            },
            {
              title: "Off Campus",
              description:
                "Students gain broader career opportunities through external placement events.",
              icon: <Globe2 className="w-8 h-8" />,
              rate: "",
              color: "bg-blue-600",
              lightColor: "bg-blue-50",
              textColor: "text-blue-900",
            },
            {
              title: "Pool Campus",
              description:
                "Large-scale placement events involving multiple institutions and recruiters.",
              icon: <Users2 className="w-8 h-8" />,
              rate: "",
              color: "bg-emerald-600",
              lightColor: "bg-emerald-50",
              textColor: "text-emerald-900",
            },
            {
              title: "Mass Recruitment",
              description:
                "Bulk hiring opportunities across major industries and organizations, like Alva’s Pragati.",
              icon: <Rocket className="w-8 h-8 text-amber-600" />,
              rate: "",
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

      {/* INTERNSHIPS & PARTNERSHIPS SECTION */}
      <section
        ref={(el) => {
          sectionRefs.current["internships"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F4C430] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Industry Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E2A78] serif">
              Internships & Partnerships
            </h2>
            <div className="w-24 h-1 bg-[#F4C430] mx-auto mt-6 mb-6"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Industry Collaboration */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-[#1E2A78] mb-6">
                Strong Industry Collaboration
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                AIET actively collaborates with leading industries to provide practical exposure and real-world opportunities. These partnerships help students gain practical knowledge, professional exposure, and valuable networking opportunities.
              </p>
              
              <div className="bg-[#F8F9FB] rounded-[2rem] p-8 border border-gray-100 h-full">
                <h4 className="font-bold text-[#1E2A78] uppercase tracking-widest text-sm mb-6">Collaboration Includes:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "MoUs with reputed industries",
                    "In-Campus Technology centre with reputed companies, startups and CoEs from prominent companies",
                    "Internship programs",
                    "Live industry projects",
                    "Corporate mentorship programs",
                    "Expert guest lectures",
                    "Technical seminars and workshops"
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 ${i === 1 ? 'sm:col-span-2' : ''}`}>
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1E2A78]/10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#F4C430] rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Internships */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-[#1E2A78] mb-6">
                Internship Opportunities
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Internships are an essential part of AIET’s career development strategy. Our students grab the opportunities for internships at MNCs with stipends ranging from <span className="font-bold text-[#1E2A78]">₹25,000-₹90,000 per month</span> and PPOs from <span className="font-bold text-[#1E2A78]">9LPA-34LPA</span>.
              </p>
              
              <div className="bg-gradient-to-br from-[#1E2A78] to-blue-900 rounded-[2rem] p-8 shadow-xl text-white h-full">
                <h4 className="font-bold text-[#F4C430] uppercase tracking-widest text-sm mb-6">Internship Benefits:</h4>
                <ul className="space-y-4">
                  {[
                    "Practical industry experience",
                    "Real-world technical exposure",
                    "Enhanced professional skills",
                    "Career exploration opportunities",
                    "Networking with industry professionals",
                    "Improved employability"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#F4C430] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium text-blue-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
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
          <div className="relative mb-24 overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100">
            {/* Soft premium background wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1E2A78]/[0.06] via-transparent to-[#F4C430]/[0.10]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-10 md:p-14">
              {/* LEFT: TEXT CONTENT */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4C430]/10 text-[#1E2A78] font-black text-xs uppercase tracking-[0.2em] mb-6">
                  Head – Placements
                </span>

                <h3 className="text-4xl md:text-5xl font-black text-[#1E2A78] mb-6 tracking-tight leading-[1.1]">
                  Ms Ranjitha Raviprasad Acharya
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                  Guiding students with industry-ready training and connecting
                  them with leading recruiters through structured placement
                  support.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/70 border border-gray-100 p-5 shadow-sm">
                    <p className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Qualification
                    </p>
                    <p className="text-[#1E2A78] font-bold">M.Sc, B.Ed</p>
                  </div>

                  <div className="rounded-2xl bg-white/70 border border-gray-100 p-5 shadow-sm">
                    <p className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Phone
                    </p>
                    <p className="text-[#1E2A78] font-bold">+91 9731953123</p>
                  </div>

                  <div className="rounded-2xl bg-white/70 border border-gray-100 p-5 shadow-sm sm:col-span-2">
                    <p className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Email
                    </p>
                    <p className="text-[#1E2A78] font-bold">
                      ranjitha@alvascollege.com
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: PORTRAIT CARD (subject fully visible) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-[360px]">
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-gray-200 bg-[#0F172A]">
                    {/* Blurred background fill */}
                    <div className="absolute inset-0">
                      <img
                        src={imageProxyUrl("https://drive.google.com/uc?export=view&id=1afhA-eF3p7jZZgRlo1UhIaUUHsoJTqPy")}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover blur-2xl scale-110 opacity-60"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-[#0F172A]/15 to-transparent" />
                    </div>

                    {/* Foreground portrait (no subject crop) */}
                    <div className="relative aspect-[3/4] p-6 md:p-7">
                      <img
                        src={imageProxyUrl("https://drive.google.com/uc?export=view&id=1afhA-eF3p7jZZgRlo1UhIaUUHsoJTqPy")}
                        alt="Ms Ranjitha Raviprasad Acharya"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-[68%_35%]"
                      />
                    </div>
                  </div>

                  {/* Subtle highlight edge */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                </div>
              </div>
            </div>
          </div>

          {/* TEAM MEMBERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Mr. Samyak Jain",
                role: "Training & Placement Officer",
                img: imageProxyUrl("https://drive.google.com/uc?export=view&id=1sb5ngI_uz9V1hfXPIsEEkQ9bqnzfrM7C"),
                designation: "Assistant professor and Assistant placement officer",
                email: "samyakjain@aiet.org.in",
                joiningDate: "15-07-2025",
                educationalQualifications: "MBA",
                yearOfExperience: "8 Months",
                pastExperience: "1 Year",
                areasOfInterest: "Finance and Marketing",
                subjectsTeaching: "Strategic Brand Management, Internatinal Business, Logistics and Supply Chain Management",
              },
            ].map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Circular Image with Border Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#F4C430] group-hover:rotate-180 transition-transform duration-1000"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full rounded-full object-contain p-2"
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

        <div className="relative -mx-6 md:-mx-20">
          {/* Edge gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <InfiniteSlider speed={0.8} direction="left">
            {[
              "1cRDnInrGMCU9XOhEQzrqaXRVgygS7x1G",
              "1xFCnW_svYKSKW5qhC7yQhh8tNNGa0wc5",
              "1VKytOuMzpC0Z0WHg1lyBKHUGeMZiNvMW",
              "1lcsl2PeWgUBFNd3HfAkZGnRUXmlrod7R",
              "1RTPvBUrvyxpkpcWI2J5aCydeoocHSxyv",
              "1HQR5vydpXHLrLwinj_3d_4Z1hM59HCp5",
              "1-UbVUdlZZTxI4PhzxJiTvr9g6FuaWtMR",
            ].map((id, index) => (
              <div
                key={index}
                className="w-[350px] h-[450px] mx-4 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex-shrink-0 group relative bg-white p-2"
              >
                <img
                  src={imageProxyUrl(`https://drive.google.com/uc?export=view&id=${id}`)}
                  alt="Placement Poster"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {[
            {
              title: "Placement Drive 2019",
              img: imageProxyUrl("https://drive.google.com/uc?export=view&id=1dZ4BvAJCPDcWhJ00zmSTMeewF-bPJa1w"),
              size: "lg:col-span-2 lg:row-span-2",
            }, // Large Square
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F4C430] text-[10px] font-bold uppercase tracking-widest">
                    Placement 2024
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Corner Accent for empty state */}
              <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ALVAS PRAGATHI SECTION */}
      <section
        ref={(el) => {
          sectionRefs.current["alvas-pragathi"] = el;
        }}
        className="px-6 md:px-20 py-24 bg-[#F8F9FB] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2A78]/5 border border-[#1E2A78]/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F4C430]"></span>
                <span className="text-[#1E2A78] text-xs font-bold uppercase tracking-widest">
                  Mega Placement Drive
                </span>
              </div>
              <h2 className="text-5xl font-black text-[#1E2A78] mb-8 leading-tight">
                Alva&apos;s <span className="text-[#F4C430]">Pragati.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Alva&apos;s Pragati is a premier mega placement drive organized by
                Alva&apos;s Education Foundation, Moodbidri. Established in 2010, it
                has grown to become one of the most significant recruitment
                events in the region, connecting thousands of job seekers with
                hundreds of premier companies across various sectors including
                IT, ITeS, Manufacturing, Healthcare, BFSI, and more.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
                  <div key={i} className="flex gap-4">
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
                      <h4 className="font-bold text-[#1E2A78] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-snug">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E2A78] text-white rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1E2A78] transition-all duration-300 shadow-xl shadow-[#1E2A78]/20 group"
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

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-64 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi.jpg"
                    alt="Alva's Pragati Campus View"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-48 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi2.jpg"
                    alt="Recruitment Interaction"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-48 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi1.jpg"
                    alt="Inauguration Ceremony"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-64 group">
                  <img
                    src="https://www.alvaspragati.com/slider/slides/pragathi3.jpg"
                    alt="Student Registration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AIET & BUILD YOUR CAREER SECTION */}
      <section className="px-6 md:px-20 py-24 bg-white relative">
        <div className="max-w-7xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-[#1E2A78]">
              Why AIET is a Preferred Destination
            </h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              AIET’s dedicated placement ecosystem focuses on maximizing career opportunities for every student.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Advanced pre-placement technical training programs from 2nd year",
              "Technical skill development workshops",
              "Soft skills and personality enhancement sessions right from 1st semester",
              "Internship opportunities with PPO offers ranging from 6LPA-34LPA",
              "On-campus and off-campus recruitment drives",
              "Pool campus and mass hiring events",
              "Resume building and LinkedIn profile optimization",
              "Mock interviews, aptitude training, and HR preparation",
              "Guidance from company professionals including in-house Tech Centre"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E2A78]/10 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-[#F4C430] rounded-full"></div>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-gray-100 pt-12">
            <h4 className="text-2xl font-bold text-[#1E2A78] mb-4">Build Your Career with AIET</h4>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Training & Placement Department is committed to building successful careers by combining academic excellence, practical exposure, and strong industry engagement. With advanced skill development programs, internship access, robust placement support, and personalized mentoring, AIET empowers students to achieve exceptional professional success.
            </p>
            <p className="text-[#F4C430] font-black uppercase tracking-widest mt-6">
              Join AIET — Where Engineering Education Meets Career Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* FACULTY MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-gray-100 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Left Side: Photo */}
              <div className="md:w-2/5 bg-gradient-to-br from-[#1E2A78] to-[#1E2A78]/80 p-8 flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(selectedMember.name) +
                        "&background=fff&color=1E2A78&size=200";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center">{selectedMember.name}</h3>
                <p className="text-blue-200 text-sm font-medium text-center mt-1">{selectedMember.designation || selectedMember.role}</p>
              </div>

              {/* Right Side: Details */}
              <div className="md:w-3/5 p-8 max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  {selectedMember.email && (
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Email</p>
                      <p className="text-[#1E2A78] font-medium">{selectedMember.email}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    {selectedMember.joiningDate && (
                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Joining Date</p>
                        <p className="text-[#1E2A78] font-medium">{selectedMember.joiningDate}</p>
                      </div>
                    )}
                    {selectedMember.educationalQualifications && (
                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Qualifications</p>
                        <p className="text-[#1E2A78] font-medium">{selectedMember.educationalQualifications}</p>
                      </div>
                    )}
                    {selectedMember.yearOfExperience && (
                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Experience (AIET)</p>
                        <p className="text-[#1E2A78] font-medium">{selectedMember.yearOfExperience}</p>
                      </div>
                    )}
                    {selectedMember.pastExperience && (
                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Past Experience</p>
                        <p className="text-[#1E2A78] font-medium">{selectedMember.pastExperience}</p>
                      </div>
                    )}
                  </div>
                  
                  {selectedMember.areasOfInterest && (
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Areas of Interest</p>
                      <p className="text-[#1E2A78] font-medium">{selectedMember.areasOfInterest}</p>
                    </div>
                  )}
                  
                  {selectedMember.subjectsTeaching && (
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Subjects Teaching</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedMember.subjectsTeaching.split(',').map((subject: string, idx: number) => (
                          <span key={idx} className="bg-[#F8F9FB] border border-gray-100 text-[#1E2A78] px-3 py-1 rounded-full text-xs font-medium">
                            {subject.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
