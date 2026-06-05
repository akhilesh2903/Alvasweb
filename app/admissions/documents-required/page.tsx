"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedBackground from "../../components/AnimatedBackground";
import MobileMenu from "../../components/MobileMenu";

export default function DocumentsRequiredPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  /* Subtle parallax logo — same as other pages */
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

  /* ── Data ── */
  const cetDocs = [
    "CET Admission order original + 2 Copies",
    "10th Marks card original + 2 Copies",
    "12th Marks card original + 2 Copies",
    "Study Certificate original + 2 Copies",
    "Transfer Certificate original + 2 Copies",
    "Conduct Certificate original + 2 Copies",
    "Photos: Passport size-5",
    "Caste certificate original + 2 Copies (only for candidates under category)",
    "Aadhar Card Photocopy",
  ];

  const comedDocs = [
    "Entrance exam result sheet (KCET, COMED-K, JEE) original + 2 copies",
    "Score Card, Allotment letter, Payment receipt (Comed-K Students)",
    "10th Marks card original + 2 Copies",
    "12th Marks card original + 2 Copies",
    "Study Certificate original + 2 Copies",
    "Transfer Certificate original + 2 Copies",
    "Conduct Certificate original + 2 Copies",
    "Migration Certificate (Only for Non-Karnataka Students)",
    "Caste certificate original + 2 Copies (only for candidates under category)",
    "Photos: Passport size-5",
    "Aadhar Card Photocopy",
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans cursor-default overflow-x-hidden">
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* ── Hero Banner ── */}
      <section className="relative h-[48vh] min-h-[280px] w-full mt-[80px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(183,122,0,0.25) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-16 -left-10 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(59,130,246,0.2) 0%,transparent 65%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400/80 mb-3">
            Admissions &nbsp;/&nbsp; Documents Required
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl font-serif italic uppercase tracking-wide">
            Documents{" "}
            <span className="text-yellow-400">Required</span>
          </h1>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-4" />
          <p className="text-white/70 max-w-lg font-semibold text-sm tracking-wide">
            Keep all originals and photocopies ready before reporting for admission
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="relative overflow-hidden bg-slate-50">
        <AnimatedBackground />
        {/* Floating logo parallax */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.035]">
          <img
            ref={logoRef}
            src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png"
            alt=""
            className="w-[70vw] max-w-[860px] h-auto object-contain transition-transform duration-700 ease-out"
          />
        </div>

        <main className="relative z-10 container mx-auto px-6 py-14 max-w-5xl">
          <div className="space-y-10">

            {/* ── Intro banner ── */}
            <div className="bg-blue-900 text-white rounded-3xl px-8 py-6 flex items-start gap-5 shadow-xl">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-yellow-400/20 flex items-center justify-center mt-0.5">
                <i className="fas fa-info-circle text-yellow-400 text-xl" />
              </div>
              <div>
                <h2 className="font-black text-lg mb-1">Important Notice</h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Candidates must carry all original documents along with
                  the required number of photocopies at the time of admission.
                  Failure to produce any mandatory document may result in
                  cancellation of admission.
                </p>
              </div>
            </div>

            {/* ── CET Section ── */}
            <DocSection
              icon="fas fa-file-alt"
              iconBg="bg-blue-100"
              iconColor="text-blue-700"
              badge="CET"
              badgeColor="bg-blue-600"
              title="Documents Required — Admission under CET"
              badgeBg="bg-blue-50"
              badgeText="text-blue-700"
              badgeBorder="border-blue-200"
              items={cetDocs}
              note="Students should keep sufficient copies of all the above documents for Bank loan / Scholarships / any other requirements."
            />

            {/* ── COMED-K & Management Section ── */}
            <DocSection
              icon="fas fa-folder-open"
              iconBg="bg-purple-100"
              iconColor="text-purple-700"
              badge="COMED-K / Management"
              badgeColor="bg-purple-600"
              title="Documents Required — Admission under COMED-K and Management"
              badgeBg="bg-purple-50"
              badgeText="text-purple-700"
              badgeBorder="border-purple-200"
              items={comedDocs}
              note="Students should keep sufficient copies of all the above documents for Bank loan / Scholarships / any other requirements."
            />

            {/* ── Quick tips ── */}
            <section>
              <h2 className="text-2xl font-black text-blue-900 mb-6 font-serif italic border-l-8 border-yellow-400 pl-5">
                General Tips
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: "fas fa-copy",
                    label: "Always carry extras",
                    desc: "Bring at least 5 sets of all photocopies for bank loans and scholarship forms.",
                    bg: "bg-yellow-50",
                    iconBg: "bg-yellow-100",
                    iconColor: "text-yellow-700",
                  },
                  {
                    icon: "fas fa-folder-check",
                    label: "Organise in a file",
                    desc: "Use a proper folder with index tabs — one section per document type.",
                    bg: "bg-blue-50",
                    iconBg: "bg-blue-100",
                    iconColor: "text-blue-700",
                  },
                  {
                    icon: "fas fa-clock",
                    label: "Report on time",
                    desc: "Arrive at the admission office well before the scheduled slot to avoid rush.",
                    bg: "bg-green-50",
                    iconBg: "bg-green-100",
                    iconColor: "text-green-700",
                  },
                ].map((t) => (
                  <div
                    key={t.label}
                    className={`${t.bg} rounded-2xl p-6 border border-slate-100 shadow-md hover:-translate-y-1 transition-transform duration-200`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full ${t.iconBg} flex items-center justify-center ${t.iconColor} text-lg mb-4`}
                    >
                      <i className={t.icon} />
                    </div>
                    <h3 className="font-black text-slate-800 mb-1 text-sm">
                      {t.label}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Contact strip ── */}
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "fas fa-phone-alt",
                  label: "Admissions Helpline",
                  value: "8050579606 / 8050585606",
                  bg: "bg-green-50",
                  iconCls: "text-green-600",
                  iconBg: "bg-green-100",
                },
                {
                  icon: "fas fa-envelope",
                  label: "Email",
                  value: "principalaiet08@gmail.com",
                  bg: "bg-blue-50",
                  iconCls: "text-blue-700",
                  iconBg: "bg-blue-100",
                },
                {
                  icon: "fas fa-id-badge",
                  label: "CET Code",
                  value: "E169",
                  bg: "bg-yellow-50",
                  iconCls: "text-yellow-700",
                  iconBg: "bg-yellow-100",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className={`${c.bg} rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-slate-100 shadow-md hover:-translate-y-1 transition-transform duration-200`}
                >
                  <div
                    className={`w-11 h-11 rounded-full ${c.iconBg} flex items-center justify-center text-lg ${c.iconCls}`}
                  >
                    <i className={c.icon} />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
                    {c.label}
                  </p>
                  <p className="text-sm font-bold text-slate-800">{c.value}</p>
                </div>
              ))}
            </div>

            {/* ── CTA ── */}
            <div className="flex justify-center pt-4 pb-6">
              <a
                href="https://admissions.alvas.org/engineering-application-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#1e3a6e,#2563eb)",
                  boxShadow: "0 6px 28px rgba(37,99,235,0.35)",
                }}
              >
                <i className="fas fa-paper-plane" />
                Apply for Admission
              </a>
            </div>

          </div>
        </main>
      </div>

      <Footer />

      {/* Header override — matches college / eligibility pages */}
      <style jsx global>{`
        #main-header {
          background-color: rgba(255, 255, 255, 0.4) !important;
          backdrop-filter: blur(20px) !important;
          border-bottom: 2px solid rgba(183, 122, 0, 0.1) !important;
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
          border-bottom: 2px solid rgba(183, 122, 0, 0.2) !important;
        }
        footer {
          background-color: #071a34 !important;
        }
      `}</style>
    </div>
  );
}

/* ── Reusable document-list card ── */
function DocSection({
  icon,
  iconBg,
  iconColor,
  badge,
  badgeColor,
  title,
  badgeBg,
  badgeText,
  badgeBorder,
  items,
  note,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  title: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  items: string[];
  note: string;
}) {
  return (
    <section>
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center gap-3 px-7 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <span className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center`}>
            <i className={`${icon} ${iconColor} text-base`} />
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="text-blue-900 font-black text-base md:text-lg leading-tight">
              {title}
            </h2>
          </div>
          <span
            className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-black text-white ${badgeColor}`}
          >
            {badge}
          </span>
        </div>

        {/* Numbered list */}
        <ul className="px-7 py-6 space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 group">
              <span
                className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full ${badgeBg} ${badgeText} border ${badgeBorder} flex items-center justify-center text-xs font-black`}
              >
                {i + 1}
              </span>
              <span className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Note */}
        <div className="mx-7 mb-6 px-5 py-4 rounded-xl border-l-4 border-yellow-500 bg-yellow-50 text-sm text-slate-600">
          <span className="text-[#b77a00] font-black mr-1">Note:</span>
          {note}
        </div>
      </div>
    </section>
  );
}
