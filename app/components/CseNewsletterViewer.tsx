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
  MdClose,
  MdFileDownload,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import "./NewsletterViewer.css";

// Configure pdfjs worker
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

const newsletters = [
  {
    year: "2025-26",
    semesters: [
      { name: "Odd", path: "/enewsletter-cse/2025-26/odd.pdf" },
      { name: "Even", path: "/enewsletter-cse/2025-26/even.pdf" },
    ],
  },
  {
    year: "2024-25",
    semesters: [
      { name: "Odd", path: "/enewsletter-cse/2024-25/odd.pdf" },
      { name: "Even", path: "/enewsletter-cse/2024-25/even.pdf" },
    ],
  },
  {
    year: "2023-24",
    semesters: [
      { name: "Odd", path: "/enewsletter-cse/2023-24/odd.pdf" },
      { name: "Even", path: "/enewsletter-cse/2023-24/even.pdf" },
    ],
  },
];

interface PageProps {
  pageNumber: number;
}

const PageContent = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <Page
          pageNumber={props.pageNumber}
          width={500}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          loading={<div className="page-loading">...</div>}
        />
        <div className="page-footer">{props.pageNumber}</div>
      </div>
    </div>
  );
});

PageContent.displayName = "PageContent";

export default function CseNewsletterViewer() {
  const router = useRouter();
  const [activeYear, setActiveYear] = useState(newsletters[0].year);
  const [activeSemester, setActiveSemester] = useState(
    newsletters[0].semesters[0].name,
  );
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeNewsletterGroup = newsletters.find((n) => n.year === activeYear);
  const activeNewsletter = activeNewsletterGroup?.semesters.find(
    (s) => s.name === activeSemester,
  );

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoaded(true);
  }

  // Handle zoom when fullscreen changes
  useEffect(() => {
    if (isFullscreen) {
      setZoom(1.2);
    } else {
      setZoom(1);
    }
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
      setActiveYear(year);
      // Reset semester to Odd by default when year changes
      setActiveSemester(
        newsletters.find((n) => n.year === year)?.semesters[0].name || "Odd",
      );
      setPageNumber(1);
      setZoom(1);
    }
  };

  const handleSemesterChange = (semester: string) => {
    if (semester !== activeSemester) {
      setIsLoaded(false);
      setActiveSemester(semester);
      setPageNumber(1);
      setZoom(1);
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
          router.push("/academics/cse/explore");
        })
        .catch(() => {
          router.push("/academics/cse/explore");
        });
    } else {
      router.push("/academics/cse/explore");
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6));

  const handleDownload = () => {
    if (activeNewsletter) {
      const link = document.createElement("a");
      link.href = activeNewsletter.path;
      link.download =
        activeNewsletter.path.split("/").pop() || "newsletter.pdf";
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
      <div className="year-tabs" style={{ marginBottom: "10px" }}>
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

      {/* Semester Tabs */}
      <div className="year-tabs" style={{ marginTop: "0" }}>
        {activeNewsletterGroup?.semesters.map((s) => (
          <button
            key={s.name}
            className={`year-tab-btn ${activeSemester === s.name ? "active" : ""}`}
            onClick={() => handleSemesterChange(s.name)}
            style={{ fontSize: "0.9em", padding: "6px 12px" }}
          >
            {s.name} Semester
          </button>
        ))}
      </div>

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
        {!isLoaded && (
          <div className="paper-loader-overlay">
            <div className="book-loader">
              <div className="book-page"></div>
              <div className="book-page"></div>
              <div className="book-page"></div>
            </div>
            <p className="loading-text">Preparing Pages...</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          className="newsletter-nav-btn newsletter-nav-btn-prev"
          onClick={prevPage}
          disabled={pageNumber <= 1}
        >
          <FaChevronLeft />
        </button>
        <button
          className="newsletter-nav-btn newsletter-nav-btn-next"
          onClick={nextPage}
          disabled={pageNumber >= numPages}
        >
          <FaChevronRight />
        </button>

        <div
          className="magazine-frame"
          style={{
            transform: `scale(${zoom})`,
            transition: "transform 0.3s ease",
          }}
        >
          <Document
            file={activeNewsletter?.path}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={null}
            onLoadError={(error) => {
              console.error("Failed to load PDF", error);
              // Handle error silently or show a message
            }}
          >
            {isLoaded && (
              <HTMLFlipBook
                width={500}
                height={700}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="flipbook"
                ref={bookRef}
                style={{}}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={false}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <PageContent
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ))}
              </HTMLFlipBook>
            )}
          </Document>
          {!isLoaded && numPages === 0 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#666",
              }}
            >
              PDF not found or loading...
            </div>
          )}
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="control-toolbar">
        <div className="toolbar-page-info">
          {pageNumber} / {numPages || 1}
        </div>

        <div className="toolbar-divider" />

        <div className="toolbar-group">
          <button
            className="toolbar-btn"
            onClick={handleDownload}
            title="Download PDF"
          >
            <MdFileDownload />
          </button>
          <button
            className="toolbar-btn"
            onClick={handleZoomIn}
            title="Zoom In"
          >
            <MdZoomIn />
          </button>
          <button
            className="toolbar-btn"
            onClick={handleZoomOut}
            title="Zoom Out"
          >
            <MdZoomOut />
          </button>
          <button
            className="toolbar-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
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
