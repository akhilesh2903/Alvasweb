"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Faculty, DepartmentData } from "@/lib/departments";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MobileMenu from "@/app/components/MobileMenu";

import { mathematicsDepartmentData } from "./explore/mathematicsData";

const deptData = mathematicsDepartmentData;

export default function MATHEMATICSPage() {
  const deptId = "mathematics";

  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showExploreBtn, setShowExploreBtn] = useState(false);
  const [exploreBtnBottom, setExploreBtnBottom] = useState(24);

  const facultyTrackRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const handleScrollEffects = () => {
      setIsScrolled(window.scrollY > 50);

      if (videoSectionRef.current && footerRef.current) {
        const videoBottom =
          videoSectionRef.current.getBoundingClientRect().bottom;
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const safeGap = 110;

        // Show button only after video is scrolled past
        setShowExploreBtn(videoBottom < 0);

        // Footer safe distance
        if (footerTop < windowHeight - safeGap) {
          const overlap = windowHeight - footerTop + 20;
          setExploreBtnBottom(overlap);
        } else {
          setExploreBtnBottom(24);
        }
      }
    };

    window.addEventListener("scroll", handleScrollEffects);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollEffects);
    };
  }, [deptData]);

  const nextFaculty = () => {
    if (deptData.faculty.length > 3) {
      setActiveFacultyIndex(
        (prev) => (prev + 1) % (deptData.faculty.length - 2),
      );
    }
  };

  const prevFaculty = () => {
    if (deptData.faculty.length > 3) {
      setActiveFacultyIndex((prev) =>
        prev === 0 ? deptData.faculty.length - 3 : prev - 1,
      );
    }
  };

  const openFacultyModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setIsFacultyModalOpen(true);
    setOpenAccordion(null);
  };

  return (
    <div className="dept-bg min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;900&display=swap");

        body {
          font-family: "Manrope", sans-serif;
        }
        h1,
        h2,
        h3,
        .serif {
          font-family: "Playfair Display", serif;
        }

        .dept-bg {
          background:
            radial-gradient(
              circle at top left,
              rgba(251, 191, 36, 0.12),
              transparent 55%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(59, 130, 246, 0.08),
              transparent 55%
            ),
            linear-gradient(to bottom, #fffbf0, #fef9f3, #fffbf0);
        }

        .dept-title {
          background: linear-gradient(135deg, #1e3a8a, #7c2d12, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 5s linear infinite;
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0px);
        }

        .divider {
          height: 1px;
          width: 0%;
          background: linear-gradient(
            to right,
            rgba(139, 92, 246, 1),
            rgba(59, 130, 246, 1),
            rgba(148, 163, 184, 0)
          );
          transition: width 1s ease;
          border-radius: 999px;
        }
        .reveal.show .divider {
          width: 100%;
        }

        .wave-btn::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.35),
            transparent 60%
          );
          animation: wavePulse 1.8s infinite ease-in-out;
          z-index: -1;
        }
        .wave-btn::after {
          content: "";
          position: absolute;
          inset: -18px;
          border-radius: 9999px;
          border: 2px solid rgba(99, 102, 241, 0.25);
          animation: waveRing 1.8s infinite ease-in-out;
          z-index: -1;
        }
        @keyframes wavePulse {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.07);
            opacity: 0.9;
          }
        }
        @keyframes waveRing {
          0% {
            transform: scale(0.85);
            opacity: 0;
          }
          40% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />

      <div className="h-20 md:h-24"></div>

      <div
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-opacity duration-300 ${
          showExploreBtn
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ bottom: `${exploreBtnBottom}px` }}
      >
        <Link
          href={`/academics/${deptId}/explore`}
          className="wave-btn bg-indigo-600 text-white font-extrabold px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition text-xs md:text-sm uppercase tracking-widest relative"
        >
          Explore More
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 pb-0">
        <section className="mb-14 text-center reveal">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-gray-600 mb-4">
            Academic Course
          </p>
          <h1 className="dept-title serif text-4xl md:text-6xl font-black leading-tight italic">
            {deptData.title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700 font-medium">
            Innovation &bull; Coding &bull; Research &bull; Future Technology
          </p>
          <div className="divider mt-8 mx-auto"></div>
        </section>
      </main>

      <section
        ref={videoSectionRef}
        className="mb-16 reveal w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-4 serif">
            Course Overview Video
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Watch a quick overview about the course.
          </p>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 border-y border-gray-300 shadow-2xl bg-gray-900 overflow-hidden">
          <div className="aspect-[16/6] md:aspect-[21/9] w-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/videos/vecteezy_inside-a-massive-data-center-showing-rows-of-servers-and-cables_71747904.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="divider mt-10"></div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-stretch">
          <div
            id="visionSection"
            className="reveal flex flex-col bg-white/60 backdrop-blur-sm border border-indigo-100 rounded-3xl p-8 shadow-sm h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-indigo-700 serif">
                Vision
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed flex-1">
              {deptData.vision}
            </p>
            <div className="divider mt-8"></div>
          </div>
          <div
            id="missionSection"
            className="reveal flex flex-col bg-white/60 backdrop-blur-sm border border-indigo-100 rounded-3xl p-8 shadow-sm h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-indigo-700 serif">
                Mission
              </h2>
            </div>
            <div className="flex-1 space-y-4">
              {deptData.mission
                .split("\n")
                .filter((line) => line.trim())
                .map((line, idx) => {
                  const match = line.match(/^(M\d+)[:：\t]\s*(.*)/);
                  const label = match ? match[1] : null;
                  const text = match
                    ? match[2].trim()
                    : line.replace(/M\d+[:：\t]\s*/, "").trim();
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      {label && (
                        <span className="shrink-0 w-9 h-9 rounded-lg bg-indigo-600 text-white text-xs font-black flex items-center justify-center shadow-sm">
                          {label}
                        </span>
                      )}
                      <p className="text-sm md:text-base text-gray-800 leading-relaxed pt-1">
                        {text}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="divider mt-8"></div>
          </div>
        </section>

        <section className="mb-20 reveal bg-white/50 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:bg-indigo-100 transition-colors duration-700"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-[2.5rem] rotate-6 scale-95 opacity-20"></div>
                <img
                  src={deptData.hod.photo}
                  className="w-full h-[400px] object-cover rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-white"
                  alt={deptData.hod.name}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 serif">
                {deptData.hod.name}
              </h2>
              <p className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-6">
                {deptData.hod.designation}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm md:text-base">
                <div className="space-y-2">
                  <p className="text-gray-500 flex items-center gap-2">
                    <span className="font-bold text-gray-900">
                      Qualification:
                    </span>{" "}
                    {deptData.hod.qualification}
                  </p>
                  <p className="text-gray-500 flex items-center gap-2">
                    <span className="font-bold text-gray-900">Experience:</span>{" "}
                    {deptData.hod.experience}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 flex items-center gap-2">
                    <span className="font-bold text-gray-900">Email:</span>{" "}
                    {deptData.hod.email}
                  </p>
                  <p className="text-gray-500 flex items-center gap-2">
                    <span className="font-bold text-gray-900">Phone:</span>{" "}
                    {deptData.hod.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-indigo-100 pl-6 mb-8">
                "Welcome to the {deptData.name} program. We are committed to
                nurturing technical excellence and professional ethics in our
                students, preparing them for the challenges of tomorrow."
              </p>
              <button
                onClick={() => openFacultyModal(deptData.hod)}
                className="bg-gray-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition shadow-lg active:scale-95"
              >
                View Profile
              </button>
            </div>
          </div>
        </section>

        <section className="mb-20 reveal relative">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 serif">
                Our Expert Faculty
              </h2>
              <p className="text-gray-500 font-medium mt-1">
                Nurturing minds with experience and dedication
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevFaculty}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition bg-white shadow-sm"
              >
                &larr;
              </button>
              <button
                onClick={nextFaculty}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition bg-white shadow-sm"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden px-2">
            <div
              ref={facultyTrackRef}
              className="flex gap-6 transition-transform duration-700"
              style={{
                transform: `translateX(-${activeFacultyIndex * 300}px)`,
              }}
            >
              {deptData.faculty.map((member, i) => (
                <div
                  key={i}
                  className="min-w-[280px] bg-white rounded-[2rem] p-5 shadow-lg border border-gray-100/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => openFacultyModal(member)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                    <img
                      src={member.photo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={member.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 serif mb-1 group-hover:text-indigo-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {member.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="divider mt-12 mx-auto"></div>
        </section>

        <section className="mb-2 reveal">
          <h2 className="text-2xl font-black text-gray-900 mb-4 serif">
            Top Recruiters
          </h2>
          <div className="bg-gray-100 border border-gray-300 rounded-3xl overflow-hidden py-6">
            <div className="marquee-track flex items-center">
              {[...deptData.recruiters, ...deptData.recruiters].map(
                (rec, i) => (
                  <div
                    key={i}
                    className="px-8 flex flex-col items-center min-w-[150px]"
                  >
                    <img
                      src={rec.logo || `logos/${rec.name.toLowerCase()}.png`}
                      className="h-10 object-contain mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                      alt={rec.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="text-sm font-black text-indigo-700">
                      {rec.name}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="divider mt-10"></div>
        </section>
      </main>

      <div ref={footerRef}>
        <Footer />
      </div>

      {isFacultyModalOpen && selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsFacultyModalOpen(false)}
        >
          <button
            onClick={() => setIsFacultyModalOpen(false)}
            className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition shadow-2xl z-[10000] border border-gray-100 font-bold text-xl"
          >
            &times;
          </button>
          <div
            className="bg-white rounded-[2rem] shadow-2xl max-w-xl w-full max-h-[85vh] overflow-hidden relative animate-in zoom-in duration-300 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f8f9fa] p-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-indigo-200 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src={selectedFaculty.photo}
                  className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
                  alt={selectedFaculty.name}
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 border-b-2 border-gray-900 pb-2 inline-block italic serif">
                  {selectedFaculty.name}
                </h3>

                <div className="mt-6 space-y-3 font-sans">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Designation
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty.designation}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Email
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty.email}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Joining date
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty.joiningDate || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-6 font-sans">
              {[
                { title: "Educational Qualifications", key: "qualifications" },
                { title: "Past Experience", key: "pastExperience" },
                { title: "Areas of Interest", key: "areasOfInterest" },
                { title: "Achievement", key: "achievements" },
                {
                  title: "Professional Membership",
                  key: "professionalMembership",
                },
                { title: "Publications", key: "publications" },
                { title: "Project Guided", key: "projectsGuided" },
                { title: "Subjects Teaching", key: "subjectsTeaching" },
                { title: "Research Publications", key: "researchPublications" },
                { title: "Others", key: "others" },
              ].map((item) => (
                <div key={item.key} className="mb-2">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.key ? null : item.key,
                      )
                    }
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${
                      openAccordion === item.key
                        ? "bg-[#f1f3f5] shadow-sm"
                        : "bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100"
                    }`}
                  >
                    <span className="text-sm font-bold text-gray-700">
                      {item.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openAccordion === item.key ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openAccordion === item.key
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-4 bg-white rounded-xl border border-gray-100 text-sm text-gray-600 leading-relaxed">
                      {selectedFaculty.details?.[
                        item.key as keyof typeof selectedFaculty.details
                      ] || "Information not available."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
