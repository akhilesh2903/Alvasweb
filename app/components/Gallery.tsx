"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Gallery.css";
// Footer removed from Gallery to avoid duplicate footers on pages

const GENERAL_IMAGES = [
  "https://drive.google.com/uc?export=view&id=1m2WBwb6jPhAIIQY6_iOT3zUEMoPUNs1r",
  "https://drive.google.com/uc?export=view&id=1qSjGRKUWd7Ut5dMDUPeP5yHj7_esV1Q2",
  "https://drive.google.com/uc?export=view&id=1diQ-cnIOcqsbvTeK6_pGoPDhCVy1UiMq",
  "https://drive.google.com/uc?export=view&id=1ryfeOyTx_3ZlAhLv0u8Z6fOPMxwqU3He",
  "https://drive.google.com/uc?export=view&id=1Eu6upqX9U3ht9uosTRIo6sC0QwaaN-CJ",
  "https://drive.google.com/uc?export=view&id=1EiklHsVXSi4nY5NKekxUP1OmSVmsorIc",
  "https://drive.google.com/uc?export=view&id=1ILyEqliXsB_OTbeCkr9eac35OwrMMZqH",
  "https://drive.google.com/uc?export=view&id=1mcXKrRQ7gxsdTOC_18By_xUJszsqkcmB",
  "https://drive.google.com/uc?export=view&id=1hKSf2BTnLM9B8H34cFVDhm9V6Wg0YaHt",
  "https://drive.google.com/uc?export=view&id=1vLyXhvO5bGNWtCDjw_GcEDrNXULVs-_m",
  "https://drive.google.com/uc?export=view&id=18zyP6UPl7XzG4fyaUBbsK5oysTtiHawo",
  "https://drive.google.com/uc?export=view&id=11zf832bf03FmM1o6-J9968kpzg3bNlQ3",
  "https://drive.google.com/uc?export=view&id=1GP1idg1ZemDJTHQJN-CnD3lWCnLwXeBY",
  "https://drive.google.com/uc?export=view&id=1aftu6x5uYob7WiVq0Ddt4BDc1g9VDyrU",
].map(url => `/api/image-proxy?url=${encodeURIComponent(url)}`);

const CAMPUS_IMAGES = [
  "https://drive.google.com/uc?export=view&id=1xFd869eQSW50mIzZoQjmd_-oEUrYDSqK",
  "https://drive.google.com/uc?export=view&id=1sCPUwsXQAMWYirR-wnPTgt7KgyIzeRDz",
  "https://drive.google.com/uc?export=view&id=1ldeRwZYL1_qlbVb4q-lfzel0jLVEZ4gS",
  "https://drive.google.com/uc?export=view&id=1iSj6_DiHpC1Fyrf4H9dX1Ipd_Z1VhQC0",
  "https://drive.google.com/uc?export=view&id=1XYbBV0iw_ohASqTqf6JhmyGcG4QoiHG1",
  "https://drive.google.com/uc?export=view&id=1eUNdiIIa2Jg9n75-3BJKSm2Njzot-jf1",
  "https://drive.google.com/uc?export=view&id=1uDce9nrQbNQ8SQIXgxwH7zkz0on5ikNl",
  "https://drive.google.com/uc?export=view&id=1I4yjTfTzf9pDR3ohgbNWLyGEWaRb0fJc",
].map(url => `/api/image-proxy?url=${encodeURIComponent(url)}`);

// Setup Rows and Columns
const row1 = GENERAL_IMAGES.slice(0, 8);
const row2 = [...GENERAL_IMAGES.slice(8, 14), ...GENERAL_IMAGES.slice(0, 2)];
// Cylinder images
const row4 = CAMPUS_IMAGES;
// Vertical columns
const leftColImages = [...GENERAL_IMAGES.slice(2, 12)];
const rightColImages = [...GENERAL_IMAGES.slice(12, 14), ...GENERAL_IMAGES.slice(0, 8)];

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
                <Image src={src} alt={`Campus moment ${idx}`} fill sizes="(max-width: 768px) 50vw, 30vw" className="object-cover" />
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
            className="vertical-card relative"
            onClick={() => onImageClick(src)}
          >
            <Image src={src} alt={`Side moment ${idx}`} fill sizes="(max-width: 768px) 0vw, 20vw" className="object-cover" />
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
              <Image src={src} alt={`Cylinder item ${i}`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
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

      {/* Footer intentionally omitted here; pages should render Footer once */}
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
