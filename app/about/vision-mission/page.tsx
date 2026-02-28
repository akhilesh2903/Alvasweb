"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";

export default function VisionMission() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background animation
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(bgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
      });

      // Subtle parallax for floating elements
      gsap.to(".floating-circle", {
        x: xPos * 1.5,
        y: yPos * 1.5,
        duration: 2,
        ease: "power2.out",
        stagger: 0.1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initial animations for content
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      visionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 },
    )
      .fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.2, transformOrigin: "left" },
        "-=0.5",
      )
      .fromTo(
        missionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5",
      );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 font-sans">
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[80px] overflow-hidden">
        <img
          src="/DJI_0135.jpg"
          alt="AIET Vision and Mission"
          className="w-full h-full object-cover"
        />
        {/* Shadow Overlay (Top to Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10" />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-4 drop-shadow-2xl italic">
              Vision & <span className="text-yellow-400">Mission</span>
            </h1>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Animated Background Blob */}
      <div
        ref={bgRef}
        className="fixed inset-[-10%] z-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #fef3c7 0%, #fff 70%)",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[100px] floating-circle" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] floating-circle" />
        <div className="absolute top-1/2 left-2/3 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[100px] floating-circle" />
      </div>


      {/* ===== VISION & MISSION SECTION WITH BACKGROUND ANIMATION ===== */}
      <section className="relative z-10 py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #fdf8f0 40%, #eef2ff 100%)" }}
      >
        {/* Animated glowing orbs in background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-float absolute w-[500px] h-[500px] rounded-full opacity-30 top-[-100px] left-[-100px]"
            style={{ background: "radial-gradient(circle, #b8d0ff 0%, transparent 70%)", animationDuration: "12s" }} />
          <div className="orb-float absolute w-[400px] h-[400px] rounded-full opacity-25 bottom-[-80px] right-[-80px]"
            style={{ background: "radial-gradient(circle, #f4c26080 0%, transparent 70%)", animationDuration: "16s", animationDelay: "4s" }} />
          <div className="orb-float absolute w-[300px] h-[300px] rounded-full opacity-20 top-[40%] left-[50%]"
            style={{ background: "radial-gradient(circle, #a5c8ff 0%, transparent 70%)", animationDuration: "10s", animationDelay: "2s" }} />
        </div>

        {/* Rising bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { size: 18, left: 4,  delay: 0,   duration: 9,  amber: true  },
            { size: 30, left: 11, delay: 1.5, duration: 12, amber: false },
            { size: 14, left: 19, delay: 3,   duration: 8,  amber: true  },
            { size: 45, left: 28, delay: 0.8, duration: 15, amber: false },
            { size: 22, left: 38, delay: 2,   duration: 10, amber: true  },
            { size: 16, left: 48, delay: 4,   duration: 8,  amber: false },
            { size: 36, left: 58, delay: 1,   duration: 13, amber: true  },
            { size: 20, left: 67, delay: 3.5, duration: 9,  amber: false },
            { size: 50, left: 75, delay: 0.5, duration: 16, amber: true  },
            { size: 28, left: 84, delay: 2.5, duration: 11, amber: false },
            { size: 12, left: 91, delay: 1.2, duration: 7,  amber: true  },
            { size: 40, left: 24, delay: 5,   duration: 14, amber: false },
            { size: 25, left: 53, delay: 3.8, duration: 10, amber: true  },
            { size: 15, left: 70, delay: 6,   duration: 8,  amber: false },
            { size: 35, left: 88, delay: 4.2, duration: 12, amber: true  },
          ].map((b, i) => (
            <div
              key={i}
              className="bubble absolute bottom-[-60px] rounded-full"
              style={{
                width:  b.size,
                height: b.size,
                left:   `${b.left}%`,
                background: b.amber
                  ? "radial-gradient(circle at 35% 35%, rgba(251,191,36,0.5), rgba(245,158,11,0.2))"
                  : "radial-gradient(circle at 35% 35%, rgba(147,181,255,0.6), rgba(19,41,75,0.2))",
                border: b.amber
                  ? "1.5px solid rgba(251,191,36,0.5)"
                  : "1.5px solid rgba(99,140,230,0.45)",
                boxShadow: b.amber
                  ? "0 0 8px rgba(251,191,36,0.3)"
                  : "0 0 8px rgba(99,140,230,0.3)",
                animationDelay:    `${b.delay}s`,
                animationDuration: `${b.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Cards container */}
        <div
          ref={containerRef}
          className="relative z-10 px-6 max-w-7xl mx-auto"
        >
        {/* Side-by-side Vision & Mission */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[600px]">

          {/* ===== VISION - LEFT ===== */}
          <section
            ref={visionRef}
            className="group flex-1 flex flex-col px-12 py-16 bg-[#fdf8f0] rounded-3xl shadow-lg border border-amber-100 cursor-default transition-all duration-500 hover:bg-[#13294B] hover:border-[#1e3a6e] hover:shadow-2xl"
          >
            <span className="text-amber-600 group-hover:text-amber-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 transition-colors duration-500">
              Vision of AIET
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-[#13294B] group-hover:text-white mb-6 tracking-tight transition-colors duration-500">
              Vision
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 group-hover:bg-amber-400 rounded-full mb-8 transition-colors duration-500" />

            <blockquote className="text-lg text-slate-700 group-hover:text-amber-100 leading-relaxed italic border-l-4 border-amber-500 group-hover:border-amber-400 pl-6 mb-8 transition-all duration-500">
              &quot;Transformative education by pursuing excellence in Engineering and Management through enhancing skills to meet the evolving needs of the community.&quot;
            </blockquote>

            <p className="text-slate-600 group-hover:text-blue-200 text-base leading-relaxed transition-colors duration-500">
              Our vision defines our long-term aspirations. At AIET, we aim to deliver transformative education that is adaptive, inclusive, and future-ready. We believe in not just preparing students for today&apos;s challenges but empowering them to shape tomorrow.
            </p>
          </section>

          {/* ===== VERTICAL DIVIDER ===== */}
          <div
            ref={dividerRef}
            className="hidden lg:flex flex-col items-center justify-center gap-3 opacity-0"
          >
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
            <div className="relative">
              <div className="w-4 h-4 rotate-45 border-2 border-amber-400 bg-white" />
              <div className="absolute top-0 left-0 w-4 h-4 rotate-45 border-2 border-amber-400 bg-amber-400/20 blur-[4px]" />
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
          </div>

          {/* ===== MISSION - RIGHT ===== */}
          <section
            ref={missionRef}
            className="group flex-1 flex flex-col px-12 py-16 bg-[#fdf8f0] rounded-3xl shadow-lg border border-amber-100 cursor-default transition-all duration-500 hover:bg-[#13294B] hover:border-[#1e3a6e] hover:shadow-2xl"
          >
            <span className="text-amber-600 group-hover:text-amber-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 transition-colors duration-500">
              Mission of AIET
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-[#13294B] group-hover:text-white mb-6 tracking-tight transition-colors duration-500">
              Mission
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 group-hover:bg-amber-400 rounded-full mb-8 transition-colors duration-500" />

            <ul className="space-y-4 mb-8">
              {[
                "To bestow quality technical education to imbibe knowledge, creativity and ethos to students community.",
                "To inculcate the best engineering practices through transformative education.",
                "To develop a knowledgeable individual for a dynamic industrial scenario.",
                "To inculcate research, entrepreneurial skills and human values in order to cater the needs of the society.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-700 group-hover:text-amber-100 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:bg-amber-400 flex-shrink-0 mt-2 transition-colors duration-500" />
                  <span className="text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-500 group-hover:text-blue-200 text-base leading-relaxed italic border-t border-amber-200 group-hover:border-white/20 pt-6 transition-all duration-500">
              Our mission clearly outlines the path to achieve our vision. Through quality-driven technical education and ethical development, we build not only professionals but also responsible citizens.
            </p>
          </section>

        </div>
        </div>
      </section>

      {/* ===== PROGRAM OUTCOMES SECTION ===== */}
      <section className="relative z-10 py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fdf8f0 0%, #f0f4ff 50%, #fdf8f0 100%)" }}
      >
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-float absolute w-[400px] h-[400px] rounded-full opacity-20 top-[-80px] right-[-80px]"
            style={{ background: "radial-gradient(circle, #b8d0ff 0%, transparent 70%)", animationDuration: "14s" }} />
          <div className="orb-float absolute w-[350px] h-[350px] rounded-full opacity-15 bottom-[-60px] left-[-60px]"
            style={{ background: "radial-gradient(circle, #f4c26080 0%, transparent 70%)", animationDuration: "18s", animationDelay: "3s" }} />
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              NBA Accreditation
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-[#13294B] mb-4 tracking-tight">
              Program Outcomes
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 rounded-full mx-auto mb-6" />
            <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
              Graduates of our engineering programs will demonstrate the following program outcomes upon completion of their degree.
            </p>
          </div>

          {/* PO Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "PO1",
                title: "Engineering Knowledge",
                desc: "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
              },
              {
                id: "PO2",
                title: "Problem Analysis",
                desc: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.",
              },
              {
                id: "PO3",
                title: "Design / Development of Solutions",
                desc: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal and environmental considerations.",
              },
              {
                id: "PO4",
                title: "Conduct Investigations of Complex Problems",
                desc: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
              },
              {
                id: "PO5",
                title: "Modern Tool Usage",
                desc: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
              },
              {
                id: "PO6",
                title: "The Engineer and Society",
                desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
              },
              {
                id: "PO7",
                title: "Environment and Sustainability",
                desc: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
              },
              {
                id: "PO8",
                title: "Ethics",
                desc: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
              },
              {
                id: "PO9",
                title: "Individual and Team Work",
                desc: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
              },
              {
                id: "PO10",
                title: "Communication",
                desc: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
              },
              {
                id: "PO11",
                title: "Project Management and Finance",
                desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
              },
              {
                id: "PO12",
                title: "Life-long Learning",
                desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
              },
            ].map((po) => (
              <div
                key={po.id}
                className="group flex flex-col bg-[#fdf8f0] rounded-2xl border border-amber-100 shadow-md p-8 cursor-default transition-all duration-500 hover:bg-[#13294B] hover:border-[#1e3a6e] hover:shadow-2xl hover:-translate-y-1"
              >
                {/* PO badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 group-hover:bg-amber-400/20 text-amber-700 group-hover:text-amber-300 font-black text-sm tracking-wide transition-all duration-500">
                    {po.id}
                  </span>
                  <div className="w-8 h-0.5 bg-amber-400 group-hover:bg-amber-300 rounded-full transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-[#13294B] group-hover:text-white mb-3 transition-colors duration-500 leading-snug">
                  {po.title}
                </h3>
                <p className="text-slate-600 group-hover:text-amber-100 text-sm leading-relaxed transition-colors duration-500">
                  {po.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>


    </main>
  );
}