"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { iseDepartmentData } from "./iseData";
import { DepartmentActivityEntry, Faculty } from "@/lib/departments";
import dynamic from "next/dynamic";
import IseExploreLoading from "./iseExploreLoading";
import { motion, AnimatePresence } from "framer-motion";
import MobileExploreNav from "@/app/components/MobileExploreNav";
import Footer from "@/app/components/Footer";
import { MdClose } from "react-icons/md";
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
  Trophy,
  GraduationCap,
  Medal,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import NewsletterViewer from "@/app/components/NewsletterViewer";

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

type AchievementCategory = "faculty" | "student";

type FacultyFundingProject = {
  title: string;
  amount: string;
  agency: string;
  guide: string;
  status: string;
  note: string;
};

type FacultyPublication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
};

type StudentInitiative = {
  title: string;
  details: string;
};

type KscstProject = {
  title: string;
  guide: string;
  students: string[];
};

type PlacementYear = "2024-2025" | "2023-2024" | "2022-2023";

type PlacementPoster = {
  id: string;
  imageSrc: string;
};

const drivePosterUrl = (driveId: string) =>
  `/api/image-proxy?url=${encodeURIComponent(
    `https://drive.google.com/uc?export=view&id=${driveId}`,
  )}`;

const iseFacultyFundingProject: FacultyFundingProject = {
  title:
    "Detection of Artificially Ripened Fruits using Spectrometric Techniques",
  amount: "Rs 5 Lakhs",
  agency: "VGST, Government of Karnataka",
  guide: "Dr. Roopalakshmi R",
  status: "Ongoing",
  note: "Certificate reference is available with the department records.",
};

const iseFacultyPublications: FacultyPublication[] = [
  {
    title: "A New Automated Medicine Prescription System for Plant Diseases",
    authors: "K. Sudarshana",
    venue:
      "Proceedings of the International Conference on ISMAC in Computational Vision and Bio-Engineering 2018 (ISMAC-CVB), Lecture Notes in Computational Vision and Biomechanics",
    year: "2019",
  },
  {
    title: "A Survey on Deep Learning Techniques Used for Quality Process",
    authors: "Ms. Vanyashree Mardi",
    venue: "IGI Global",
    year: "2019",
    doi: "10.4018/978-1-5225-7862-8.ch008",
  },
  {
    title: "RFID-Based Smart Traffic Control Framework for Emergency Vehicles",
    authors: "Divya Ravi N",
    venue:
      "Proceedings of the 2nd International Conference on Inventive Communication and Computational Technologies (ICICCT 2018), IEEE Xplore Compliant, CFP18BAC-ART; ISBN: 978-1-5386-1974-2",
    year: "2018",
  },
  {
    title:
      "IoT-Based Framework for Automobile Theft Detection and Driver Identification",
    authors: "Ms. Kaveri B Kari",
    venue:
      "Smys et al. (eds.), International Conference on Computer Networks and Communication Technologies, Lecture Notes on Data Engineering and Communications Technologies 15",
    year: "2019",
    doi: "https://doi.org/10.1007/978-981-10-8681-6_56",
  },
  {
    title:
      "Detection of Chemically Ripened Fruits Based on Visual Features and Non-destructive Sensor Techniques",
    authors: "Dr. Roopalakshmi R",
    venue:
      "Pandian et al. (eds.), Proceedings of the International Conference on ISMAC in Computational Vision and Bio-Engineering 2018 (ISMAC-CVB), Lecture Notes in Computational Vision and Biomechanics 30",
    year: "2019",
    doi: "https://doi.org/10.1007/978-3-030-00665-5_84865",
  },
  {
    title: "Driver Drowsiness Detection System Based on Visual Features",
    authors: "Mr. Jayantkumar A Rathod",
    venue:
      "Proceedings of the 2nd International Conference on Inventive Communication and Computational Technologies (ICICCT 2018), IEEE Xplore Compliant, CFP18BAC-ART; ISBN: 978-1-5386-1974-2",
    year: "2018",
  },
  {
    title: "IoT-Based Patient Remote Health Monitoring in Ambulance Services",
    authors: "Mr. Sharan L Pais",
    venue:
      "Smys et al. (eds.), International Conference on Computer Networks and Communication Technologies, Lecture Notes on Data Engineering and Communications Technologies 15",
    year: "2019",
    doi: "https://doi.org/10.1007/978-981-10-8681-6_38",
  },
  {
    title:
      "Spam Reviews Detection Framework Based on Heterogeneous Information Network",
    authors: "Mrs. Suviksha V Shetty",
    venue:
      "Proceedings of the 2nd International Conference on Inventive Communication and Computational Technologies (ICICCT 2018), IEEE Xplore Compliant, CFP18BAC-ART; ISBN: 978-1-5386-1974-2",
    year: "2018",
  },
  {
    title:
      "A Novel Framework for Automated Energy Meter Reading and Theft Detection",
    authors: "Mrs. Swapnalaxmi K",
    venue:
      "Bhattacharyya et al. (eds.), International Conference on Innovative Computing and Communications, Lecture Notes in Networks and Systems 56",
    year: "2019",
    doi: "https://doi.org/10.1007/978-981-13-2354-6_53",
  },
  {
    title:
      "New Automated Vehicle Crash Avoidance System Based on Dipping and RF Techniques",
    authors: "Mr. Manjunath H R",
    venue: "Hemanth et al. (eds.), ICICI 2018, LNDECT 26, pp. 565-1572",
    year: "2019",
    doi: "https://doi.org/10.1007/978-3-030-03146-6_183",
  },
];

const iseHonorsStudents = [
  "Koushik Achar",
  "Manoj M U",
  "Kelvin Dmello",
  "Pragathi G Gowda",
  "Chandana N M",
  "Anagha Udupa Y N",
];

const iseStudentInitiatives: StudentInitiative[] = [
  {
    title: "Government-recognized crowdfunding portal - Namagagi",
    details:
      "Mohammad Yamin and Mr. Syed Saleha (Final Year ISE), under the guidance of Mr. Pradeep Nayak, Assistant Professor, developed Namagagi. The portal is adopted by the Government of Karnataka through Dakshina Kannada Administration and has mobilized Rs 1.85 lakhs to support government schools with essential resources.",
  },
  {
    title: "Student-led startup - Vithsutra Technologies Pvt. Ltd.",
    details:
      "Mr. Sathwik KD and Mr. Srujan KM (Final Year ISE) are part of Vithsutra Technologies Pvt. Ltd. with products including a Biometric Attendance Monitoring System, an IoT-enabled Dryer and Boiler Monitoring System, and ESP-based Telecommunication and Billing Software.",
  },
];

const iseKscstProjects: KscstProject[] = [
  {
    title: "AgriChain: Blockchain-Enabled Agricultural Supply Chain",
    guide: "Ms. Suma J",
    students: [
      "4AL21IS027 - Manjunath R",
      "4AL21IS049 - Shashidhar Mahadev Patgar",
      "4AL21IS057 - Srujan K M",
      "4AL21IS050 - Shravan R Poojary",
    ],
  },
];

const isePlacementPostersByYear: Record<PlacementYear, PlacementPoster[]> = {
  "2024-2025": [
    {
      id: "1j9xUiCPIRQ3Yixdvpr9oOHiLQzqjuLAx",
      imageSrc: drivePosterUrl("1j9xUiCPIRQ3Yixdvpr9oOHiLQzqjuLAx"),
    },
    {
      id: "1n1CYB4X_KeX0HgcHZnvMnDEmp3RpcI1M",
      imageSrc: drivePosterUrl("1n1CYB4X_KeX0HgcHZnvMnDEmp3RpcI1M"),
    },
    {
      id: "1OHtMC2LpxHL6Z6-2l34FlPplXR1iCnnE",
      imageSrc: drivePosterUrl("1OHtMC2LpxHL6Z6-2l34FlPplXR1iCnnE"),
    },
    {
      id: "1WOsk3F-GLeBIb_PRwHqpc1zx7qzvQCrb",
      imageSrc: drivePosterUrl("1WOsk3F-GLeBIb_PRwHqpc1zx7qzvQCrb"),
    },
    {
      id: "1oE5MJnSN38BomXzedvFFhooxdVAGfXsM",
      imageSrc: drivePosterUrl("1oE5MJnSN38BomXzedvFFhooxdVAGfXsM"),
    },
    {
      id: "1Y-INRKxcLT_ajs5j4xpu8LN_sYbLDHAg",
      imageSrc: drivePosterUrl("1Y-INRKxcLT_ajs5j4xpu8LN_sYbLDHAg"),
    },
    {
      id: "17f5Rag1ytpFvnhCuvA6gOpctgj2NpD7b",
      imageSrc: drivePosterUrl("17f5Rag1ytpFvnhCuvA6gOpctgj2NpD7b"),
    },
    {
      id: "1vm82CSnFYtw6JhAJoy9-TG3p8eOAuByV",
      imageSrc: drivePosterUrl("1vm82CSnFYtw6JhAJoy9-TG3p8eOAuByV"),
    },
    {
      id: "1FvcJQo_CuLE-gMjtU51L8R4MYca9GTrS",
      imageSrc: drivePosterUrl("1FvcJQo_CuLE-gMjtU51L8R4MYca9GTrS"),
    },
    {
      id: "17hPyH5se-wJ3S9eKe_r_cO6mldyHslpT",
      imageSrc: drivePosterUrl("17hPyH5se-wJ3S9eKe_r_cO6mldyHslpT"),
    },
    {
      id: "1dgSliYU3tsa0z3GOfDekiiuuGSAmNwGG",
      imageSrc: drivePosterUrl("1dgSliYU3tsa0z3GOfDekiiuuGSAmNwGG"),
    },
    {
      id: "1kKfKJgLWNJ-jL6JYcF28BrudNCRpnQNq",
      imageSrc: drivePosterUrl("1kKfKJgLWNJ-jL6JYcF28BrudNCRpnQNq"),
    },
  ],
  "2023-2024": [],
  "2022-2023": [],
};

export default function IseExploreContent() {
  const department = iseDepartmentData;

  const [activeTab, setActiveTab] = useState("about");
  const [achievementCategory, setAchievementCategory] =
    useState<AchievementCategory>("faculty");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Faculty Section States
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeActivityIndex, setActiveActivityIndex] = useState<number | null>(
    null,
  );
  const [activePlacementYear, setActivePlacementYear] =
    useState<PlacementYear>("2024-2025");
  const [selectedPlacementPosterIndex, setSelectedPlacementPosterIndex] =
    useState<number | null>(null);
  const posterSliderRef = useRef<HTMLDivElement | null>(null);

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
    if (tabId !== "activities") {
      setActiveActivityIndex(null);
    }
    if (tabId === "achievements") {
      setAchievementCategory("faculty");
    }
  };

  const openFacultyModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setIsFacultyModalOpen(true);
    setOpenAccordion(null);
  };

  const scrollPlacementStrip = (direction: "left" | "right") => {
    if (!posterSliderRef.current) {
      return;
    }
    const step = Math.max(260, posterSliderRef.current.clientWidth * 0.82);
    posterSliderRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
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

  const activePlacementPosters = isePlacementPostersByYear[activePlacementYear];
  const selectedPlacementPoster =
    selectedPlacementPosterIndex !== null
      ? activePlacementPosters[selectedPlacementPosterIndex]
      : null;

  let activeActivity: DepartmentActivityEntry | null = null;
  if (
    (activeTab === "activities" || activeTab === "clubs") &&
    activeActivityIndex !== null &&
    currentData.entries?.[activeActivityIndex]
  ) {
    activeActivity = currentData.entries[
      activeActivityIndex
    ] as DepartmentActivityEntry;
  }

  const renderFacilitiesContent = () => {
    const lines = (department.exploreData?.facilities?.body || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const [heading, ...restLines] = lines;
    const labStartIndex = restLines.findIndex((line) =>
      /^Computer Programming Lab$/i.test(line),
    );
    const introLines =
      labStartIndex >= 0 ? restLines.slice(0, labStartIndex) : restLines;
    const labLines =
      labStartIndex >= 0
        ? restLines.slice(labStartIndex, labStartIndex + 14)
        : [];
    const tailLines =
      labStartIndex >= 0 ? restLines.slice(labStartIndex + 14) : [];

    return (
      <div className="space-y-6 md:space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-[18px] md:text-[20px] font-bold tracking-wide text-gray-900">
            {heading || currentData?.title || "FACILITIES"}
          </h2>
        </div>

        <div className="space-y-4 text-[15px] md:text-[16px] leading-8 text-gray-800 text-justify">
          {introLines.map((line, idx) => (
            <p key={`intro-${idx}`}>{line}</p>
          ))}
        </div>

        {labLines.length > 0 && (
          <ol className="list-decimal marker:text-black space-y-2 pl-6 md:pl-8 text-[15px] md:text-[16px] leading-8">
            {labLines.map((lab, idx) => (
              <li key={`lab-${idx}`} className="font-bold">
                <span className="text-red-600">{lab}</span>
              </li>
            ))}
          </ol>
        )}

        <div className="space-y-4 text-[15px] md:text-[16px] leading-8 text-gray-800 text-justify">
          {tailLines.map((line, idx) => (
            <p key={`tail-${idx}`}>{line}</p>
          ))}
        </div>
      </div>
    );
  };

  if (!isMounted) {
    return <IseExploreLoading />;
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
                ISE Highlights
              </div>
            </div>
            <Link
              href="/academics/ise"
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
          {/* LEFT SIDE: Sidebar (Desktop) / Hamburger Menu (Mobile) */}
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
          <section className="lg:col-span-9 bg-white border border-gray-300 rounded-3xl p-6 shadow-md overflow-hidden min-h-[600px]">
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
                    <div className="relative inline-block max-w-full">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[clamp(1.05rem,2.15vw,2.15rem)] font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-none uppercase whitespace-nowrap"
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
                            className="text-gray-700 text-[0.95rem] md:text-base lg:text-lg leading-relaxed font-medium mb-4"
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

                    {activeTab === "facilities" ? (
                      renderFacilitiesContent()
                    ) : activeTab === "facultyStaff" ? (
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
                                  className="w-full h-[320px] object-cover object-top rounded-[2rem] shadow-xl relative z-10 border-4 border-white"
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
                                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
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
                            data={[]}
                            backPath="/academics/ise/explore"
                            departmentName="ISE"
                          />
                        ) : activeTab === "syllabus" ? (
                          <SyllabusViewer
                            syllabusLinks={currentData.syllabusLinks}
                            syllabusCategories={currentData.syllabusCategories}
                          />
                        ) : activeTab === "placements" ? (
                          <div className="space-y-8">
                            <p className="text-gray-700 text-se md:text-lg leading-relaxed font-medium"></p>

                            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-emerald-50/40 p-4 md:p-6">
                              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-emerald-700">
                                    Placement Archive
                                  </p>
                                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1">
                                    ISE Placed Students Posters
                                  </h3>
                                </div>

                                <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 gap-1.5 w-full md:w-auto">
                                  {(
                                    [
                                      "2024-2025",
                                      "2023-2024",
                                      "2022-2023",
                                    ] as PlacementYear[]
                                  ).map((year) => (
                                    <button
                                      key={year}
                                      type="button"
                                      onClick={() => {
                                        setActivePlacementYear(year);
                                        setSelectedPlacementPosterIndex(null);
                                      }}
                                      className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all ${
                                        activePlacementYear === year
                                          ? "bg-emerald-600 text-white shadow"
                                          : "bg-transparent text-gray-700 hover:bg-white"
                                      }`}
                                    >
                                      {year}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {activePlacementPosters.length > 0 ? (
                              <section className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
                                <div className="px-5 py-4 bg-gradient-to-r from-emerald-50 to-cyan-50 border-b border-gray-200 flex items-center justify-between gap-3">
                                  <div>
                                    <h4 className="text-lg font-black text-gray-900">
                                      Placed Students - {activePlacementYear}
                                    </h4>
                                    <p className="text-xs font-bold text-gray-600 mt-1">
                                      Total posters:{" "}
                                      {activePlacementPosters.length}
                                    </p>
                                  </div>

                                  <div className="hidden sm:flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        scrollPlacementStrip("left")
                                      }
                                      className="w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-800 hover:bg-emerald-50 transition flex items-center justify-center"
                                      aria-label="Scroll posters left"
                                    >
                                      <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        scrollPlacementStrip("right")
                                      }
                                      className="w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-800 hover:bg-emerald-50 transition flex items-center justify-center"
                                      aria-label="Scroll posters right"
                                    >
                                      <ChevronRight className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>

                                <div
                                  ref={posterSliderRef}
                                  className="p-5 overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-thin"
                                >
                                  {activePlacementPosters.map((poster, idx) => (
                                    <button
                                      key={poster.id}
                                      type="button"
                                      onClick={() =>
                                        setSelectedPlacementPosterIndex(idx)
                                      }
                                      className="shrink-0 w-[250px] sm:w-[290px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all text-left snap-start group"
                                    >
                                      <div className="relative h-[340px] bg-gray-100">
                                        <img
                                          src={poster.imageSrc}
                                          alt={`Placed student poster ${idx + 1}`}
                                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                          loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-3">
                                          <p className="text-[11px] font-black tracking-widest uppercase text-white/80">
                                            {activePlacementYear}
                                          </p>
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </section>
                            ) : (
                              <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                                <p className="text-lg font-black text-gray-800">
                                  No posters uploaded for {activePlacementYear}
                                </p>
                                <p className="text-sm font-semibold text-gray-600 mt-2">
                                  Posters for this academic year will be added
                                  soon.
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (activeTab === "activities" ||
                            activeTab === "clubs") &&
                          currentData?.entries &&
                          currentData.entries.length > 0 ? (
                          <div className="space-y-8">
                            {currentData?.body?.trim() && (
                              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {currentData.body}
                              </p>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {currentData.entries.map(
                                (activity: DepartmentActivityEntry, idx) => (
                                  <motion.button
                                    key={`${activity.title}-${idx}`}
                                    type="button"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.25,
                                      delay: idx * 0.03,
                                    }}
                                    onClick={() =>
                                      setActiveActivityIndex((prev) =>
                                        prev === idx ? null : idx,
                                      )
                                    }
                                    aria-expanded={activeActivityIndex === idx}
                                    className="text-left group"
                                  >
                                    <div
                                      className={`relative ${
                                        activeTab === "clubs" ? "h-56" : "h-48"
                                      } rounded-[2rem] overflow-hidden border border-gray-200 bg-gray-100 shadow-sm`}
                                    >
                                      {activity.coverImage?.src ? (
                                        <img
                                          src={activity.coverImage.src}
                                          alt={
                                            activity.coverImage.alt ||
                                            activity.title
                                          }
                                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                          loading="lazy"
                                        />
                                      ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100" />
                                      )}

                                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

                                      <div className="absolute top-0 left-0 right-0 p-4">
                                        <h3 className="text-white text-base md:text-lg font-black leading-snug">
                                          {activity.title}
                                        </h3>
                                      </div>

                                      {activity.tags?.length ? (
                                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
                                          {activity.tags
                                            .slice(0, 3)
                                            .map((tag) => (
                                              <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-black uppercase tracking-widest text-gray-800"
                                              >
                                                {tag}
                                              </span>
                                            ))}
                                        </div>
                                      ) : null}
                                    </div>
                                  </motion.button>
                                ),
                              )}
                            </div>
                          </div>
                        ) : activeTab === "achievements" ? (
                          <div className="space-y-8">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                              The accomplishments of students and faculty
                              reflect the department&apos;s academic strength,
                              innovation culture, and collaborative ecosystem.
                              This section presents notable achievements in
                              research, academics, innovation, and social impact
                              initiatives.
                            </p>

                            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-indigo-50/40 p-4 md:p-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-indigo-700">
                                    Achievement Explorer
                                  </p>
                                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1">
                                    ISE Department Performance Highlights
                                  </h3>
                                </div>

                                <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 gap-1.5 w-full md:w-auto">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setAchievementCategory("faculty")
                                    }
                                    className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all ${
                                      achievementCategory === "faculty"
                                        ? "bg-indigo-600 text-white shadow"
                                        : "bg-transparent text-gray-700 hover:bg-white"
                                    }`}
                                  >
                                    Faculty Achievement
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setAchievementCategory("student")
                                    }
                                    className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all ${
                                      achievementCategory === "student"
                                        ? "bg-indigo-600 text-white shadow"
                                        : "bg-transparent text-gray-700 hover:bg-white"
                                    }`}
                                  >
                                    Student Achievement
                                  </button>
                                </div>
                              </div>
                            </div>

                            {achievementCategory === "faculty" ? (
                              <>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-indigo-600">
                                      Funding Projects
                                    </p>
                                    <p className="text-2xl font-black text-indigo-900 mt-2">
                                      1
                                    </p>
                                  </div>
                                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-amber-700">
                                      Publications Listed
                                    </p>
                                    <p className="text-2xl font-black text-amber-900 mt-2">
                                      {iseFacultyPublications.length}
                                    </p>
                                  </div>
                                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-emerald-700">
                                      Focus Areas
                                    </p>
                                    <p className="text-sm font-black text-emerald-900 mt-2 leading-relaxed">
                                      Funded research, Springer and IEEE indexed
                                      scholarly output
                                    </p>
                                  </div>
                                </div>

                                <section className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
                                  <div className="px-5 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200 flex items-center justify-between gap-3">
                                    <h4 className="text-lg font-black text-gray-900 flex items-center gap-2.5">
                                      <CalendarDays className="w-5 h-5 text-indigo-700" />
                                      Funded Project
                                    </h4>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-100 text-xs font-black uppercase tracking-wide text-indigo-700">
                                      <Trophy className="w-3.5 h-3.5" />
                                      Ongoing
                                    </span>
                                  </div>
                                  <div className="p-5 space-y-3">
                                    <h5 className="text-lg font-black text-gray-900 leading-snug">
                                      {iseFacultyFundingProject.title}
                                    </h5>
                                    <p className="text-sm font-bold text-indigo-700">
                                      Guide: {iseFacultyFundingProject.guide}
                                    </p>
                                    <p className="text-sm text-gray-700 font-semibold">
                                      Agency: {iseFacultyFundingProject.agency}
                                    </p>
                                    <p className="text-sm text-gray-700 font-semibold">
                                      Funding Amount:{" "}
                                      {iseFacultyFundingProject.amount}
                                    </p>
                                    <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 space-y-1">
                                      <p className="text-sm font-bold text-gray-900">
                                        Status:{" "}
                                        {iseFacultyFundingProject.status}
                                      </p>
                                      <p className="text-sm text-gray-700 font-medium leading-relaxed">
                                        {iseFacultyFundingProject.note}
                                      </p>
                                    </div>
                                  </div>
                                </section>

                                <section className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
                                  <div className="px-5 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                      <BookOpen className="w-5 h-5 text-indigo-700" />
                                      <h4 className="text-lg font-black text-gray-900">
                                        Faculty Publications
                                      </h4>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-100 text-xs font-black uppercase tracking-wide text-indigo-700">
                                      <Trophy className="w-3.5 h-3.5" />
                                      {iseFacultyPublications.length} records
                                    </span>
                                  </div>

                                  <div className="p-4 md:p-5 space-y-4">
                                    {iseFacultyPublications.map((item, idx) => (
                                      <motion.article
                                        key={`${item.title}-${idx}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
                                      >
                                        <p className="text-xs font-black uppercase tracking-widest text-indigo-700">
                                          Publication {idx + 1}
                                        </p>
                                        <h5 className="text-lg font-black text-gray-900 leading-snug mt-2">
                                          {item.title}
                                        </h5>
                                        <p className="text-sm font-bold text-indigo-700 mt-1">
                                          {item.authors}
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-600 font-semibold mt-4 leading-relaxed">
                                          {item.venue}
                                        </p>
                                        <div className="mt-4 rounded-2xl bg-gray-50 border border-gray-100 p-4 space-y-2">
                                          <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                            Year: {item.year}
                                          </p>
                                          {item.doi ? (
                                            <p className="text-sm text-gray-700 font-medium leading-relaxed break-all">
                                              DOI / Link: {item.doi}
                                            </p>
                                          ) : null}
                                        </div>
                                      </motion.article>
                                    ))}
                                  </div>
                                </section>
                              </>
                            ) : (
                              <>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-blue-600">
                                      Honors Degree Awardees
                                    </p>
                                    <p className="text-2xl font-black text-blue-900 mt-2">
                                      {iseHonorsStudents.length}
                                    </p>
                                  </div>
                                  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-purple-600">
                                      Featured Initiatives
                                    </p>
                                    <p className="text-2xl font-black text-purple-900 mt-2">
                                      {iseStudentInitiatives.length}
                                    </p>
                                  </div>
                                  <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-rose-600">
                                      Funded KSCST Projects
                                    </p>
                                    <p className="text-2xl font-black text-rose-900 mt-2">
                                      {iseKscstProjects.length}
                                    </p>
                                  </div>
                                </div>

                                <section className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
                                  <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                      <GraduationCap className="w-5 h-5 text-indigo-700" />
                                      <h4 className="text-lg font-black text-gray-900">
                                        VTU Honors Degree (2024-25)
                                      </h4>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-100 text-xs font-black uppercase tracking-wide text-indigo-700">
                                      <Medal className="w-3.5 h-3.5" />
                                      18 Credits Earned
                                    </span>
                                  </div>
                                  <div className="p-5">
                                    <p className="text-sm text-gray-700 font-semibold leading-relaxed mb-4">
                                      The following Final Year ISE students
                                      earned 18 credits toward the B.E Honors
                                      Degree from VTU, Belagavi for Academic
                                      Year 2024-25.
                                    </p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                      {iseHonorsStudents.map((name) => (
                                        <div
                                          key={name}
                                          className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-gray-900"
                                        >
                                          {name}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </section>

                                <section className="rounded-3xl border border-gray-200 bg-white p-5 md:p-6">
                                  <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-600" />
                                    Student and Startup Initiatives
                                  </h4>
                                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {iseStudentInitiatives.map((item) => (
                                      <article
                                        key={item.title}
                                        className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                                      >
                                        <h5 className="text-base font-black text-gray-900 leading-snug">
                                          {item.title}
                                        </h5>
                                        <p className="text-sm text-gray-700 font-medium leading-relaxed mt-3">
                                          {item.details}
                                        </p>
                                      </article>
                                    ))}
                                  </div>
                                </section>

                                <section className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
                                  <div className="px-5 py-4 bg-gradient-to-r from-rose-50 to-amber-50 border-b border-gray-200">
                                    <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                      <Trophy className="w-5 h-5 text-rose-600" />
                                      KSCST Funded Student Project
                                    </h4>
                                  </div>
                                  <div className="p-5 space-y-6">
                                    {iseKscstProjects.map((project) => (
                                      <article
                                        key={project.title}
                                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                                      >
                                        <h5 className="text-base md:text-lg font-black text-gray-900 leading-snug">
                                          {project.title}
                                        </h5>
                                        <p className="text-sm font-bold text-indigo-700 mt-2">
                                          Guide: {project.guide}
                                        </p>
                                        <div className="mt-4 overflow-x-auto">
                                          <table className="w-full min-w-[520px] text-left border-collapse">
                                            <thead>
                                              <tr className="bg-white border border-gray-200">
                                                <th className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                                  Sl. No
                                                </th>
                                                <th className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                                  USN and Name
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {project.students.map(
                                                (student, idx) => (
                                                  <tr
                                                    key={student}
                                                    className="border-x border-b border-gray-200"
                                                  >
                                                    <td className="px-3 py-3 text-sm font-bold text-gray-900 align-top">
                                                      {idx + 1}
                                                    </td>
                                                    <td className="px-3 py-3 text-sm text-gray-700 font-semibold align-top">
                                                      {student}
                                                    </td>
                                                  </tr>
                                                ),
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </article>
                                    ))}
                                  </div>
                                </section>
                              </>
                            )}
                          </div>
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
      {selectedPlacementPosterIndex !== null && selectedPlacementPoster && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPlacementPosterIndex(null)}
        >
          <div
            className="relative w-[90vw] max-w-xl md:max-w-2xl h-[88vh] max-h-[88vh] overflow-hidden animate-in zoom-in duration-300 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPlacementPosterIndex(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full border border-gray-300 bg-white/95 text-gray-800 hover:bg-white transition flex items-center justify-center z-10"
              aria-label="Close poster popup"
            >
              <MdClose className="w-5 h-5" />
            </button>

            <img
              src={selectedPlacementPoster.imageSrc}
              alt={`Placed student poster ${selectedPlacementPosterIndex + 1}`}
              className="w-full h-full object-contain rounded-2xl bg-white"
              loading="lazy"
            />
          </div>
        </div>
      )}
      {activeActivity && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setActiveActivityIndex(null)}
        >
          <button
            onClick={() => setActiveActivityIndex(null)}
            className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition shadow-2xl z-[10000] border border-gray-100 font-bold text-xl"
          >
            <MdClose className="w-5 h-5" />
          </button>
          <div
            className="bg-white rounded-[2rem] shadow-2xl max-w-6xl w-[96vw] max-h-[90vh] overflow-hidden relative animate-in zoom-in duration-300 scale-95 md:scale-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f8f9fa] p-6 md:p-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  {activeActivity.title}
                </h3>
                {activeActivity.topic && (
                  <p className="text-sm md:text-base font-bold text-indigo-700 mt-2">
                    {activeActivity.topic}
                  </p>
                )}
              </div>

              <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-100">
                <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600">
                  Date
                </span>
                <span className="text-sm font-black text-indigo-900">
                  {activeActivity.date}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 text-sm md:text-[0.95rem]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Venue
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {activeActivity.venue}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Audience
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {activeActivity.audience}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Conducted By
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {activeActivity.conductedBy}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-700">
                  Overview
                </h4>
                <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  {activeActivity.overview}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-5">
                  <h4 className="text-sm font-black uppercase tracking-widest text-indigo-700">
                    Objectives
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {activeActivity.objectives.map((obj, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-800 leading-relaxed font-semibold"
                      >
                        <span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5">
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-700">
                      Impact
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                      {activeActivity.impact}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5">
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-700">
                      Conclusion
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed font-medium whitespace-pre-line break-words">
                      {activeActivity.conclusion}
                    </p>
                  </div>
                </div>
              </div>

              {activeActivity.tags?.length ? (
                <div className="mt-8 flex flex-wrap gap-2">
                  {activeActivity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide border border-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
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
                  className="w-40 h-40 md:w-52 md:h-52 object-cover object-top rounded-full shadow-2xl border-4 border-white relative z-10"
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
                    <div className="p-4 bg-white rounded-xl border border-gray-100 text-sm text-gray-600 leading-relaxed">
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
