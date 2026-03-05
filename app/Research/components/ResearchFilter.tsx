"use client";

import { Search, Filter, SortAsc, Quote, Star, Layers } from "lucide-react";

interface ResearchFilterProps {
    search: string;
    setSearch: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    sortBy: string;
    setSortBy: (val: string) => void;
    authorType: string;
    setAuthorType: (val: string) => void;
    yearRange: string;
    setYearRange: (val: string) => void;
    citationRange: string;
    setCitationRange: (val: string) => void;
    impactLevel: string;
    setImpactLevel: (val: string) => void;
    categories: string[];
}

export default function ResearchFilter({
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSortBy,
    authorType,
    setAuthorType,
    yearRange,
    setYearRange,
    citationRange,
    setCitationRange,
    impactLevel,
    setImpactLevel,
    categories,
}: ResearchFilterProps) {
    return (
        <div className="mb-14 space-y-8">
            <div className="relative max-w-3xl mx-auto group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-white rounded-[2rem] border border-slate-200 shadow-2xl shadow-blue-500/10 transition-all overflow-hidden focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500">
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
                {/* Author Type */}
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
                    <Filter size={16} className="text-blue-500" />
                    <select value={authorType} onChange={(e) => setAuthorType(e.target.value)} className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer">
                        <option value="All">All Roles</option>
                        <option value="Faculty">Faculty Only</option>
                        <option value="Student">Student Only</option>
                    </select>
                </div>

                {/* Category */}
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
                    <Layers size={16} className="text-emerald-500" />
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer">
                        <option value="All">All Sectors</option>
                        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* Citations Range */}
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
                    <Quote size={16} className="text-purple-500" />
                    <select value={citationRange} onChange={(e) => setCitationRange(e.target.value)} className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer">
                        <option value="All">Any Citation</option>
                        <option value="0-10">0 - 10 Citations</option>
                        <option value="10-50">10 - 50 Citations</option>
                        <option value="50+">50+ Highly Cited</option>
                    </select>
                </div>

                {/* Impact Level */}
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
                    <Star size={16} className="text-amber-500" />
                    <select value={impactLevel} onChange={(e) => setImpactLevel(e.target.value)} className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer">
                        <option value="All">All Impact</option>
                        <option value="High">Global Impact</option>
                        <option value="Medium">Primary Impact</option>
                        <option value="Low">Emerging</option>
                    </select>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-blue-200">
                    <SortAsc size={16} className="text-blue-500" />
                    <select value={yearRange} onChange={(e) => setYearRange(e.target.value)} className="bg-transparent text-xs font-black uppercase tracking-wider text-slate-600 outline-none cursor-pointer">
                        <option value="All">Any Time</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="Older">Older</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
