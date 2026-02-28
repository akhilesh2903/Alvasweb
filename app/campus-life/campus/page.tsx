"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { id: "college",    label: "College"           },
  { id: "hostel",     label: "Hostel"            },
  { id: "cultural",   label: "Cultural"          },
  { id: "transport",  label: "Transportation"    },
  { id: "library",    label: "Library"           },
  { id: "auditorium", label: "Auditorium"        },
  { id: "seminar",    label: "Seminar Hall"      },
  { id: "gym",        label: "Gym"               },
];

export default function CampusPage() {
  const [active, setActive] = useState("college");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToBody = () =>
    document.querySelector(".cp-page-body")?.scrollIntoView({ behavior: "smooth" });

  /* ────────── Flowing-wave canvas animation ────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number, animId: number, t = 0;

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    /* Teal/indigo floating bubbles */
    class Bubble {
      x: number; y: number; vy: number;
      r: number; alpha: number;
      constructor() {
        this.x = Math.random() * (typeof W !== "undefined" ? W : 1440);
        this.y = (typeof H !== "undefined" ? H : 900) + Math.random() * 200;
        this.r = Math.random() * 14 + 5;
        this.vy = -(Math.random() * 0.18 + 0.04);
        this.alpha = Math.random() * 0.07 + 0.02;
      }
      update() {
        this.y += this.vy;
        this.x += Math.sin(t * 0.003 + this.y * 0.01) * 0.18;
        if (this.y + this.r < 0) {
          this.y = H + this.r;
          this.x = Math.random() * W;
        }
      }
      draw() {
        const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        grd.addColorStop(0, `rgba(56,189,248,${this.alpha * 2})`);
        grd.addColorStop(1, `rgba(99,102,241,${this.alpha})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    }

    const bubbles: Bubble[] = Array.from({ length: 28 }, () => new Bubble());

    /* Flowing sine waves */
    function drawWaves() {
      const waves = [
        { amp: 40, freq: 0.0035, speed: 0.18, color: "rgba(56,189,248,0.03)", y: H * 0.55 },
        { amp: 30, freq: 0.005,  speed: 0.25, color: "rgba(99,102,241,0.025)", y: H * 0.65 },
        { amp: 50, freq: 0.003,  speed: 0.12, color: "rgba(20,184,166,0.02)", y: H * 0.75 },
      ];
      waves.forEach(w => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y = w.y + Math.sin(x * w.freq + t * w.speed * 0.05) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = w.color;
        ctx.fill();
      });
    }

    /* Connection mesh between nearby bubbles */
    function drawMesh() {
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x;
          const dy = bubbles[i].y - bubbles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            const a = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.moveTo(bubbles[i].x, bubbles[i].y);
            ctx.lineTo(bubbles[j].x, bubbles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${a * 0.4})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      t++;
      ctx.clearRect(0, 0, W, H);
      drawWaves();
      bubbles.forEach(b => { b.update(); b.draw(); });
      drawMesh();
      animId = requestAnimationFrame(animate);
    }
    animate();

    /* Hero parallax */
    const hero = document.querySelector<HTMLElement>(".cp-hero");
    const onScroll = () => {
      if (hero) hero.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Hero floating particles — injected client-side only to avoid hydration mismatch */
    const particleContainer = document.getElementById("cpHeroParticles");
    if (particleContainer) {
      for (let i = 0; i < 28; i++) {
        const s = document.createElement("span");
        const sz = Math.random() * 5 + 2;
        s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;bottom:${Math.random() * 25}%;animation-duration:${6 + Math.random() * 9}s;animation-delay:${-Math.random() * 12}s;opacity:${0.25 + Math.random() * 0.5};`;
        particleContainer.appendChild(s);
      }
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal:   #0ea5e9;
          --indigo: #6366f1;
          --emerald:#10b981;
          --dark:   #0a0f1e;
          --mid:    #0f172a;
          --light:  #f0f9ff;
          --muted:  #64748b;
          --border: #cbd5e1;
          --gold:   #f59e0b;
        }

        .cp-page {
          font-family: 'DM Sans', sans-serif;
          background: var(--light);
          color: var(--dark);
          overflow-x: hidden;
        }

        /* ── Canvas ── */
        .cp-bg-canvas {
          position: fixed; inset: 0;
          z-index: 0; pointer-events: none; opacity: 0.35;
        }

        /* ── Floating aurora orbs ── */
        .cp-orb {
          position: fixed; border-radius: 50%;
          filter: blur(90px); pointer-events: none; z-index: 0;
          animation: cpOrbFloat linear infinite;
        }
        .cp-orb1 { width:500px;height:500px;background:radial-gradient(circle,rgba(14,165,233,.06),transparent 70%);top:20%;left:-120px;animation-duration:40s; }
        .cp-orb2 { width:380px;height:380px;background:radial-gradient(circle,rgba(99,102,241,.05),transparent 70%);top:55%;right:-90px;animation-duration:52s;animation-delay:-10s; }
        .cp-orb3 { width:300px;height:300px;background:radial-gradient(circle,rgba(16,185,129,.04),transparent 70%);top:5%;right:20%;animation-duration:36s;animation-delay:-5s; }
        .cp-orb4 { width:240px;height:240px;background:radial-gradient(circle,rgba(245,158,11,.03),transparent 70%);bottom:10%;left:30%;animation-duration:46s;animation-delay:-12s; }

        @keyframes cpOrbFloat {
          0%   { transform: translateY(0)   scale(1); }
          33%  { transform: translateY(-45px) scale(1.06); }
          66%  { transform: translateY(22px) scale(0.96); }
          100% { transform: translateY(0)   scale(1); }
        }

        .cp-hero, .cp-page-body { position: relative; z-index: 1; }

        /* ── HERO ── */
        .cp-hero {
          position: relative; height: 540px;
          background: url('/DJI_0135.jpg') center/cover no-repeat;
          display: flex; align-items: flex-end; overflow: hidden;
        }
        .cp-hero::before {
          content:''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(10,15,30,.3) 0%, rgba(10,15,30,.82) 100%);
        }
        /* Shimmer sweep — teal-tinted */
        .cp-hero::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(110deg, transparent 38%, rgba(14,165,233,.08) 50%, transparent 62%);
          background-size: 200% 100%;
          animation: cpShimmer 7s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes cpShimmer {
          0%,100% { background-position: -100% 0; }
          50%     { background-position: 200% 0; }
        }

        /* Floating hero particles */
        .cp-hero-particles { position:absolute;inset:0;pointer-events:none;overflow:hidden; }
        .cp-hero-particles span {
          position:absolute; border-radius:50%;
          background: rgba(14,165,233,.55);
          animation: cpParticle linear infinite;
        }
        @keyframes cpParticle {
          0%   { transform:translateY(100%) rotate(0deg); opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:.5; }
          100% { transform:translateY(-220px) rotate(360deg); opacity:0; }
        }

        .cp-hero-badge {
          position:absolute; top:40px; left:48px;
          background:rgba(14,165,233,.15); backdrop-filter:blur(8px);
          border:1px solid rgba(14,165,233,.35); color:#fff;
          font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase;
          padding:6px 16px; border-radius:999px; display:flex; align-items:center; gap:8px;
        }
        .cp-hero-badge span { width:7px;height:7px;background:var(--teal);border-radius:50%;display:block;
          animation: badgePulse 2s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%,100% { box-shadow:0 0 0 0 rgba(14,165,233,.6); }
          50%     { box-shadow:0 0 0 6px rgba(14,165,233,0); }
        }

        .cp-breadcrumb {
          position:absolute; top:44px; right:48px;
          color:rgba(255,255,255,.65); font-size:13px;
          display:flex; align-items:center; gap:8px;
        }
        .cp-breadcrumb a { color:rgba(255,255,255,.65); text-decoration:none; }
        .cp-breadcrumb a:hover { color:#fff; }
        .cp-breadcrumb-sep { opacity:.5; }

        .cp-hero-content {
          position:relative; z-index:1; padding:0 48px 56px; max-width:720px;
          animation: cpHeroEnter .9s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes cpHeroEnter {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .cp-hero-tag { display:flex; align-items:center; gap:12px; margin-bottom:18px; }
        .cp-tag-main {
          background: linear-gradient(135deg, var(--teal), var(--indigo));
          color:#fff; font-size:11px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:5px 14px; border-radius:6px;
        }
        .cp-tag-dot { width:6px;height:6px;background:var(--gold);border-radius:50%; }
        .cp-tag-sub { color:rgba(255,255,255,.8); font-size:12px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; }

        .cp-hero h1 {
          font-family:'Bebas Neue', sans-serif;
          font-size: clamp(54px, 9vw, 88px);
          color:#fff; line-height:.92; letter-spacing:2px; margin-bottom:18px;
          text-shadow: 0 0 80px rgba(14,165,233,.4);
        }
        .cp-hero p {
          color:rgba(255,255,255,.75); font-size:16px; font-weight:300;
          max-width:440px; line-height:1.65; margin-bottom:30px;
        }
        .cp-btn-explore {
          display:inline-flex; align-items:center; gap:10px;
          background: linear-gradient(135deg, var(--teal), var(--indigo));
          color:#fff; font-size:12px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:14px 30px; border-radius:8px; border:none; cursor:pointer;
          transition: transform .2s, box-shadow .2s;
          box-shadow: 0 4px 24px rgba(14,165,233,.4);
        }
        .cp-btn-explore:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(14,165,233,.55);
        }
        .cp-btn-explore svg { width:14px; fill:currentColor; }

        /* ── LAYOUT ── */
        .cp-page-body {
          display:grid;
          grid-template-columns: 290px 1fr;
          min-height: calc(100vh - 540px);
        }

        /* ── SIDEBAR ── */
        .cp-sidebar {
          background: #f8fbff;
          border-right: 1px solid var(--border);
          padding: 40px 28px;
          position: sticky; top: 0;
          height: fit-content; overflow: hidden;
        }
        .cp-sidebar::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background: linear-gradient(90deg, var(--teal), var(--indigo), var(--emerald), var(--teal));
          background-size: 300% 100%;
          animation: cpAccent 10s linear infinite;
        }
        @keyframes cpAccent {
          0%   { background-position: 0% 0; }
          100% { background-position: 300% 0; }
        }


        .cp-sidebar-label { font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .cp-sidebar-title {
          font-family:'DM Serif Display',serif; font-size:22px; color:var(--dark);
          margin-bottom:20px; padding-bottom:18px; border-bottom:1.5px solid var(--border);
        }

        .cp-nav-item {
          display:flex; align-items:center; gap:10px;
          padding:11px 16px; border-radius:8px; cursor:pointer;
          font-size:14px; font-weight:500; color:var(--dark);
          border-left:3px solid transparent;
          transition: all .2s; user-select:none; margin-bottom:2px;
        }
        .cp-nav-item:hover { background: #e0f2fe; }
        .cp-nav-item.active {
          background: linear-gradient(90deg, rgba(14,165,233,.12), rgba(99,102,241,.08));
          border-left-color: var(--teal);
          color: var(--teal); font-weight:600;
          box-shadow: 0 2px 10px rgba(14,165,233,.12);
        }
        .cp-nav-item svg { width:16px; flex-shrink:0; }
        .cp-nav-arrow { margin-left:auto; font-size:12px; opacity:.4; }

        .cp-sidebar-icon {
          width:56px; height:56px; background: linear-gradient(135deg, rgba(14,165,233,.15), rgba(99,102,241,.15));
          border-radius:50%; display:flex; align-items:center; justify-content:center;
          font-size:26px; margin:32px auto 8px;
          animation: cpIconPulse 3s ease-in-out infinite;
          border: 1px solid rgba(14,165,233,.25);
        }
        @keyframes cpIconPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(14,165,233,0); }
          50%     { box-shadow:0 0 0 12px rgba(14,165,233,.15); }
        }
        .cp-sidebar-pride { text-align:center; font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--muted); }

        /* ── CONTENT ── */
        .cp-content { padding:48px 56px; max-width:920px; }

        .cp-panel { display:none; animation: cpFadeIn .4s ease; }
        .cp-panel.active { display:block; }
        @keyframes cpFadeIn { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }

        /* Panel header */
        .cp-panel-header {
          display:flex; align-items:flex-start; gap:24px;
          margin-bottom:36px; padding-bottom:32px;
          border-bottom:1px solid var(--border);
        }
        .cp-icon-wrap {
          width:72px; height:72px; border-radius:18px;
          display:flex; align-items:center; justify-content:center;
          font-size:32px; flex-shrink:0;
        }
        .cp-icon-college   { background: linear-gradient(135deg, #0ea5e9, #0369a1); }
        .cp-icon-hostel    { background: linear-gradient(135deg, #10b981, #047857); }
        .cp-icon-cultural  { background: linear-gradient(135deg, #f59e0b, #b45309); }
        .cp-icon-transport { background: linear-gradient(135deg, #6366f1, #4338ca); }
        .cp-icon-library   { background: linear-gradient(135deg, #ec4899, #9d174d); }
        .cp-icon-auditorium{ background: linear-gradient(135deg, #8b5cf6, #5b21b6); }
        .cp-icon-seminar   { background: linear-gradient(135deg, #14b8a6, #0f766e); }

        .cp-title-group h2 {
          font-family:'DM Serif Display',serif; font-size:34px; color:var(--dark); margin-bottom:6px;
        }
        .cp-title-group .cp-subtitle { color:var(--muted); font-size:15px; font-weight:400; }

        /* Gradient tags per section */
        .cp-tag {
          display:inline-block; color:#fff;
          font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
          padding:4px 14px; border-radius:5px; margin-bottom:10px;
        }
        .cp-tag-college    { background: linear-gradient(135deg, #0ea5e9, #6366f1); }
        .cp-tag-hostel     { background: linear-gradient(135deg, #10b981, #0ea5e9); }
        .cp-tag-cultural   { background: linear-gradient(135deg, #f59e0b, #ef4444); }
        .cp-tag-transport  { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
        .cp-tag-library    { background: linear-gradient(135deg, #ec4899, #6366f1); }
        .cp-tag-auditorium { background: linear-gradient(135deg, #8b5cf6, #ec4899); }
        .cp-tag-seminar    { background: linear-gradient(135deg, #14b8a6, #6366f1); }

        .cp-desc { font-size:15px; line-height:1.78; color:#475569; margin-bottom:32px; }

        /* Feature cards */
        .cp-features {
          display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr));
          gap:16px; margin-bottom:40px;
        }
        .cp-card {
          background:#fff; border:1px solid var(--border); border-radius:14px;
          padding:22px; transition: all .3s; position:relative; overflow:hidden;
        }
        .cp-card::before {
          content:''; position:absolute; top:-60%; left:-60%;
          width:220%; height:220%;
          background: radial-gradient(circle at center, rgba(14,165,233,.07), transparent 55%);
          opacity:0; transition:opacity .4s;
        }
        .cp-card:hover::before { opacity:1; }
        .cp-card:hover {
          box-shadow: 0 10px 36px rgba(14,165,233,.14);
          border-color: rgba(14,165,233,.35);
          transform: translateY(-4px);
        }
        .cp-panel.active .cp-card:nth-child(1) { animation: cpCardIn .5s 0.05s both; }
        .cp-panel.active .cp-card:nth-child(2) { animation: cpCardIn .5s 0.15s both; }
        .cp-panel.active .cp-card:nth-child(3) { animation: cpCardIn .5s 0.25s both; }
        .cp-panel.active .cp-card:nth-child(4) { animation: cpCardIn .5s 0.35s both; }
        @keyframes cpCardIn {
          from { opacity:0; transform:translateY(22px) scale(.97); }
          to   { opacity:1; transform:translateY(0)   scale(1); }
        }
        .cp-fc-icon { font-size:28px; margin-bottom:12px; }
        .cp-card h4 { font-size:14px; font-weight:700; color:var(--dark); margin-bottom:8px; }
        .cp-card p  { font-size:13px; color:var(--muted); line-height:1.55; }

        /* Info strip */
        .cp-info-strip {
          display:flex; border-top:1px solid var(--border); border-bottom:1px solid var(--border);
          border-radius: 0 0 12px 12px; overflow: hidden;
          background: linear-gradient(90deg, rgba(14,165,233,.04), rgba(99,102,241,.04));
        }
        .cp-info-item {
          flex:1; padding:20px 16px; text-align:center;
          border-right:1px solid var(--border);
        }
        .cp-info-item:last-child { border-right:none; }
        .cp-info-label { font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--muted); margin-bottom:6px; }
        .cp-info-val   { font-size:16px; font-weight:700; color:var(--dark); }

        /* Responsive */
        @media (max-width: 900px) {
          .cp-page-body { grid-template-columns:1fr; }
          .cp-sidebar { position:static; }
          .cp-content { padding:28px 20px; }
          .cp-hero-content { padding:0 24px 44px; }
          .cp-hero-badge { left:24px; top:36px; }
          .cp-breadcrumb { right:24px; top:40px; }
          .cp-info-strip { flex-wrap:wrap; }
          .cp-info-item { min-width:50%; }
        }
      `}} />

      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <div className="cp-page">
        {/* Animated background */}
        <canvas ref={canvasRef} className="cp-bg-canvas" />
        <div className="cp-orb cp-orb1" />
        <div className="cp-orb cp-orb2" />
        <div className="cp-orb cp-orb3" />
        <div className="cp-orb cp-orb4" />

        {/* ── HERO ── */}
        <section className="cp-hero">
          <div className="cp-hero-particles" id="cpHeroParticles" />
          <div className="cp-hero-badge"><span /> Campus · Life</div>
          <div className="cp-breadcrumb">
            <a href="/">Home</a>
            <span className="cp-breadcrumb-sep">›</span>
            <a href="/campus-life">Campus Life</a>
            <span className="cp-breadcrumb-sep">›</span>
            <span style={{ color: "#fff" }}>Campus</span>
          </div>
          <div className="cp-hero-content">
            <div className="cp-hero-tag">
              <span className="cp-tag-main">Campus</span>
              <span className="cp-tag-dot" />
              <span className="cp-tag-sub">Life at Alva&apos;s</span>
            </div>
            <h1>CAMPUS<br />LIFE</h1>
            <p>
              Experience a vibrant, self-contained campus with world-class infrastructure — from
              sprawling lecture halls to cozy hostels, cultural arenas to modern libraries.
            </p>
            <button className="cp-btn-explore" onClick={scrollToBody}>
              <svg viewBox="0 0 10 10"><polygon points="0,0 10,5 0,10" /></svg>
              Explore Campus
            </button>
          </div>
        </section>

        {/* ── PAGE BODY ── */}
        <div className="cp-page-body">

          {/* SIDEBAR */}
          <aside className="cp-sidebar">
            <div className="cp-sidebar-label">Browse</div>
            <div className="cp-sidebar-title">Campus Spaces</div>

            <nav>
              {[
                { id:"college",    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 10h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3L2 10h20L12 3z"/></svg>, label:"College" },
                { id:"hostel",     icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>, label:"Hostel" },
                { id:"cultural",   icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>, label:"Cultural" },
                { id:"transport",  icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, label:"Transportation" },
                { id:"library",    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>, label:"Library" },
                { id:"auditorium", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, label:"Auditorium" },
                { id:"seminar",    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label:"Seminar Hall" },
                { id:"gym",        icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5h11M6.5 17.5h11M6 12h12M3 8.5V6a1 1 0 011-1h1a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1v-2.5M21 8.5V6a1 1 0 00-1-1h-1a1 1 0 00-1 1v12a1 1 0 001 1h1a1 1 0 001-1v-2.5"/></svg>, label:"Gym" },
              ].map(t => (
                <div
                  key={t.id}
                  className={`cp-nav-item ${active === t.id ? "active" : ""}`}
                  onClick={() => setActive(t.id)}
                >
                  {t.icon}
                  {t.label}
                  <span className="cp-nav-arrow">›</span>
                </div>
              ))}
            </nav>

            <div className="cp-sidebar-icon">🏛️</div>
            <div className="cp-sidebar-pride">Heart of Our Campus</div>
          </aside>

          {/* CONTENT */}
          <main className="cp-content">

            {/* ── COLLEGE ── */}
            <div className={`cp-panel ${active === "college" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-college">🏫</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-college">Academic · Infrastructure</span>
                  <h2>College Campus</h2>
                  <p className="cp-subtitle">A world-class academic ecosystem spread across 100+ acres</p>
                </div>
              </div>
              <p className="cp-desc">
                Alva&apos;s Institute of Engineering &amp; Technology stands as a landmark of academic excellence, nestled
                in the serene Western Ghats of Karnataka. The sprawling campus features state-of-the-art lecture halls,
                advanced research centres, open green spaces, and a vibrant student community — all designed to nurture
                holistic development and foster innovation.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">🏛️</div><h4>100+ Acre Green Campus</h4><p>Lush, eco-certified campus with rainwater harvesting and solar panels.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🔬</div><h4>Research Centres</h4><p>Dedicated R&amp;D labs for ECE, CSE, Mech, Civil and allied disciplines.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🏋️</div><h4>Sports Complex</h4><p>Indoor &amp; outdoor arenas including basketball, football, volleyball courts.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🍽️</div><h4>Food Courts &amp; Cafeteria</h4><p>Multi-cuisine dining facilities serving 2,000+ students daily.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Area</div><div className="cp-info-val">100+ Acres</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Students</div><div className="cp-info-val">4,000+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Departments</div><div className="cp-info-val">12</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Established</div><div className="cp-info-val">2001</div></div>
              </div>
            </div>

            {/* ── HOSTEL ── */}
            <div className={`cp-panel ${active === "hostel" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-hostel">🏨</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-hostel">Residential · Comfort</span>
                  <h2>Hostel Facilities</h2>
                  <p className="cp-subtitle">Safe, comfortable and community-driven student living</p>
                </div>
              </div>
              <p className="cp-desc">
                Our campus hostels provide a home away from home — spacious rooms, hygienic mess facilities, 24/7
                security, high-speed Wi-Fi, and dedicated study lounges. Separate, well-equipped blocks for men and
                women ensure safety and comfort, fostering a close-knit residential community that supports both academic
                focus and personal growth.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">🛏️</div><h4>1,500+ Beds</h4><p>Spacious single and double-sharing rooms with attached bathrooms.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">📶</div><h4>24/7 High-Speed Wi-Fi</h4><p>Fiber-optic internet with uninterrupted connectivity across all blocks.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🔐</div><h4>Smart Security</h4><p>CCTV surveillance, biometric access, and round-the-clock wardens.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">📚</div><h4>Study Lounges</h4><p>Quiet, air-conditioned reading rooms available 24 hours.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Capacity</div><div className="cp-info-val">1,500+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Blocks</div><div className="cp-info-val">6</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Mess Type</div><div className="cp-info-val">Vegetarian</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Security</div><div className="cp-info-val">24 × 7</div></div>
              </div>
            </div>

            {/* ── CULTURAL ── */}
            <div className={`cp-panel ${active === "cultural" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-cultural">🎭</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-cultural">Arts · Fests · Expression</span>
                  <h2>Cultural Life</h2>
                  <p className="cp-subtitle">Where creativity, tradition and talent come alive</p>
                </div>
              </div>
              <p className="cp-desc">
                AIET&apos;s vibrant cultural scene is the heartbeat of campus life. From the flagship annual cultural fest
                <em> Alvas Nudisiri</em> — one of Karnataka&apos;s largest — to classical dance academies, music groups,
                theatre clubs, and fine arts exhibitions, the college celebrates every dimension of human expression and
                cultural heritage.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">🎤</div><h4>Alvas Nudisiri Fest</h4><p>Karnataka&apos;s premier cultural extravaganza drawing 50,000+ participants.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">💃</div><h4>Dance Academy</h4><p>Classical &amp; folk dance training under renowned Bharatanatyam masters.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🎵</div><h4>Music &amp; Choir</h4><p>Carnatic, Hindustani and Western music clubs with professional coaches.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🎨</div><h4>Fine Arts Studio</h4><p>Dedicated space for painting, sculpture, pottery and digital art.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Clubs</div><div className="cp-info-val">20+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Annual Fests</div><div className="cp-info-val">4</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Participants</div><div className="cp-info-val">50,000+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Awards Won</div><div className="cp-info-val">200+</div></div>
              </div>
            </div>

            {/* ── TRANSPORTATION ── */}
            <div className={`cp-panel ${active === "transport" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-transport">🚌</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-transport">Connectivity · Fleet · Routes</span>
                  <h2>Transportation</h2>
                  <p className="cp-subtitle">Reliable, safe and wide-reaching transport network</p>
                </div>
              </div>
              <p className="cp-desc">
                AIET operates an extensive fleet of buses covering 80+ routes across Dakshina Kannada and Udupi
                districts, ensuring students from every corner of the region have seamless access to campus. All vehicles
                are GPS-tracked, fitted with CCTV, and maintained to the highest safety standards for comfortable,
                stress-free daily commutes.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">🚌</div><h4>80+ Bus Routes</h4><p>Coverage across Mangaluru, Udupi, Kundapur and surrounding taluks.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">📍</div><h4>GPS Tracking</h4><p>Real-time bus location tracking via student mobile app.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🛡️</div><h4>CCTV & Safety</h4><p>All buses equipped with cameras and trained safety marshals.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">♿</div><h4>Accessible Fleet</h4><p>Wheelchair-accessible vehicles and special-needs support on request.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Buses</div><div className="cp-info-val">120+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Routes</div><div className="cp-info-val">80+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">GPS Enabled</div><div className="cp-info-val">100%</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Coverage</div><div className="cp-info-val">150 km radius</div></div>
              </div>
            </div>

            {/* ── LIBRARY ── */}
            <div className={`cp-panel ${active === "library" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-library">📚</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-library">Knowledge · Research · Digital</span>
                  <h2>Central Library</h2>
                  <p className="cp-subtitle">A knowledge oasis with 100,000+ volumes and digital resources</p>
                </div>
              </div>
              <p className="cp-desc">
                The Central Library at AIET is a state-of-the-art knowledge hub housing over 1,00,000 books,
                international journals, e-books, and digital databases. With a serene reading environment, high-speed
                internet, and a dedicated Digital Resource Centre, it supports deep research and self-directed learning
                across all disciplines.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">📖</div><h4>1,00,000+ Books</h4><p>Curated collection spanning engineering, management and humanities.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">💻</div><h4>Digital Resource Centre</h4><p>Access to IEEE, Elsevier, Springer, and 20+ global journal databases.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🤫</div><h4>Silent Reading Hall</h4><p>300-seat air-conditioned reading hall open from 8 AM to 9 PM.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🔎</div><h4>RFID Cataloguing</h4><p>Fully automated RFID-based book tracking and self-issue counters.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Volumes</div><div className="cp-info-val">1,00,000+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Journals</div><div className="cp-info-val">250+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Seating</div><div className="cp-info-val">300</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Open</div><div className="cp-info-val">8 AM – 9 PM</div></div>
              </div>

              {/* ── Chief Librarian Profile ── */}
              <div style={{
                marginTop: "32px",
                background: "linear-gradient(135deg, #e6fdf5 0%, #f0fdf9 100%)",
                border: "1px solid #a7f3d0",
                borderRadius: "16px",
                padding: "28px 32px",
                display: "flex",
                alignItems: "center",
                gap: "28px",
                flexWrap: "wrap",
              }}>
                {/* Photo */}
                <div style={{
                  width: "100px", height: "100px", borderRadius: "50%",
                  overflow: "hidden", flexShrink: 0,
                  border: "3px solid #10b981",
                  boxShadow: "0 4px 18px rgba(16,185,129,0.25)",
                }}>
                  <img
                    src="/punith.png"
                    alt="Puneeth Kumar – Chief Librarian"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Name & Designation */}
                <div style={{ minWidth: "160px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#6b7280", marginBottom: "4px" }}>Chief Librarian</p>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#065f46", marginBottom: "6px", fontFamily: "DM Serif Display, serif" }}>Puneeth Kumar</h3>
                  <div style={{ width: "40px", height: "2px", background: "#10b981", borderRadius: "2px", marginBottom: "10px" }} />
                  <p style={{ fontSize: "13px", color: "#374151" }}><span style={{ fontWeight: 600 }}>Qualification :</span> M.L.I.Sc</p>
                </div>

                {/* Divider */}
                <div style={{ width: "1px", height: "90px", background: "#6ee7b7", flexShrink: 0 }} />

                {/* Contact */}
                <div style={{ minWidth: "200px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#10b981", marginBottom: "12px" }}>Contact Details</p>
                  <p style={{ fontSize: "13px", color: "#374151", marginBottom: "6px" }}><span style={{ fontWeight: 600 }}>Phone Number :</span> +9164645879</p>
                  <p style={{ fontSize: "13px", color: "#374151", marginBottom: "6px" }}><span style={{ fontWeight: 600 }}>Telephone :</span> 08258262724</p>
                  <p style={{ fontSize: "13px", color: "#374151", marginBottom: "4px" }}><span style={{ fontWeight: 600 }}>Email :</span> aietlib@gmail.com</p>
                  <p style={{ fontSize: "13px", color: "#374151" }}>info@aiet.org.in</p>
                </div>

                {/* Divider */}
                <div style={{ width: "1px", height: "90px", background: "#6ee7b7", flexShrink: 0 }} />

                {/* Working Hours */}
                <div style={{ minWidth: "220px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#10b981", marginBottom: "12px" }}>Working Hours</p>
                  <p style={{ fontSize: "13px", color: "#374151", marginBottom: "8px" }}><span style={{ fontWeight: 600 }}>On Working day :</span> 8.30am to 11.00pm</p>
                  <p style={{ fontSize: "13px", color: "#374151" }}><span style={{ fontWeight: 600 }}>on Sunday/Holidays :</span> 9.00am to 1.00pm</p>
                </div>
              </div>
            </div>


            {/* ── AUDITORIUM ── */}
            <div className={`cp-panel ${active === "auditorium" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-auditorium">🎬</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-auditorium">Events · Stage · Community</span>
                  <h2>Auditorium</h2>
                  <p className="cp-subtitle">A grand stage for performances, convocations and events</p>
                </div>
              </div>
              <p className="cp-desc">
                The AIET Main Auditorium is a 1,500-seat architectural marvel equipped with professional-grade acoustic
                panels, LED stage lighting, 4K projection systems, and a concert-quality sound setup. It serves as the
                venue for convocations, cultural galas, national conferences, and distinguished guest lectures,
                providing an unforgettable experience for performers and audiences alike.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">🪑</div><h4>1,500 Seat Capacity</h4><p>Tiered seating with unobstructed sightlines and wheelchair zones.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🔊</div><h4>Dolby Sound System</h4><p>32-channel professional mixer with surround-sound speaker arrays.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">💡</div><h4>LED Stage Lighting</h4><p>Programmable moving head lights and coloured LED grid for productions.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">📺</div><h4>4K Projection</h4><p>Twin 4K laser projectors with 20-foot screens for large-format display.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Capacity</div><div className="cp-info-val">1,500</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Stage Area</div><div className="cp-info-val">3,000 sq ft</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Events/Year</div><div className="cp-info-val">50+</div></div>
                <div className="cp-info-item"><div className="cp-info-label">AC &amp; AV</div><div className="cp-info-val">Full Kit</div></div>
              </div>
            </div>

            {/* ── SEMINAR HALL ── */}
            <div className={`cp-panel ${active === "seminar" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap cp-icon-seminar">🖥️</div>
                <div className="cp-title-group">
                  <span className="cp-tag cp-tag-seminar">Conferences · Workshops · Learning</span>
                  <h2>Seminar Hall</h2>
                  <p className="cp-subtitle">Smart conference spaces for workshops, talks and symposia</p>
                </div>
              </div>
              <p className="cp-desc">
                AIET&apos;s multiple seminar halls are purpose-built venues for academic conferences, expert lectures,
                student workshops, and department symposia. Each hall is fitted with interactive smart boards, video
                conferencing systems, and ergonomic seating — enabling seamless hybrid learning experiences and fostering
                industry–academia collaboration.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">📊</div><h4>Smart Boards</h4><p>65-inch 4K interactive displays with multi-touch annotation tools.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🌐</div><h4>Video Conferencing</h4><p>Cisco WebEx &amp; Zoom-enabled systems for global expert lectures.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🎙️</div><h4>PA &amp; Recording</h4><p>Wireless lavalier mics and session recording for knowledge archive.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">❄️</div><h4>Climate Controlled</h4><p>Central AC with individually controlled zones for 8–10 hour sessions.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Halls</div><div className="cp-info-val">8</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Capacity Each</div><div className="cp-info-val">100–200</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Smart AV</div><div className="cp-info-val">All Halls</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Events/Year</div><div className="cp-info-val">120+</div></div>
              </div>
            </div>

            {/* ── GYM ── */}
            <div className={`cp-panel ${active === "gym" ? "active" : ""}`}>
              <div className="cp-panel-header">
                <div className="cp-icon-wrap" style={{ background: "linear-gradient(135deg,#fde68a,#f59e0b)" }}>🏋️</div>
                <div className="cp-title-group">
                  <span className="cp-tag" style={{ background: "#fff7ed", color: "#b45309" }}>Fitness · Wellness · Strength</span>
                  <h2>Gymnasium</h2>
                  <p className="cp-subtitle">A fully equipped fitness centre for students and staff</p>
                </div>
              </div>
              <p className="cp-desc">
                The AIET Gymnasium is a modern, well-equipped fitness centre designed to promote physical wellness and
                a healthy lifestyle among students and faculty. Spread across a spacious area, the gym features
                professional-grade cardio machines, strength training equipment, and dedicated zones for yoga and
                stretching — all supervised by qualified fitness instructors.
              </p>
              <div className="cp-features">
                <div className="cp-card"><div className="cp-fc-icon">🏃</div><h4>Cardio Zone</h4><p>Treadmills, ellipticals, stationary bikes and rowing machines for high-energy workouts.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">💪</div><h4>Strength Training</h4><p>Free weights, barbells, squat racks and multi-station resistance machines.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">🧘</div><h4>Yoga & Wellness</h4><p>Dedicated mat area for yoga, stretching and mindfulness sessions with trained instructors.</p></div>
                <div className="cp-card"><div className="cp-fc-icon">👟</div><h4>Qualified Trainers</h4><p>Certified fitness coaches available to guide personalised workout and nutrition plans.</p></div>
              </div>
              <div className="cp-info-strip">
                <div className="cp-info-item"><div className="cp-info-label">Equipment</div><div className="cp-info-val">50+ Units</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Area</div><div className="cp-info-val">3,000 sq ft</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Timings</div><div className="cp-info-val">6 AM – 8 PM</div></div>
                <div className="cp-info-item"><div className="cp-info-label">Trainers</div><div className="cp-info-val">Certified</div></div>
              </div>

              {/* Gym Photos */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "28px" }}>
                <div style={{ borderRadius: "14px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}>
                  <img
                    src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/11/AE-28-200x200.jpg"
                    alt="AIET Gymnasium 1"
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ borderRadius: "14px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}>
                  <img
                    src="https://cdn-ilckkap.nitrocdn.com/rMNIGAqtniUxPuOnJDQbsPYclpYTbDLa/assets/images/optimized/rev-b79922c/www.aiet.org.in/wp-content/uploads/2019/11/AE-29-200x200.jpg"
                    alt="AIET Gymnasium 2"
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
