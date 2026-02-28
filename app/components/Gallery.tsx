"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import Footer from "./Footer";
import { div } from "framer-motion/client";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c29596ad?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507537362145-59049198642e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&h=400&fit=crop",
];

// Reusing same split logic, plus extra for verticals
const ROW_SIZE = 8;
const row1 = GALLERY_IMAGES.slice(0, ROW_SIZE);
const row2 = GALLERY_IMAGES.slice(ROW_SIZE, ROW_SIZE * 2);
// Cylinder images
const row4 = GALLERY_IMAGES.slice(ROW_SIZE * 2, ROW_SIZE * 2 + 8);
// Vertical columns - reuse some
const leftColImages = GALLERY_IMAGES.slice(0, 10);
const rightColImages = GALLERY_IMAGES.slice(10, 20);

const ROTATIONS = [3, -2, 4, -3, 2, -4, 3, -2];

interface GalleryRowProps {
  images: string[];
  direction: "left" | "right";
  speed: number;
  rowIndex: number;
  onImageClick: (src: string) => void;
}

const GalleryRow: React.FC<GalleryRowProps> = ({
  images,
  direction,
  speed,
  rowIndex,
  onImageClick,
}) => {
  const doubled = [...images, ...images];

  return (
    <div className={`gallery-track-wrapper`}>
      <div
        className={`gallery-track ${direction === "right" ? "track-reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((src, idx) => {
          const rotation = ROTATIONS[idx % ROTATIONS.length];
          return (
            <div
              key={idx}
              className="gallery-card"
              style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
              onClick={() => onImageClick(src)}
            >
              <div className="gallery-card-inner">
                <img src={src} alt={`Campus moment ${idx}`} loading="lazy" />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-label">
                    ALVA&apos;S / MOMENTS
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── VERTICAL COLUMN COMPONENT ───────────────────────
interface GalleryVerticalColumnProps {
  images: string[];
  direction: "up" | "down";
  speed: number;
  onImageClick: (src: string) => void;
}

const GalleryVerticalColumn: React.FC<GalleryVerticalColumnProps> = ({
  images,
  direction,
  speed,
  onImageClick,
}) => {
  const doubled = [...images, ...images]; // Duplicate loop

  return (
    <div className="vertical-col-wrapper">
      <div
        className={`vertical-track ${direction === "up" ? "track-up" : "track-down"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((src, idx) => (
          <div
            key={idx}
            className="vertical-card"
            onClick={() => onImageClick(src)}
          >
            <img src={src} alt={`Side moment ${idx}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

// ── CYLINDER COMPONENT ──────────────────────────────
interface GalleryCylinderProps {
  images: string[];
  onImageClick: (src: string) => void;
}

const GalleryCylinder: React.FC<GalleryCylinderProps> = ({
  images,
  onImageClick,
}) => {
  const radius = 380;
  const angleStep = 360 / images.length;

  return (
    <div className="cylinder-stage">
      <div className="cylinder-rotor">
        {images.map((src, i) => (
          <div
            key={i}
            className="cylinder-item"
            style={
              {
                "--rotateY": `${i * angleStep}deg`,
                "--radius": `${radius}px`,
              } as React.CSSProperties
            }
            onClick={() => onImageClick(src)}
          >
            <div className="cylinder-item-inner">
              <img src={src} alt={`Cylinder item ${i}`} loading="lazy" />
              <div className="cylinder-overlay">
                <span>VIEW</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * 4;
      const tiltY = -dx * 4;
      section.style.setProperty("--tiltX", `${tiltX}deg`);
      section.style.setProperty("--tiltY", `${tiltY}deg`);
    };

    const handleMouseLeave = () => {
      section.style.setProperty("--tiltX", `0deg`);
      section.style.setProperty("--tiltY", `0deg`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <section className="gallery-section" ref={sectionRef}>
        <div className="gallery-bg-waves">
          <div className="wave-blob blob1" />
          <div className="wave-blob blob2" />
          <div className="wave-blob blob3" />
        </div>

        <div className="gallery-container">
          <div className="gallery-header">
            <span className="gallery-subtitle">CAMPUS DIARIES</span>
            <h2 className="gallery-title">GALLERY</h2>
            <div className="title-underline" />
          </div>

          <div className="gallery-3d-stage">
            <GalleryRow
              images={row1}
              direction="left"
              speed={35}
              rowIndex={0}
              onImageClick={setSelectedImage}
            />
          </div>

          {/* Bottom Section Layout: [Left Col] [Cylinder] [Right Col] */}
          <div className="gallery-cols-container">
            {/* Left Vertical Column */}
            <div className="gallery-side-col left-col">
              <GalleryVerticalColumn
                images={leftColImages}
                direction="down"
                speed={40}
                onImageClick={setSelectedImage}
              />
            </div>

            {/* Center Cylinder */}
            <div className="gallery-cylinder-section">
              <GalleryCylinder images={row4} onImageClick={setSelectedImage} />
            </div>

            {/* Right Vertical Column */}
            <div className="gallery-side-col right-col">
              <GalleryVerticalColumn
                images={rightColImages}
                direction="up"
                speed={45}
                onImageClick={setSelectedImage}
              />
            </div>
          </div>
        </div>
        <div>
          <GalleryRow
            images={row2}
            direction="right"
            speed={32}
            rowIndex={1}
            onImageClick={setSelectedImage}
          />
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
