"use client";

import { Search, Filter, SortAsc, Quote, Star, Layers } from "lucide-react";

interface ResearchFilterProps {
  search: string;
  setSearch: (val: string) => void;
  selectedDept: string;
  setSelectedDept: (val: string) => void;
  selectedFaculty: string;
  setSelectedFaculty: (val: string) => void;
  publicationType: string;
  setPublicationType: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  yearRange: string;
  setYearRange: (val: string) => void;
  citationRange: string;
  setCitationRange: (val: string) => void;
  impactLevel: string;
  setImpactLevel: (val: string) => void;
  departments: string[];
  faculties: string[];
  publicationTypes: string[];
}

export default function ResearchFilter({
  search,
  setSearch,
  selectedDept,
  setSelectedDept,
  selectedFaculty,
  setSelectedFaculty,
  publicationType,
  setPublicationType,
  sortBy,
  setSortBy,
  yearRange,
  setYearRange,
  citationRange,
  setCitationRange,
  impactLevel,
  setImpactLevel,
  departments,
  faculties,
  publicationTypes,
}: ResearchFilterProps) {
  return (
    <div className="mb-14 space-y-8">
      <div className="relative max-w-3xl mx-auto group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200 shadow-2xl shadow-blue-500/10 transition-all overflow-hidden focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500">
          <Search className="ml-6 text-blue-500" size={24} />
          <input
            type="text"
            placeholder="Search publications, authors, or research sectors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent py-5 pl-4 pr-6 text-lg font-medium text-slate-900 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Department Selection */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
          <Layers size={16} className="text-emerald-500" />
          <select
            value={selectedDept}
            onChange={(e) => {
              setSelectedDept(e.target.value);
              setSelectedFaculty("All");
            }}
            className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer"
          >
            <option value="All">All Departments</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Faculty Selection */}
        <div
          className={`flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200 ${selectedDept === "All" ? "opacity-50 grayscale pointer-events-none" : ""}`}
        >
          <Filter size={16} className="text-blue-500" />
          <select
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
            className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer"
          >
            <option value="All">All Faculty</option>
            {faculties.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        {/* Publication Type */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
          <Layers size={16} className="text-orange-500" />
          <select
            value={publicationType}
            onChange={(e) => setPublicationType(e.target.value)}
            className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer"
          >
            <option value="All">All Types</option>
            {publicationTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Citations Range */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
          <Quote size={16} className="text-purple-500" />
          <select
            value={citationRange}
            onChange={(e) => setCitationRange(e.target.value)}
            className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer"
          >
            <option value="All">Any Citation</option>
            <option value="0-10">0 - 10 Citations</option>
            <option value="10-50">10 - 50 Citations</option>
            <option value="50-100">50 - 100 Citations</option>
            <option value="100+">100+ Highly Cited</option>
          </select>
        </div>

        {/* Impact Level */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
          <Star size={16} className="text-amber-500" />
          <select
            value={impactLevel}
            onChange={(e) => setImpactLevel(e.target.value)}
            className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer"
          >
            <option value="All">All Impact</option>
            <option value="High">Global Impact</option>
            <option value="Medium">Primary Impact</option>
            <option value="Low">Emerging</option>
          </select>
        </div>

        {/* Date Selection */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
          <SortAsc size={16} className="text-blue-500" />
          <select
            value={yearRange}
            onChange={(e) => setYearRange(e.target.value)}
            className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer"
          >
            <option value="All">Any Time (2020+)</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    </div>
  );
}
