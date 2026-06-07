"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  bullets: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "infrastructure",
    title: "Infrastructure for Companies",
    desc: "Premium infrastructure customized for business requirements.",
    icon: "fa-building",
    color: "#0ea5e9", // Teal/blue
    bullets: [
      "Office spaces tailored to meet the needs of businesses across diverse industries.",
      "Seamless access to campus resources, including advanced laboratories, technical support, and an energetic talent pool.",
      "A vibrant environment designed to foster innovation and collaboration."
    ]
  },
  {
    id: "mentorship",
    title: "Mentorship Programs",
    desc: "Connect with world-class mentors and industry experts.",
    icon: "fa-chalkboard-teacher",
    color: "#6366f1", // Indigo
    bullets: [
      "Guidance from industry leaders, successful entrepreneurs, and academic experts.",
      "Regular workshops, seminars, and networking events to support early-stage businesses.",
      "Strategic advice on business development, funding, and scaling operations."
    ]
  },
  {
    id: "workspace",
    title: "Workspace Solutions",
    desc: "Flexible coworking spaces for teams of any size.",
    icon: "fa-laptop-house",
    color: "#10b981", // Emerald
    bullets: [
      "Flexible and modern workspaces designed to suit startups, freelancers, and established companies.",
      "Shared facilities, including meeting rooms, high-speed internet, and breakout zones, to enhance productivity and collaboration.",
      "A supportive community of like-minded individuals and organizations."
    ]
  },
  {
    id: "hr",
    title: "Human Resource Support",
    desc: "Source talent from Alva's vast student community.",
    icon: "fa-users-cog",
    color: "#f59e0b", // Gold
    bullets: [
      "Startups can apply for taking interns from Alva’s Institution.",
      "Helps students to acquire additional skills while startups get human capital at nominal cost."
    ]
  },
  {
    id: "marketing",
    title: "Marketing Support",
    desc: "Grow your reach with targeted marketing assistance.",
    icon: "fa-bullhorn",
    color: "#ec4899", // Pink
    bullets: [
      "Dedicated digital marketing support available for startups at an affordable price."
    ]
  },
  {
    id: "funding",
    title: "Funding Support",
    desc: "Access early stage investment and grants.",
    icon: "fa-hand-holding-usd",
    color: "#8b5cf6", // Purple
    bullets: [
      "Connecting to early stage investors.",
      "Supporting for applying Govt grants."
    ]
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    desc: "Get expert assistance on finance, accounting, and compliance.",
    icon: "fa-calculator",
    color: "#14b8a6", // Teal
    bullets: [
      "Professional support for managing accounting, tax compliance, and financial planning for incubated startups."
    ]
  }
];

export default function ATCPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-850 overflow-x-hidden">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,700;1,600&display=swap"
        rel="stylesheet"
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Hero Banner */}
      <section className="relative h-[60vh] w-full mt-[80px] overflow-hidden flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558403194-611308249627?w=1800&q=80"
            alt="Collaboration space"
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-xs md:text-sm mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400 transition">
              Home
            </Link>
            <i className="fas fa-chevron-right text-[8px]" />
            <Link href="/campus-life" className="hover:text-amber-400 transition">
              Campus Life
            </Link>
            <i className="fas fa-chevron-right text-[8px]" />
            <span className="text-amber-400 font-bold">ATC</span>
          </nav>

          <span className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/35 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 backdrop-blur-md">
            <i className="fas fa-building" /> E-CELL AIET
            AND ATC FOUNDATION
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            E-CELL AIET <span className="text-amber-400">AND ATC FOUNDATION</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Fostering innovation, accelerating startups, and nurturing entrepreneurial minds.
          </p>
        </div>
      </section>

      {/* Main Info Content */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto bg-slate-50">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Right side cards grid */}
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">What We Offer</h2>
              <p className="text-slate-500 mt-2 text-sm">
                Discover a vibrant ecosystem designed to foster innovation, collaboration, and rapid business growth. Click on any specific service to explore the detailed benefits.
              </p>
            </div>

            <div className="grid gap-4">
              {SERVICES.map((service) => {
                const isOpen = activeCard === service.id;
                return (
                  <div
                    key={service.id}
                    className={`bg-white rounded-2xl border transition-all duration-350 overflow-hidden cursor-pointer ${
                      isOpen
                        ? "border-amber-400 shadow-xl -translate-y-0.5"
                        : "border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                    }`}
                    onClick={() => toggleCard(service.id)}
                  >
                    <div className="p-6 flex items-center justify-between gap-4 select-none">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: service.color + "1a",
                            border: `1.5px solid ${service.color}35`,
                          }}
                        >
                          <i
                            className={`fas ${service.icon} text-lg`}
                            style={{ color: service.color }}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-md md:text-lg">
                            {service.title}
                          </h3>
                          <p className="text-slate-400 text-xs font-semibold mt-0.5 tracking-wider uppercase">
                            Click to explore
                          </p>
                        </div>
                      </div>
                      <i
                        className={`fas fa-chevron-down text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-amber-500" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`transition-all duration-350 ease-in-out border-t border-slate-100/60 bg-slate-50/50 ${
                        isOpen ? "max-h-[500px] opacity-100 p-6" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <ul className="space-y-3">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-md font-medium leading-relaxed">
                            <span
                              className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] mt-0.5"
                              style={{
                                backgroundColor: service.color + "22",
                                color: service.color,
                              }}
                            >
                              <i className="fas fa-check" />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left side text intro */}
          <div className="md:col-span-5 order-1 md:order-2 space-y-6 md:sticky md:top-[120px]">
            <div className="bg-gradient-to-tr from-violet-900/95 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -mr-12 -mt-12 pointer-events-none" />
              
              <h3 className="text-xl font-bold font-playfair italic text-amber-400 mb-6">
                Shaping Future Minds
              </h3>
              
              <div className="space-y-6 text-white/85 text-sm md:text-md leading-relaxed font-medium">
                <p>
                  For over three decades, Alva’s Education Foundation has been a prominent institution in the field of education, providing quality learning experiences from kindergarten through postgraduate courses. Currently, more than 20,000 students are enrolled across its diverse institutions.
                </p>
                <p>
                  Guided by visionary management actively involved in shaping the future of young minds, AEF supports students, its entire working community, and the general public in developing ideas that can make a tangible difference in people's daily lives.
                </p>
                <p>
                  To contribute to the Viksit Bharat 2047 goal, align academics with NEP and NISP 2020, nurture student ideas for commercialization, and foster entrepreneurship within the campus, we have established the Alva’s Technology Foundation Center. This center addresses all these aspects by engaging students and faculty in establishing startups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Redirect Section */}
      <section className="relative z-10 px-6 max-w-6xl mx-auto pb-24">
        <div className="bg-gradient-to-br from-indigo-900 via-violet-950 to-slate-950 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-indigo-800/20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full -ml-24 -mt-24 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-violet-500/10 rounded-full -mr-20 -mb-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-4xl md:text-5xl mb-4">💡</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Explore More at Alva's EDC
            </h2>
            <p className="text-white/70 font-medium leading-relaxed mb-8 text-sm md:text-md">
              Step into our complete portal to discover more active projects, incubation applications, startup events, and full administrative supports.
            </p>
            <Link
              href="/campus-life/atc/more-info"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-4 rounded-2xl transition duration-300 shadow-lg shadow-amber-400/25 active:scale-95 text-sm md:text-md uppercase tracking-wider"
            >
              <i className="fas fa-external-link-alt" />
              Visit E-CELL AIET
AND ATC FOUNDATION
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
