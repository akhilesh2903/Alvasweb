"use client";

import { useEffect, useRef, useState } from "react";

const LABS = [
  { id: "linux", label: "Edwin Linux Lab" },
  { id: "ios",   label: "Apple iOS Lab"   },
  { id: "mems",  label: "MEMS Lab"        },
  { id: "future",label: "Future Ready Labs"},
];

export default function SkillLabsPage() {
  const [active, setActive] = useState<string>("linux");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Hero scrollIntoView ── */
  const handleExplore = () => {
    document.querySelector(".page-body")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Canvas animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number;
    let animId: number;
    const mouse = { x: -999, y: -999 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Dot {
      ox: number; oy: number; x: number; y: number;
      vx: number; vy: number; r: number;
      baseAlpha: number; alpha: number; currentR: number;
      constructor() {
        this.ox = Math.random() * W;
        this.oy = Math.random() * H;
        this.x = this.ox; this.y = this.oy;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r  = Math.random() * 2.5 + 1;
        this.baseAlpha = Math.random() * 0.45 + 0.15;
        this.alpha = this.baseAlpha;
        this.currentR = this.r;
      }
      update() {
        this.ox += this.vx; this.oy += this.vy;
        if (this.ox < 0 || this.ox > W) this.vx *= -1;
        if (this.oy < 0 || this.oy > H) this.vy *= -1;
        const dx = mouse.x - this.ox, dy = mouse.y - this.oy;
        const dist = Math.hypot(dx, dy), force = 120;
        if (dist < force) {
          const s = (force - dist) / force;
          this.x = this.ox - dx * s * 0.55;
          this.y = this.oy - dy * s * 0.55;
          this.alpha = Math.min(1, this.baseAlpha + s * 0.7);
          this.currentR = this.r + s * 3;
        } else {
          this.x += (this.ox - this.x) * 0.08;
          this.y += (this.oy - this.y) * 0.08;
          this.alpha += (this.baseAlpha - this.alpha) * 0.08;
          this.currentR = this.r;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192,0,29,${this.alpha})`;
        ctx.fill();
      }
    }

    const dots: Dot[] = Array.from({ length: 90 }, () => new Dot());

    function drawLines() {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const a = (1 - dist / 140) * 0.2;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(192,0,29,${a})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      const mx = mouse.x, my = mouse.y;
      dots.forEach(d => {
        const dist = Math.hypot(d.x - mx, d.y - my);
        if (dist < 160) {
          const a = (1 - dist / 160) * 0.35;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(212,160,23,${a})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      });
      if (mouse.x > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 30);
        grd.addColorStop(0, "rgba(212,160,23,0.25)");
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(mx, my, 30, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => { d.update(); d.draw(); });
      drawLines();
      animId = requestAnimationFrame(animate);
    }
    animate();

    /* Hero parallax */
    const hero = document.querySelector<HTMLElement>(".sl-hero");
    const onScroll = () => {
      if (hero) hero.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
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

        .sl-page {
          font-family: 'DM Sans', sans-serif;
          background: var(--light);
          color: var(--dark);
          overflow-x: hidden;
        }

        .sl-bg-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.55;
        }

        .sl-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          animation: orbFloat linear infinite;
        }
        .sl-orb1 { width:400px;height:400px;background:radial-gradient(circle,rgba(192,0,29,.18),transparent 70%);top:30%;left:-100px;animation-duration:18s; }
        .sl-orb2 { width:320px;height:320px;background:radial-gradient(circle,rgba(212,160,23,.14),transparent 70%);top:60%;right:-80px;animation-duration:24s;animation-delay:-8s; }
        .sl-orb3 { width:260px;height:260px;background:radial-gradient(circle,rgba(0,80,200,.1),transparent 70%);top:10%;right:25%;animation-duration:20s;animation-delay:-4s; }

        @keyframes orbFloat {
          0%   { transform: translateY(0px) scale(1); }
          33%  { transform: translateY(-40px) scale(1.05); }
          66%  { transform: translateY(20px) scale(0.97); }
          100% { transform: translateY(0px) scale(1); }
        }

        .sl-hero, .sl-page-body { position: relative; z-index: 1; }

        .sl-hero {
          position: relative;
          height: 520px;
          background: url('/DJI_0135.jpg') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .sl-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,.06) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: heroShimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes heroShimmer {
          0%   { background-position: -100% 0; }
          50%  { background-position: 200% 0; }
          100% { background-position: 200% 0; }
        }
        .sl-hero-particles { position:absolute;inset:0;pointer-events:none;overflow:hidden; }
        .sl-hero-particles span {
          position:absolute;border-radius:50%;background:rgba(255,255,255,.5);
          animation:particleDrift linear infinite;
        }
        @keyframes particleDrift {
          0%   { transform:translateY(100%) rotate(0deg);opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:.6; }
          100% { transform:translateY(-200px) rotate(360deg);opacity:0; }
        }
        .sl-hero::before {
          content:'';position:absolute;inset:0;
          background:linear-gradient(to bottom,rgba(0,0,0,.25) 0%,rgba(0,0,0,.75) 100%);
        }
        .sl-hero-badge {
          position:absolute;top:40px;left:48px;
          background:rgba(255,255,255,.12);backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,.25);color:#fff;
          font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;
          padding:6px 16px;border-radius:999px;display:flex;align-items:center;gap:8px;
        }
        .sl-hero-badge span { width:7px;height:7px;background:var(--gold);border-radius:50%;display:block; }
        .sl-breadcrumb {
          position:absolute;top:44px;right:48px;color:rgba(255,255,255,.7);
          font-size:13px;display:flex;align-items:center;gap:8px;
        }
        .sl-breadcrumb a { color:rgba(255,255,255,.7);text-decoration:none; }
        .sl-breadcrumb a:hover { color:#fff; }
        .sl-breadcrumb-sep { opacity:.5; }
        .sl-hero-content {
          position:relative;z-index:1;padding:0 48px 56px;max-width:700px;
          animation:heroEnter 1s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes heroEnter {
          from { opacity:0;transform:translateY(24px); }
          to   { opacity:1;transform:translateY(0); }
        }
        .sl-hero-tag { display:flex;align-items:center;gap:12px;margin-bottom:18px; }
        .sl-tag-campus {
          background:#fff;color:var(--dark);font-size:11px;font-weight:700;
          letter-spacing:1.5px;text-transform:uppercase;padding:5px 12px;border-radius:4px;
        }
        .sl-tag-dot { width:6px;height:6px;background:var(--gold);border-radius:50%; }
        .sl-tag-placements { color:rgba(255,255,255,.85);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase; }
        .sl-hero h1 {
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(52px,8vw,82px);color:#fff;line-height:.95;
          letter-spacing:1px;margin-bottom:16px;
        }
        .sl-hero p {
          color:rgba(255,255,255,.8);font-size:16px;font-weight:300;
          max-width:420px;line-height:1.6;margin-bottom:28px;
        }
        .sl-btn-explore {
          display:inline-flex;align-items:center;gap:10px;background:#fff;
          color:var(--dark);font-size:12px;font-weight:700;letter-spacing:1.5px;
          text-transform:uppercase;padding:14px 28px;border-radius:6px;
          border:none;cursor:pointer;transition:background .2s,color .2s;
        }
        .sl-btn-explore:hover { background:var(--red);color:#fff; }
        .sl-btn-explore svg { width:14px;fill:currentColor; }

        .sl-page-body {
          display:grid;
          grid-template-columns:280px 1fr;
          min-height:calc(100vh - 520px);
        }

        .sl-sidebar {
          background:#faf8f5;border-right:1px solid var(--border);
          padding:40px 28px;position:sticky;top:0;
          height:fit-content;overflow:hidden;
        }
        .sl-sidebar::before {
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,var(--red),var(--gold),var(--red));
          background-size:200% 100%;animation:accentSlide 3s linear infinite;
        }
        @keyframes accentSlide {
          0%   { background-position:0% 0; }
          100% { background-position:200% 0; }
        }
        .sl-sidebar-label { font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .sl-sidebar-title {
          font-family:'DM Serif Display',serif;font-size:22px;color:var(--dark);
          margin-bottom:20px;padding-bottom:18px;border-bottom:1.5px solid var(--border);
        }
        .sl-nav-item {
          display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:8px;
          cursor:pointer;font-size:14px;font-weight:500;color:var(--dark);
          border-left:3px solid transparent;transition:all .2s;user-select:none;
        }
        .sl-nav-item:hover { background:#ede8e0; }
        .sl-nav-item.active {
          background:#fff;border-left-color:var(--red);color:var(--red);
          font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.07);
        }
        .sl-nav-item svg { width:16px;flex-shrink:0; }
        .sl-nav-arrow { margin-left:auto;font-size:12px;opacity:.4; }
        .sl-sidebar-icon {
          width:54px;height:54px;background:#ede8e0;border-radius:50%;
          display:flex;align-items:center;justify-content:center;font-size:24px;
          margin:32px auto 8px;
          animation:trophyPulse 2.5s ease-in-out infinite;
        }
        @keyframes trophyPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(212,160,23,0); }
          50%      { box-shadow:0 0 0 10px rgba(212,160,23,.2); }
        }
        .sl-sidebar-pride { text-align:center;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted); }

        .sl-content { padding:48px 56px;max-width:900px; }

        .sl-lab-panel { display:none;animation:fadeIn .35s ease; }
        .sl-lab-panel.active { display:block; }
        @keyframes fadeIn { from { opacity:0;transform:translateY(12px); } to { opacity:1;transform:translateY(0); } }

        .sl-lab-header {
          display:flex;align-items:flex-start;gap:24px;margin-bottom:36px;
          padding-bottom:32px;border-bottom:1px solid var(--border);
        }
        .sl-lab-icon-wrap {
          width:72px;height:72px;border-radius:16px;display:flex;
          align-items:center;justify-content:center;font-size:32px;flex-shrink:0;
        }
        .sl-lab-icon-linux { background:#1a1a1a; }
        .sl-lab-icon-ios   { background:linear-gradient(135deg,#555,#111); }
        .sl-lab-icon-mems  { background:linear-gradient(135deg,#003580,#0052cc); }
        .sl-lab-icon-future{ background:linear-gradient(135deg,#1a472a,#2d7a45); }

        .sl-lab-title-group h2 {
          font-family:'DM Serif Display',serif;font-size:34px;color:var(--dark);margin-bottom:6px;
        }
        .sl-lab-title-group .sl-lab-subtitle { color:var(--muted);font-size:15px;font-weight:400; }
        .sl-lab-tag {
          display:inline-block;background:var(--red);color:#fff;
          font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
          padding:4px 12px;border-radius:4px;margin-bottom:10px;
        }
        .sl-lab-desc { font-size:15px;line-height:1.75;color:#444;margin-bottom:32px; }

        .sl-lab-features {
          display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
          gap:16px;margin-bottom:40px;
        }
        .sl-feature-card {
          background:#fff;border:1px solid var(--border);border-radius:12px;
          padding:20px;transition:box-shadow .3s,border-color .3s,transform .3s;
          position:relative;overflow:hidden;
        }
        .sl-feature-card::before {
          content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;
          background:radial-gradient(circle at center,rgba(192,0,29,.06),transparent 60%);
          opacity:0;transition:opacity .4s;
        }
        .sl-feature-card:hover::before { opacity:1; }
        .sl-feature-card:hover {
          box-shadow:0 8px 32px rgba(192,0,29,.12);
          border-color:rgba(192,0,29,.3);transform:translateY(-3px);
        }
        .sl-lab-panel.active .sl-feature-card:nth-child(1) { animation:cardIn .5s 0.05s both; }
        .sl-lab-panel.active .sl-feature-card:nth-child(2) { animation:cardIn .5s 0.15s both; }
        .sl-lab-panel.active .sl-feature-card:nth-child(3) { animation:cardIn .5s 0.25s both; }
        .sl-lab-panel.active .sl-feature-card:nth-child(4) { animation:cardIn .5s 0.35s both; }
        @keyframes cardIn {
          from { opacity:0;transform:translateY(20px) scale(.97); }
          to   { opacity:1;transform:translateY(0) scale(1); }
        }

        .sl-fc-icon { font-size:28px;margin-bottom:12px; }
        .sl-feature-card h4 { font-size:14px;font-weight:700;margin-bottom:8px;color:var(--dark); }
        .sl-feature-card p  { font-size:13px;color:var(--muted);line-height:1.5; }

        .sl-info-strip {
          display:flex;gap:0;border-top:1px solid var(--border);
          border-bottom:1px solid var(--border);
        }
        .sl-info-item {
          flex:1;padding:20px 16px;text-align:center;
          border-right:1px solid var(--border);
        }
        .sl-info-item:last-child { border-right:none; }
        .sl-info-label { font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .sl-info-val   { font-size:16px;font-weight:700;color:var(--dark); }

        @media (max-width: 900px) {
          .sl-page-body { grid-template-columns: 1fr; }
          .sl-sidebar { position: static; }
          .sl-content { padding: 32px 24px; }
          .sl-hero-content { padding: 0 24px 40px; }
          .sl-hero-badge { left: 24px; }
          .sl-breadcrumb { right: 24px; }
          .sl-info-strip { flex-wrap: wrap; }
          .sl-info-item { min-width: 50%; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <div className="sl-page">
        {/* Background */}
        <canvas ref={canvasRef} className="sl-bg-canvas" />
        <div className="sl-orb sl-orb1" />
        <div className="sl-orb sl-orb2" />
        <div className="sl-orb sl-orb3" />

        {/* HERO */}
        <section className="sl-hero">
          <div className="sl-hero-particles" id="slHeroParticles" />
          <div className="sl-hero-badge"><span />&nbsp;Campus · Placements</div>
          <div className="sl-breadcrumb">
            <a href="/">Home</a><span className="sl-breadcrumb-sep">›</span>
            <a href="/campus-life">Campus Life</a><span className="sl-breadcrumb-sep">›</span>
            <span style={{ color: "#fff" }}>Skill Labs</span>
          </div>
          <div className="sl-hero-content">
            <div className="sl-hero-tag">
              <span className="sl-tag-campus">Campus</span>
              <span className="sl-tag-dot" />
              <span className="sl-tag-placements">Placements</span>
            </div>
            <h1>SKILL<br />LABS</h1>
            <p>Advanced laboratories for industrial skill development. Bridging academia and industry through hands-on technology experience.</p>
            <button className="sl-btn-explore" onClick={handleExplore}>
              <svg viewBox="0 0 10 10"><polygon points="0,0 10,5 0,10" /></svg>
              Explore Labs
            </button>
          </div>
        </section>

        {/* PAGE BODY */}
        <div className="sl-page-body">

          {/* SIDEBAR */}
          <aside className="sl-sidebar">
            <div className="sl-sidebar-label">Browse</div>
            <div className="sl-sidebar-title">All Skill Labs</div>

            <div>
              <div className={`sl-nav-item ${active === "linux" ? "active" : ""}`} onClick={() => setActive("linux")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><polyline points="9,11 12,14 22,4" /></svg>
                Edwin Linux Lab
                <span className="sl-nav-arrow">›</span>
              </div>
              <div className={`sl-nav-item ${active === "ios" ? "active" : ""}`} onClick={() => setActive("ios")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                Apple iOS Lab
                <span className="sl-nav-arrow">›</span>
              </div>
              <div className={`sl-nav-item ${active === "mems" ? "active" : ""}`} onClick={() => setActive("mems")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></svg>
                MEMS Lab
                <span className="sl-nav-arrow">›</span>
              </div>
              <div className={`sl-nav-item ${active === "future" ? "active" : ""}`} onClick={() => setActive("future")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,20 2,20" /></svg>
                Future Ready Labs
                <span className="sl-nav-arrow">›</span>
              </div>
            </div>

            <div className="sl-sidebar-icon">🏆</div>
            <div className="sl-sidebar-pride">Pride of Our Institution</div>
          </aside>

          {/* CONTENT */}
          <main className="sl-content">

            {/* LINUX */}
            <div className={`sl-lab-panel ${active === "linux" ? "active" : ""}`}>
              <div className="sl-lab-header">
                <div className="sl-lab-icon-wrap sl-lab-icon-linux">🐧</div>
                <div className="sl-lab-title-group">
                  <span className="sl-lab-tag">Open Source · Systems</span>
                  <h2>Edwin Linux Lab</h2>
                  <p className="sl-lab-subtitle">Mastering open-source computing &amp; system administration</p>
                </div>
              </div>
              <p className="sl-lab-desc">
                The Edwin Linux Lab is a dedicated open-source computing environment where students gain deep expertise in Linux-based operating systems, shell scripting, system administration, networking, and cloud infrastructure. Named in honor of a distinguished alumnus, this lab prepares students for careers in DevOps, cloud computing, and enterprise IT operations.
              </p>
              <div className="sl-lab-features">
                <div className="sl-feature-card"><div className="sl-fc-icon">🖥️</div><h4>50+ Linux Workstations</h4><p>High-performance Ubuntu &amp; Fedora machines for intensive computing tasks.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">☁️</div><h4>Cloud Lab Access</h4><p>Hands-on AWS, GCP &amp; Azure integration for real-world cloud workflows.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🔒</div><h4>Cybersecurity Tools</h4><p>Kali Linux, Wireshark, and security audit toolkits pre-installed.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">⚙️</div><h4>DevOps Pipeline</h4><p>Docker, Kubernetes, Jenkins, and CI/CD workflow training environments.</p></div>
              </div>
              <div className="sl-info-strip">
                <div className="sl-info-item"><div className="sl-info-label">Capacity</div><div className="sl-info-val">52 Students</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Available</div><div className="sl-info-val">9 AM – 8 PM</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Certification</div><div className="sl-info-val">RHCSA / LPIC</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Established</div><div className="sl-info-val">2019</div></div>
              </div>
            </div>

            {/* iOS */}
            <div className={`sl-lab-panel ${active === "ios" ? "active" : ""}`}>
              <div className="sl-lab-header">
                <div className="sl-lab-icon-wrap sl-lab-icon-ios">🍎</div>
                <div className="sl-lab-title-group">
                  <span className="sl-lab-tag">Mobile · Swift · Xcode</span>
                  <h2>Apple iOS Lab</h2>
                  <p className="sl-lab-subtitle">Building next-generation iOS &amp; macOS applications</p>
                </div>
              </div>
              <p className="sl-lab-desc">
                The Apple iOS Lab is an authorized Apple Development Center equipped with the latest MacBook Pros, iPads, and iPhones. Students learn Swift, SwiftUI, and Objective-C while building real-world applications for the App Store. The lab also covers ARKit, CoreML, and Apple&apos;s suite of developer tools — preparing graduates for high-demand iOS development roles globally.
              </p>
              <div className="sl-lab-features">
                <div className="sl-feature-card"><div className="sl-fc-icon">💻</div><h4>Apple MacBook Pro Fleet</h4><p>M2 and M3 MacBook Pros with Xcode and full Apple developer toolchain.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">📱</div><h4>Device Testing Suite</h4><p>Latest iPhones and iPads for real-device testing across iOS versions.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🤖</div><h4>CoreML &amp; AI Integration</h4><p>On-device machine learning using Apple&apos;s CoreML and Create ML frameworks.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🕶️</div><h4>AR Development</h4><p>ARKit &amp; Reality Composer for augmented reality application development.</p></div>
              </div>
              <div className="sl-info-strip">
                <div className="sl-info-item"><div className="sl-info-label">Capacity</div><div className="sl-info-val">40 Students</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Available</div><div className="sl-info-val">9 AM – 7 PM</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Certification</div><div className="sl-info-val">Apple Developer</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Established</div><div className="sl-info-val">2021</div></div>
              </div>
            </div>

            {/* MEMS */}
            <div className={`sl-lab-panel ${active === "mems" ? "active" : ""}`}>
              <div className="sl-lab-header">
                <div className="sl-lab-icon-wrap sl-lab-icon-mems">⚗️</div>
                <div className="sl-lab-title-group">
                  <span className="sl-lab-tag">Micro · Electro · Mechanical</span>
                  <h2>MEMS Lab</h2>
                  <p className="sl-lab-subtitle">Micro-Electro-Mechanical Systems research &amp; fabrication</p>
                </div>
              </div>
              <p className="sl-lab-desc">
                The MEMS (Micro-Electro-Mechanical Systems) Lab is a state-of-the-art research facility for the study and fabrication of microscale devices that integrate mechanical and electronic components. Students work on sensor design, actuator development, and microfluidics using industry-grade simulation and fabrication tools, preparing them for cutting-edge careers in biomedical, aerospace, and semiconductor industries.
              </p>
              <div className="sl-lab-features">
                <div className="sl-feature-card"><div className="sl-fc-icon">🔬</div><h4>Microscopy Suite</h4><p>SEM and optical microscopes for nanoscale analysis and inspection.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">📐</div><h4>COMSOL Simulation</h4><p>Advanced multiphysics simulation for MEMS design and optimization.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🧫</div><h4>Microfluidics Platform</h4><p>Lab-on-chip development tools for biomedical and chemical analysis.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">💡</div><h4>Sensor Prototyping</h4><p>Pressure, temperature, and inertial sensor design and testing rigs.</p></div>
              </div>
              <div className="sl-info-strip">
                <div className="sl-info-item"><div className="sl-info-label">Capacity</div><div className="sl-info-val">24 Students</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Available</div><div className="sl-info-val">9 AM – 6 PM</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Focus Area</div><div className="sl-info-val">Research &amp; Dev</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Established</div><div className="sl-info-val">2022</div></div>
              </div>
            </div>

            {/* FUTURE READY */}
            <div className={`sl-lab-panel ${active === "future" ? "active" : ""}`}>
              <div className="sl-lab-header">
                <div className="sl-lab-icon-wrap sl-lab-icon-future">🚀</div>
                <div className="sl-lab-title-group">
                  <span className="sl-lab-tag">AI · IoT · Next-Gen</span>
                  <h2>Future Ready Labs</h2>
                  <p className="sl-lab-subtitle">AI, IoT &amp; emerging technology skill development</p>
                </div>
              </div>
              <p className="sl-lab-desc">
                The Future Ready Labs are a cluster of next-generation learning spaces focused on Artificial Intelligence, Machine Learning, Internet of Things, and Industry 4.0 technologies. These labs equip students with skills in demand across industries by providing access to GPU clusters, robotics platforms, and advanced prototyping equipment.
              </p>
              <div className="sl-lab-features">
                <div className="sl-feature-card"><div className="sl-fc-icon">🧠</div><h4>AI / ML Cluster</h4><p>NVIDIA GPU-powered stations for deep learning model training and inference.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🌐</div><h4>IoT Dev Studio</h4><p>Raspberry Pi, Arduino, and industrial IoT gateway prototyping kits.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🦾</div><h4>Robotics Platform</h4><p>ROS-based robotic arms and autonomous vehicle simulation environments.</p></div>
                <div className="sl-feature-card"><div className="sl-fc-icon">🏭</div><h4>Industry 4.0 Zone</h4><p>Digital twin technology, smart factory simulation, and PLC programming.</p></div>
              </div>
              <div className="sl-info-strip">
                <div className="sl-info-item"><div className="sl-info-label">Capacity</div><div className="sl-info-val">60 Students</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Available</div><div className="sl-info-val">8 AM – 9 PM</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Certification</div><div className="sl-info-val">NVIDIA / AWS AI</div></div>
                <div className="sl-info-item"><div className="sl-info-label">Established</div><div className="sl-info-val">2023</div></div>
              </div>
            </div>

          </main>
        </div>
      </div>

      {/* Hero floating particles — injected client-side */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var c = document.getElementById('slHeroParticles');
          if(!c) return;
          for(var i=0;i<22;i++){
            var s=document.createElement('span');
            var size=Math.random()*4+2;
            s.style.cssText='width:'+size+'px;height:'+size+'px;left:'+Math.random()*100+'%;bottom:'+Math.random()*20+'%;animation-duration:'+(5+Math.random()*8)+'s;animation-delay:'+(-Math.random()*10)+'s;opacity:'+(0.3+Math.random()*0.5)+';';
            c.appendChild(s);
          }
        })();
      `}} />
    </>
  );
}
