"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { eceDepartmentData } from "./eceData";
import { Faculty } from "@/lib/departments";
import dynamic from "next/dynamic";
import EceExploreLoading from "./EceExploreLoading";
import { motion, AnimatePresence } from "framer-motion";
import MobileExploreNav from "@/app/components/MobileExploreNav";
import Footer from "@/app/components/Footer";
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

import {
  Cpu,
  CircuitBoard,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
  CheckCircle2,
  Award,
  Newspaper,
  Bell,
  Sparkles,
  BookOpen,
  Target,
} from "lucide-react";

const SyllabusViewer = dynamic(
  () => import("@/app/components/SyllabusViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 flex items-center justify-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400">
        Loading Syllabus Viewer...
      </div>
    ),
  },
);

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

interface NewsletterViewerProps {
  data?: NewsletterYear[];
  backPath?: string;
  departmentName?: string;
}

function NewsletterViewer({
  data = [],
  backPath = "/",
  departmentName = "Department",
}: NewsletterViewerProps) {
  const router = useRouter();

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

  const [activeYear, setActiveYear] = useState(data[0].year);
  const [activeSemester, setActiveSemester] = useState(
    data[0].semesters[0].name,
  );
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
  }, [isFullscreen, pdfRatio]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoaded(true);
    setLoadError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF Load Error:", error);
    setLoadError(
      `Failed to load PDF. Access to the document might be restricted.`,
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

export default function EceExploreContent() {
  const department = eceDepartmentData;

  const [activeTab, setActiveTab] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Faculty Section States
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    // Show contents
    setIsMounted(true);

    // Set page title
    document.title = `Explore ${department.name} | AIET`;

    // Scroll header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [department.name]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const openFacultyModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setIsFacultyModalOpen(true);
    setOpenAccordion(null);
  };

  const tabs = [
    { id: "about", label: "ABOUT" },
    { id: "thrust", label: "THRUST AREA" },
    { id: "peo", label: "(PEO's, PO's, PSO'S)" },
    { id: "syllabus", label: "SCHEME & SYLLABUS" },
    { id: "placements", label: "PLACEMENT" },
    { id: "research", label: "RESEARCH AND PUBLICATION" },
    { id: "facultyStaff", label: "FACULTY AND STAFF" },
    { id: "facilities", label: "FACILITIES" },
    { id: "workshop", label: "WORKSHOP AND CONFERENCE" },
    { id: "clubs", label: "PROFESSIONAL BODIES" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "activities", label: "DEPARTMENT ACTIVITIES" },
    { id: "newsletter", label: "E-NEWSLETTER" },
  ];

  const currentData = department.exploreData?.[
    activeTab as keyof typeof department.exploreData
  ] || {
    title: "",
    body: "Content not available for this section.",
    highlights: [],
  };

  if (!isMounted) {
    return <EceExploreLoading />;
  }

  return (
    <>
      <style jsx global>{`
        .page-bg {
          background:
            radial-gradient(
              circle at top left,
              rgba(251, 191, 36, 0.12),
              transparent 55%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(59, 130, 246, 0.08),
              transparent 55%
            ),
            linear-gradient(to bottom, #fffbf0, #fef9f3, #fffbf0);
          min-height: 100vh;
          color: #1a1a1a;
        }

        .tab-btn.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(139, 92, 246, 0.6);
          color: #4338ca;
        }

        .content-enter {
          animation: slideInRight 0.5s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .header-scrolled {
          background-color: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(20px) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05) !important;
          padding-top: 8px !important;
          padding-bottom: 8px !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>

      {/* Header */}
      <header
        id="main-header"
        className={`fixed top-0 w-full z-50 text-white pt-4 pb-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-500 ${
          isScrolled ? "header-scrolled" : ""
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          <Link href="/">
            <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer z-50">
              <img
                id="logo-img"
                src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png"
                alt="Alvas Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />

              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-xl md:text-2xl font-black leading-none tracking-tight text-blue-900">
                  ALVA&apos;S
                </h1>
                <span className="text-[8px] md:text-[9px] font-bold tracking-[0.1em] uppercase opacity-90 mt-0.5 text-blue-900">
                  INSTITUTE OF ENGINEERING & TECHNOLOGY
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:block text-right">
              <div className="text-[9px] font-bold tracking-[0.2em] text-blue-900/40 uppercase mb-0.5">
                Explore Page
              </div>
              <div className="font-serif text-xl font-black text-blue-900 leading-none">
                ECE Highlights
              </div>
            </div>
            <Link
              href="/academics/ece"
              className="flex items-center gap-2 bg-[#4f46e5] text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-all duration-300 font-bold text-sm shadow-lg shadow-indigo-200"
            >
              <FaArrowLeft className="text-xs" /> Back
            </Link>
          </div>
        </nav>
      </header>

      {/* Top padding for fixed header */}
      <div className="h-20 md:h-24"></div>

      {/* Main Content */}
      <div className="page-bg">
        <div className="max-w-[1500px] mx-auto px-3 md:px-5 py-10 grid lg:grid-cols-12 gap-6">
          {/* LEFT SIDE: Sidebar (Desktop) / Radial Menu (Mobile) */}
          <aside className="lg:col-span-3">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block bg-white border border-gray-300 rounded-3xl p-4 sticky top-28 shadow-md backdrop-blur-xl max-h-[calc(100vh-9rem)] overflow-y-auto overscroll-contain">
              <h3 className="text-lg font-black text-indigo-700 mb-4">
                Explore Tabs
              </h3>
              <div className="flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn w-full text-left px-4 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 transition font-bold text-gray-900 ${
                      activeTab === tab.id
                        ? "active bg-gray-100"
                        : "bg-gray-100"
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <MobileExploreNav
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
              />
            </div>
          </aside>

          {/* RIGHT SIDE: Content Area */}
          <section className="lg:col-span-9 bg-white border border-gray-300 rounded-3xl p-6 md:p-10 shadow-md min-h-[600px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {activeTab === "about" ? (
                  <div className="space-y-8">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {currentData?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="prose prose-indigo max-w-none">
                      {currentData?.body
                        .split("\n")
                        .filter((p) => p.trim())
                        .map((para, idx) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="text-gray-700 text-lg leading-relaxed font-medium mb-4"
                          >
                            {para}
                          </motion.p>
                        ))}
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                        <Award className="text-indigo-600 w-6 h-6" />
                        KEY HIGHLIGHTS
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentData?.highlights?.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gradient-to-br from-white to-indigo-50/30 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:border-indigo-300 transition-all group"
                          >
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                              {idx === 0 && <Cpu className="w-6 h-6" />}
                              {idx === 1 && (
                                <CircuitBoard className="w-6 h-6" />
                              )}
                              {idx === 2 && <Zap className="w-6 h-6" />}
                              {idx > 2 && <CheckCircle2 className="w-6 h-6" />}
                            </div>
                            <p className="text-gray-700 font-bold text-sm leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : activeTab === "thrust" ? (
                  <div className="space-y-8">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {department.exploreData?.thrust?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {department.exploreData?.thrust?.body}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mt-12">
                      {department.exploreData?.thrust?.highlights?.map(
                        (item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{
                              opacity: 0,
                              x: idx % 2 === 0 ? -20 : 20,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                              scale: 1.02,
                              backgroundColor: "rgba(79, 70, 229, 0.05)",
                            }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm flex items-center gap-6 group hover:border-indigo-300 transition-all"
                          >
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              {idx === 0 && (
                                <CircuitBoard className="w-7 h-7" />
                              )}
                              {idx === 1 && <Lightbulb className="w-7 h-7" />}
                              {idx === 2 && <Cpu className="w-7 h-7" />}
                              {idx === 3 && <Zap className="w-7 h-7" />}
                            </div>
                            <div>
                              <h4 className="text-xl font-black text-gray-900 leading-tight">
                                {item.replace("â€¢\t", "")}
                              </h4>
                            </div>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>
                ) : activeTab === "peo" ? (
                  <div className="space-y-12 pb-10">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {department.exploreData?.peo?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    {/* POs SECTION */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <Target className="text-indigo-600 w-8 h-8" />
                        PROGRAM OUTCOMES (POs)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            const title = rest[0];
                            const description = rest.slice(1).join(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group"
                              >
                                <div className="flex gap-4">
                                  <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center shadow-lg shadow-indigo-200">
                                    {code.trim()}
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors uppercase text-sm mb-1">
                                      {title.trim()}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                      {description.trim()}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>

                    {/* PEOs SECTION */}
                    <div className="space-y-6 pt-6 pt-10 border-t border-gray-100">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <Users className="text-purple-600 w-8 h-8" />
                        PROGRAM EDUCATIONAL OBJECTIVES (PEOs)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PEO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-3xl border border-purple-100 bg-purple-50/30 flex gap-5 group hover:border-purple-300 transition-all"
                              >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center shadow-lg shadow-purple-200">
                                  {code.trim()}
                                </div>
                                <p className="text-sm text-gray-800 font-bold leading-relaxed self-center">
                                  {rest.join(":").trim()}
                                </p>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>

                    {/* PSOs SECTION */}
                    <div className="space-y-6 pt-6 pt-10 border-t border-gray-100">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <ShieldCheck className="text-blue-600 w-8 h-8" />
                        PROGRAM SPECIFIC OUTCOMES (PSOs)
                      </h3>
                      <div className="grid gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PSO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-[2rem] border border-blue-100 bg-blue-50/30 flex gap-6 group hover:border-blue-300 transition-all items-center"
                              >
                                <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                  {code.trim().replace("PSO", "")}
                                </div>
                                <p className="text-base text-gray-800 font-black leading-relaxed">
                                  {rest.join(":").trim()}
                                </p>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-indigo-700 mb-3 uppercase tracking-tight">
                      {currentData?.title || "EXPLORE"}
                    </h2>

                    {activeTab === "facultyStaff" ? (
                      <div className="space-y-12">
                        {/* HOD SECTION */}
                        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-lg relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full blur-3xl -mr-24 -mt-24 opacity-50"></div>
                          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                            <div className="w-full md:w-1/3">
                              <div className="relative">
                                <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-6 scale-95 opacity-20"></div>
                                <img
                                  src={department.hod.photo}
                                  className="w-full h-[320px] object-cover rounded-[2rem] shadow-xl relative z-10 border-4 border-white"
                                  alt={department.hod.name}
                                />
                              </div>
                            </div>
                            <div className="w-full md:w-2/3">
                              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 serif">
                                {department.hod.name}
                              </h2>
                              <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">
                                {department.hod.designation}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs md:text-sm">
                                <div className="space-y-1.5">
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Qualification:
                                    </span>{" "}
                                    {department.hod.qualification}
                                  </p>
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Experience:
                                    </span>{" "}
                                    {department.hod.experience}
                                  </p>
                                </div>
                                <div className="space-y-1.5">
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Email:
                                    </span>{" "}
                                    {department.hod.email}
                                  </p>
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Phone:
                                    </span>{" "}
                                    {department.hod.phone}
                                  </p>
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed italic border-l-4 border-indigo-100 pl-4 mb-6 text-sm">
                                "Welcome to the {department.name} program. We
                                are committed to nurturing technical excellence
                                and professional ethics in our students."
                              </p>
                              <button
                                onClick={() => openFacultyModal(department.hod)}
                                className="bg-gray-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-md text-sm active:scale-95"
                              >
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* FACULTY SECTION */}
                        <div className="relative">
                          <div className="mb-6">
                            <h2 className="text-2xl font-black text-gray-900 serif">
                              Our Expert Faculty
                            </h2>
                            <p className="text-gray-500 font-medium text-sm mt-0.5">
                              Nurturing minds with experience and dedication
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-1">
                            {department.faculty.map(
                              (member: Faculty, i: number) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-[2rem] p-4 shadow-md border border-gray-100/50 hover:shadow-xl transition-all duration-500 group cursor-pointer"
                                  onClick={() => openFacultyModal(member)}
                                >
                                  <div className="relative overflow-hidden rounded-2xl mb-5 aspect-square">
                                    <img
                                      src={member.photo}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                      alt={member.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                  </div>
                                  <h3 className="text-base font-black text-gray-900 serif mb-0.5 group-hover:text-indigo-600 transition-colors">
                                    {member.name}
                                  </h3>
                                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                                    {member.designation}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {activeTab === "newsletter" ? (
                          <NewsletterViewer
                            data={[
                              {
                                year: "2025-26",
                                semesters: [
                                  {
                                    name: "Full Year",
                                    id: "1umDWA61FF3GLJCVCkn39q7qi60a_CU2k",
                                  },
                                ],
                              },
                              {
                                year: "2024-25",
                                semesters: [
                                  {
                                    name: "Full Year",
                                    id: "1BGqP0bRHh4Wu6hg23JKqi3cL-Qpexmf4",
                                  },
                                ],
                              },
                              {
                                year: "2023-24",
                                semesters: [
                                  {
                                    name: "Full Year",
                                    id: "1v_gSrTqgvrhd6F5TI0DncLtGBuE4WhfQ",
                                  },
                                ],
                              },
                            ]}
                            backPath="/academics/ece/explore"
                            departmentName="ECE"
                          />
                        ) : activeTab === "syllabus" ? (
                          <SyllabusViewer
                            syllabusLinks={currentData.syllabusLinks}
                          />
                        ) : (
                          <div
                            className="text-sm md:text-base text-gray-800 leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{
                              __html: currentData?.body || "",
                            }}
                          />
                        )}

                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                              Highlights
                            </p>
                            <p className="font-semibold text-gray-900 mt-2">
                              {currentData?.highlights?.[0] ||
                                "Regular student activities and project-based learning."}
                            </p>
                          </div>

                          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                              Outcome
                            </p>
                            <p className="font-semibold text-gray-900 mt-2">
                              {currentData?.highlights?.[1] ||
                                "Industry-ready skills and strong placement performance."}
                            </p>
                          </div>
                        </div>

                        {currentData?.highlights?.[2] && (
                          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                              Additional Information
                            </p>
                            <p className="font-semibold text-blue-900 mt-2">
                              {currentData.highlights[2]}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* Faculty Modal */}
      {isFacultyModalOpen && selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsFacultyModalOpen(false)}
        >
          <button
            onClick={() => setIsFacultyModalOpen(false)}
            className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition shadow-2xl z-[10000] border border-gray-100 font-bold text-xl"
          >
            &times;
          </button>
          <div
            className="bg-white rounded-[2rem] shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden relative animate-in zoom-in duration-300 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f8f9fa] p-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-indigo-200 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src={selectedFaculty?.photo}
                  className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
                  alt={selectedFaculty?.name}
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 border-b-2 border-gray-900 pb-2 inline-block italic serif">
                  {selectedFaculty?.name}
                </h3>

                <div className="mt-6 space-y-3 font-sans">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Designation
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty?.designation}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Email
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty?.email}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 w-24">
                      Joining date
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedFaculty?.joiningDate || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="flex-1 overflow-y-auto p-6 font-sans"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {[
                { title: "Educational Qualifications", key: "qualifications" },
                { title: "Past Experience", key: "pastExperience" },
                { title: "Areas of Interest", key: "areasOfInterest" },
                { title: "Achievement", key: "achievements" },
                {
                  title: "Professional Membership",
                  key: "professionalMembership",
                },
                { title: "Publications", key: "publications" },
                { title: "Project Guided", key: "projectsGuided" },
                { title: "Subjects Teaching", key: "subjectsTeaching" },
                { title: "Research Publications", key: "researchPublications" },
                { title: "Others", key: "others" },
              ].map((item) => (
                <div key={item.key} className="mb-2">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.key ? null : item.key,
                      )
                    }
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${
                      openAccordion === item.key
                        ? "bg-[#f1f3f5] shadow-sm"
                        : "bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100"
                    }`}
                  >
                    <span className="text-sm font-bold text-gray-700">
                      {item.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openAccordion === item.key ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openAccordion === item.key
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-4 bg-white rounded-xl border border-gray-100 text-sm text-gray-950 leading-relaxed whitespace-pre-line">
                      {selectedFaculty?.details?.[
                        item.key as keyof typeof selectedFaculty.details
                      ] || "Information not available."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}






