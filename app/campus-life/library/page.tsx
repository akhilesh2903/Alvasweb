"use client";

import React, { useEffect, useRef } from 'react';


import {
  BookOpen, Users, Globe, CheckCircle,
  Phone, Mail, Clock, ShieldCheck, BarChart3,
  Target, Eye, Database,
  ArrowDown, GraduationCap, Sparkles,
  Search, Camera
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AlvasStunningLibrary() {
  const [activeTab, setActiveTab] = React.useState<"about" | "vision" | "stats" | "gallery">("about");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // 1. Moving Background Blobs
    gsap.to(".bg-blob", {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 2
    });

    // 2. Infinite Hero Image Slider
    const images = gsap.utils.toArray('.slider-item');
    gsap.to(images, {
      xPercent: -100 * (images.length / 2),
      ease: "none",
      duration: 30,
      repeat: -1,
    });

  });


  const dummyPhotos = [
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library4.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library1.jpg",
    "https://www.aiet.org.in/wp-content/uploads/2020/08/Library2.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library3.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library8.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/IMG_20200703_114737.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library5.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library6.jpg",
    "https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library7.jpg",
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#fcfdfd] text-slate-900 overflow-hidden font-sans">


      {/* --- DYNAMIC BACKGROUND SHAPES --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-blob absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="bg-blob absolute bottom-[5%] right-[-5%] w-[35vw] h-[35vw] bg-red-100/30 rounded-full blur-[100px]" />
      </div>

      {/* --- SECTION 1: HERO SLIDER --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden lib-hero" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="absolute inset-0 z-0 flex items-center opacity-30">
          <div ref={sliderRef} className="flex gap-12 whitespace-nowrap">
            {[...dummyPhotos, ...dummyPhotos].map((src, i) => (
              <div key={i} className="slider-item w-[400px] h-[580px] rounded-[4rem] overflow-hidden flex-shrink-0 shadow-2xl transition-all duration-1000">
                <img src={src} alt="Library Hall" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <a href="/campus-life" className="lib-hero-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          Back to Campus Life
        </a>

        <div className="relative z-10 text-center select-none pointer-events-none px-4 lib-hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-black text-[10px] tracking-[.3em] uppercase mb-8 lib-hero-tag">
            <Sparkles size={14} /> AIET Knowledge Hub
          </div>
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter text-slate-900 drop-shadow-2xl lib-title">
            ALVAS CENTRAL <br />
            <span className="text-red-600 italic">LIBRARY</span>
          </h1>
          <div className="mt-20 flex flex-col items-center opacity-30 animate-bounce lib-hero-scroll">
            <div className="h-16 w-[2px] bg-slate-900 mb-4" />
            <ArrowDown size={20} />
          </div>
        </div>
      </section>

      {/* MOBILE FLOATING SIDEBAR */}
      <div className={`lib-mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="lib-ms-handle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <div className={`lib-ms-arrow ${isSidebarOpen ? "expanded" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
        </div>
        <div className="lib-ms-nav">
          {[
            { id: "about", icon: "📖", label: "About" },
            { id: "vision", icon: "🎯", label: "Vision" },
            { id: "stats", icon: "📊", label: "Stats" },
            { id: "gallery", icon: "🖼️", label: "Gallery" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}-section`}
              className={`lib-ms-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => { setActiveTab(item.id as any); setIsSidebarOpen(false); }}
            >
              <span className="lib-ms-icon">{item.icon}</span>
              <span className="lib-ms-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: ABOUT --- */}
      <section id="about-section" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-justify">
            <h2 className="text-5xl font-black text-slate-800 tracking-tighter leading-tight">
              Where Engineering <br /><span className="text-red-600">Meets Discovery</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 font-medium italic border-l-4 border-emerald-500 pl-8">
              The Alvas Central Library stands as the intellectual heart of the Alvas Institute of Engineering & Technology. With a collection exceeding 52,000 volumes, our library serves as a bridge between traditional wisdom and modern innovation.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white transform rotate-2">
              <img src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library1.jpg" alt="Library" className="w-full h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: VISION & MISSION --- */}
      <section id="vision-section" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="p-16 bg-white rounded-[4rem] border border-emerald-50 shadow-xl">
          <Target size={60} className="text-red-600 mb-8" />
          <h3 className="text-4xl font-black mb-6">Our Vision</h3>
          <p className="text-slate-500 text-lg font-medium italic">
            "To be a global nexus of technical information, empowering engineering excellence through cutting-edge resources."
          </p>
        </div>
        <div className="p-16 bg-slate-900 text-white rounded-[4rem] shadow-2xl">
          <Eye size={60} className="text-emerald-400 mb-8" />
          <h3 className="text-4xl font-black mb-6">Our Mission</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li className="flex gap-4"><CheckCircle className="text-emerald-400 shrink-0" /> Seamless access to diverse global academic resources.</li>
            <li className="flex gap-4"><CheckCircle className="text-emerald-400 shrink-0" /> Integration of emerging digital technologies.</li>
          </ul>
        </div>
      </section>

      {/* --- SECTION 4: CHIEF LIBRARIAN --- */}
      <section className="py-32 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-red-600 rounded-[4rem] rotate-6" />
            <img src="/punith.png" className="relative z-10 rounded-[3.5rem] shadow-2xl transition-all duration-1000" alt="Librarian" />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[.2em]">Leadership</span>
              <h2 className="text-6xl font-black text-slate-900 mt-6 leading-none">Puneeth Kumar</h2>
              <p className="text-emerald-600 text-xl font-bold italic mt-2">Chief Librarian | M.L.I.Sc</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <ContactBox icon={<Phone size={18} />} label="Phone" val="+91 64645879" />
              <ContactBox icon={<Mail size={18} />} label="Email" val="aietlib@gmail.com" />
              <ContactBox icon={<Clock size={18} />} label="Working Days" val="8.30am to 11.00pm" />
              <ContactBox icon={<GraduationCap size={18} />} label="Holidays" val="9.00am to 1.00pm" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: STATS BENTO --- */}
      <section id="stats-section" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatTile icon={<BookOpen size={32} />} count="52,450+" label="Total Volumes" className="bg-white" />
          <StatTile icon={<BarChart3 size={32} />} count="145" label="National Journals" className="bg-red-600 text-white" />
          <StatTile icon={<Users size={32} />} count="500+" label="Seating Capacity" className="bg-emerald-600 text-white" />
          <StatTile icon={<Globe size={32} />} count="24/7" label="Digital Access" className="bg-slate-900 text-white" />
        </div>
      </section>

      {/* --- SECTION 6: UNIQUE BENTO GALLERY --- */}
      <section id="gallery-section" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-black text-[9px] tracking-[.3em] uppercase mb-4">
              <Camera size={12} /> Visual Archives
            </div>
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">
              The <span className="text-red-600">Gallery</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 font-medium italic border-r-4 border-emerald-500 pr-6 text-right">
            Explore the architectural serenity and high-tech spaces of our central hub.
          </p>
        </div>

        {/* Unique Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[1200px] md:h-[700px]">
          <GalleryItem
            src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library4.jpg"
            className="md:col-span-2 md:row-span-2"
            label="Main Reading Hall"
          />
          <GalleryItem
            src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library3.jpg"
            className="md:col-span-2 md:row-span-1"
            label="Digital Reference Section"
          />
          <GalleryItem
            src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library5.jpg"
            className="md:col-span-1 md:row-span-1"
            label="E-Journal Lab"
          />
          <GalleryItem
            src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2020/08/Library6.jpg"
            className="md:col-span-1 md:row-span-1"
            label="Archive Stacks"
          />
        </div>
      </section>


      <style jsx global>{`
        .lib-hero-back { display: none; }
        
        @media (max-width: 900px) {
          .lib-hero { height: 70vh !important; margin-top: 0 !important; padding-top: 0 !important; }
          .lib-hero-back {
            display: flex;
            position: absolute;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(15, 23, 42, 0.7);
            font-size: 13px;
            font-weight: 700;
            align-items: center;
            gap: 6px;
            text-decoration: none;
            background: rgba(255, 255, 255, 0.6);
            padding: 6px 14px;
            border-radius: 20px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(0,0,0,0.05);
            z-index: 50;
            pointer-events: auto;
          }
          .lib-hero-back svg { width: 14px; height: 14px; }
          
          .lib-hero-content { pointer-events: none; }
          .lib-title { font-size: 13vw !important; line-height: 1.1 !important; margin-top: 20px !important; }
          .lib-hero-tag { margin-bottom: 20px !important; }
          .lib-hero-scroll { display: none !important; }

          /* Stacking grids */
          .grid.lg\:grid-cols-2 { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid.md\:grid-cols-2 { grid-template-columns: 1fr !important; gap: 20px !important; }
          .grid.md\:grid-cols-4 { grid-template-columns: 1fr !important; gap: 16px !important; }
          
          /* Library Mobile Sidebar */
          .lib-mobile-sidebar {
            display: flex;
            position: fixed;
            left: 0;
            top: 55%;
            transform: translateY(-50%);
            z-index: 1000;
            height: fit-content;
            background: rgba(255, 255, 255, 1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0,0,0,0.1);
            border-left: none;
            border-radius: 0 20px 20px 0;
            box-shadow: 10px 0 30px rgba(0,0,0,0.1);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            width: 50px;
            overflow: hidden;
            flex-direction: column;
          }
          .lib-mobile-sidebar.open { width: 140px; }
          
          .lib-ms-handle {
            position: absolute;
            right: 0;
            top: 0; bottom: 0; width: 20px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; background: rgba(0,0,0,0.02);
          }
          .lib-ms-arrow {
            width: 16px; height: 16px;
            color: #059669;
            transition: transform 0.4s;
          }
          .lib-ms-arrow.expanded { transform: rotate(180deg); }
          
          .lib-ms-nav { padding: 15px 0; width: 120px; display: flex; flex-direction: column; gap: 12px; }
          .lib-ms-item {
            width: 100%; display: flex; align-items: center; justify-content: flex-start;
            padding: 10px 12px; border: none; background: none;
            color: #64748b; font-size: 14px; font-weight: 700;
            transition: all 0.2s; text-align: left; text-decoration: none;
          }
          .lib-ms-item.active { color: #059669; background: rgba(16, 185, 129, 0.08); }
          .lib-ms-icon { font-size: 18px; width: 26px; flex-shrink: 0; display: flex; justify-content: center; }
          .lib-ms-label { opacity: 0; transition: opacity 0.2s; margin-left: 10px; white-space: nowrap; }
          .lib-mobile-sidebar.open .lib-ms-label { opacity: 1; }
          
          /* Gallery Stacking */
          .grid-rows-2 { grid-template-rows: none !important; height: auto !important; }
          .md\:col-span-2 { grid-column: span 1 !important; }
          .md\:row-span-2 { grid-row: span 1 !important; }
          .md\:h-\[700px\] { height: auto !important; }
        }

        @media (min-width: 901px) {
          .lib-mobile-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
}

// --- SUB-COMPONENTS (Defined outside to prevent re-renders) ---

function ContactBox({ icon, label, val }: { icon: React.ReactNode, label: string, val: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white p-3.5 rounded-2xl text-red-600 shadow-sm">{icon}</div>
      <div>
        <p className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1 tracking-widest">{label}</p>
        <p className="text-sm font-bold text-slate-800">{val}</p>
      </div>
    </div>
  );
}

function StatTile({ icon, count, label, className }: { icon: React.ReactNode, count: string, label: string, className: string }) {
  return (
    <div className={`p-12 rounded-[3.5rem] shadow-xl transition-all hover:-translate-y-2 border border-slate-50 ${className}`}>
      <div className="mb-6 opacity-80">{icon}</div>
      <h4 className="text-5xl font-black tracking-tighter mb-2 leading-none">{count}</h4>
      <p className="text-[10px] font-black uppercase tracking-[.2em] opacity-60">{label}</p>
    </div>
  );
}

function GalleryItem({ src, className, label }: { src: string, className?: string, label: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[3rem] bg-slate-200 ${className}`}>
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <div>
          <div className="flex items-center gap-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-8 h-[1px] bg-red-500" />
            <p className="text-white font-black uppercase tracking-[.3em] text-[9px]">Gallery</p>
          </div>
          <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {label}
          </h4>
        </div>
      </div>
    </div>
  );
}