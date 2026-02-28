"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "academics",    label: "Academics & Infrastructure" },
  { id: "hostel",       label: "Hostel & Dining"            },
  { id: "sports",       label: "Sports & Fitness"           },
  { id: "clubs",        label: "Clubs & Culture"            },
];

/* ── Simple Toast ── */
function Toast({ message, icon, visible }: { message: string; icon: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 9999,
      background: "#fff", borderRadius: 14, padding: "14px 24px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.15)", display: "flex",
      alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600,
      animation: "exFadeIn .35s ease",
    }}>
      <span>{icon}</span> {message}
    </div>
  );
}

/* ── X close icon ── */
function X({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const MODAL_CONFIGS: Record<string, { title: string; desc: string; placeholder: string }> = {
  placements: {
    title: "Explore Placements",
    desc: "Fill in your details and we'll get back to you.",
    placeholder: "Branch / Department",
  },
};

export default function ExplorePage() {
  const [active, setActive] = useState<string>("academics");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Modal & Toast state ── */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("placements");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", extra: "" });
  const [toast, setToast] = useState({ message: "", icon: "", visible: false });

  const modalConfig = MODAL_CONFIGS[modalType] || MODAL_CONFIGS.placements;

  const openModal = (type: string) => {
    setModalType(type);
    setFormData({ name: "", email: "", phone: "", extra: "" });
    setIsModalOpen(true);
  };

  const submitModal = () => {
    setIsModalOpen(false);
    setToast({ message: "Submitted successfully!", icon: "✅", visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  };

  /* ── Hero scrollIntoView ── */
  const handleExplore = () => {
    document.querySelector(".page-body")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Canvas animation — Aurora Waves + Floating Particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number;
    let animId: number;
    let t = 0;

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    /* Floating particles */
    interface Particle {
      x: number; y: number; r: number;
      speed: number; drift: number;
      alpha: number; phase: number;
    }
    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.8,
      speed: Math.random() * 0.4 + 0.15,
      drift: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.45 + 0.1,
      phase: Math.random() * Math.PI * 2,
    }));

    function animate() {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      /* ── Aurora wave layers ── */
      const waveConfigs = [
        { baseY: 0.20, amp: 60, freq: 0.004, spd: 0.8, r: 45, g: 120, b: 180, a: 0.04 },
        { baseY: 0.35, amp: 80, freq: 0.003, spd: 0.6, r: 192, g: 0,   b: 29,  a: 0.035 },
        { baseY: 0.50, amp: 50, freq: 0.005, spd: 1.0, r: 212, g: 160, b: 23,  a: 0.03 },
        { baseY: 0.65, amp: 70, freq: 0.0035,spd: 0.7, r: 120, g: 50,  b: 180, a: 0.025 },
        { baseY: 0.80, amp: 40, freq: 0.006, spd: 0.9, r: 192, g: 0,   b: 29,  a: 0.02 },
      ];

      waveConfigs.forEach((w) => {
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 3) {
          const y =
            H * w.baseY +
            Math.sin(x * w.freq + t * w.spd) * w.amp +
            Math.sin(x * w.freq * 2.2 + t * w.spd * 0.7 + 1.5) * (w.amp * 0.35) +
            Math.cos(x * w.freq * 0.6 + t * w.spd * 0.4) * (w.amp * 0.25);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, H * w.baseY - w.amp, 0, H);
        grad.addColorStop(0, `rgba(${w.r},${w.g},${w.b},${w.a})`);
        grad.addColorStop(0.6, `rgba(${w.r},${w.g},${w.b},${w.a * 0.3})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fill();
      });

      /* ── Floating particles ── */
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift + Math.sin(t * 0.8 + p.phase) * 0.15;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        const twinkle = 0.55 + 0.45 * Math.sin(t * 2.5 + p.phase);
        const a = p.alpha * twinkle;

        /* Particle dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,160,23,${a})`;
        ctx.fill();

        /* Soft glow */
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(212,160,23,${a * 0.25})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    }
    animate();

    /* Hero parallax */
    const hero = document.querySelector<HTMLElement>(".ex-hero");
    const onScroll = () => {
      if (hero) hero.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style suppressHydrationWarning>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --red: #C0001D;
          --dark: #0d0d0d;
          --mid: #1a1a1a;
          --gold: #D4A017;
          --light: #f5f3ef;
          --muted: #888;
          --border: #e0dbd4;
        }

        .ex-page {
          font-family: 'DM Sans', sans-serif;
          background: var(--light);
          color: var(--dark);
          overflow-x: hidden;
        }

        .ex-bg-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.6;
        }

        .ex-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
          animation: exOrbFloat linear infinite;
        }
        .ex-orb1 { width:380px;height:380px;background:radial-gradient(circle,rgba(45,120,180,.12),transparent 70%);top:20%;left:-80px;animation-duration:20s; }
        .ex-orb2 { width:300px;height:300px;background:radial-gradient(circle,rgba(212,160,23,.1),transparent 70%);top:55%;right:-60px;animation-duration:26s;animation-delay:-6s; }
        .ex-orb3 { width:240px;height:240px;background:radial-gradient(circle,rgba(120,50,180,.08),transparent 70%);top:8%;right:20%;animation-duration:22s;animation-delay:-3s; }

        @keyframes exOrbFloat {
          0%   { transform: translateY(0px) scale(1); }
          33%  { transform: translateY(-35px) scale(1.04); }
          66%  { transform: translateY(18px) scale(0.98); }
          100% { transform: translateY(0px) scale(1); }
        }

        .ex-hero, .ex-page-body { position: relative; z-index: 1; }

        .ex-hero {
          position: relative;
          height: 520px;
          background: url('/DJI_0135.jpg') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .ex-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,.06) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: exHeroShimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes exHeroShimmer {
          0%   { background-position: -100% 0; }
          50%  { background-position: 200% 0; }
          100% { background-position: 200% 0; }
        }
        .ex-hero-particles { position:absolute;inset:0;pointer-events:none;overflow:hidden; }
        .ex-hero-particles span {
          position:absolute;border-radius:50%;background:rgba(255,255,255,.5);
          animation:exParticleDrift linear infinite;
        }
        @keyframes exParticleDrift {
          0%   { transform:translateY(100%) rotate(0deg);opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:.6; }
          100% { transform:translateY(-200px) rotate(360deg);opacity:0; }
        }
        .ex-hero::before {
          content:'';position:absolute;inset:0;
          background:linear-gradient(to bottom,rgba(0,0,0,.25) 0%,rgba(0,0,0,.75) 100%);
        }
        .ex-hero-badge {
          position:absolute;top:40px;left:48px;
          background:rgba(255,255,255,.12);backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,.25);color:#fff;
          font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;
          padding:6px 16px;border-radius:999px;display:flex;align-items:center;gap:8px;
        }
        .ex-hero-badge span { width:7px;height:7px;background:var(--gold);border-radius:50%;display:block; }
        .ex-breadcrumb {
          position:absolute;top:44px;right:48px;color:rgba(255,255,255,.7);
          font-size:13px;display:flex;align-items:center;gap:8px;
        }
        .ex-breadcrumb a { color:rgba(255,255,255,.7);text-decoration:none; }
        .ex-breadcrumb a:hover { color:#fff; }
        .ex-breadcrumb-sep { opacity:.5; }
        .ex-hero-content {
          position:relative;z-index:1;padding:0 48px 56px;max-width:700px;
          animation:exHeroEnter 1s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes exHeroEnter {
          from { opacity:0;transform:translateY(24px); }
          to   { opacity:1;transform:translateY(0); }
        }
        .ex-hero-tag { display:flex;align-items:center;gap:12px;margin-bottom:18px; }
        .ex-tag-campus {
          background:#fff;color:var(--dark);font-size:11px;font-weight:700;
          letter-spacing:1.5px;text-transform:uppercase;padding:5px 12px;border-radius:4px;
        }
        .ex-tag-dot { width:6px;height:6px;background:var(--gold);border-radius:50%; }
        .ex-tag-sub { color:rgba(255,255,255,.85);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase; }
        .ex-hero h1 {
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(52px,8vw,82px);color:#fff;line-height:.95;
          letter-spacing:1px;margin-bottom:16px;
        }
        .ex-hero p {
          color:rgba(255,255,255,.8);font-size:16px;font-weight:300;
          max-width:420px;line-height:1.6;margin-bottom:28px;
        }
        .ex-btn-explore {
          display:inline-flex;align-items:center;gap:10px;background:#fff;
          color:var(--dark);font-size:12px;font-weight:700;letter-spacing:1.5px;
          text-transform:uppercase;padding:14px 28px;border-radius:6px;
          border:none;cursor:pointer;transition:background .2s,color .2s;
        }
        .ex-btn-explore:hover { background:var(--red);color:#fff; }
        .ex-btn-explore svg { width:14px;fill:currentColor; }

        .ex-page-body {
          display:grid;
          grid-template-columns:280px 1fr;
          min-height:calc(100vh - 520px);
        }

        .ex-sidebar {
          background:#faf8f5;border-right:1px solid var(--border);
          padding:40px 28px;position:sticky;top:0;
          height:fit-content;overflow:hidden;
        }
        .ex-sidebar::before {
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2d78b4,var(--gold),#7b32b4);
          background-size:200% 100%;animation:exAccentSlide 3s linear infinite;
        }
        @keyframes exAccentSlide {
          0%   { background-position:0% 0; }
          100% { background-position:200% 0; }
        }
        .ex-sidebar-label { font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .ex-sidebar-title {
          font-family:'DM Serif Display',serif;font-size:22px;color:var(--dark);
          margin-bottom:20px;padding-bottom:18px;border-bottom:1.5px solid var(--border);
        }
        .ex-nav-item {
          display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:8px;
          cursor:pointer;font-size:14px;font-weight:500;color:var(--dark);
          border-left:3px solid transparent;transition:all .2s;user-select:none;
        }
        .ex-nav-item:hover { background:#ede8e0; }
        .ex-nav-item.active {
          background:#fff;border-left-color:var(--gold);color:var(--gold);
          font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.07);
        }
        .ex-nav-item svg { width:16px;flex-shrink:0; }
        .ex-nav-arrow { margin-left:auto;font-size:12px;opacity:.4; }
        .ex-sidebar-icon {
          width:54px;height:54px;background:#ede8e0;border-radius:50%;
          display:flex;align-items:center;justify-content:center;font-size:24px;
          margin:32px auto 8px;
          animation:exIconPulse 2.5s ease-in-out infinite;
        }
        @keyframes exIconPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(45,120,180,0); }
          50%      { box-shadow:0 0 0 10px rgba(45,120,180,.15); }
        }
        .ex-sidebar-pride { text-align:center;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted); }

        .ex-content { padding:48px 56px;max-width:900px; }

        .ex-panel { display:none;animation:exFadeIn .35s ease; }
        .ex-panel.active { display:block; }
        @keyframes exFadeIn { from { opacity:0;transform:translateY(12px); } to { opacity:1;transform:translateY(0); } }

        .ex-panel-header {
          display:flex;align-items:flex-start;gap:24px;margin-bottom:36px;
          padding-bottom:32px;border-bottom:1px solid var(--border);
        }
        .ex-icon-wrap {
          width:72px;height:72px;border-radius:16px;display:flex;
          align-items:center;justify-content:center;font-size:32px;flex-shrink:0;
        }
        .ex-icon-academics { background:linear-gradient(135deg,#2d78b4,#1a5a94); }
        .ex-icon-hostel    { background:linear-gradient(135deg,#d4a017,#b78700); }
        .ex-icon-sports    { background:linear-gradient(135deg,#1a8a3e,#2d7a45); }
        .ex-icon-clubs     { background:linear-gradient(135deg,#7b32b4,#5a1f8a); }

        .ex-title-group h2 {
          font-family:'DM Serif Display',serif;font-size:34px;color:var(--dark);margin-bottom:6px;
        }
        .ex-title-group .ex-subtitle { color:var(--muted);font-size:15px;font-weight:400; }
        .ex-tag {
          display:inline-block;background:var(--gold);color:#fff;
          font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
          padding:4px 12px;border-radius:4px;margin-bottom:10px;
        }
        .ex-desc { font-size:15px;line-height:1.75;color:#444;margin-bottom:32px; }

        .ex-features {
          display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
          gap:16px;margin-bottom:40px;
        }
        .ex-feature-card {
          background:#fff;border:1px solid var(--border);border-radius:12px;
          padding:20px;transition:box-shadow .3s,border-color .3s,transform .3s;
          position:relative;overflow:hidden;
        }
        .ex-feature-card::before {
          content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
          background:radial-gradient(circle at center,rgba(45,120,180,.06),transparent 60%);
          opacity:0;transition:opacity .4s;
        }
        .ex-feature-card:hover::before { opacity:1; }
        .ex-feature-card:hover {
          box-shadow:0 8px 32px rgba(45,120,180,.12);
          border-color:rgba(45,120,180,.3);transform:translateY(-3px);
        }
        .ex-panel.active .ex-feature-card:nth-child(1) { animation:exCardIn .5s 0.05s both; }
        .ex-panel.active .ex-feature-card:nth-child(2) { animation:exCardIn .5s 0.15s both; }
        .ex-panel.active .ex-feature-card:nth-child(3) { animation:exCardIn .5s 0.25s both; }
        .ex-panel.active .ex-feature-card:nth-child(4) { animation:exCardIn .5s 0.35s both; }
        @keyframes exCardIn {
          from { opacity:0;transform:translateY(20px) scale(.97); }
          to   { opacity:1;transform:translateY(0) scale(1); }
        }

        .ex-fc-icon { font-size:28px;margin-bottom:12px; }
        .ex-feature-card h4 { font-size:14px;font-weight:700;margin-bottom:8px;color:var(--dark); }
        .ex-feature-card p  { font-size:13px;color:var(--muted);line-height:1.5; }

        .ex-info-strip {
          display:flex;gap:0;border-top:1px solid var(--border);
          border-bottom:1px solid var(--border);
        }
        .ex-info-item {
          flex:1;padding:20px 16px;text-align:center;
          border-right:1px solid var(--border);
        }
        .ex-info-item:last-child { border-right:none; }
        .ex-info-label { font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .ex-info-val   { font-size:16px;font-weight:700;color:var(--dark); }

        @media (max-width: 900px) {
          .ex-page-body { grid-template-columns: 1fr; }
          .ex-sidebar { position: static; }
          .ex-content { padding: 32px 24px; }
          .ex-hero-content { padding: 0 24px 40px; }
          .ex-hero-badge { left: 24px; }
          .ex-breadcrumb { right: 24px; }
          .ex-info-strip { flex-wrap: wrap; }
          .ex-info-item { min-width: 50%; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <div className="ex-page">
        {/* Background */}
        <canvas ref={canvasRef} className="ex-bg-canvas" />
        <div className="ex-orb ex-orb1" />
        <div className="ex-orb ex-orb2" />
        <div className="ex-orb ex-orb3" />

        {/* HERO */}
        <section className="ex-hero">
          <div className="ex-hero-particles" id="exHeroParticles" />
          <div className="ex-hero-badge"><span />&nbsp;Campus · Explore</div>
          <div className="ex-breadcrumb">
            <a href="/">Home</a><span className="ex-breadcrumb-sep">›</span>
            <a href="/campus-life">Campus Life</a><span className="ex-breadcrumb-sep">›</span>
            <span style={{ color: "#fff" }}>Explore</span>
          </div>
          <div className="ex-hero-content">
            <div className="ex-hero-tag">
              <span className="ex-tag-campus">Campus</span>
              <span className="ex-tag-dot" />
              <span className="ex-tag-sub">Explore</span>
            </div>
            <h1>EXPLORE<br />CAMPUS</h1>
            <p>Discover a thriving campus ecosystem — world-class classrooms, vibrant hostels, sports arenas, and student-led clubs that shape future leaders.</p>
            <button className="ex-btn-explore" onClick={handleExplore}>
              <svg viewBox="0 0 10 10"><polygon points="0,0 10,5 0,10" /></svg>
              Explore Campus
            </button>
          </div>
        </section>

        {/* PAGE BODY */}
        <div className="ex-page-body page-body">

          {/* SIDEBAR */}
          <aside className="ex-sidebar">
            <div className="ex-sidebar-label">Browse</div>
            <div className="ex-sidebar-title">Explore Campus</div>

            <div>
              <div className={`ex-nav-item ${active === "academics" ? "active" : ""}`} onClick={() => setActive("academics")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                Academics & Infrastructure
                <span className="ex-nav-arrow">›</span>
              </div>
              <div className={`ex-nav-item ${active === "hostel" ? "active" : ""}`} onClick={() => setActive("hostel")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Hostel & Dining
                <span className="ex-nav-arrow">›</span>
              </div>
              <div className={`ex-nav-item ${active === "sports" ? "active" : ""}`} onClick={() => setActive("sports")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                Sports & Fitness
                <span className="ex-nav-arrow">›</span>
              </div>
              <div className={`ex-nav-item ${active === "clubs" ? "active" : ""}`} onClick={() => setActive("clubs")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Clubs & Culture
                <span className="ex-nav-arrow">›</span>
              </div>
            </div>

            <div className="ex-sidebar-icon">🎓</div>
            <div className="ex-sidebar-pride">Pride of Our Institution</div>
          </aside>

          {/* CONTENT */}
          <main className="ex-content">

            {/* ACADEMICS */}
            <div className={`ex-panel ${active === "academics" ? "active" : ""}`}>
              <div className="ex-panel-header">
                <div className="ex-icon-wrap ex-icon-academics">📚</div>
                <div className="ex-title-group">
                  <span className="ex-tag">Smart · Research · Digital</span>
                  <h2>Academics &amp; Infrastructure</h2>
                  <p className="ex-subtitle">World-class facilities powering a modern education</p>
                </div>
              </div>
              <p className="ex-desc">
                AIET offers state-of-the-art smart classrooms, well-equipped laboratories, a central library with 30,000+ titles, and dedicated research centres. With digital tools like LMS, Wi-Fi connectivity, and IoT-enabled labs, academics here blend the best of tradition and technology.
              </p>
              <div className="ex-features">
                <div className="ex-feature-card"><div className="ex-fc-icon">🖥️</div><h4>Smart Classrooms</h4><p>Interactive smartboards, projectors &amp; AV systems in every lecture hall.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">📖</div><h4>Central Library</h4><p>30,000+ books, e-journals, IEEE, Springer, J-Gate &amp; NPTEL access.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🔬</div><h4>Research &amp; Innovation</h4><p>IIC-certified innovation council with industry-funded R&amp;D projects.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🌐</div><h4>Digital Campus</h4><p>Campus-wide Wi-Fi, smart ERP, LMS for assignments &amp; materials.</p></div>
              </div>
              <button
                onClick={() => openModal("placements")}
                className="px-8 py-3 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #b77700 0%, #dc2626 100%)",
                  boxShadow:
                    "0 6px 24px rgba(183,119,0,0.30), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                Explore Placements →
              </button>
            </div>

            {/* HOSTEL */}
            <div className={`ex-panel ${active === "hostel" ? "active" : ""}`}>
              <div className="ex-panel-header">
                <div className="ex-icon-wrap ex-icon-hostel">🏠</div>
                <div className="ex-title-group">
                  <span className="ex-tag">Hostel · Mess · Wellness</span>
                  <h2>Hostel &amp; Dining</h2>
                  <p className="ex-subtitle">A home away from home with complete care</p>
                </div>
              </div>
              <p className="ex-desc">
                Separate hostels for boys and girls provide a safe, comfortable living environment with 24/7 security and CCTV surveillance. The campus mess serves dietician-curated meals daily, and a multi-cuisine cafeteria keeps students fuelled throughout the day. On-campus health centre tied to Alva&apos;s Health Centre ensures round-the-clock medical support.
              </p>
              <div className="ex-features">
                <div className="ex-feature-card"><div className="ex-fc-icon">🏘️</div><h4>Separate Hostels</h4><p>Well-maintained boys &amp; girls hostels with solar hot water &amp; high-speed internet.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🍽️</div><h4>Mess &amp; Cafeteria</h4><p>Nutritious hygienic meals daily. Veg &amp; non-veg with dietician menus.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🏥</div><h4>Health Centre</h4><p>In-house ambulance, regular check-ups, and mental health counselling.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🔐</div><h4>24/7 Security</h4><p>CCTV surveillance, biometric access, and trained wardens on all floors.</p></div>
              </div>
              <div className="ex-info-strip">
                <div className="ex-info-item"><div className="ex-info-label">Security</div><div className="ex-info-val">24/7 CCTV</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Meals</div><div className="ex-info-val">3 + Snacks</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Internet</div><div className="ex-info-val">High-Speed</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Medical</div><div className="ex-info-val">On-Campus</div></div>
              </div>
            </div>

            {/* SPORTS */}
            <div className={`ex-panel ${active === "sports" ? "active" : ""}`}>
              <div className="ex-panel-header">
                <div className="ex-icon-wrap ex-icon-sports">⚽</div>
                <div className="ex-title-group">
                  <span className="ex-tag">Outdoor · Indoor · Gym</span>
                  <h2>Sports &amp; Fitness</h2>
                  <p className="ex-subtitle">Championship-level sports for body &amp; mind</p>
                </div>
              </div>
              <p className="ex-desc">
                AIET boasts a comprehensive athletic ecosystem with championship-level outdoor grounds, a covered indoor sports complex, and a fully equipped gymnasium. From cricket and football to badminton and yoga, the campus nurtures sporting talent alongside academics, with professional coaching and regular inter-college tournaments.
              </p>
              <div className="ex-features">
                <div className="ex-feature-card"><div className="ex-fc-icon">🏏</div><h4>Outdoor Grounds</h4><p>Cricket, football, basketball, volleyball courts &amp; full athletics track.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🏸</div><h4>Indoor Complex</h4><p>Badminton, table tennis, chess, carrom &amp; dedicated yoga hall.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">💪</div><h4>Gymnasium</h4><p>Full cardio &amp; strength equipment with certified fitness instructors.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🏆</div><h4>Tournaments</h4><p>Regular inter-college competitions and state-level sports events.</p></div>
              </div>
              <div className="ex-info-strip">
                <div className="ex-info-item"><div className="ex-info-label">Sports</div><div className="ex-info-val">10+ Disciplines</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Grounds</div><div className="ex-info-val">5+ Fields</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Gym</div><div className="ex-info-val">Fully Equipped</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Coaching</div><div className="ex-info-val">Professional</div></div>
              </div>
            </div>

            {/* CLUBS */}
            <div className={`ex-panel ${active === "clubs" ? "active" : ""}`}>
              <div className="ex-panel-header">
                <div className="ex-icon-wrap ex-icon-clubs">🎭</div>
                <div className="ex-title-group">
                  <span className="ex-tag">Tech · Arts · Social</span>
                  <h2>Clubs &amp; Culture</h2>
                  <p className="ex-subtitle">Discover passion beyond the classroom</p>
                </div>
              </div>
              <p className="ex-desc">
                AIET&apos;s vibrant club ecosystem encourages every student to explore interests beyond textbooks. From the Coding Club and Robotics Club to the Music Society and Drama Troupe, there&apos;s something for everyone. The NSS Wing and NCC Battalion add a strong foundation of social responsibility and discipline, nurturing well-rounded graduates ready to lead.
              </p>
              <div className="ex-features">
                <div className="ex-feature-card"><div className="ex-fc-icon">💻</div><h4>Tech Clubs</h4><p>Coding Club, Robotics Club, AI Society &amp; Hackathon Teams.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🎵</div><h4>Arts &amp; Performance</h4><p>Music Club, Dance Troupe, Drama Society &amp; Fine Arts Club.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">📝</div><h4>Literary &amp; Media</h4><p>Literary Club, Magazine Committee &amp; Photography Circle.</p></div>
                <div className="ex-feature-card"><div className="ex-fc-icon">🪖</div><h4>Service &amp; Discipline</h4><p>NSS Wing (200+ members), NCC Battalion (150+ cadets) &amp; Eco Club.</p></div>
              </div>
              <div className="ex-info-strip">
                <div className="ex-info-item"><div className="ex-info-label">Clubs</div><div className="ex-info-val">10+ Active</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Members</div><div className="ex-info-val">800+ Students</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Events</div><div className="ex-info-val">Year-Round</div></div>
                <div className="ex-info-item"><div className="ex-info-label">Community</div><div className="ex-info-val">NSS + NCC</div></div>
              </div>
            </div>

          </main>
        </div>
      </div>

      {/* ── MODAL ────────────────────────────────────── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center p-6 transition-all"
          style={{
            background: "rgba(255,255,255,0.30)",
            backdropFilter: "blur(20px)",
          }}
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div
            className="relative p-10 rounded-[28px] max-w-lg w-full"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.95)",
              boxShadow:
                "0 30px 80px rgba(183,119,0,0.18), 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)",
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(183,119,0,0.18) 0%, transparent 70%)",
              }}
            />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-600 transition-all hover:rotate-90 hover:bg-amber-50"
            >
              <X size={20} />
            </button>
            <h3 className="font-serif text-3xl text-slate-900 mb-2">
              {modalConfig.title}
            </h3>
            <p className="text-slate-400 text-sm mb-8">{modalConfig.desc}</p>

            <div className="flex flex-col gap-4">
              {[
                {
                  ph: "Full Name",
                  val: formData.name,
                  key: "name",
                  type: "text",
                },
                {
                  ph: "Email Address",
                  val: formData.email,
                  key: "email",
                  type: "email",
                },
                {
                  ph: "Phone Number",
                  val: formData.phone,
                  key: "phone",
                  type: "tel",
                },
                {
                  ph: modalConfig.placeholder,
                  val: formData.extra,
                  key: "extra",
                  type: "text",
                },
              ].map(({ ph, val, key, type }) => (
                <input
                  key={key}
                  type={type}
                  placeholder={ph}
                  value={val}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, [key]: e.target.value }))
                  }
                  className="px-5 py-4 rounded-xl outline-none transition-all text-slate-700 placeholder-slate-400"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1.5px solid rgba(203,213,225,0.8)",
                    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.04)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(183,119,0,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(203,213,225,0.8)")
                  }
                />
              ))}
              <button
                onClick={submitModal}
                className="py-4 rounded-xl font-bold text-white mt-1 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #b77700 0%, #dc2626 100%)",
                  boxShadow: "0 6px 24px rgba(183,119,0,0.30)",
                }}
              >
                Submit →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ────────────────────────────────────── */}
      <Toast
        message={toast.message}
        icon={toast.icon}
        visible={toast.visible}
      />
    </>
  );
}
