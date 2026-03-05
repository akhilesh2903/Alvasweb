"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";

interface FloatingDriveCardProps {
    title: string;
    description: string;
    fillLevel: number; // 0–100
    icon: React.ReactNode;
    accentColor: string;
    color?: string;
    id?: string;
}

export default function FloatingDriveCard({
    title,
    description,
    fillLevel,
    icon,
    accentColor,
}: FloatingDriveCardProps) {
    const [hovered, setHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    /* ── 3D Tilt on mouse move ── */
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        rawX.set((e.clientX - rect.left) / rect.width - 0.5);
        rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        rawX.set(0);
        rawY.set(0);
        setHovered(false);
    };

    return (
        <div style={{ perspective: "800px" }}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative h-[460px] w-full cursor-pointer select-none"
            >
                {/* ── Glowing border ring ── */}
                <motion.div
                    className="absolute -inset-[2px] rounded-[2.5rem] z-0"
                    animate={{
                        background: hovered
                            ? [`conic-gradient(from 0deg, ${accentColor}, #6366f1, #1E2A78, ${accentColor})`,
                            `conic-gradient(from 360deg, ${accentColor}, #6366f1, #1E2A78, ${accentColor})`]
                            : `conic-gradient(from 0deg, transparent, transparent)`,
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* ── Card body ── */}
                <div className="absolute inset-[2px] z-10 rounded-[2.4rem] overflow-hidden bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                    {/* Water fill */}
                    <motion.div
                        className="absolute inset-x-0 bottom-0 z-0"
                        initial={{ height: "12%" }}
                        animate={{ height: hovered ? `${fillLevel}%` : "12%" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ backgroundColor: `${accentColor}18` }}
                    >
                        {/* Wave SVG */}
                        <motion.svg
                            viewBox="0 0 200 20"
                            preserveAspectRatio="none"
                            className="absolute -top-5 left-0 w-[200%] h-6"
                            style={{ fill: `${accentColor}30` }}
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        >
                            <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 V20 H0Z" />
                        </motion.svg>
                        {/* Second wave offset */}
                        <motion.svg
                            viewBox="0 0 200 20"
                            preserveAspectRatio="none"
                            className="absolute -top-3 left-0 w-[200%] h-4"
                            style={{ fill: `${accentColor}20` }}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                        >
                            <path d="M0 10 Q25 20 50 10 T100 10 T150 10 T200 10 V20 H0Z" />
                        </motion.svg>
                    </motion.div>

                    {/* Floating orb decoration */}
                    <motion.div
                        className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-20"
                        style={{ backgroundColor: accentColor }}
                        animate={hovered ? { scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-10"
                        style={{ backgroundColor: accentColor }}
                        animate={hovered ? { scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] } : {}}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full p-10">
                        {/* Icon badge */}
                        <motion.div
                            className="mb-6 flex w-16 h-16 items-center justify-center rounded-2xl shadow-lg"
                            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                            animate={hovered ? { scale: 1.15, rotate: [0, -6, 6, 0] } : { scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            {icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-3xl font-black tracking-tighter text-[#1E2A78] leading-none mb-3">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-[0.95rem] font-semibold leading-relaxed text-slate-400 group-hover:text-slate-600 flex-1">
                            {description}
                        </p>

                        {/* Stats row */}
                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                            <div>
                                <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                                    Success Rate
                                </span>
                                <motion.span
                                    className="text-3xl font-black tracking-tighter"
                                    style={{ color: accentColor }}
                                    animate={hovered ? { scale: [1, 1.15, 1] } : {}}
                                    transition={{ duration: 0.4 }}
                                >
                                    {fillLevel}%
                                </motion.span>
                            </div>

                            {/* Progress arc */}
                            <svg width="56" height="56" viewBox="0 0 56 56">
                                <circle cx="28" cy="28" r="22" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                                <motion.circle
                                    cx="28" cy="28" r="22"
                                    fill="none"
                                    stroke={accentColor}
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 22}`}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                                    animate={{ strokeDashoffset: hovered ? 2 * Math.PI * 22 * (1 - fillLevel / 100) : 2 * Math.PI * 22 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    style={{ transform: "rotate(-90deg)", transformOrigin: "28px 28px" }}
                                />
                                <text x="28" y="32" textAnchor="middle" fontSize="10" fontWeight="900" fill={accentColor}>
                                    {fillLevel}
                                </text>
                            </svg>
                        </div>

                        {/* Animated CTA arrow */}
                        <motion.div
                            className="absolute bottom-8 right-8 w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: accentColor }}
                            animate={hovered ? { x: [0, 4, 0], scale: 1.1 } : { scale: 1 }}
                            transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* ── Floating particles inside card ── */}
                {hovered && Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full pointer-events-none z-20"
                        style={{
                            left: `${15 + i * 14}%`,
                            bottom: "20%",
                            backgroundColor: accentColor,
                        }}
                        initial={{ y: 0, opacity: 0.8 }}
                        animate={{ y: -80 - i * 20, opacity: 0 }}
                        transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
