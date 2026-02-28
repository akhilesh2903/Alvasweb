"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { cseDepartmentData } from "./cseData";
import { Faculty } from "@/lib/departments";
import dynamic from "next/dynamic";
import CseExploreLoading from "./cseExploreLoading";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
  CheckCircle2,
  Award,
  BookOpen,
  Target,
} from "lucide-react";

const CseNewsletterViewer = dynamic(
  () => import("@/app/components/CseNewsletterViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 flex items-center justify-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400">
        Loading Newsletter Viewer...
      </div>
    ),
  },
);

export default function CseExploreContent() {
  const department = cseDepartmentData;

  const [activeTab, setActiveTab] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Faculty Section States
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    // Show contents
    setIsMounted(true);

    // Set page title
    document.title = `Explore ${department.name} | AIET`;

    // Scroll header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [department.name]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const openFacultyModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setIsFacultyModalOpen(true);
    setOpenAccordion(null);
  };

  const tabs = [
    { id: "about", label: "ABOUT" },
    { id: "thrust", label: "THRUST AREA" },
    { id: "peo", label: "(PEO's, PO's, PSO'S)" },
    { id: "syllabus", label: "SCHEME & SYLLABUS" },
    { id: "placements", label: "PLACEMENT" },
    { id: "research", label: "RESEARCH AND PUBLICATION" },
    { id: "facultyStaff", label: "FACULTY AND STAFF" },
    { id: "facilities", label: "FACILITIES" },
    { id: "workshop", label: "WORKSHOP AND CONFERENCE" },
    { id: "clubs", label: "PROFESSIONAL BODIES" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "activities", label: "DEPARTMENT ACTIVITIES" },
    { id: "newsletter", label: "E-NEWSLETTER" },
  ];

  const currentData = department.exploreData?.[
    activeTab as keyof typeof department.exploreData
  ] || {
    title: "",
    body: "Content not available for this section.",
    highlights: [],
  };

  if (!isMounted) {
    return <CseExploreLoading />;
  }

  return (
    <>
      <style jsx global>{`
        .page-bg {
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
          min-height: 100vh;
          color: #1a1a1a;
        }

        .tab-btn.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(139, 92, 246, 0.6);
          color: #4338ca;
        }

        .content-enter {
          animation: slideInRight 0.5s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .header-scrolled {
          background-color: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(20px) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05) !important;
          padding-top: 8px !important;
          padding-bottom: 8px !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>

      {/* Header */}
      <header
        id="main-header"
        className={`fixed top-0 w-full z-50 text-white pt-4 pb-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-500 ${
          isScrolled ? "header-scrolled" : ""
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          <Link href="/">
            <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer z-50">
              <img
                id="logo-img"
                src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png"
                alt="Alvas Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />

              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-xl md:text-2xl font-black leading-none tracking-tight text-blue-900">
                  ALVA&apos;S
                </h1>
                <span className="text-[8px] md:text-[9px] font-bold tracking-[0.1em] uppercase opacity-90 mt-0.5 text-blue-900">
                  INSTITUTE OF ENGINEERING & TECHNOLOGY
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:block text-right">
              <div className="text-[9px] font-bold tracking-[0.2em] text-blue-900/40 uppercase mb-0.5">
                Explore Page
              </div>
              <div className="font-serif text-xl font-black text-blue-900 leading-none">
                CSE Highlights
              </div>
            </div>
            <Link
              href="/academics/cse"
              className="flex items-center gap-2 bg-[#4f46e5] text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-all duration-300 font-bold text-sm shadow-lg shadow-indigo-200"
            >
              <FaArrowLeft className="text-xs" /> Back
            </Link>
          </div>
        </nav>
      </header>

      {/* Top padding for fixed header */}
      <div className="h-20 md:h-24"></div>

      {/* Main Content */}
      <div className="page-bg">
        <div className="max-w-[1500px] mx-auto px-3 md:px-5 py-10 grid lg:grid-cols-12 gap-6">
          {/* LEFT SIDE: Tab List */}
          <aside className="lg:col-span-3 bg-white border border-gray-300 rounded-3xl p-4 backdrop-blur-xl shadow-md">
            <h3 className="text-lg font-black text-indigo-700 mb-4">
              Explore Tabs
            </h3>

            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn w-full text-left px-4 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 transition font-bold text-gray-900 ${
                    activeTab === tab.id ? "active bg-gray-100" : "bg-gray-100"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT SIDE: Content Area */}
          <section className="lg:col-span-9 bg-white border border-gray-300 rounded-3xl p-6 shadow-md overflow-hidden min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {activeTab === "about" ? (
                  <div className="space-y-8">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {currentData?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="prose prose-indigo max-w-none">
                      {currentData?.body
                        .split("\n")
                        .filter((p) => p.trim())
                        .map((para, idx) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="text-gray-700 text-lg leading-relaxed font-medium mb-4"
                          >
                            {para}
                          </motion.p>
                        ))}
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                        <Award className="text-indigo-600 w-6 h-6" />
                        KEY HIGHLIGHTS
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentData?.highlights?.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gradient-to-br from-white to-indigo-50/30 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:border-indigo-300 transition-all group"
                          >
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                              {idx === 0 && <Cpu className="w-6 h-6" />}
                              {idx === 1 && (
                                <CircuitBoard className="w-6 h-6" />
                              )}
                              {idx === 2 && <Zap className="w-6 h-6" />}
                              {idx > 2 && <CheckCircle2 className="w-6 h-6" />}
                            </div>
                            <p className="text-gray-700 font-bold text-sm leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : activeTab === "thrust" ? (
                  <div className="space-y-8">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {department.exploreData?.thrust?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {department.exploreData?.thrust?.body}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mt-12">
                      {department.exploreData?.thrust?.highlights?.map(
                        (item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{
                              opacity: 0,
                              x: idx % 2 === 0 ? -20 : 20,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                              scale: 1.02,
                              backgroundColor: "rgba(79, 70, 229, 0.05)",
                            }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm flex items-center gap-6 group hover:border-indigo-300 transition-all"
                          >
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              {idx === 0 && (
                                <CircuitBoard className="w-7 h-7" />
                              )}
                              {idx === 1 && <Lightbulb className="w-7 h-7" />}
                              {idx === 2 && <Cpu className="w-7 h-7" />}
                              {idx === 3 && <Zap className="w-7 h-7" />}
                            </div>
                            <div>
                              <h4 className="text-xl font-black text-gray-900 leading-tight">
                                {item.replace("•\t", "")}
                              </h4>
                            </div>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>
                ) : activeTab === "peo" ? (
                  <div className="space-y-12 pb-10">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {department.exploreData?.peo?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    {/* POs SECTION */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <Target className="text-indigo-600 w-8 h-8" />
                        PROGRAM OUTCOMES (POs)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            const title = rest[0];
                            const description = rest.slice(1).join(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group"
                              >
                                <div className="flex gap-4">
                                  <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center shadow-lg shadow-indigo-200">
                                    {code.trim()}
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors uppercase text-sm mb-1">
                                      {title.trim()}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                      {description.trim()}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>

                    {/* PEOs SECTION */}
                    <div className="space-y-6 pt-6 pt-10 border-t border-gray-100">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <Users className="text-purple-600 w-8 h-8" />
                        PROGRAM EDUCATIONAL OBJECTIVES (PEOs)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PEO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-3xl border border-purple-100 bg-purple-50/30 flex gap-5 group hover:border-purple-300 transition-all"
                              >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center shadow-lg shadow-purple-200">
                                  {code.trim()}
                                </div>
                                <p className="text-sm text-gray-800 font-bold leading-relaxed self-center">
                                  {rest.join(":").trim()}
                                </p>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>

                    {/* PSOs SECTION */}
                    <div className="space-y-6 pt-6 pt-10 border-t border-gray-100">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <ShieldCheck className="text-blue-600 w-8 h-8" />
                        PROGRAM SPECIFIC OUTCOMES (PSOs)
                      </h3>
                      <div className="grid gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PSO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-[2rem] border border-blue-100 bg-blue-50/30 flex gap-6 group hover:border-blue-300 transition-all items-center"
                              >
                                <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                  {code.trim().replace("PSO", "")}
                                </div>
                                <p className="text-base text-gray-800 font-black leading-relaxed">
                                  {rest.join(":").trim()}
                                </p>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-indigo-700 mb-3 uppercase tracking-tight">
                      {currentData?.title || "EXPLORE"}
                    </h2>

                    {activeTab === "facultyStaff" ? (
                      <div className="space-y-12">
                        {/* HOD SECTION */}
                        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-lg relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full blur-3xl -mr-24 -mt-24 opacity-50"></div>
                          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                            <div className="w-full md:w-1/3">
                              <div className="relative">
                                <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-6 scale-95 opacity-20"></div>
                                <img
                                  src={department.hod.photo}
                                  className="w-full h-[320px] object-cover rounded-[2rem] shadow-xl relative z-10 border-4 border-white"
                                  alt={department.hod.name}
                                />
                              </div>
                            </div>
                            <div className="w-full md:w-2/3">
                              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 serif">
                                {department.hod.name}
                              </h2>
                              <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">
                                {department.hod.designation}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs md:text-sm">
                                <div className="space-y-1.5">
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Qualification:
                                    </span>{" "}
                                    {department.hod.qualification}
                                  </p>
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Experience:
                                    </span>{" "}
                                    {department.hod.experience}
                                  </p>
                                </div>
                                <div className="space-y-1.5">
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Email:
                                    </span>{" "}
                                    {department.hod.email}
                                  </p>
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Phone:
                                    </span>{" "}
                                    {department.hod.phone}
                                  </p>
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed italic border-l-4 border-indigo-100 pl-4 mb-6 text-sm">
                                "Welcome to the {department.name} program. We
                                are committed to nurturing technical excellence
                                and professional ethics in our students."
                              </p>
                              <button
                                onClick={() => openFacultyModal(department.hod)}
                                className="bg-gray-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-md text-sm active:scale-95"
                              >
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* FACULTY SECTION */}
                        <div className="relative">
                          <div className="mb-6">
                            <h2 className="text-2xl font-black text-gray-900 serif">
                              Our Expert Faculty
                            </h2>
                            <p className="text-gray-500 font-medium text-sm mt-0.5">
                              Nurturing minds with experience and dedication
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-1">
                            {department.faculty.map(
                              (member: Faculty, i: number) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-[2rem] p-4 shadow-md border border-gray-100/50 hover:shadow-xl transition-all duration-500 group cursor-pointer"
                                  onClick={() => openFacultyModal(member)}
                                >
                                  <div className="relative overflow-hidden rounded-2xl mb-5 aspect-square">
                                    <img
                                      src={member.photo}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                      alt={member.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                  </div>
                                  <h3 className="text-base font-black text-gray-900 serif mb-0.5 group-hover:text-indigo-600 transition-colors">
                                    {member.name}
                                  </h3>
                                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                                    {member.designation}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {activeTab === "newsletter" ? (
                          <CseNewsletterViewer />
                        ) : (
                          <div
                            className="text-sm md:text-base text-gray-800 leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{
                              __html: currentData?.body || "",
                            }}
                          />
                        )}

                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                              Highlights
                            </p>
                            <p className="font-semibold text-gray-900 mt-2">
                              {currentData?.highlights?.[0] ||
                                "Regular student activities and project-based learning."}
                            </p>
                          </div>

                          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                              Outcome
                            </p>
                            <p className="font-semibold text-gray-900 mt-2">
                              {currentData?.highlights?.[1] ||
                                "Industry-ready skills and strong placement performance."}
                            </p>
                          </div>
                        </div>

                        {currentData?.highlights?.[2] && (
                          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                              Additional Information
                            </p>
                            <p className="font-semibold text-blue-900 mt-2">
                              {currentData.highlights[2]}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#071a34] text-white pt-16 pb-6 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo + Contact */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png"
                  alt="Alvas Logo"
                  className="w-16 h-16 object-contain drop-shadow-xl"
                />
                <div>
                  <h3 className="text-xl font-black leading-tight">
                    ALVAS
                    <span className="block text-sm font-bold tracking-widest text-white/80">
                      INSTITUTE OF ENGINEERING AND TECHNOLOGY
                    </span>
                  </h3>
                  <p className="text-xs text-white/60 font-semibold mt-1">
                    (An Autonomous Institution)
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-white/70 font-medium">
                <div className="flex gap-3">
                  <p className="font-extrabold text-white w-20">Phone</p>
                  <p>
                    +91 98765 43210 <br />
                    +91 98765 43211
                  </p>
                </div>

                <div className="flex gap-3">
                  <p className="font-extrabold text-white w-20">Email</p>
                  <p>
                    info@alvas.edu.in <br />
                    principal@alvas.edu.in
                  </p>
                </div>

                <div className="flex gap-3">
                  <p className="font-extrabold text-white w-20">Address</p>
                  <p>
                    Alva&apos;s Campus, Moodbidri <br />
                    Karnataka, India - 574227
                  </p>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase mb-5 text-white">
                Facilities
              </h4>
              <ul className="space-y-3 text-sm text-white/70 font-semibold">
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Campus
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Hostel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Transportation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    CSR
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Core Facilities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase mb-5 text-white">
                Academics
              </h4>
              <ul className="space-y-3 text-sm text-white/70 font-semibold">
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Courses Offered
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Value Added Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Results
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300 transition">
                    Useful Links
                  </Link>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase mb-5 text-white">
                Location
              </h4>
              <a
                href="https://www.google.com/maps/place/Alva's+Institute+of+Engineering+and+Technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  src="https://www.google.com/maps?q=Alva's+Institute+of+Engineering+and+Technology&output=embed"
                  className="w-full h-44 rounded-lg border border-white/10 hover:opacity-90 transition"
                  loading="lazy"
                  title="Alvas Institute Location"
                ></iframe>
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/50 font-semibold tracking-wide">
              © {new Date().getFullYear()} Alvas Institute of Engineering and
              Technology. All Rights Reserved.
            </p>
            <p className="text-xs text-white/40 font-semibold mt-2">
              Managed by{" "}
              <span className="text-yellow-300">Alva&apos;s Web Team</span>
            </p>
          </div>
        </div>
      </footer>
      {/* Faculty Modal */}
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
                  src={selectedFaculty?.photo}
                  className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
                  alt={selectedFaculty?.name}
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 border-b-2 border-gray-900 pb-2 inline-block italic serif">
                  {selectedFaculty?.name}
                </h3>

                <div className="mt-6 space-y-3 font-sans">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Designation
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty?.designation}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Email
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty?.email}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Joining date
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty?.joiningDate || "N/A"}
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
                      {selectedFaculty?.details?.[
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
    </>
  );
}
