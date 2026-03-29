"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { ResearchItem } from "../utils/dataUtils";

interface ResearchCardProps {
    item: ResearchItem;
}

export default function ResearchCard({ item }: ResearchCardProps) {
    const isStudent = item.authors.toLowerCase().includes("student");
    const cites = item.citations || 0;

    const impact = cites > 20 ? "High" : cites > 5 ? "Medium" : "Emerging";
    const impactColor = cites > 20 ? "bg-amber-100 text-amber-700" : cites > 5 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/80 backdrop-blur-xl p-10 shadow-sm transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="flex flex-wrap gap-2">
                        <span className={`rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${isStudent ? "bg-purple-100 text-purple-700" : "bg-emerald-100 text-emerald-700"}`}>
                            {isStudent ? "Student Pioneer" : "Faculty Expert"}
                        </span>
                        <span className={`rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${impactColor}`}>
                            {impact} Impact
                        </span>
                        <span className="rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                            {item.year}
                        </span>
                    </div>
                </div>

                <h3 className="mb-4 line-clamp-2 text-2xl font-black leading-[1.1] tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>

                <p className="mb-8 line-clamp-3 text-sm font-bold leading-relaxed text-slate-400">
                    {item.description}
                </p>

                <div className="mt-auto flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-black text-white shadow-lg shadow-blue-500/20">
                            {item.authors[0]}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black text-slate-800 line-clamp-1">{item.authors}</span>
                            <span className="text-[11px] font-black uppercase tracking-wider text-blue-500/60">{item.category}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 items-center gap-2 rounded-xl bg-slate-50 px-4">
                                <Quote size={14} className="text-blue-600 fill-blue-600/10" />
                                <span className="text-xs font-black text-slate-700">{item.citations} Citations</span>
                            </div>
                        </div>

                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition-all hover:bg-blue-600 hover:scale-110 active:scale-95"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
