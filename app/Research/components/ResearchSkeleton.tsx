"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Database, ShieldCheck, Zap } from "lucide-react";

const LOG_MESSAGES = [
    "Initializing Research Connection...",
    "Scanning Alva's Central Database...",
    "Analyzing 500+ Metadata Points...",
    "Cross-referencing Global Citations...",
    "Generating Impact Analytics...",
    "Optimizing Visualization Matrix...",
    "Finalizing Research Insights..."
];

export default function ResearchSkeleton() {
    const [currentLog, setCurrentLog] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLog((prev) => (prev + 1) % LOG_MESSAGES.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-8 animate-pulse">
            {/* System Status Log */}
            <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-500/5 transition-opacity duration-300 opacity-50" />
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                            <Database size={24} className="animate-pulse" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                                <span className="text-xs font-black uppercase tracking-widest text-blue-400/80">Real-time Analysis</span>
                            </div>
                            <div className="text-xl font-black text-white font-mono lowercase">
                                {LOG_MESSAGES[currentLog]}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Zap size={14} />
                            <span className="text-[10px] font-bold uppercase">Turbo Mode</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <ShieldCheck size={14} />
                            <span className="text-[10px] font-bold uppercase">SECURED</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Skeleton */}
            <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-slate-200 p-10 h-[450px] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <div className="h-8 w-48 bg-slate-100 rounded-xl" />
                    <div className="flex gap-2">
                        <div className="h-10 w-24 bg-slate-50 rounded-xl" />
                        <div className="h-10 w-24 bg-slate-50 rounded-xl" />
                    </div>
                </div>
                <div className="flex items-end justify-between h-[280px] gap-6 px-4">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex-1 bg-blue-50/50 rounded-2xl border border-blue-100/30" style={{ height: `${30 + Math.random() * 60}%` }} />
                    ))}
                </div>
            </div>

            {/* Filter Skeleton */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-y border-slate-100">
                <div className="h-14 w-full max-w-2xl bg-slate-50 rounded-[2rem]" />
                <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-12 w-32 bg-slate-50 rounded-2xl" />
                    ))}
                </div>
            </div>

            {/* Card Grid Skeleton */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-100 p-8 space-y-6 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-2">
                                <div className="h-6 w-24 bg-slate-50 rounded-full" />
                                <div className="h-6 w-12 bg-slate-50 rounded-full" />
                            </div>
                            <div className="h-10 w-10 bg-slate-50 rounded-xl" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-8 w-full bg-slate-100 rounded-lg" />
                            <div className="h-8 w-3/4 bg-slate-100 rounded-lg" />
                        </div>
                        <div className="h-20 w-full bg-slate-50 rounded-xl" />
                        <div className="pt-6 border-t border-slate-50 flex items-center gap-3">
                            <div className="h-10 w-10 bg-slate-100 rounded-full" />
                            <div className="h-6 w-32 bg-slate-50 rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
