"use client";

import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  MdZoomIn,
  MdZoomOut,
  MdFullscreen,
  MdFullscreenExit,
  MdClose,
  MdErrorOutline,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import "./NewsletterViewer.css";

// Configure pdfjs worker
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

const newsletters = [
  { year: "2025-26", id: "1umDWA61FF3GLJCVCkn39q7qi60a_CU2k" },
  { year: "2024-25", id: "1BGqP0bRHh4Wu6hg23JKqi3cL-Qpexmf4" },
  { year: "2023-24", id: "1v_gSrTqgvrhd6F5TI0DncLtGBuE4WhfQ" },
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

  // Dynamic dimensions for the magazine
  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });
  const [pdfRatio, setPdfRatio] = useState(5 / 7);
  const [isMobile, setIsMobile] = useState(false);

  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeNewsletter = newsletters.find((n) => n.year === activeYear);

  // Use the local API proxy to avoid CORS issues
  const pdfUrl = activeNewsletter
    ? `/api/pdf-proxy?id=${activeNewsletter.id}`
    : "";

  const calculateDimensions = () => {
    if (typeof window === "undefined") return;

    const vWidth = window.innerWidth;
    const vHeight = window.innerHeight;
    const mobile = vWidth < 768;
    setIsMobile(mobile);

    let targetWidth, targetHeight;

    if (isFullscreen) {
      const availableHeight = vHeight - 80;
      const availableWidth = vWidth - (mobile ? 40 : 120);
      const totalRatio = mobile ? pdfRatio : pdfRatio * 2;

      if (availableWidth / availableHeight > totalRatio) {
        targetHeight = availableHeight;
        targetWidth = targetHeight * pdfRatio;
      } else {
        const totalTargetWidth = availableWidth;
        targetWidth = mobile ? totalTargetWidth : totalTargetWidth / 2;
        targetHeight = targetWidth / pdfRatio;
      }
    } else {
      // Standard view: Subtrack more space for container padding (approx 120px)
      const containerPadding = mobile ? 40 : 140;
      const availableWidth = vWidth - containerPadding;
      targetWidth = Math.min(500, availableWidth / (mobile ? 1 : 2));
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
      `Failed to load PDF. Access to the document might be restricted by CORS.`,
    );
    setIsLoaded(false);
  }

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
      setPdfRatio(5 / 7);
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
    if (document.fullscreenElement) {
      document.exitFullscreen().finally(() => {
        router.push("/academics/ece/explore");
      });
    } else {
      router.push("/academics/ece/explore");
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6));

  return (
    <div
      className={`magazine-container ${isFullscreen ? "fullscreen" : ""}`}
      ref={containerRef}
    >
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
              Check if the Drive link is public and allows direct rendering.
            </p>
            <button
              onClick={() => handleYearChange(activeYear)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition"
            >
              Retry Loading
            </button>
          </div>
        )}

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
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
          >
            {isLoaded && (
              <HTMLFlipBook
                key={isMobile ? "mobile" : "desktop"}
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={dimensions.width}
                maxWidth={2000}
                minHeight={dimensions.height}
                maxHeight={2533}
                maxShadowOpacity={0.5}
                showCover={!isMobile}
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

      <div className="control-toolbar">
        <div className="toolbar-page-info">
          {pageNumber} / {numPages || 0}
        </div>

        <div className="toolbar-divider" />

        <div className="toolbar-group">
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
