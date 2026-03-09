"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaUniversity,
  FaFileContract,
  FaAward,
  FaCheckCircle,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";
import { mandatoryDisclosureData } from "@/lib/mandatoryDisclosureData";
import { motion, AnimatePresence } from "framer-motion";

function MandatoryDisclosureContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const data = mandatoryDisclosureData;

  const tabs = [
    { id: "college-info", label: "College Info", icon: <FaUniversity /> },
    { id: "aicte", label: "AICTE", icon: <FaFileContract /> },
    { id: "nba", label: "NBA", icon: <FaAward /> },
    { id: "naac", label: "NAAC", icon: <FaCheckCircle /> },
    { id: "autonomous", label: "Autonomous", icon: <FaShieldAlt /> },
    { id: "audit-reports", label: "Audit Reports", icon: <FaChartBar /> },
  ];

  const activeTab = searchParams.get("tab") || "college-info";

  const setActiveTab = (id: string) => {
    router.push(`/about/mandatory-disclosure?tab=${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Breadcrumbs / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition"
          >
            <FaArrowLeft className="text-sm" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 mt-4 uppercase">
            Mandatory Disclosure
          </h1>
          <div className="h-1.5 w-24 bg-[#b77a00] rounded-full mt-2"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sticky top-28">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-2">
                Sections
              </h3>
              <nav className="flex flex-col gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm ${
                      activeTab === tab.id
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={
                        activeTab === tab.id ? "text-white" : "text-indigo-600"
                      }
                    >
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-10 min-h-[500px]"
              >
                {activeTab === "college-info" && (
                  <div className="space-y-10">
                    <section>
                      <h2 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-3">
                        <FaUniversity className="text-indigo-600" /> Institution
                        Details
                      </h2>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                          {
                            label: "Name",
                            value: data.collegeInfo.institution.name,
                          },
                          {
                            label: "Address",
                            value: data.collegeInfo.institution.address,
                          },
                          {
                            label: "Phone",
                            value: data.collegeInfo.institution.phone,
                          },
                          {
                            label: "Email",
                            value: data.collegeInfo.institution.email,
                          },
                          {
                            label: "Website",
                            value: data.collegeInfo.institution.website,
                          },
                          {
                            label: "Type",
                            value: data.collegeInfo.institution.type,
                          },
                          {
                            label: "Railway Stat.",
                            value: data.collegeInfo.institution.nearestRailway,
                          },
                          {
                            label: "Airport",
                            value: data.collegeInfo.institution.nearestAirport,
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="border-b border-gray-100 pb-3"
                          >
                            <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-1">
                              {item.label}
                            </p>
                            <p className="font-bold text-gray-800">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="pt-10 border-t border-gray-100">
                      <h2 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-3">
                        <FaShieldAlt className="text-indigo-600" /> Leadership &
                        Infrastructure
                      </h2>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                          <h3 className="font-black text-indigo-900 mb-4 uppercase text-sm">
                            Principal
                          </h3>
                          <div className="space-y-3">
                            <p className="text-sm font-bold text-gray-700">
                              Name: {data.collegeInfo.principal.name}
                            </p>
                            <p className="text-sm font-bold text-gray-700">
                              Specialization:{" "}
                              {data.collegeInfo.principal.specialization}
                            </p>
                            <p className="text-sm font-bold text-gray-700">
                              Contact: {data.collegeInfo.principal.phone}
                            </p>
                          </div>
                        </div>
                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                          <h3 className="font-black text-blue-900 mb-4 uppercase text-sm">
                            Facilities
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs font-black text-blue-400 uppercase">
                                Classrooms
                              </p>
                              <p className="text-xl font-black text-blue-900">
                                {data.collegeInfo.infrastructure.classRooms}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-black text-blue-400 uppercase">
                                Labs
                              </p>
                              <p className="text-xl font-black text-blue-900">
                                {data.collegeInfo.infrastructure.laboratories}
                              </p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-xs font-black text-blue-400 uppercase">
                                Connectivity
                              </p>
                              <p className="text-sm font-bold text-blue-900">
                                {
                                  data.collegeInfo.infrastructure
                                    .internetBandwidth
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "aicte" && (
                  <div className="space-y-10">
                    <section>
                      <h2 className="text-2xl font-black text-blue-900 mb-2 flex items-center gap-3">
                        <FaFileContract className="text-indigo-600" /> AICTE
                        Approvals
                      </h2>
                      <p className="text-gray-500 font-bold mb-8">
                        Official Record of Approvals and Intake
                      </p>

                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-10">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-black text-gray-400 uppercase mb-1">
                              AICTE File No.
                            </p>
                            <p className="font-bold text-gray-800">
                              {data.aicte.fileNo}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-400 uppercase mb-1">
                              Last Approval Date
                            </p>
                            <p className="font-bold text-gray-800">
                              {data.aicte.lastApprovalDate}
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-black text-blue-900 mb-6 uppercase">
                        Approved Programmes & Intake
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-indigo-600 text-white">
                              <th className="px-6 py-4 rounded-tl-xl font-black uppercase text-xs">
                                Programme Name
                              </th>
                              <th className="px-6 py-4 font-black uppercase text-xs">
                                Sanctioned Intake
                              </th>
                              <th className="px-6 py-4 rounded-tr-xl font-black uppercase text-xs">
                                Duration
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 border-x border-b border-gray-100">
                            {data.aicte.programmes.map((p, i) => (
                              <tr
                                key={i}
                                className="hover:bg-gray-50 transition"
                              >
                                <td className="px-6 py-4 font-bold text-gray-700 text-sm">
                                  {p.name}
                                </td>
                                <td className="px-6 py-4 font-black text-indigo-600">
                                  {p.seats}
                                </td>
                                <td className="px-6 py-4 text-gray-500 font-bold text-sm">
                                  {p.duration}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "nba" && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl mb-6">
                      <FaAward />
                    </div>
                    <h2 className="text-2xl font-black text-blue-900 mb-4 uppercase">
                      NBA Accreditation
                    </h2>
                    <p className="text-gray-600 font-bold max-w-md">
                      {data.accreditation.nba}
                    </p>
                    <div className="mt-10 p-4 bg-orange-50 border border-orange-200 rounded-xl text-xs font-bold text-orange-800">
                      Accreditation records are updated periodically following
                      peer team visits.
                    </div>
                  </div>
                )}

                {activeTab === "naac" && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mb-6">
                      <FaCheckCircle />
                    </div>
                    <h2 className="text-2xl font-black text-blue-900 mb-4 uppercase">
                      NAAC Accreditation
                    </h2>
                    <p className="text-gray-600 font-bold max-w-md">
                      {data.accreditation.naac}
                    </p>
                    <div className="mt-10 p-4 bg-green-50 border border-green-200 rounded-xl text-xs font-bold text-green-800">
                      The institution maintains high standards of internal
                      quality assurance.
                    </div>
                  </div>
                )}

                {activeTab === "autonomous" && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-3xl mb-6">
                      <FaShieldAlt />
                    </div>
                    <h2 className="text-2xl font-black text-blue-900 mb-4 uppercase">
                      Autonomous Status
                    </h2>
                    <p className="text-gray-600 font-bold max-w-md">
                      {data.accreditation.autonomous}
                    </p>
                    <p className="mt-4 text-sm text-gray-400 font-medium italic">
                      Empowering academic freedom and curriculum innovation.
                    </p>
                  </div>
                )}

                {activeTab === "audit-reports" && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-black text-blue-900 mb-2 flex items-center gap-3">
                      <FaChartBar className="text-indigo-600" /> Audit Reports
                    </h2>
                    <p className="text-gray-700 font-bold text-lg leading-relaxed">
                      {data.auditReports.status}
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 mt-8">
                      {data.auditReports.years.map((year) => (
                        <div
                          key={year}
                          className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-indigo-300 transition group cursor-pointer"
                        >
                          <p className="font-black text-blue-900 mb-2">
                            {year}
                          </p>
                          <span className="text-[10px] font-black uppercase text-indigo-600 group-hover:underline">
                            Contact Office
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function MandatoryDisclosurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading Content...
        </div>
      }
    >
      <MandatoryDisclosureContent />
    </Suspense>
  );
}
