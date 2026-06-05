"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function AdmissionThroughComedKPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

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

  const steps = [
    {
      step: "01",
      title: "Register for COMEDK / JEE",
      desc: "Candidates must appear for the COMEDK UGET exam or qualify in JEE Main. Register online through the official COMEDK or NTA portal and appear for the examination.",
      icon: "fas fa-user-plus",
    },
    {
      step: "02",
      title: "Obtain Score Card",
      desc: "Download your COMEDK UGET Score Card or JEE Main Score Card from the respective official portals. The rank will be used for seat allotment in COMEDK-affiliated institutions.",
      icon: "fas fa-id-card",
    },
    {
      step: "03",
      title: "Register for COMEDK Counseling",
      desc: "Log in to the COMEDK Centralised Counseling portal. Fill in your personal, academic, and category details. Pay the counseling registration fee online.",
      icon: "fas fa-laptop",
    },
    {
      step: "04",
      title: "Choice Filling & Locking",
      desc: "Enter your preferred colleges and branches in order of priority on the COMEDK counseling portal. Verify and lock your choices before the deadline. Locked choices cannot be changed.",
      icon: "fas fa-list-check",
    },
    {
      step: "05",
      title: "Seat Allotment",
      desc: "Seats are allotted based on COMEDK rank, preferences, and seat availability. Download the Allotment Letter and Payment Receipt from the portal after allotment results are declared.",
      icon: "fas fa-check-circle",
    },
    {
      step: "06",
      title: "Report to AIET",
      desc: "Report to Alva's Institute of Engineering & Technology with all original documents within the time frame mentioned in the allotment letter. Pay the required fees to confirm your admission.",
      icon: "fas fa-university",
    },
  ];

  const eligibility = [
    "Passed 2nd PUC / 12th Standard with Physics and Mathematics as compulsory subjects along with Chemistry / Bio-Technology / Biology / Electronics / Computer Science",
    "Minimum 45% aggregate marks in the above subjects (40% for SC/ST/OBC candidates of Karnataka)",
    "Must have appeared and qualified in COMEDK UGET or JEE Main",
    "English must be one of the languages in 10+2",
    "No domicile restriction — students from any state can apply through COMEDK",
  ];

  const documents = [
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Hero */}
      <section className="relative h-[48vh] min-h-[280px] w-full mt-[80px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(183,122,0,0.25) 0%,transparent 65%)" }} />
        <div className="absolute -bottom-16 -left-10 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.25) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400/80 mb-3">Admissions &nbsp;/&nbsp; Admission Procedure</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl font-serif italic uppercase tracking-wide">
            Admission Through <span className="text-yellow-400">COMED-K</span>
          </h1>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-4" />
          <p className="text-white/70 max-w-lg font-semibold text-sm tracking-wide">Consortium of Medical Engineering and Dental Colleges of Karnataka</p>
        </div>
      </section>

      {/* Content */}
      <div className="relative overflow-hidden bg-slate-50">
        <AnimatedBackground />
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.035]">
          <img ref={logoRef} src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png" alt="" className="w-[70vw] max-w-[860px] h-auto object-contain transition-transform duration-700 ease-out" />
        </div>

        <main className="relative z-10 container mx-auto px-6 py-14 max-w-5xl space-y-12">

          {/* About COMEDK */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center"><i className="fas fa-info-circle text-purple-700 text-lg" /></span>
              <h2 className="text-blue-900 font-black text-xl">About COMEDK Admission</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              COMEDK UGET (Under Graduate Entrance Test) is a national-level entrance exam conducted by the <strong className="text-blue-900">Consortium of Medical Engineering and Dental Colleges of Karnataka</strong> for admission to engineering programmes. AIET accepts students through COMEDK and JEE Main scores. This route is open to students from all states across India.
            </p>
          </section>

          {/* Steps */}
          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-8 font-serif italic border-l-8 border-yellow-400 pl-5">Step-by-Step Admission Process</h2>
            <div className="space-y-5">
              {steps.map((s) => (
                <div key={s.step} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-slate-100 flex gap-5 hover:border-yellow-200 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-800 text-white flex items-center justify-center font-black text-lg">{s.step}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <i className={`${s.icon} text-[#b77a00] text-sm`} />
                      <h3 className="font-black text-blue-900">{s.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="flex items-center gap-3 px-7 py-4 border-b border-slate-100 bg-gradient-to-r from-yellow-50 to-white">
              <span className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center"><i className="fas fa-graduation-cap text-yellow-600 text-base" /></span>
              <h2 className="text-blue-900 font-black text-lg">Eligibility Criteria</h2>
            </div>
            <ul className="px-7 py-6 space-y-3">
              {eligibility.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center"><i className="fas fa-check text-yellow-600 text-[10px]" /></span>
                  <span className="text-slate-600 text-sm leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Documents */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="flex items-center gap-3 px-7 py-4 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-white">
              <span className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center"><i className="fas fa-folder-open text-purple-700 text-base" /></span>
              <h2 className="text-blue-900 font-black text-lg">Documents Required at the Time of Admission</h2>
            </div>
            <ul className="px-7 py-6 space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center text-xs font-black">{i + 1}</span>
                  <span className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mx-7 mb-6 px-5 py-4 rounded-xl border-l-4 border-yellow-500 bg-yellow-50 text-sm text-slate-600">
              <span className="text-[#b77a00] font-black mr-1">Note:</span>
              Students should keep sufficient copies of all the above documents for Bank loan / Scholarships / any other requirements.
            </div>
          </section>

          {/* Quick links */}
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/admissions/documents-required" className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-md hover:-translate-y-1 transition-transform flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><i className="fas fa-folder-open text-blue-700" /></span>
              <div><p className="font-black text-blue-900 text-sm">Documents Required</p><p className="text-slate-500 text-xs">Full checklist of all documents</p></div>
            </Link>
            <Link href="/admissions/eligibility-criteria" className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100 shadow-md hover:-translate-y-1 transition-transform flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center"><i className="fas fa-clipboard-check text-yellow-700" /></span>
              <div><p className="font-black text-blue-900 text-sm">Eligibility Criteria</p><p className="text-slate-500 text-xs">Disclaimer & eligibility details</p></div>
            </Link>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2 pb-6">
            <a href="https://admissions.alvas.org/engineering-application-form" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 active:scale-95 shadow-lg" style={{ background: "linear-gradient(135deg,#1e3a6e,#2563eb)", boxShadow: "0 6px 28px rgba(37,99,235,0.35)" }}>
              <i className="fas fa-paper-plane" /> Apply for Admission
            </a>
          </div>
        </main>
      </div>

      <Footer />

      <style jsx global>{`
        #main-header { background-color: rgba(255,255,255,0.4) !important; backdrop-filter: blur(20px) !important; border-bottom: 2px solid rgba(183,122,0,0.1) !important; }
        #main-header .nav-btn, #main-header span, #main-header i, #main-header h1, #main-header h3, #top-bar span, #top-bar a { color: #b77a00 !important; }
        #main-header img { filter: none !important; opacity: 1 !important; }
        .header-scrolled { background-color: rgba(255,255,255,0.85) !important; backdrop-filter: blur(12px) !important; border-bottom: 2px solid rgba(183,122,0,0.2) !important; }
        footer { background-color: #071a34 !important; }
      `}</style>
    </div>
  );
}
