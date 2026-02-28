"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // States to handle nested dropdowns (Accordions)
  const [aboutOpen, setAboutOpen] = useState(false);
  const [institutionOpen, setInstitutionOpen] = useState(false);
  const [accreditationOpen, setAccreditationOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [admisionOpen, setAdmisionOpen] = useState(false);
  const [procedureOpen, setProcedureOpen] = useState(false);
  const [feeOpen, setFeeOpen] = useState(false);
  const [scholarshipOpen, setScholarshipOpen] = useState(false);
  // Additional accordions for Academics, Campus Life, Placements
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [ugOpen, setUgOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [basicOpen, setBasicOpen] = useState(false);

  const [campusOpen, setCampusOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [clubsOpen, setClubsOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);

  const [placementsOpen, setPlacementsOpen] = useState(false);

  // Prevent body scroll when menu is open
  if (typeof document !== "undefined") {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 bg-[#000000bf] z-[999] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col pt-20 px-8 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-6 right-8 text-white text-3xl hover:text-[#b77a00] transition-colors"
        onClick={onClose}
      >
        {/* <i className="fas fa-times"></i> */}
      </button>

      <div className="flex flex-col gap-4 text-white text-xl font-bold overflow-y-auto pb-10">
        <Link href="/" onClick={onClose} className="hover:text-[#b77a00] border-b border-white/10 pt-4 pb-2">HOME</Link>

        {/* --- ABOUT SECTION ACCORDION --- */}
        <div className="flex flex-col border-b border-white/10 pb-2">
          <button 
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex justify-between items-center hover:text-[#b77a00] w-full text-left"
          >
            ABOUT
            <i className={`fas fa-chevron-${aboutOpen ? 'up' : 'down'} text-sm`}></i>
          </button>

          {aboutOpen && (
            <div className="flex flex-col gap-3 mt-4 ml-4 text-lg font-semibold animate-in fade-in slide-in-from-top-2">
              
              {/* Institution Sub-Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setInstitutionOpen(!institutionOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  INSTITUTION
                  <i className={`fas fa-chevron-${institutionOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {institutionOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="/about/college" onClick={onClose}>About College</Link>
                    <Link href="/about/vision-mission" onClick={onClose}>Vision Mission</Link>
                    <Link href="/about/milestone" onClick={onClose}>Milestones</Link>
                  </div>
                )}
              </div>

              {/* Accreditations Sub-Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setAccreditationOpen(!accreditationOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  ACCREDITATION
                  <i className={`fas fa-chevron-${accreditationOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {accreditationOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>AICTE</Link>
                    <Link href="#" onClick={onClose}>NBA</Link>
                    <Link href="#" onClick={onClose}>NAAC</Link>
                  </div>
                )}
              </div>

              {/* Mandatory Disclosure Sub-Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setDisclosureOpen(!disclosureOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  MANDATORY DISCLOSURE
                  <i className={`fas fa-chevron-${disclosureOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {disclosureOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>College Info</Link>
                    <Link href="#" onClick={onClose}>Audit Reports</Link>
                  </div>
                )}
              </div>

              <Link href="/about/mou" onClick={onClose} className="text-white/80">MOUs</Link>
            </div>
          )}
        </div>



        {/* --- OTHER LINKS --- */}
        <div className="flex flex-col border-b border-white/10 pb-2">
          <button 
            onClick={() => setAdmisionOpen(!admisionOpen)}
            className="flex justify-between items-center hover:text-[#b77a00] w-full text-left"
          >
            ADMISSION
            <i className={`fas fa-chevron-${admisionOpen ? 'up' : 'down'} text-sm`}></i>
          </button>

          {admisionOpen && (
            <div className="flex flex-col gap-3 mt-4 ml-4 text-lg font-semibold animate-in fade-in slide-in-from-top-2">
              
              {/* Institution Sub-Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setProcedureOpen(!procedureOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  ADMISSION PROCEDURE
                  <i className={`fas fa-chevron-${procedureOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {procedureOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>Admission Through KCET</Link>
                    <Link href="#" onClick={onClose}>Admission Through COMED-K</Link>
                    <Link href="#" onClick={onClose}>Admission Through Management</Link>
                    <Link href="#" onClick={onClose}>Documents Required</Link>
                    <Link href="#" onClick={onClose}>Deaclaimer-Eligibility Criteria</Link>
                  </div>
                )}
              </div>

              {/* Accreditations Sub-Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setFeeOpen(!feeOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  FEES STRUCTURES
                  <i className={`fas fa-chevron-${feeOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {feeOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>KCET Students</Link>
                    <Link href="#" onClick={onClose}>COMED-K Students</Link>
                    <Link href="#" onClick={onClose}>Managements</Link>
                    <Link href="#" onClick={onClose}>Tution Fees 2025-26</Link>
                  </div>
                )}
              </div>

              {/* Mandatory Disclosure Sub-Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setScholarshipOpen(!scholarshipOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  SCHOLARSHIPS
                  <i className={`fas fa-chevron-${scholarshipOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {scholarshipOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>List of Scholarships Scheme</Link>
                    <Link href="#" onClick={onClose}>Scholarships Scheme</Link>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
        {/* ACADEMICS */}
        <div className="flex flex-col border-b border-white/10 pb-2">
          <button
            onClick={() => setAcademicsOpen(!academicsOpen)}
            className="flex justify-between items-center hover:text-[#b77a00] w-full text-left"
          >
            ACADEMICS
            <i className={`fas fa-chevron-${academicsOpen ? 'up' : 'down'} text-sm`}></i>
          </button>

          {academicsOpen && (
            <div className="flex flex-col gap-3 mt-4 ml-4 text-lg font-semibold">
              <div className="flex flex-col">
                <button
                  onClick={() => setUgOpen(!ugOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  UG Programmes
                  <i className={`fas fa-chevron-${ugOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {ugOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>Agriculture Engineering</Link>
                    <Link href="#" onClick={onClose}>Artificial Intelligence & ML</Link>
                    <Link href="#" onClick={onClose}>Computer Science & Engineering</Link>
                    <Link href="#" onClick={onClose}>Civil Engineering</Link>
                    <Link href="#" onClick={onClose}>Electronics & Communication Engg</Link>
                    <Link href="#" onClick={onClose}>Information Science & Engineering</Link>
                    <Link href="#" onClick={onClose}>Mechanical Engineering</Link>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() => setPgOpen(!pgOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  PG Programmes
                  <i className={`fas fa-chevron-${pgOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {pgOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>MBA Programme</Link>
                    <Link href="#" onClick={onClose}>M.Tech</Link>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() => setBasicOpen(!basicOpen)}
                  className="flex justify-between items-center text-white/80"
                >
                  Basic Sciences
                  <i className={`fas fa-chevron-${basicOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                {basicOpen && (
                  <div className="flex flex-col gap-2 ml-4 mt-2 text-white/60 text-base">
                    <Link href="#" onClick={onClose}>Chemistry</Link>
                    <Link href="#" onClick={onClose}>Mathematics</Link>
                    <Link href="#" onClick={onClose}>Physics</Link>
                    <Link href="#" onClick={onClose}>English</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        
        

        <Link href="/placement" onClick={onClose} className="hover:text-[#b77a00] pb-2">PLACEMENT</Link>
        <Link href="/campus-life" onClick={onClose} className="hover:text-[#b77a00] pb-2">CAMPUS LIFE</Link>
        <Link href="/contact" onClick={onClose} className="hover:text-[#b77a00] pb-2">CONTACT US</Link>
      </div>

      <div className="mt-auto pb-10 text-white/30 text-xs uppercase tracking-widest text-center">
        AIET Mijar
      </div>
    </div>
  );
}