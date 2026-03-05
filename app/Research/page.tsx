"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import ResearchCard from "./components/ResearchCard";
import ResearchFilter from "./components/ResearchFilter";
import ResearchCharts from "./components/ResearchCharts";
import ResearchSkeleton from "./components/ResearchSkeleton";
import { fetchResearchData, ResearchItem, parseExcelFile } from "./utils/dataUtils";
import { Sparkles, Trophy, Users, BookOpen } from "lucide-react";

export default function ResearchPage() {
    const [data, setData] = useState<ResearchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("year");
    const [authorType, setAuthorType] = useState("All");
    const [yearRange, setYearRange] = useState("All");
    const [citationRange, setCitationRange] = useState("All");
    const [impactLevel, setImpactLevel] = useState("All");

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const result = await fetchResearchData();
            setData(result);
            setTimeout(() => setLoading(false), 2500); // Artificial delay for premium system log simulation
        };
        loadData();
    }, []);

    const categories = useMemo(() => {
        return Array.from(new Set(data.map((item) => item.category))).filter(Boolean);
    }, [data]);

    const filteredData = useMemo(() => {
        let result = data.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.authors.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = category === "All" || item.category === category;

            // Role filtering
            let matchesAuthorType = true;
            if (authorType === "Faculty") {
                matchesAuthorType = !item.authors.toLowerCase().includes("student");
            } else if (authorType === "Student") {
                matchesAuthorType = item.authors.toLowerCase().includes("student");
            }

            // Year filtering
            let matchesYearRange = true;
            const itemYear = Number(item.year);
            if (yearRange !== "All") {
                if (yearRange === "Older") {
                    matchesYearRange = itemYear < 2021;
                } else {
                    matchesYearRange = itemYear === Number(yearRange);
                }
            }

            // Citation Depth filtering
            let matchesCitationRange = true;
            const cites = item.citations || 0;
            if (citationRange === "0-10") matchesCitationRange = cites <= 10;
            else if (citationRange === "10-50") matchesCitationRange = cites > 10 && cites <= 50;
            else if (citationRange === "50+") matchesCitationRange = cites > 50;

            // Impact filtering
            let matchesImpactLevel = true;
            if (impactLevel === "High") matchesImpactLevel = cites > 20;
            else if (impactLevel === "Medium") matchesImpactLevel = cites > 5 && cites <= 20;
            else if (impactLevel === "Low") matchesImpactLevel = cites <= 5;

            return matchesSearch && matchesCategory && matchesAuthorType && matchesYearRange && matchesCitationRange && matchesImpactLevel;
        });

        result.sort((a, b) => {
            if (sortBy === "year") return b.year - a.year;
            if (sortBy === "citations") return b.citations - a.citations;
            if (sortBy === "title") return a.title.localeCompare(b.title);
            return 0;
        });

        return result;
    }, [data, search, category, sortBy, authorType, yearRange, citationRange, impactLevel]);

    const stats = useMemo(() => {
        return {
            total: filteredData.length,
            citations: filteredData.reduce((acc, curr) => acc + (curr.citations || 0), 0),
            faculty: filteredData.filter(d => !d.authors.toLowerCase().includes("student")).length,
            students: filteredData.filter(d => d.authors.toLowerCase().includes("student")).length
        };
    }, [filteredData]);

    return (
        <main className="relative min-h-screen text-slate-900 overflow-x-hidden pb-20 pt-28">
            <ParticleBackground />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 inline-flex items-center gap-3 rounded-full bg-blue-600/10 px-6 py-2 text-sm font-black text-blue-600 ring-1 ring-inset ring-blue-600/20 uppercase tracking-widest"
                    >
                        <Sparkles size={16} />
                        Strategic Research Analytics
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-6xl font-black tracking-tighter sm:text-8xl text-slate-900"
                    >
                        ALVA'S <span className="text-blue-600">IMPACT</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-3xl text-xl text-slate-500 font-bold leading-relaxed"
                    >
                        Analyzing Institutional database metrics to highlight global innovation through Peer-reviewed excellence.
                    </motion.p>
                </div>

                {/* Quick Stats Grid */}
                <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-4">
                    {[
                        { label: "Publications", value: stats.total, icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
                        { label: "Global Citations", value: stats.citations, icon: Trophy, color: "text-amber-600", bg: "bg-amber-50" },
                        { label: "Elite Faculty", value: stats.faculty, icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
                        { label: "Top Students", value: stats.students, icon: Users, color: "text-purple-600", bg: "bg-purple-50" }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40"
                        >
                            <div className={`mb-4 inline-flex rounded-2xl ${stat.bg} ${stat.color} p-4`}>
                                <stat.icon size={28} />
                            </div>
                            <div className="text-4xl font-black text-slate-800 tracking-tighter">{stat.value}</div>
                            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {loading ? (
                    <ResearchSkeleton />
                ) : (
                    <>
                        {/* Analytics Section */}
                        <ResearchCharts data={filteredData} />

                        {/* Filters */}
                        <ResearchFilter
                            search={search}
                            setSearch={setSearch}
                            category={category}
                            setCategory={setCategory}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            authorType={authorType}
                            setAuthorType={setAuthorType}
                            yearRange={yearRange}
                            setYearRange={setYearRange}
                            citationRange={citationRange}
                            setCitationRange={setCitationRange}
                            impactLevel={impactLevel}
                            setImpactLevel={setImpactLevel}
                            categories={categories}
                        />

                        {/* Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item) => (
                                        <ResearchCard key={item.id} item={item} />
                                    ))
                                ) : (
                                    <div className="col-span-full py-32 text-center">
                                        <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">Zero Correlation Found</div>
                                        <p className="text-slate-400 font-bold mt-2">Adjust your filters to discover more research</p>
                                        <button
                                            onClick={() => {
                                                setSearch(""); setCategory("All"); setAuthorType("All"); setYearRange("All");
                                                setCitationRange("All"); setImpactLevel("All");
                                            }}
                                            className="mt-6 px-8 py-3 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                                        >
                                            Reset Strategy
                                        </button>
                                    </div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </>
                )}
            </div>
        </main>
    );
}
