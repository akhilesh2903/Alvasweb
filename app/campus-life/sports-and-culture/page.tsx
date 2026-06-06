"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";

/* ─── DATA ───────────────────────────────────────────────────────── */
const SPORTS_DATA = [
  {
    category: "Indoor Facilities",
    icon: "fas fa-dumbbell",
    color: "#6366f1",
    items: [
      {
        title: "Multi-Gymnasium",
        desc: "Gymnasium with modern equipment for overall fitness and training.",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      },
      {
        title: "Weight & Power Lifting",
        desc: "Dedicated stations for weight lifting and power lifting athletes.",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
      },
      {
        title: "Best Physique Training",
        desc: "Specialized training areas for bodybuilding and best physique preparation.",
        img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      },
      {
        title: "Badminton & Table Tennis",
        desc: "Badminton courts, table tennis arena, and chess & carrom rooms.",
        img: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Outdoor Facilities",
    icon: "fas fa-running",
    color: "#f97316",
    items: [
      {
        title: "Athletics Track",
        desc: "Designed for sprints, relays, endurance training, and a throws & jumps pavilion.",
        img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      },
      {
        title: "Football & Cricket",
        desc: "Spacious field designed for training, tournaments, and a turf ground with nets.",
        img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop",
      },
      {
        title: "Basketball Courts",
        desc: "Floodlit courts for day and night matches and training sessions.",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      },
      {
        title: "Volleyball & Kabaddi",
        desc: "Sand and hard courts for volleyball, and dedicated grounds for traditional Indian sports.",
        img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=400&fit=crop",
      },
    ],
  },
];

const EVENTS_DATA = [
  {
    title: "Alva’s Sports Fest",
    desc: "The annual sports festival is one of the most anticipated events at the college. Students from across Karnataka participate, showcasing their talent in athletics, cricket, kabaddi, and more.",
    icon: "fas fa-trophy",
  },
  {
    title: "Inter-College Tournaments",
    desc: "Alva’s Institute of Engineering and Technology teams frequently participate in VTU-level competitions and have brought home numerous trophies and accolades.",
    icon: "fas fa-medal",
  },
  {
    title: "Intramural Activities",
    desc: "Within the campus, students engage in friendly matches and leagues, which not only enhance their skills but also strengthen friendships.",
    icon: "fas fa-users",
  },
];

const SUPPORT_DATA = [
  {
    title: "Role of Coaches and Trainers",
    desc: "Behind every successful athlete is the guidance of an experienced coach. Professional trainers provide structured programs, nutritional guidance, and prepare students for competitive tournaments.",
    icon: "fas fa-user-tie",
  },
  {
    title: "Sports Scholarships & Support",
    desc: "To motivate students, the institution offers scholarships and incentives for outstanding performers in sports, ensuring no talented student is left behind due to financial constraints.",
    icon: "fas fa-hand-holding-usd",
  },
  {
    title: "Integration with Academics",
    desc: "Students are encouraged to manage both academics and sports without compromising either. Faculty members support athletes by providing flexibility in schedules during important competitions.",
    icon: "fas fa-book-reader",
  },
  {
    title: "Wellness Programs",
    desc: "In addition to traditional sports, the institute emphasizes overall wellness through yoga, aerobics, and fitness training, ensuring students remain healthy and stress-free.",
    icon: "fas fa-om",
  },
  {
    title: "Community Engagement",
    desc: "Sports at AIET are not limited to the campus. Students participate in community outreach programs, marathons, and campaigns that use sports to connect with society.",
    icon: "fas fa-hands-helping",
  },
];

/* ─── PAGE ────────────────────────────────────────────────────────── */
export default function SportsAndCulturePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    contentRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div
      className="relative min-h-screen font-sans overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg,#fefefe 0%,#f8f4ff 45%,#f0f7ff 100%)",
      }}
    >
      {/* ── ANIMATED BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle,#b39ddb30 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="su-orb su-orb-1" />
        <div className="su-orb su-orb-2" />
        <div className="su-orb su-orb-3" />
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* ── HERO ── */}
      <section className="relative h-[65vh] w-full mt-[80px] overflow-hidden z-10">
        <div ref={heroImgRef} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1800&q=80"
            alt="Sports and Culture"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/55 to-slate-900/85 flex flex-col items-center justify-center p-6">
          <nav className="flex items-center gap-2 text-white/55 text-sm mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[9px]" />
            <Link href="/campus-life" className="hover:text-amber-400 transition">Campus Life</Link>
            <i className="fas fa-chevron-right text-[9px]" />
            <span className="text-amber-400">Sports</span>
          </nav>
          <div className="text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
              <i className="fas fa-running" /> Athletics & Wellness
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-serif drop-shadow-2xl">
              Sports & <span className="text-amber-400">Culture</span>
            </h1>
            <p className="text-white/75 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Sports are more than just games—they are a way of life at Alva’s Institute of Engineering and Technology (AIET).
            </p>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="#fefefe" />
        </svg>
      </section>

      {/* ── INTRO & IMPORTANCE ── */}
      <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto text-slate-800" ref={addToRefs}>
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mb-12">
          <h2 className="text-3xl font-black text-slate-900 font-serif mb-4 border-l-8 border-violet-600 pl-5">
            A Way of Life
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 mb-6">
            Known for nurturing holistic development, the institution places equal emphasis on academics and athletics. Students are encouraged to pursue their sporting talents with the same passion as their studies, making sports an integral part of campus life.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            With world-class facilities, expert coaching, and a culture that values teamwork, fitness, and discipline, Alva’s Institute of Engineering and Technology stands out as one of the leading institutions in Karnataka for promoting sports.
          </p>
        </div>

        <h3 className="text-2xl font-black text-slate-900 font-serif mb-8 text-center">
          Importance of Sports in Student Life
        </h3>
        <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
          Sports play a vital role in building confidence, resilience, and leadership among students. At AIET, sports are not treated as an extracurricular option but as an essential part of education. Participation helps students:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Physical & Mental Fitness", i: "fas fa-heartbeat" },
            { t: "Team Spirit & Collaboration", i: "fas fa-users-cog" },
            { t: "Focus & Concentration", i: "fas fa-bullseye" },
            { t: "Leadership & Problem-Solving", i: "fas fa-chess-knight" },
            { t: "Balance & Personal Growth", i: "fas fa-balance-scale" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xl mb-4">
                <i className={item.i} />
              </div>
              <h4 className="font-bold text-slate-800">{item.t}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto" ref={addToRefs}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 font-serif mb-4">
            State-of-the-Art <span className="text-violet-600">Facilities</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The campus is equipped with comprehensive sports infrastructure to encourage participation in a wide range of activities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SPORTS_DATA.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeTab === i
                  ? "bg-violet-700 text-white border-violet-700 shadow-lg shadow-violet-500/30"
                  : "bg-white text-slate-600 border-slate-200 hover:border-violet-300"
              }`}
            >
              <i className={`${tab.icon} mr-2`} />
              {tab.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPORTS_DATA[activeTab].items.map((item, i) => (
            <div
              key={i}
              className="group bg-white/85 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-white font-black text-xl drop-shadow-md">
                  {item.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div
                className="h-1 w-full mt-auto"
                style={{ background: `linear-gradient(to right, ${SPORTS_DATA[activeTab].color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENTS & ACHIEVEMENTS ── */}
      <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto" ref={addToRefs}>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Events */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 font-serif mb-8 border-l-8 border-amber-400 pl-5">
              Events & Competitions
            </h2>
            <div className="space-y-6">
              {EVENTS_DATA.map((event, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <i className={event.icon} />
                    </div>
                    <h3 className="font-black text-lg text-slate-800">{event.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 font-serif mb-8 border-l-8 border-green-500 pl-5">
              Achievements
            </h2>
            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
              
              <p className="relative z-10 text-slate-300 mb-8 leading-relaxed">
                The students of Alva’s Institute of Engineering and Technology have consistently excelled at university, state, and national levels.
              </p>

              <ul className="space-y-5 relative z-10">
                <li className="flex gap-4 items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1" />
                  <span className="text-slate-200">Winning VTU inter-college championships in football, basketball, and volleyball.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1" />
                  <span className="text-slate-200">Representation of students in state-level athletics and martial arts tournaments.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1" />
                  <span className="text-slate-200">Achievements in traditional Indian sports like kabaddi and yoga competitions.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1" />
                  <span className="text-slate-200">Numerous awards in Best Physique and Weight Lifting at state levels.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT & WELLNESS ── */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto mb-16" ref={addToRefs}>
        <h2 className="text-3xl font-black text-slate-900 font-serif mb-12 text-center">
          Support, Wellness & <span className="text-violet-600">Community</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORT_DATA.map((item, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center text-xl mb-6">
                <i className={item.icon} />
              </div>
              <h3 className="font-black text-lg text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL WORDS ── */}
      <section className="relative z-10 py-16 px-6 max-w-4xl mx-auto text-center" ref={addToRefs}>
        <div className="bg-gradient-to-br from-violet-600 to-indigo-800 text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=20')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <h2 className="text-3xl font-black font-serif mb-6 relative z-10">
            More Than Just Physical Fitness
          </h2>
          <p className="text-lg md:text-xl text-violet-100 leading-relaxed font-medium relative z-10">
            Sports at Alva’s Institute of Engineering and Technology go beyond physical fitness; they foster discipline, resilience, and leadership. With modern infrastructure, professional coaching, and a vibrant sports culture, the institution ensures that students grow into well-rounded individuals prepared to face challenges on and off the field.
          </p>
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
