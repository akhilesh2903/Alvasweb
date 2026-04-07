"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import ResearchCard from "./components/ResearchCard";
import ResearchFilter from "./components/ResearchFilter";
import ResearchSkeleton from "./components/ResearchSkeleton";
import { fetchResearchData, ResearchItem } from "./utils/dataUtils";
import { Sparkles, Trophy, Users, BookOpen } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const ParticleBackground = dynamic(
  () => import("./components/ParticleBackground"),
  {
    ssr: false,
    loading: () => null,
  },
);

const ResearchCharts = dynamic(() => import("./components/ResearchCharts"), {
  ssr: false,
  loading: () => (
    <div className="mb-16 rounded-[3rem] border border-slate-200 bg-white/80 backdrop-blur-xl p-12 shadow-2xl shadow-slate-200/50">
      <div className="h-[450px] w-full animate-pulse rounded-3xl bg-slate-100" />
    </div>
  ),
});

export default function ResearchPage() {
  const PAGE_SIZE = 15;
  const [data, setData] = useState<ResearchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedFaculty, setSelectedFaculty] = useState("All");
  const [publicationType, setPublicationType] = useState("All");
  const [sortBy, setSortBy] = useState("year");
  const [yearRange, setYearRange] = useState("All");
  const [citationRange, setCitationRange] = useState("All");
  const [impactLevel, setImpactLevel] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchResearchData();
      // Default segregation: only show from 2020 onwards
      const filteredByYear = result.filter((item) => item.year >= 2020);
      setData(filteredByYear);
      setLoading(false);
    };
    loadData();
  }, []);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [
    search,
    selectedDept,
    selectedFaculty,
    publicationType,
    sortBy,
    yearRange,
    citationRange,
    impactLevel,
  ]);

  const departments = useMemo(() => {
    return Array.from(new Set(data.map((item) => item.department)))
      .filter((d) => d && d !== "Other")
      .sort();
  }, [data]);

  const publicationTypes = useMemo(() => {
    return Array.from(new Set(data.map((item) => item.category)))
      .filter(Boolean)
      .sort();
  }, [data]);

  const faculties = useMemo(() => {
    if (selectedDept === "All") return [];
    return Array.from(
      new Set(
        data
          .filter((item) => item.department === selectedDept)
          .map((item) => item.authors),
      ),
    )
      .filter(Boolean)
      .sort();
  }, [data, selectedDept]);

  const filteredData = useMemo(() => {
    let result = data.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.authors.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesDept =
        selectedDept === "All" || item.department === selectedDept;
      const matchesFaculty =
        selectedFaculty === "All" || item.authors === selectedFaculty;
      const matchesType =
        publicationType === "All" || item.category === publicationType;

      let matchesYearRange = true;
      const itemYear = Number(item.year);
      if (yearRange !== "All") {
        if (yearRange === "Older") {
          matchesYearRange = itemYear < 2021;
        } else {
          matchesYearRange = itemYear === Number(yearRange);
        }
      }

      let matchesCitationRange = true;
      const cites = item.citations || 0;
      if (citationRange === "0-10") matchesCitationRange = cites <= 10;
      else if (citationRange === "10-50")
        matchesCitationRange = cites > 10 && cites <= 50;
      else if (citationRange === "50-100")
        matchesCitationRange = cites > 50 && cites <= 100;
      else if (citationRange === "100+") matchesCitationRange = cites > 100;

      let matchesImpactLevel = true;
      if (impactLevel === "High") matchesImpactLevel = cites > 20;
      else if (impactLevel === "Medium")
        matchesImpactLevel = cites > 5 && cites <= 20;
      else if (impactLevel === "Low") matchesImpactLevel = cites <= 5;

      return (
        matchesSearch &&
        matchesDept &&
        matchesFaculty &&
        matchesType &&
        matchesYearRange &&
        matchesCitationRange &&
        matchesImpactLevel
      );
    });

    result.sort((a, b) => {
      if (sortBy === "year") return b.year - a.year;
      if (sortBy === "citations") return b.citations - a.citations;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

    return result;
  }, [
    data,
    search,
    selectedDept,
    selectedFaculty,
    publicationType,
    sortBy,
    yearRange,
    citationRange,
    impactLevel,
  ]);

  const paginatedData = useMemo(() => {
    return filteredData.slice(0, visibleCount);
  }, [filteredData, visibleCount]);

  const stats = useMemo(() => {
    return {
      total: filteredData.length,
      citations: filteredData.reduce(
        (acc, curr) => acc + (curr.citations || 0),
        0,
      ),
      faculty: Array.from(
        new Set(
          filteredData
            .filter(
              (d) => d.authorType === "Facutly" || d.authorType === "Faculty",
            )
            .map((d) => d.authors),
        ),
      ).length,
      researchers: Array.from(new Set(filteredData.map((d) => d.authors)))
        .length,
    };
  }, [filteredData]);

  return (
    <div className="bg-[#F5F6F8] text-slate-900">
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      <main className="relative min-h-screen overflow-x-hidden pb-20 pt-44">
        <div className="absolute inset-0 z-0 h-[600px] bg-gradient-to-b from-slate-900 via-slate-800 to-transparent opacity-10" />
        <div className="absolute top-0 left-0 right-0 z-0 h-44 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none" />
        <ParticleBackground />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full bg-blue-600/10 px-6 py-2.5 text-xs font-black text-blue-700 ring-1 ring-inset ring-blue-600/30 uppercase tracking-[0.2em] backdrop-blur-md shadow-xl shadow-blue-500/10"
            >
              <Sparkles size={16} className="animate-pulse" />
              Research Impact Intelligence
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-6xl font-black tracking-tighter sm:text-8xl text-slate-900"
            >
              ALVA&apos;S <span className="text-blue-600">IMPACT</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl text-xl text-slate-500 font-bold leading-relaxed"
            >
              Analyzing Institutional database metrics to highlight global
              innovation through Peer-reviewed excellence.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                label: "Publications",
                value: stats.total,
                icon: BookOpen,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Global Citations",
                value: stats.citations,
                icon: Trophy,
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                label: "Elite Faculty",
                value: stats.faculty,
                icon: Users,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "Active Researchers",
                value: stats.researchers,
                icon: Users,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[2.5rem] border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div
                  className={`mb-4 inline-flex rounded-2xl ${stat.bg} ${stat.color} p-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-black text-slate-800 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">
                  {stat.label}
                </div>
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
                selectedDept={selectedDept}
                setSelectedDept={setSelectedDept}
                selectedFaculty={selectedFaculty}
                setSelectedFaculty={setSelectedFaculty}
                publicationType={publicationType}
                setPublicationType={setPublicationType}
                sortBy={sortBy}
                setSortBy={setSortBy}
                yearRange={yearRange}
                setYearRange={setYearRange}
                citationRange={citationRange}
                setCitationRange={setCitationRange}
                impactLevel={impactLevel}
                setImpactLevel={setImpactLevel}
                departments={departments}
                faculties={faculties}
                publicationTypes={publicationTypes}
              />

              {/* Grid */}
              <motion.div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <ResearchCard key={item.id} item={item} />
                    ))
                  ) : (
                    <div className="col-span-full py-32 text-center">
                      <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">
                        Zero Correlation Found
                      </div>
                      <p className="text-slate-400 font-bold mt-2">
                        Adjust your filters to discover more research
                      </p>
                      <button
                        onClick={() => {
                          setSearch("");
                          setSelectedDept("All");
                          setSelectedFaculty("All");
                          setPublicationType("All");
                          setYearRange("All");
                          setCitationRange("All");
                          setImpactLevel("All");
                        }}
                        className="mt-6 px-8 py-3 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                      >
                        Reset Strategy
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Load More */}
              {visibleCount < filteredData.length && (
                <div className="mt-20 flex justify-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                    className="group relative px-12 py-4 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 active:scale-95 overflow-hidden"
                  >
                    <span className="relative z-10">
                      Expand Intelligence Layer
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
