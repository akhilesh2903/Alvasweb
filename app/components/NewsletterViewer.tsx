"use client";

import React, { useState, useRef, forwardRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  MdZoomIn,
  MdZoomOut,
  MdFullscreen,
  MdFullscreenExit,
  MdVolumeUp,
  MdVolumeOff,
  MdViewList,
  MdGridView,
  MdShare,
  MdClose,
  MdNoteAlt,
  MdFileDownload,
  MdErrorOutline,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import "./NewsletterViewer.css";

// Configure pdfjs worker to use local file for better reliability
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

const newsletters = [
  { year: "2025-26", path: "/enewsletter/Newsletter_2025-26.pdf" },
  { year: "2024-25", path: "/enewsletter/Newsletter_2024-25.pdf" },
  { year: "2023-24", path: "/enewsletter/Newsletter_2023-24.pdf" },
];

export default function NewsletterViewer() {
  const router = useRouter();
  const [activeYear, setActiveYear] = useState(newsletters[0].year);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Dynamic dimensions for the magazine
  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });
  const [pdfRatio, setPdfRatio] = useState(5 / 7); // Default aspect ratio
  const [isMobile, setIsMobile] = useState(false);

  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeNewsletter = newsletters.find((n) => n.year === activeYear);

  const calculateDimensions = () => {
    if (typeof window === "undefined") return;

    const vWidth = window.innerWidth;
    const vHeight = window.innerHeight;
    const mobile = vWidth < 768;
    setIsMobile(mobile);

    let targetWidth, targetHeight;

    if (isFullscreen) {
      // FULLSCREEN: Maximize content, account for sidebar/padding
      // Subtracting 120px width for nav buttons and 80px for toolbar
      const availableHeight = vHeight - 80;
      const availableWidth = vWidth - (mobile ? 40 : 120);

      // Determine if we are limited by height or width
      const totalRatio = mobile ? pdfRatio : pdfRatio * 2;

      if (availableWidth / availableHeight > totalRatio) {
        // Limited by height
        targetHeight = availableHeight;
        targetWidth = targetHeight * pdfRatio;
      } else {
        // Limited by width
        const totalTargetWidth = availableWidth;
        targetWidth = mobile ? totalTargetWidth : totalTargetWidth / 2;
        targetHeight = targetWidth / pdfRatio;
      }
    } else {
      // Standard view: Original behavior (max 500px single page width)
      targetWidth = Math.min(500, (vWidth * 0.95) / (mobile ? 1 : 2));
      targetHeight = targetWidth / pdfRatio;
    }

    setDimensions({
      width: Math.floor(targetWidth),
      height: Math.floor(targetHeight),
    });
  };

  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [isFullscreen, pdfRatio]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoaded(true);
    setLoadError(null);
  }

  function onPageLoadSuccess(page: any) {
    // Detect the actual aspect ratio of the first loaded page
    const { width, height } = page;
    if (width && height) {
      const ratio = width / height;
      if (Math.abs(ratio - pdfRatio) > 0.01) {
        setPdfRatio(ratio);
      }
    }
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF Load Error:", error);
    setLoadError(
      `Failed to load PDF: ${error.message || "Unknown error"}. The file might be missing or corrupted.`,
    );
    setIsLoaded(false);
  }

  // Handle zoom when fullscreen changes
  useEffect(() => {
    setZoom(1);
  }, [isFullscreen]);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlip = (e: any) => {
    setPageNumber(e.data + 1);
  };

  const handleYearChange = (year: string) => {
    if (year !== activeYear) {
      setIsLoaded(false);
      setLoadError(null);
      setActiveYear(year);
      setPageNumber(1);
      setZoom(1);
      setPdfRatio(5 / 7); // Reset ratio for new document
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleClose = () => {
    setIsFullscreen(false);
    setZoom(1);
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => {
          router.push("/academics/ece/explore");
        })
        .catch(() => {
          router.push("/academics/ece/explore");
        });
    } else {
      router.push("/academics/ece/explore");
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6));
  const toggleSound = () => setIsSoundEnabled(!isSoundEnabled);

  const handleDownload = () => {
    if (activeNewsletter) {
      // Direct link download for better Vercel/Production compatibility
      const link = document.createElement("a");
      link.href = activeNewsletter.path;
      link.setAttribute(
        "download",
        activeNewsletter.path.split("/").pop() || "newsletter.pdf",
      );
      link.setAttribute("target", "_blank"); // Fallback to opening in new tab if direct download fails
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
      className={`magazine-container ${isFullscreen ? "fullscreen" : ""}`}
      ref={containerRef}
    >
      {/* Year Tabs */}
      {!isFullscreen && (
        <div className="year-tabs">
          {newsletters.map((n) => (
            <button
              key={n.year}
              className={`year-tab-btn ${activeYear === n.year ? "active" : ""}`}
              onClick={() => handleYearChange(n.year)}
            >
              {n.year}
            </button>
          ))}
        </div>
      )}

      {/* Magazine Viewing Area */}
      <div className="magazine-viewer">
        {isFullscreen && (
          <button
            className="fullscreen-top-close"
            onClick={handleClose}
            title="Close and Return"
          >
            <MdClose />
          </button>
        )}

        {!isLoaded && !loadError && (
          <div className="paper-loader-overlay">
            <div className="book-loader">
              <div className="book-page"></div>
              <div className="book-page"></div>
              <div className="book-page"></div>
            </div>
            <p className="loading-text">Preparing Pages...</p>
          </div>
        )}

        {loadError && (
          <div className="error-display flex flex-col items-center justify-center p-10 text-center text-white">
            <MdErrorOutline className="text-6xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{loadError}</h3>
            <p className="text-gray-400 mb-6 uppercase text-xs tracking-widest font-bold">
              Please check if the file exists in /public/enewsletter/
            </p>
            <button
              onClick={() => handleYearChange(activeYear)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition"
            >
              Retry Loading
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          className="newsletter-nav-btn newsletter-nav-btn-prev"
          onClick={prevPage}
          disabled={pageNumber <= 1 || !!loadError}
          style={{ left: isFullscreen ? "10px" : "30px" }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="newsletter-nav-btn newsletter-nav-btn-next"
          onClick={nextPage}
          disabled={pageNumber >= numPages || !!loadError}
          style={{ right: isFullscreen ? "10px" : "30px" }}
        >
          <FaChevronRight />
        </button>

        <div
          className="magazine-frame"
          style={{
            transform: `scale(${zoom})`,
            transition: "transform 0.3s ease",
            display: loadError ? "none" : "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Document
            file={activeNewsletter?.path}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
          >
            {isLoaded && (
              <HTMLFlipBook
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={dimensions.width}
                maxWidth={2000}
                minHeight={dimensions.height}
                maxHeight={2533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="flipbook"
                ref={bookRef}
                style={{ margin: "0 auto" }}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={isMobile}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div className="page" key={`page_${index + 1}`}>
                    <div className="page-content">
                      <Page
                        pageNumber={index + 1}
                        width={dimensions.width}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        onLoadSuccess={
                          index === 0 ? onPageLoadSuccess : undefined
                        }
                        loading={null}
                      />
                      {!isFullscreen && (
                        <div className="page-footer">{index + 1}</div>
                      )}
                    </div>
                  </div>
                ))}
              </HTMLFlipBook>
            )}
          </Document>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="control-toolbar">
        <div className="toolbar-page-info">
          {pageNumber} / {numPages || 0}
        </div>

        <div className="toolbar-divider" />

        <div className="toolbar-group">
          <button
            className="toolbar-btn"
            onClick={handleDownload}
            title="Download PDF"
            disabled={!!loadError}
          >
            <MdFileDownload />
          </button>
          <button
            className="toolbar-btn"
            onClick={handleZoomIn}
            title="Zoom In"
            disabled={!!loadError}
          >
            <MdZoomIn />
          </button>
          <button
            className="toolbar-btn"
            onClick={handleZoomOut}
            title="Zoom Out"
            disabled={!!loadError}
          >
            <MdZoomOut />
          </button>
          <button
            className="toolbar-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            disabled={!!loadError}
          >
            {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
          </button>
          <button
            className="toolbar-btn close-btn"
            onClick={handleClose}
            title="Close and Explore"
          >
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
}
