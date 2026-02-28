"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { id: "technical",     label: "Technical Clubs"     },
  { id: "cultural",      label: "Cultural & Arts"     },
  { id: "service",       label: "Service & Outreach"  },
  { id: "sports-clubs",  label: "Sports Clubs"        },
];

export default function ClubsActivityPage() {
  const [active, setActive] = useState<string>("technical");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleExplore = () => {
    document.querySelector(".page-body")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Canvas animation — Hexagonal Grid Morph ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number;
    let animId: number;
    let t = 0;
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

    /* Hexagon grid points */
    interface HexPoint {
      x: number; y: number; baseX: number; baseY: number;
      phase: number; r: number; alpha: number;
    }
    function buildGrid(): HexPoint[] {
      const pts: HexPoint[] = [];
      const spacing = 70;
      const rows = Math.ceil(H / (spacing * 0.866)) + 2;
      const cols = Math.ceil(W / spacing) + 2;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + (row % 2 === 0 ? 0 : spacing / 2);
          const y = row * spacing * 0.866;
          pts.push({
            x, y, baseX: x, baseY: y,
            phase: Math.random() * Math.PI * 2,
            r: Math.random() * 1.5 + 0.8,
            alpha: Math.random() * 0.25 + 0.08,
          });
        }
      }
      return pts;
    }
    let points = buildGrid();

    function animate() {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      /* Animate points */
      points.forEach(p => {
        p.x = p.baseX + Math.sin(t * 1.2 + p.phase) * 4;
        p.y = p.baseY + Math.cos(t * 0.9 + p.phase) * 4;

        /* Mouse repulsion */
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100) {
          const s = (100 - dist) / 100;
          p.x -= dx * s * 0.3;
          p.y -= dy * s * 0.3;
        }
      });

      /* Draw connections */
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 90) {
            const a = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(120,50,180,${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      /* Draw points */
      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,50,180,${p.alpha})`;
        ctx.fill();
      });

      /* Mouse glow */
      if (mouse.x > 0) {
        const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 35);
        grd.addColorStop(0, "rgba(212,160,23,0.2)");
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    }
    animate();

    const onResize = () => { resize(); points = buildGrid(); };
    window.addEventListener("resize", onResize);

    /* Hero parallax */
    const hero = document.querySelector<HTMLElement>(".ca-hero");
    const onScroll = () => {
      if (hero) hero.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: #C0001D; --dark: #0d0d0d; --mid: #1a1a1a;
          --gold: #D4A017; --purple: #7b32b4;
          --light: #f5f3ef; --muted: #888; --border: #e0dbd4;
        }
        .ca-page { font-family:'DM Sans',sans-serif;background:var(--light);color:var(--dark);overflow-x:hidden; }
        .ca-bg-canvas { position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0.55; }
        .ca-orb { position:fixed;border-radius:50%;filter:blur(85px);pointer-events:none;z-index:0;animation:caOrbFloat linear infinite; }
        .ca-orb1 { width:360px;height:360px;background:radial-gradient(circle,rgba(120,50,180,.12),transparent 70%);top:25%;left:-80px;animation-duration:20s; }
        .ca-orb2 { width:300px;height:300px;background:radial-gradient(circle,rgba(212,160,23,.1),transparent 70%);top:60%;right:-60px;animation-duration:25s;animation-delay:-6s; }
        .ca-orb3 { width:250px;height:250px;background:radial-gradient(circle,rgba(192,0,29,.08),transparent 70%);top:8%;right:22%;animation-duration:22s;animation-delay:-3s; }
        @keyframes caOrbFloat { 0%{transform:translateY(0) scale(1)} 33%{transform:translateY(-35px) scale(1.04)} 66%{transform:translateY(18px) scale(.98)} 100%{transform:translateY(0) scale(1)} }
        .ca-hero,.ca-page-body { position:relative;z-index:1; }
        .ca-hero { position:relative;height:520px;background:url('/DJI_0135.jpg') center/cover no-repeat;display:flex;align-items:flex-end;overflow:hidden; }
        .ca-hero::before { content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.25),rgba(0,0,0,.75)); }
        .ca-hero::after { content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.06) 50%,transparent 60%);background-size:200% 100%;animation:caShimmer 6s ease-in-out infinite;pointer-events:none; }
        @keyframes caShimmer { 0%{background-position:-100% 0} 50%{background-position:200% 0} 100%{background-position:200% 0} }
        .ca-hero-particles { position:absolute;inset:0;pointer-events:none;overflow:hidden; }
        .ca-hero-particles span { position:absolute;border-radius:50%;background:rgba(255,255,255,.5);animation:caPartDrift linear infinite; }
        @keyframes caPartDrift { 0%{transform:translateY(100%) rotate(0deg);opacity:0} 10%{opacity:1} 90%{opacity:.6} 100%{transform:translateY(-200px) rotate(360deg);opacity:0} }
        .ca-hero-badge { position:absolute;top:40px;left:48px;background:rgba(255,255,255,.12);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.25);color:#fff;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;padding:6px 16px;border-radius:999px;display:flex;align-items:center;gap:8px; }
        .ca-hero-badge span { width:7px;height:7px;background:var(--purple);border-radius:50%;display:block; }
        .ca-breadcrumb { position:absolute;top:44px;right:48px;color:rgba(255,255,255,.7);font-size:13px;display:flex;align-items:center;gap:8px; }
        .ca-breadcrumb a { color:rgba(255,255,255,.7);text-decoration:none; }
        .ca-breadcrumb a:hover { color:#fff; }
        .ca-breadcrumb-sep { opacity:.5; }
        .ca-hero-content { position:relative;z-index:1;padding:0 48px 56px;max-width:700px;animation:caHeroEnter 1s cubic-bezier(.22,1,.36,1) both; }
        @keyframes caHeroEnter { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .ca-hero-tag { display:flex;align-items:center;gap:12px;margin-bottom:18px; }
        .ca-tag-campus { background:#fff;color:var(--dark);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:5px 12px;border-radius:4px; }
        .ca-tag-dot { width:6px;height:6px;background:var(--purple);border-radius:50%; }
        .ca-tag-sub { color:rgba(255,255,255,.85);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase; }
        .ca-hero h1 { font-family:'Bebas Neue',sans-serif;font-size:clamp(52px,8vw,82px);color:#fff;line-height:.95;letter-spacing:1px;margin-bottom:16px; }
        .ca-hero p { color:rgba(255,255,255,.8);font-size:16px;font-weight:300;max-width:420px;line-height:1.6;margin-bottom:28px; }
        .ca-btn-explore { display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--dark);font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:14px 28px;border-radius:6px;border:none;cursor:pointer;transition:background .2s,color .2s; }
        .ca-btn-explore:hover { background:var(--purple);color:#fff; }
        .ca-btn-explore svg { width:14px;fill:currentColor; }
        .ca-page-body { display:grid;grid-template-columns:280px 1fr;min-height:calc(100vh - 520px); }
        .ca-sidebar { background:#faf8f5;border-right:1px solid var(--border);padding:40px 28px;position:sticky;top:0;height:fit-content;overflow:hidden; }
        .ca-sidebar::before { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--purple),var(--gold),var(--purple));background-size:200% 100%;animation:caAccent 3s linear infinite; }
        @keyframes caAccent { 0%{background-position:0% 0} 100%{background-position:200% 0} }
        .ca-sidebar-label { font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .ca-sidebar-title { font-family:'DM Serif Display',serif;font-size:22px;color:var(--dark);margin-bottom:20px;padding-bottom:18px;border-bottom:1.5px solid var(--border); }
        .ca-nav-item { display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:8px;cursor:pointer;font-size:14px;font-weight:500;color:var(--dark);border-left:3px solid transparent;transition:all .2s;user-select:none; }
        .ca-nav-item:hover { background:#ede8e0; }
        .ca-nav-item.active { background:#fff;border-left-color:var(--purple);color:var(--purple);font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.07); }
        .ca-nav-item svg { width:16px;flex-shrink:0; }
        .ca-nav-arrow { margin-left:auto;font-size:12px;opacity:.4; }
        .ca-sidebar-icon { width:54px;height:54px;background:#ede8e0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;margin:32px auto 8px;animation:caPulse 2.5s ease-in-out infinite; }
        @keyframes caPulse { 0%,100%{box-shadow:0 0 0 0 rgba(120,50,180,0)} 50%{box-shadow:0 0 0 10px rgba(120,50,180,.15)} }
        .ca-sidebar-pride { text-align:center;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted); }
        .ca-content { padding:48px 56px;max-width:900px; }
        .ca-panel { display:none;animation:caFadeIn .35s ease; }
        .ca-panel.active { display:block; }
        @keyframes caFadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .ca-panel-header { display:flex;align-items:flex-start;gap:24px;margin-bottom:36px;padding-bottom:32px;border-bottom:1px solid var(--border); }
        .ca-icon-wrap { width:72px;height:72px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:32px;flex-shrink:0; }
        .ca-icon-tech    { background:linear-gradient(135deg,#7b32b4,#5a1f8a); }
        .ca-icon-cultural{ background:linear-gradient(135deg,#d4a017,#b78700); }
        .ca-icon-service { background:linear-gradient(135deg,#1a8a3e,#2d7a45); }
        .ca-icon-sports  { background:linear-gradient(135deg,#2d78b4,#1a5a94); }
        .ca-title-group h2 { font-family:'DM Serif Display',serif;font-size:34px;color:var(--dark);margin-bottom:6px; }
        .ca-title-group .ca-subtitle { color:var(--muted);font-size:15px;font-weight:400; }
        .ca-tag-label { display:inline-block;background:var(--purple);color:#fff;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 12px;border-radius:4px;margin-bottom:10px; }
        .ca-desc { font-size:15px;line-height:1.75;color:#444;margin-bottom:32px; }
        .ca-features { display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:40px; }
        .ca-feature-card { background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;transition:box-shadow .3s,border-color .3s,transform .3s;position:relative;overflow:hidden; }
        .ca-feature-card::before { content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at center,rgba(120,50,180,.06),transparent 60%);opacity:0;transition:opacity .4s; }
        .ca-feature-card:hover::before { opacity:1; }
        .ca-feature-card:hover { box-shadow:0 8px 32px rgba(120,50,180,.12);border-color:rgba(120,50,180,.3);transform:translateY(-3px); }
        .ca-panel.active .ca-feature-card:nth-child(1) { animation:caCardIn .5s 0.05s both; }
        .ca-panel.active .ca-feature-card:nth-child(2) { animation:caCardIn .5s 0.15s both; }
        .ca-panel.active .ca-feature-card:nth-child(3) { animation:caCardIn .5s 0.25s both; }
        .ca-panel.active .ca-feature-card:nth-child(4) { animation:caCardIn .5s 0.35s both; }
        @keyframes caCardIn { from{opacity:0;transform:translateY(20px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        .ca-fc-icon { font-size:28px;margin-bottom:12px; }
        .ca-feature-card h4 { font-size:14px;font-weight:700;margin-bottom:8px;color:var(--dark); }
        .ca-feature-card p { font-size:13px;color:var(--muted);line-height:1.5; }
        .ca-info-strip { display:flex;gap:0;border-top:1px solid var(--border);border-bottom:1px solid var(--border); }
        .ca-info-item { flex:1;padding:20px 16px;text-align:center;border-right:1px solid var(--border); }
        .ca-info-item:last-child { border-right:none; }
        .ca-info-label { font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px; }
        .ca-info-val { font-size:16px;font-weight:700;color:var(--dark); }
        @media (max-width:900px) {
          .ca-page-body { grid-template-columns:1fr; }
          .ca-sidebar { position:static; }
          .ca-content { padding:32px 24px; }
          .ca-hero-content { padding:0 24px 40px; }
          .ca-hero-badge { left:24px; }
          .ca-breadcrumb { right:24px; }
          .ca-info-strip { flex-wrap:wrap; }
          .ca-info-item { min-width:50%; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />

      <div className="ca-page">
        <canvas ref={canvasRef} className="ca-bg-canvas" />
        <div className="ca-orb ca-orb1" />
        <div className="ca-orb ca-orb2" />
        <div className="ca-orb ca-orb3" />

        {/* HERO */}
        <section className="ca-hero">
          <div className="ca-hero-particles" id="caHeroParticles" />
          <div className="ca-hero-badge"><span />&nbsp;Campus · Activities</div>
          <div className="ca-breadcrumb">
            <a href="/">Home</a><span className="ca-breadcrumb-sep">›</span>
            <a href="/campus-life">Campus Life</a><span className="ca-breadcrumb-sep">›</span>
            <span style={{ color: "#fff" }}>Clubs &amp; Activities</span>
          </div>
          <div className="ca-hero-content">
            <div className="ca-hero-tag">
              <span className="ca-tag-campus">Campus</span>
              <span className="ca-tag-dot" />
              <span className="ca-tag-sub">Activities</span>
            </div>
            <h1>CLUBS &amp;<br />ACTIVITIES</h1>
            <p>From coding marathons to cultural fests — discover passion beyond the classroom in AIET&apos;s vibrant club ecosystem.</p>
            <button className="ca-btn-explore" onClick={handleExplore}>
              <svg viewBox="0 0 10 10"><polygon points="0,0 10,5 0,10" /></svg>
              Explore Clubs
            </button>
          </div>
        </section>

        {/* PAGE BODY */}
        <div className="ca-page-body page-body">
          <aside className="ca-sidebar">
            <div className="ca-sidebar-label">Browse</div>
            <div className="ca-sidebar-title">All Clubs</div>
            <div>
              <div className={`ca-nav-item ${active === "technical" ? "active" : ""}`} onClick={() => setActive("technical")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                Technical Clubs
                <span className="ca-nav-arrow">›</span>
              </div>
              <div className={`ca-nav-item ${active === "cultural" ? "active" : ""}`} onClick={() => setActive("cultural")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                Cultural &amp; Arts
                <span className="ca-nav-arrow">›</span>
              </div>
              <div className={`ca-nav-item ${active === "service" ? "active" : ""}`} onClick={() => setActive("service")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                Service &amp; Outreach
                <span className="ca-nav-arrow">›</span>
              </div>
              <div className={`ca-nav-item ${active === "sports-clubs" ? "active" : ""}`} onClick={() => setActive("sports-clubs")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                Sports Clubs
                <span className="ca-nav-arrow">›</span>
              </div>
            </div>
            <div className="ca-sidebar-icon">🎪</div>
            <div className="ca-sidebar-pride">Vibrant Campus Culture</div>
          </aside>

          <main className="ca-content">

            {/* TECHNICAL */}
            <div className={`ca-panel ${active === "technical" ? "active" : ""}`}>
              <div className="ca-panel-header">
                <div className="ca-icon-wrap ca-icon-tech">💻</div>
                <div className="ca-title-group">
                  <span className="ca-tag-label">Coding · AI · Robotics</span>
                  <h2>Technical Clubs</h2>
                  <p className="ca-subtitle">Innovation through code, circuits &amp; computation</p>
                </div>
              </div>
              <p className="ca-desc">
                AIET&apos;s technical clubs are the heartbeat of campus innovation. From competitive programming and hackathons to robotics championships and AI research, these clubs bridge classroom theory with real-world tech. Students build autonomous systems, develop full-stack apps, train ML models, and compete nationally — gaining portfolios and skills that top employers value.
              </p>
              <div className="ca-features">
                <div className="ca-feature-card"><div className="ca-fc-icon">🤖</div><h4>Robotics Club</h4><p>120+ members building autonomous systems, competing in national robot combat events.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">👨‍💻</div><h4>Coding Club</h4><p>250+ members. 24-hour hackathons, algorithm challenges &amp; open-source contributions.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🧠</div><h4>AI &amp; ML Society</h4><p>Neural networks, Kaggle competitions, CoreML projects &amp; AI ethics debates.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🔐</div><h4>Cybersecurity Club</h4><p>CTF tournaments, penetration testing, security awareness &amp; certification paths.</p></div>
              </div>
              <div className="ca-info-strip">
                <div className="ca-info-item"><div className="ca-info-label">Clubs</div><div className="ca-info-val">5 Active</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Members</div><div className="ca-info-val">550+</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Events/Year</div><div className="ca-info-val">25+</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Awards</div><div className="ca-info-val">40+ National</div></div>
              </div>
            </div>

            {/* CULTURAL */}
            <div className={`ca-panel ${active === "cultural" ? "active" : ""}`}>
              <div className="ca-panel-header">
                <div className="ca-icon-wrap ca-icon-cultural">🎭</div>
                <div className="ca-title-group">
                  <span className="ca-tag-label">Drama · Music · Fine Arts</span>
                  <h2>Cultural &amp; Arts</h2>
                  <p className="ca-subtitle">Creativity, expression &amp; storytelling</p>
                </div>
              </div>
              <p className="ca-desc">
                AIET&apos;s cultural clubs nurture the creative spirit of every student. The Drama &amp; Theater Club stages powerful productions, the Music Society fills the campus with melody, the Photography Club captures moments through the lens, and the Fine Arts Club brings visual imagination to life. These spaces build confidence, empathy, and creative thinking.
              </p>
              <div className="ca-features">
                <div className="ca-feature-card"><div className="ca-fc-icon">🎵</div><h4>Music Society</h4><p>100+ musicians. Acoustic nights, battle of bands, vocal workshops &amp; studio recording.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🎭</div><h4>Drama &amp; Theater</h4><p>55 members staging everything from classical dramas to experimental street plays.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">📸</div><h4>Photography Club</h4><p>70 visual storytellers. Photo walks, editing labs &amp; annual exhibitions.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🎨</div><h4>Fine Arts Club</h4><p>Painting, sketching, sculpture &amp; digital art workshops throughout the year.</p></div>
              </div>
              <div className="ca-info-strip">
                <div className="ca-info-item"><div className="ca-info-label">Clubs</div><div className="ca-info-val">4 Active</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Members</div><div className="ca-info-val">265+</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Productions</div><div className="ca-info-val">8/Year</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Fest</div><div className="ca-info-val">Annual Cultural</div></div>
              </div>
            </div>

            {/* SERVICE */}
            <div className={`ca-panel ${active === "service" ? "active" : ""}`}>
              <div className="ca-panel-header">
                <div className="ca-icon-wrap ca-icon-service">🤝</div>
                <div className="ca-title-group">
                  <span className="ca-tag-label">NSS · NCC · Eco</span>
                  <h2>Service &amp; Outreach</h2>
                  <p className="ca-subtitle">Building responsible citizens through social impact</p>
                </div>
              </div>
              <p className="ca-desc">
                AIET encourages every student to give back to the community. The NSS Wing organizes health camps, literacy drives, and rural development projects. The NCC Battalion instils discipline, patriotism, and leadership. The Eco Club champions sustainability with tree plantation drives and awareness campaigns. The Debate Society sharpens critical thinking for responsible civic participation.
              </p>
              <div className="ca-features">
                <div className="ca-feature-card"><div className="ca-fc-icon">🪖</div><h4>NCC Battalion</h4><p>150+ cadets. Republic Day parades, adventure camps, and leadership training.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🌿</div><h4>NSS Wing</h4><p>200+ volunteers. Blood donation drives, rural camps &amp; community health projects.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">♻️</div><h4>Eco Club</h4><p>Tree plantation drives, plastic-free campus campaigns &amp; environmental awareness.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🗣️</div><h4>Debate Society</h4><p>45 members. MUN, parliamentary debates &amp; inter-college championships.</p></div>
              </div>
              <div className="ca-info-strip">
                <div className="ca-info-item"><div className="ca-info-label">Volunteers</div><div className="ca-info-val">400+</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Camps</div><div className="ca-info-val">12/Year</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Trees Planted</div><div className="ca-info-val">2,000+</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Blood Drives</div><div className="ca-info-val">4/Year</div></div>
              </div>
            </div>

            {/* SPORTS CLUBS */}
            <div className={`ca-panel ${active === "sports-clubs" ? "active" : ""}`}>
              <div className="ca-panel-header">
                <div className="ca-icon-wrap ca-icon-sports">⚽</div>
                <div className="ca-title-group">
                  <span className="ca-tag-label">Cricket · Football · Athletics</span>
                  <h2>Sports Clubs</h2>
                  <p className="ca-subtitle">Compete, train &amp; achieve sporting excellence</p>
                </div>
              </div>
              <p className="ca-desc">
                AIET&apos;s sports clubs provide professional coaching, championship-level facilities, and regular inter-college tournament participation. From Cricket and Football to Badminton and Athletics, students train with certified coaches on dedicated grounds, building fitness, discipline, and teamwork alongside their academic journey.
              </p>
              <div className="ca-features">
                <div className="ca-feature-card"><div className="ca-fc-icon">🏏</div><h4>Cricket Club</h4><p>Inter-college tournaments, net practice sessions &amp; professional coaching staff.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">⚽</div><h4>Football Club</h4><p>Regular league matches, fitness drills &amp; state-level competition participation.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🏸</div><h4>Badminton Club</h4><p>Indoor courts, ranking tournaments &amp; coaching for district-level competition.</p></div>
                <div className="ca-feature-card"><div className="ca-fc-icon">🏃</div><h4>Athletics Club</h4><p>Track &amp; field, cross-country running &amp; annual sports day championships.</p></div>
              </div>
              <div className="ca-info-strip">
                <div className="ca-info-item"><div className="ca-info-label">Sports</div><div className="ca-info-val">10+ Disciplines</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Athletes</div><div className="ca-info-val">300+</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Tournaments</div><div className="ca-info-val">15/Year</div></div>
                <div className="ca-info-item"><div className="ca-info-label">Coaches</div><div className="ca-info-val">Professional</div></div>
              </div>
            </div>

          </main>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var c = document.getElementById('caHeroParticles');
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
