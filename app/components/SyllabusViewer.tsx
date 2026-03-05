"use client";

import React, { useState } from "react";
import { Download, FileText, Calendar } from "lucide-react";
import { SyllabusLink } from "@/lib/departments";

interface SyllabusViewerProps {
  syllabusLinks?: SyllabusLink[];
}

export default function SyllabusViewer({ syllabusLinks }: SyllabusViewerProps) {
  const [activeYear, setActiveYear] = useState(syllabusLinks?.[0]?.year || "");

  if (!syllabusLinks || syllabusLinks.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        No syllabus available.
      </div>
    );
  }

  const activeLink =
    syllabusLinks.find((l) => l.year === activeYear) || syllabusLinks[0];
  const pdfUrl = `/api/pdf-proxy?id=${activeLink.id}`;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Year Selection Pills */}
      <div className="flex flex-wrap gap-3">
        {syllabusLinks.map((link) => (
          <button
            key={link.year}
            onClick={() => setActiveYear(link.year)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-sm border ${
              activeYear === link.year
                ? "bg-indigo-600 text-white border-indigo-600 shadow-indigo-200 scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30"
            }`}
          >
            <Calendar
              className={`w-4 h-4 ${activeYear === link.year ? "text-indigo-200" : "text-gray-400"}`}
            />
            {link.year}
          </button>
        ))}
      </div>

      {/* PDF Viewer Area */}
      <div className="relative bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-800 min-h-[600px] group">
        <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={`https://drive.google.com/file/d/${activeLink.id}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-xl hover:bg-white/20 transition-all font-bold text-sm border border-white/20"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Header inside viewer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black tracking-tight leading-tight">
                Scheme & Syllabus
              </h4>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-0.5">
                Academic Year {activeLink.year}
              </p>
            </div>
          </div>
        </div>

        {/* The actual PDF Embed */}
        <div className="aspect-[16/22] w-full bg-gray-800 relative">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-none"
            title={`Syllabus ${activeLink.year}`}
          />
          {/* Overlay to catch clicks if needed, or just let iframe handle */}
        </div>
      </div>

      {/* Features/Highlights for this specific syllabus if any */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-2">
            Notice
          </p>
          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            This document contains the official VTU approved scheme and detailed
            syllabus for the academic year {activeLink.year}.
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100 shadow-sm">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-2">
            Compatibility
          </p>
          <p className="text-sm text-indigo-900 font-medium leading-relaxed">
            Optimized for desktop viewing. For mobile devices, we recommend
            clicking on "Download PDF" for a better experience.
          </p>
        </div>
      </div>
    </div>
  );
}
