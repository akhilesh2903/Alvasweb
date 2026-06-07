"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
import { Newspaper, Sparkles, Bell } from "lucide-react";

// Configure pdfjs worker
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

export interface NewsletterSemester {
  name: string;
  id: string;
}

export interface NewsletterYear {
  year: string;
  semesters: NewsletterSemester[];
}

export interface NewsletterViewerProps {
  data?: NewsletterYear[];
  backPath?: string;
  departmentName?: string;
  selectedYear?: string;
}

export default function NewsletterViewer({
  data = [],
  backPath = "/",
  departmentName = "Department",
  selectedYear,
}: NewsletterViewerProps) {
  const router = useRouter();

  const [activeYear, setActiveYear] = useState(data?.[0]?.year || "");
  const [activeSemester, setActiveSemester] = useState(
    data?.[0]?.semesters?.[0]?.name || "",
  );

  useEffect(() => {
    if (selectedYear) {
      const yearData = data.find((d) => d.year === selectedYear);
      if (yearData) {
        setActiveYear(selectedYear);
        setActiveSemester(yearData.semesters[0]?.name || "");
        setPageNumber(1);
        setIsLoaded(false);
        setLoadError(null);
      }
    }
  }, [selectedYear, data]);


  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });
  const [pdfRatio, setPdfRatio] = useState(5 / 7);
  const [isMobile, setIsMobile] = useState(false);

  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeYearGroup = data.find((n) => n.year === activeYear);
  const activeNewsletter = activeYearGroup?.semesters.find(
    (s) => s.name === activeSemester,
  );

  const pdfUrl = activeNewsletter?.id
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen, pdfRatio]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoaded(true);
    setLoadError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF Load Error:", error);
    setLoadError(
      "Failed to load PDF. Access to the document might be restricted.",
    );
    setIsLoaded(false);
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

  useEffect(() => {
    setZoom(1);
  }, [isFullscreen]);

  const nextPage = () => bookRef.current?.pageFlip().flipNext();
  const prevPage = () => bookRef.current?.pageFlip().flipPrev();
  const onFlip = (e: any) => setPageNumber(e.data + 1);

  const handleYearChange = (year: string) => {
    if (year !== activeYear) {
      const yearData = data.find((n) => n.year === year);
      setIsLoaded(false);
      setLoadError(null);
      setActiveYear(year);
      setActiveSemester(yearData?.semesters[0].name || "");
      setPageNumber(1);
      setZoom(1);
      setPdfRatio(5 / 7);
    }
  };

  const handleSemesterChange = (semester: string) => {
    if (semester !== activeSemester) {
      setIsLoaded(false);
      setLoadError(null);
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
    if (document.fullscreenElement) {
      document.exitFullscreen().finally(() => router.push(backPath));
    } else {
      router.push(backPath);
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6));

  const hasMultipleYears = data.length > 1;
  const hasMultipleSemesters = (activeYearGroup?.semesters.length || 0) > 1;

  // If no data is provided, show the "Coming Soon" placeholder
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gradient-to-br from-indigo-50/50 to-white rounded-[2.5rem] border border-indigo-100/50 shadow-sm overflow-hidden relative group">
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-indigo-100/30 rounded-full blur-3xl group-hover:bg-indigo-200/40 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl group-hover:bg-purple-200/40 transition-colors duration-700"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl shadow-indigo-100 flex items-center justify-center text-indigo-600 relative z-10">
              <Newspaper className="w-12 h-12" />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-yellow-100 z-20"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-serif">
            Not Yet Uploaded
          </h2>

          <p className="text-gray-500 max-w-md mx-auto mb-10 font-medium leading-relaxed">
            The E-Newsletter for this department has not been uploaded yet. We
            are currently preparing the latest highlights and achievements for
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all cursor-default">
              <Bell className="w-5 h-5" />
              Stay Tuned
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-indigo-50 flex justify-center gap-8 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
            <div className="flex flex-col items-center">
              <div className="w-8 h-1 bg-indigo-200 rounded-full mb-2"></div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                Events
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-1 bg-purple-200 rounded-full mb-2"></div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                Research
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-1 bg-blue-200 rounded-full mb-2"></div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                Awards
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`magazine-container ${isFullscreen ? "fullscreen" : ""}`}
      ref={containerRef}
    >
      {!isFullscreen && (
        <div className="flex flex-col gap-2 mb-4">
          {hasMultipleYears && (
            <div className="year-tabs">
              {data.map((n) => (
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
          {hasMultipleSemesters && (
            <div className="year-tabs">
              {activeYearGroup?.semesters.map((s) => (
                <button
                  key={s.name}
                  className={`year-tab-btn ${activeSemester === s.name ? "active" : ""} ${!s.id ? "disabled opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => s.id && handleSemesterChange(s.name)}
                  disabled={!s.id}
                >
                  {s.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="magazine-viewer">
        {isFullscreen && (
          <button className="fullscreen-top-close" onClick={handleClose}>
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
            <button
              onClick={() => handleSemesterChange(activeSemester)}
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
        >
          <FaChevronLeft />
        </button>
        <button
          className="newsletter-nav-btn newsletter-nav-btn-next"
          onClick={nextPage}
          disabled={pageNumber >= numPages || !!loadError}
        >
          <FaChevronRight />
        </button>

        <div
          className="magazine-frame"
          style={{
            transform: `scale(${zoom})`,
            display: loadError ? "none" : "flex",
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
            title={isFullscreen ? "Exit" : "Full"}
          >
            {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
          </button>
          <button
            className="toolbar-btn close-btn"
            onClick={handleClose}
            title="Close"
          >
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
}
