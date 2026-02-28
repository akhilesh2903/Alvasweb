'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface CampusItem {
  id: number
  title: string
  subtitle: string
  description: string
  link: string
  image: string
  position: number
}

interface ModalData {
  title: string
  description: string
  image: string
  link: string
}

export default function CampusHighlights() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData>({ title: '', description: '', image: '', link: '' })
  const [isGridActive, setIsGridActive] = useState(false)
  
  const gridRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // --- NEW REFS FOR MANUAL DRAGGING ---
  const cylinderRef = useRef<HTMLDivElement>(null)
  const rotationRef = useRef(0)
  const isDraggingRef = useRef(false)
  const lastXRef = useRef(0)
  const reqRef = useRef<number>(0)

  const campusItems: CampusItem[] = [
    { id: 1, title: "Student Clubs", subtitle: "Life at Alva's", description: "Experience a vibrant campus life filled with cultural diversity, academic excellence, and endless opportunities.", link: "/about", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", position: 0 },
    { id: 2, title: "Skill labs", subtitle: "Laboratories", description: "State-of-the-art innovation labs.", link: "/labs", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800", position: 1 },
    { id: 3, title: "Research", subtitle: "Research", description: "Groundbreaking scientific research.", link: "/research", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", position: 2 },
    { id: 4, title: "Library", subtitle: "Library", description: "Digital and physical resources 24/7.", link: "/library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800", position: 3 },
    { id: 5, title: "Sports", subtitle: "Sports", description: "World-class athletic facilities.", link: "/sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800", position: 4 },
    { id: 6, title: "Culture", subtitle: "Culture", description: "Celebrating diversity and art.", link: "/culture", image: "https://t3.ftcdn.net/jpg/01/54/24/96/360_F_154249693_9G4LPN3ywf3F4ZNuveNRCCPykS8GzjNz.jpg", position: 5 },
    { id: 7, title: "MOU's", subtitle: "Community", description: "Real-world social impact.", link: "/outreach", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800", position: 6 },
    { id: 8, title: "Training", subtitle: "Admissions", description: "Start your journey today.", link: "/admissions", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", position: 7 }
  ]

  // --- CYLINDER CONFIGURATION ---
  const itemCount = campusItems.length;
  const degreesPerItem = 360 / itemCount;
  const cylinderRadius = 300;
  const autoRotateSpeed = 0.1;
  const dragSensitivity = 0.3;

  // --- 1. Auto-Rotate & Drag Loop ---
  useEffect(() => {
    const animateCylinder = () => {
      if (!isDraggingRef.current && cylinderRef.current) {
        rotationRef.current -= autoRotateSpeed;
        cylinderRef.current.style.transform = `translateZ(-${cylinderRadius}px) rotateY(${rotationRef.current}deg)`;
      }
      reqRef.current = requestAnimationFrame(animateCylinder);
    };
    
    reqRef.current = requestAnimationFrame(animateCylinder);
    return () => cancelAnimationFrame(reqRef.current);
  }, [cylinderRadius]);

  // --- 2. Pointer Event Handlers for Dragging ---
  const getClientX = (e: any) => {
    if (e.clientX !== undefined) return e.clientX;
    if (e.touches && e.touches[0]) return e.touches[0].clientX;
    if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].clientX;
    return 0;
  };

  const handlePointerDown = (e: any) => {
    isDraggingRef.current = true;
    lastXRef.current = getClientX(e);
    if (cylinderRef.current) {
      cylinderRef.current.style.cursor = 'grabbing';
    }
  };

  const handlePointerMove = (e: any) => {
    if (!isDraggingRef.current) return;
    const currentX = getClientX(e);
    const deltaX = currentX - lastXRef.current;
    lastXRef.current = currentX;
    
    rotationRef.current += deltaX * dragSensitivity;
    
    if (cylinderRef.current) {
      cylinderRef.current.style.transform = `translateZ(-${cylinderRadius}px) rotateY(${rotationRef.current}deg)`;
    }
  };

  const handlePointerUpOrLeave = () => {
    isDraggingRef.current = false;
    if (cylinderRef.current) {
      cylinderRef.current.style.cursor = 'grab';
    }
  };

  // --- 3. Darkened Background Animation ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let increment = 0
    
    const waves = [
      { y: height * 0.5, length: 0.01, amplitude: 50, speed: 0.01, color: 'rgba(15, 23, 42, 0.12)' },
      { y: height * 0.5, length: 0.02, amplitude: 30, speed: 0.02, color: 'rgba(30, 58, 138, 0.1)' },
      { y: height * 0.55, length: 0.005, amplitude: 80, speed: 0.005, color: 'rgba(17, 24, 39, 0.08)' } 
    ]

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      increment += 0.01
      waves.forEach(wave => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)
        for (let i = 0; i < width; i++) {
          const y = wave.y + Math.sin(i * wave.length + increment * (wave.speed * 100)) * wave.amplitude
          const complexY = y + Math.sin(i * 0.003 + increment) * 20
          ctx.lineTo(i, complexY)
        }
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.fillStyle = wave.color
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // --- 4. Scroll Trigger Logic (Used for Desktop Explosion) ---
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (gridRef.current && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsGridActive(true)
            } else {
              setIsGridActive(false)
            }
          })
        },
        { threshold: 0.3 }
      )
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    }
  }, [])

  const openModal = (item: CampusItem) => {
    if (isDraggingRef.current) return;
    
    setModalData({ title: item.subtitle || item.title, description: item.description, image: item.image, link: item.link })
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
    
      {/* desktop heading outside section */}
      <div className="hidden md:block container mx-auto px-4 relative z-50 mb-12 mt-8">
        <h3 className="text-center font-serif text-5xl font-black text-slate-900 mb-2">
          Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Highlights</span>
        </h3>
        <p className="text-center text-slate-500 text-base">
          Explore the vibrant ecosystem of Alva's
        </p>
      </div>

      <section 
        ref={containerRef}
        id="interactive-grid-container" 
        className="relative min-h-[85vh] md:min-h-screen bg-slate-50 flex flex-col items-center justify-center overflow-hidden w-full max-w-full py-12 md:py-20 font-sans"
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />
        {/* internal bottom fade to blend wave animation */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none z-10" />

        {/* mobile heading inside section */}
        <div className="md:hidden container mx-auto px-4 relative z-50 mb-6">
          <h3 className="text-center font-serif text-3xl font-black text-slate-900 mb-2">
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Highlights</span>
          </h3>
          <p className="text-center text-slate-500 text-sm">
            Explore the vibrant ecosystem of Alva's
          </p>
        </div>

        <div 
          className="md:hidden flex items-center justify-center w-full h-[360px] sm:h-[400px] relative [perspective:1200px] z-10 overflow-hidden touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={(e) => { e.preventDefault(); handlePointerMove(e); }}
          onPointerUp={handlePointerUpOrLeave}
          onPointerLeave={handlePointerUpOrLeave}
          onPointerCancel={handlePointerUpOrLeave}
          onTouchStart={(e) => { e.preventDefault(); handlePointerDown(e as unknown as React.PointerEvent); }}
          onTouchMove={(e) => { e.preventDefault(); handlePointerMove(e as unknown as React.PointerEvent); }}
          onTouchEnd={handlePointerUpOrLeave}
          onTouchCancel={handlePointerUpOrLeave}
        >
          {/* The Wrapper that spins */}
          <div 
            ref={cylinderRef}
            className="absolute w-[200px] h-[300px] sm:w-[240px] sm:h-[340px] [transform-style:preserve-3d] cursor-grab"
            style={{ transform: `translateZ(-${cylinderRadius}px)` }}
          >
            {campusItems.map((item, index) => {
              const rotateAngle = index * degreesPerItem;
              return (
                <div
                  key={`mobile-${item.id}`}
                  onClick={() => openModal(item)}
                  className="absolute top-0 left-0 w-[220px] h-full rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-slate-900 border-2 border-white/10"
                  style={{
                    transform: `rotateY(${rotateAngle}deg) translateZ(${cylinderRadius}px)`,
                    backfaceVisibility: 'hidden', 
                  }}
                >
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left pointer-events-none">
                    <span className="inline-block px-4 py-1.5 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-900 bg-yellow-400 rounded-full shadow-lg">
                      {item.subtitle}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-white leading-tight drop-shadow-md">
                      {item.title}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP VIEW ONLY: Exploding Grid         */}
        {/* ========================================= */}
        <div 
          ref={gridRef}
          id="grid-trigger" 
          className={`hidden md:block relative w-80 h-52 transition-all duration-1000 z-10 ${isGridActive ? 'is-active' : ''}`}
        >
          {/* Main Center Card */}
          <div 
            onClick={() => openModal(campusItems[0])}
            className="card-hover-node absolute inset-0 z-30 overflow-hidden rounded-2xl border-4 border-white shadow-2xl cursor-pointer bg-slate-900"
          >
            <img src={campusItems[0].image} alt={campusItems[0].title} className="w-full h-full object-cover opacity-90 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40">
              <h2 className="font-serif text-xl md:text-3xl text-white font-bold drop-shadow-md text-center">
                Student <span className="text-yellow-400 italic">Clubs</span>
              </h2>
            </div>
          </div>

          {/* Surrounding Cards */}
          {campusItems.slice(1).map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="card-node card-hover-node absolute inset-0 z-10 overflow-hidden rounded-2xl border-2 border-white shadow-lg cursor-pointer transition-all duration-1000 ease-in-out bg-white"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                <span className="text-white font-serif italic font-bold text-xs md:text-lg text-center">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal UI */}
        {isModalOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={closeModal}></div>
             <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl grid md:grid-cols-2 animate-in zoom-in duration-300">
               <button onClick={closeModal} className="absolute top-6 right-6 z-50 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full w-10 h-10 flex items-center justify-center transition shadow-sm">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
               <div className="relative h-64 md:h-full"><img src={modalData.image} alt={modalData.title} className="w-full h-full object-cover" /></div>
               <div className="p-8 md:p-12 flex flex-col justify-center text-left">
                 <h3 className="font-serif italic text-4xl text-slate-900 font-bold mb-4">{modalData.title}</h3>
                 <p className="text-slate-600 mb-8 text-lg leading-relaxed">{modalData.description}</p>
                 <a href={modalData.link} className="inline-flex justify-center items-center rounded-xl bg-slate-900 px-6 py-4 text-white font-bold hover:bg-blue-600 transition shadow-lg">View Full Details →</a>
               </div>
             </div>
           </div>
        )}

        {/* Global & CSS Logic */}
        <style jsx>{`
          :global(html), :global(body) {
            max-width: 100%;
            overflow-x: hidden;
          }

          .touch-pan-y {
            touch-action: none;
          }

          /* Desktop Collapsed transforms via CSS Variables */
          .card-node:nth-child(2) { --tx: -10px; --ty: -10px; --rot: -5deg; z-index: 5; }
          .card-node:nth-child(3) { --tx: 10px; --ty: -5px; --rot: 3deg; z-index: 4; }
          .card-node:nth-child(4) { --tx: -5px; --ty: 10px; --rot: -2deg; z-index: 3; }
          .card-node:nth-child(5) { --tx: 5px; --ty: 5px; --rot: 4deg; z-index: 2; }
          .card-node:nth-child(6) { --tx: 0px; --ty: 0px; --rot: 0deg; z-index: 1; }
          .card-node:nth-child(7) { --tx: -8px; --ty: -8px; --rot: -3deg; z-index: 1; }
          .card-node:nth-child(8) { --tx: 8px; --ty: 8px; --rot: 2deg; z-index: 1; }

          .card-hover-node {
            transform: translate(var(--tx, 0), var(--ty, 0)) rotate(var(--rot, 0)) scale(1);
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          /* Desktop Explosion transforms */
          @media (min-width: 769px) {
            .is-active .card-node:nth-child(2) { --tx: -135%; --ty: -95%; --rot: 0deg; }
            .is-active .card-node:nth-child(3) { --tx: 0%; --ty: -140%; --rot: 0deg; }
            .is-active .card-node:nth-child(4) { --tx: 135%; --ty: -95%; --rot: 0deg; }
            .is-active .card-node:nth-child(5) { --tx: -160%; --ty: 20%; --rot: 0deg; }
            .is-active .card-node:nth-child(6) { --tx: 160%; --ty: 20%; --rot: 0deg; }
            .is-active .card-node:nth-child(7) { --tx: -85%; --ty: 125%; --rot: 0deg; }
            .is-active .card-node:nth-child(8) { --tx: 85%; --ty: 125%; --rot: 0deg; }
          }

          /* Desktop Premium Scale Hover Effect */
          .card-hover-node:hover {
            z-index: 100 !important;
            transform: translate(var(--tx, 0), var(--ty, 0)) rotate(var(--rot, 0)) scale(1.1) !important;
            filter: brightness(1.05);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
          }
          
          .card-hover-node img { transition: transform 0.5s ease; }
          .card-hover-node:hover img { transform: scale(1.1); }
        `}</style>
      </section>

      {/* bottom fade to remove harsh edge */}
      <div className="w-full h-16 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
    </>
  )
}